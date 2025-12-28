/**
 * Build Script for Static Site Generation
 * Converts Markdown content to HTML using templates
 */

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Configure marked for syntax highlighting classes
marked.setOptions({
  gfm: true,
  breaks: false,
  headerIds: true,
  mangle: false,
});

// Paths
const PATHS = {
  content: path.join(__dirname, '..', 'content'),
  templates: path.join(__dirname, 'templates'),
  src: path.join(__dirname, '..', 'src'),
  dist: path.join(__dirname, '..', 'dist'),
};

/**
 * Parse frontmatter from Markdown content
 */
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { metadata: {}, content };
  }
  
  const frontmatterLines = match[1].split('\n');
  const metadata = {};
  
  for (const line of frontmatterLines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > -1) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      metadata[key] = value;
    }
  }
  
  return { metadata, content: match[2] };
}

/**
 * Format date for display
 */
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Generate slug from category
 */
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Process a single Markdown file
 */
function processMarkdownFile(filePath, templatePath, outputDir) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { metadata, content: markdownContent } = parseFrontmatter(content);
  
  // Convert Markdown to HTML
  const htmlContent = marked.parse(markdownContent);
  
  // Read template
  const template = fs.readFileSync(templatePath, 'utf-8');
  
  // Replace placeholders
  const slug = metadata.slug || path.basename(filePath, '.md');
  const html = template
    .replace(/\{\{title\}\}/g, metadata.title || 'Untitled')
    .replace(/\{\{description\}\}/g, metadata.description || '')
    .replace(/\{\{date\}\}/g, formatDate(metadata.date))
    .replace(/\{\{isoDate\}\}/g, metadata.date || '')
    .replace(/\{\{category\}\}/g, metadata.category || 'General')
    .replace(/\{\{categorySlug\}\}/g, slugify(metadata.category || 'general'))
    .replace(/\{\{slug\}\}/g, slug)
    .replace(/\{\{content\}\}/g, htmlContent);
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Write output file
  const outputPath = path.join(outputDir, `${slug}.html`);
  fs.writeFileSync(outputPath, html);
  
  console.log(`  ✓ ${path.basename(filePath)} → ${path.basename(outputPath)}`);
  
  return {
    title: metadata.title,
    description: metadata.description,
    date: metadata.date,
    category: metadata.category,
    slug,
  };
}

/**
 * Process all files in a directory
 */
function processDirectory(contentDir, templatePath, outputDir) {
  if (!fs.existsSync(contentDir)) {
    console.log(`  ⚠ Directory not found: ${contentDir}`);
    return [];
  }
  
  const files = fs.readdirSync(contentDir)
    .filter(f => f.endsWith('.md'))
    .sort()
    .reverse(); // Newest first
  
  const articles = [];
  
  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const article = processMarkdownFile(filePath, templatePath, outputDir);
    articles.push(article);
  }
  
  return articles;
}

/**
 * Copy static assets
 */
function copyStatic() {
  console.log('\nCopying static assets...');
  
  const srcDirs = ['css', 'js'];
  
  for (const dir of srcDirs) {
    const srcDir = path.join(PATHS.src, dir);
    const distDir = path.join(PATHS.dist, dir);
    
    if (!fs.existsSync(srcDir)) continue;
    
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }
    
    const files = fs.readdirSync(srcDir);
    for (const file of files) {
      fs.copyFileSync(
        path.join(srcDir, file),
        path.join(distDir, file)
      );
      console.log(`  ✓ ${dir}/${file}`);
    }
  }
  
  // Copy HTML pages
  const htmlFiles = fs.readdirSync(PATHS.src).filter(f => f.endsWith('.html') && !f.startsWith('_'));
  for (const file of htmlFiles) {
    fs.copyFileSync(
      path.join(PATHS.src, file),
      path.join(PATHS.dist, file)
    );
    console.log(`  ✓ ${file}`);
  }
  
  // Copy blog/notes index if exists
  const subDirs = ['blog', 'notes'];
  for (const subDir of subDirs) {
    const srcSubDir = path.join(PATHS.src, subDir);
    if (fs.existsSync(srcSubDir)) {
      const distSubDir = path.join(PATHS.dist, subDir);
      if (!fs.existsSync(distSubDir)) {
        fs.mkdirSync(distSubDir, { recursive: true });
      }
      const indexFile = path.join(srcSubDir, 'index.html');
      if (fs.existsSync(indexFile)) {
        fs.copyFileSync(indexFile, path.join(distSubDir, 'index.html'));
        console.log(`  ✓ ${subDir}/index.html`);
      }
    }
  }

  // Copy favicon
  const faviconSrc = path.join(PATHS.src, 'favicon.svg');
  if (fs.existsSync(faviconSrc)) {
    fs.copyFileSync(faviconSrc, path.join(PATHS.dist, 'favicon.svg'));
    console.log('  ✓ favicon.svg');
  }
}

/**
 * Main build function
 */
function build() {
  console.log('Building site...\n');
  
  // Ensure dist directory exists
  if (!fs.existsSync(PATHS.dist)) {
    fs.mkdirSync(PATHS.dist, { recursive: true });
  }
  
  // Process blog articles
  console.log('Processing blog articles...');
  const blogTemplate = path.join(PATHS.templates, 'article.html');
  const blogOutputDir = path.join(PATHS.dist, 'blog');
  const blogArticles = processDirectory(
    path.join(PATHS.content, 'blog'),
    blogTemplate,
    blogOutputDir
  );
  console.log(`  Total: ${blogArticles.length} articles\n`);
  
  // Process notes
  console.log('Processing notes...');
  const noteTemplate = path.join(PATHS.templates, 'note.html');
  const notesOutputDir = path.join(PATHS.dist, 'notes');
  if (fs.existsSync(noteTemplate)) {
    const notes = processDirectory(
      path.join(PATHS.content, 'notes'),
      noteTemplate,
      notesOutputDir
    );
    console.log(`  Total: ${notes.length} notes\n`);
  } else {
    console.log('  ⚠ Note template not found, skipping notes\n');
  }
  
  // Copy static assets
  copyStatic();
  
  console.log('\n✓ Build complete!');
  console.log(`  Output: ${PATHS.dist}`);
}

// Run build
build();
