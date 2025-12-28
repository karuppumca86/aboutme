/**
 * Main JavaScript - Progressive Enhancements
 * Site works without JS; this adds improved interactions
 */

(function() {
  'use strict';

  // ============================================
  // Mobile Navigation Toggle
  // ============================================
  
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');
  const header = document.querySelector('.site-header');
  
  if (navToggle && navMenu) {
    // Get all focusable elements in the nav
    function getFocusableElements() {
      return [navToggle, ...navMenu.querySelectorAll('.nav__link')];
    }

    navToggle.addEventListener('click', function() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('is-open', !isExpanded);
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = !isExpanded ? 'hidden' : '';

      // Focus first menu item when opening
      if (!isExpanded) {
        const firstLink = navMenu.querySelector('.nav__link');
        if (firstLink) {
          setTimeout(function() { firstLink.focus(); }, 100);
        }
      }
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('.nav__link').forEach(function(link) {
      link.addEventListener('click', function() {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    // Keyboard handling for menu
    document.addEventListener('keydown', function(event) {
      if (!navMenu.classList.contains('is-open')) return;

      // Close menu on Escape key
      if (event.key === 'Escape') {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
        document.body.style.overflow = '';
        navToggle.focus();
        return;
      }

      // Focus trap - Tab key
      if (event.key === 'Tab') {
        const focusable = getFocusableElements();
        const firstEl = focusable[0];
        const lastEl = focusable[focusable.length - 1];

        if (event.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstEl) {
            event.preventDefault();
            lastEl.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastEl) {
            event.preventDefault();
            firstEl.focus();
          }
        }
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (navMenu.classList.contains('is-open') && 
          !navMenu.contains(event.target) && 
          !navToggle.contains(event.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }

  // ============================================
  // Dark Mode Toggle (Optional Enhancement)
  // ============================================
  
  const THEME_KEY = 'theme-preference';
  
  function getThemePreference() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) {
      return stored;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    
    // Update toggle button label if exists
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
      const isDark = theme === 'dark';
      toggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      
      // Update icon
      const sunIcon = toggleBtn.querySelector('.icon-sun');
      const moonIcon = toggleBtn.querySelector('.icon-moon');
      if (sunIcon && moonIcon) {
        sunIcon.style.display = isDark ? 'block' : 'none';
        moonIcon.style.display = isDark ? 'none' : 'block';
      }
    }
  }
  
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || getThemePreference();
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }
  
  // Initialize theme
  const initialTheme = getThemePreference();
  if (initialTheme === 'dark') {
    setTheme('dark');
  }
  
  // Listen for theme toggle clicks
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (!localStorage.getItem(THEME_KEY)) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // ============================================
  // Active Navigation Link
  // ============================================
  
  function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      
      // Handle home page
      if (href === '/' && (currentPath === '/' || currentPath === '/index.html')) {
        link.classList.add('nav__link--active');
      }
      // Handle other pages
      else if (href !== '/' && currentPath.includes(href.replace('.html', ''))) {
        link.classList.add('nav__link--active');
      }
      else {
        link.classList.remove('nav__link--active');
      }
    });
  }
  
  setActiveNavLink();

})();
