# Velocity Studio Website - Design Document

## Overview

The Velocity Studio website is a single-page application (SPA) style website built with vanilla HTML, Tailwind CSS, and JavaScript. The architecture emphasizes performance, visual impact, and smooth user interactions. The site will use a component-based approach with modular JavaScript for maintainability while keeping the tech stack simple and dependency-free.

## Architecture

### Technology Stack

- **HTML5**: Semantic markup for structure
- **Tailwind CSS**: Utility-first CSS framework via CDN for rapid styling
- **Vanilla JavaScript**: No frameworks, ES6+ features for interactivity
- **File Structure**:
  ```
  velocity-studio/
  ├── index.html (Homepage)
  ├── work.html (Portfolio page)
  ├── services.html (Services page)
  ├── contact.html (Contact page)
  ├── css/
  │   └── custom.css (Additional styles beyond Tailwind)
  ├── js/
  │   ├── main.js (Global functionality)
  │   ├── portfolio-filter.js (Portfolio filtering logic)
  │   ├── lightbox.js (Image lightbox component)
  │   └── form-validation.js (Contact form handling)
  ├── assets/
  │   ├── images/
  │   │   ├── portfolio/ (70+ portfolio images organized by category)
  │   │   └── logos/ (Brand logos)
  │   └── videos/
  │       └── hero-montage.mp4 (Hero background video)
  └── README.md
  ```

### Design System Configuration

**Color Palette** (Tailwind custom configuration):
- Primary Background: `#000000` (pure black)
- Secondary Background: `#0A0A0A` (near black for subtle contrast)
- Card/Surface: `#111111` (dark gray for elevated elements)
- Border/Divider: `#1A1A1A` (subtle borders)
- Text Primary: `#FFFFFF` (pure white)
- Text Secondary: `#888888` (medium gray for secondary text)
- Text Muted: `#666666` (darker gray for tertiary text)
- Accent Color: `#FFFFFF` (white for minimal, sophisticated accents)
- Accent Hover: `#CCCCCC` (light gray for hover states)

**Typography**:
- Headlines: "Helvetica Neue", "Arial", sans-serif (system fonts for crisp, professional look)
- Body: "Helvetica Neue", "Arial", sans-serif
- Font weights: 300 (light), 400 (regular), 600 (semibold), 700 (bold)
- Letter spacing: Slightly increased for headlines (0.02em) for sophistication
- Line height: 1.2 for headlines, 1.6 for body text

**Spacing & Layout**:
- Container max-width: 1400px (wider for more breathing room)
- Grid gaps: 2rem (mobile), 3rem (tablet), 4rem (desktop)
- Section padding: 6rem (mobile), 10rem (tablet), 14rem (desktop)
- Minimal padding, maximum negative space

## Components and Interfaces

### 1. Navigation Component

**HTML Structure**:
```html
<nav class="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/5">
  <div class="container mx-auto px-8 py-6 flex justify-between items-center">
    <a href="index.html" class="text-sm font-light tracking-widest uppercase">Velocity Studio</a>
    <ul class="flex gap-12">
      <li><a href="work.html" class="nav-link text-sm font-light tracking-wide uppercase text-gray-400 hover:text-white transition-colors duration-300">Work</a></li>
      <li><a href="services.html" class="nav-link text-sm font-light tracking-wide uppercase text-gray-400 hover:text-white transition-colors duration-300">Services</a></li>
      <li><a href="contact.html" class="nav-link text-sm font-light tracking-wide uppercase text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
    </ul>
  </div>
</nav>
```

**Design Notes**:
- Ultra-minimal navigation with subtle border
- Uppercase text with wide letter spacing for sophistication
- Light font weight for elegance
- Subtle hover transitions (300ms)
- No hamburger menu - simplified mobile nav with same structure

### 2. Hero Section Component

**HTML Structure**:
```html
<section class="relative h-screen flex items-center justify-center overflow-hidden bg-black">
  <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover opacity-30">
    <source src="assets/videos/hero-montage.mp4" type="video/mp4">
  </video>
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
  <div class="relative z-10 text-center max-w-5xl px-8">
    <h1 class="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 leading-none">World-Class Creative<br>at the Speed of Your Business</h1>
    <p class="text-base md:text-lg font-light text-gray-400 mb-12 max-w-2xl mx-auto">Velocity Studio is a modern creative partner for ambitious DTC brands, delivering stunning ad creative and product visuals with unprecedented speed.</p>
    <a href="work.html" class="inline-block px-8 py-3 border border-white text-sm font-light tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">View Work</a>
  </div>
</section>
```

**Design Notes**:
- Minimal CTA: white border button with inverse hover effect
- Light font weight (300) for elegance
- Tight tracking for modern feel
- Video at 30% opacity for subtlety
- No bright colors - pure black and white
- Generous line breaks in headline for impact

### 3. Featured Work Grid Component

**HTML Structure**:
```html
<section class="py-32 px-8 bg-black">
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 auto-rows-[400px]">
      <!-- Featured items with varying sizes -->
      <div class="featured-item relative overflow-hidden group col-span-1 row-span-1 bg-neutral-900">
        <img src="..." alt="..." class="w-full h-full object-cover transition-all duration-700 group-hover:opacity-60">
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <div>
            <p class="text-xs font-light tracking-widest uppercase text-gray-500 mb-2">Brand Name</p>
            <h3 class="text-xl font-light">Headline</h3>
          </div>
        </div>
      </div>
      <!-- Repeat with varying col-span and row-span -->
    </div>
  </div>
</section>
```

**Design Notes**:
- Minimal 1px gaps between images for gallery feel
- No rounded corners - sharp, professional edges
- Hover reveals info at bottom (not centered) for sophistication
- Slow, smooth transitions (500-700ms)
- Fixed row height for consistent grid
- Images fade on hover rather than scale (more refined)
- Text aligned bottom-left, not centered

### 4. Process Section Component

**HTML Structure**:
```html
<section class="py-32 px-8 bg-black border-t border-white/5">
  <div class="container mx-auto max-w-6xl">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-20">
      <div>
        <div class="text-6xl font-light text-white/10 mb-6">01</div>
        <h3 class="text-xl font-light mb-4 tracking-wide">Briefing</h3>
        <p class="text-sm font-light text-gray-500 leading-relaxed">We learn your brand and campaign goals.</p>
      </div>
      <div>
        <div class="text-6xl font-light text-white/10 mb-6">02</div>
        <h3 class="text-xl font-light mb-4 tracking-wide">Creation</h3>
        <p class="text-sm font-light text-gray-500 leading-relaxed">Our studio gets to work, generating a wide range of stunning visual concepts.</p>
      </div>
      <div>
        <div class="text-6xl font-light text-white/10 mb-6">03</div>
        <h3 class="text-xl font-light mb-4 tracking-wide">Delivery</h3>
        <p class="text-sm font-light text-gray-500 leading-relaxed">You receive a curated gallery of campaign-ready assets, delivered ahead of schedule.</p>
      </div>
    </div>
  </div>
</section>
```

**Design Notes**:
- No icons - use large, subtle numbers instead (more sophisticated)
- Numbers in very light opacity for background element feel
- Left-aligned text (not centered) for professional look
- Minimal color - only black, white, and grays
- Generous spacing between columns

### 5. Portfolio Filter Component

**HTML Structure**:
```html
<div class="filter-bar sticky top-20 bg-dark-primary/95 backdrop-blur-sm py-6 px-6 z-40">
  <div class="container mx-auto">
    <div class="flex flex-wrap gap-4 justify-center">
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="fashion">Fashion</button>
      <button class="filter-btn" data-filter="beauty">Beauty</button>
      <!-- More filters -->
    </div>
  </div>
</div>

<div class="portfolio-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
  <div class="portfolio-item" data-category="fashion">
    <img src="..." alt="..." class="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity">
  </div>
  <!-- Repeat for all 70+ images -->
</div>
```

**JavaScript Logic** (portfolio-filter.js):
```javascript
class PortfolioFilter {
  constructor() {
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.portfolioItems = document.querySelectorAll('.portfolio-item');
    this.init();
  }

  init() {
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => this.handleFilter(e));
    });
  }

  handleFilter(e) {
    const filter = e.target.dataset.filter;
    
    // Update active button
    this.filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Filter items with animation
    this.portfolioItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
        setTimeout(() => item.classList.add('fade-in'), 10);
      } else {
        item.classList.remove('fade-in');
        setTimeout(() => item.style.display = 'none', 300);
      }
    });
  }
}
```

### 6. Lightbox Component

**HTML Structure**:
```html
<div id="lightbox" class="fixed inset-0 bg-black/95 z-50 hidden flex items-center justify-center">
  <button class="absolute top-6 right-6 text-white text-4xl">&times;</button>
  <button class="absolute left-6 text-white text-4xl">&larr;</button>
  <button class="absolute right-6 text-white text-4xl">&rarr;</button>
  <img id="lightbox-img" src="" alt="" class="max-w-[90%] max-h-[90%] object-contain">
</div>
```

**JavaScript Logic** (lightbox.js):
```javascript
class Lightbox {
  constructor() {
    this.lightbox = document.getElementById('lightbox');
    this.lightboxImg = document.getElementById('lightbox-img');
    this.images = [];
    this.currentIndex = 0;
    this.init();
  }

  init() {
    // Collect all portfolio images
    this.images = Array.from(document.querySelectorAll('.portfolio-item img'));
    
    // Add click listeners
    this.images.forEach((img, index) => {
      img.addEventListener('click', () => this.open(index));
    });
    
    // Close and navigation listeners
    this.setupControls();
  }

  open(index) {
    this.currentIndex = index;
    this.lightboxImg.src = this.images[index].src;
    this.lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.lightbox.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.lightboxImg.src = this.images[this.currentIndex].src;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.lightboxImg.src = this.images[this.currentIndex].src;
  }

  setupControls() {
    // Implementation for close, next, prev buttons and keyboard controls
  }
}
```

### 7. Services Package Cards

**HTML Structure**:
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
  <div class="package-card bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-accent-blue transition-colors">
    <h3 class="text-3xl font-bold mb-2">Starter</h3>
    <p class="text-4xl font-bold text-accent-blue mb-4">$950<span class="text-lg text-gray-400">/month</span></p>
    <p class="text-gray-400 mb-6">Perfect for brands needing a consistent flow of high-performing ad creative.</p>
    <ul class="space-y-3 mb-8">
      <li class="flex items-start">
        <span class="text-accent-blue mr-3">✅</span>
        <span>15 Unique Ad Creatives</span>
      </li>
      <!-- More deliverables -->
    </ul>
    <a href="contact.html" class="cta-button block text-center">Get Started</a>
  </div>
  <!-- Repeat for other packages -->
</div>
```

### 8. Contact Form Component

**HTML Structure**:
```html
<form id="contact-form" class="max-w-2xl mx-auto space-y-6">
  <div>
    <label for="name" class="block mb-2 text-sm font-medium">Your Name</label>
    <input type="text" id="name" name="name" required class="form-input">
  </div>
  <div>
    <label for="email" class="block mb-2 text-sm font-medium">Work Email</label>
    <input type="email" id="email" name="email" required class="form-input">
  </div>
  <div>
    <label for="company" class="block mb-2 text-sm font-medium">Company Name / Website</label>
    <input type="text" id="company" name="company" class="form-input">
  </div>
  <div>
    <label for="service" class="block mb-2 text-sm font-medium">Which service are you interested in?</label>
    <select id="service" name="service" class="form-input">
      <option value="starter">Starter</option>
      <option value="growth">Growth</option>
      <option value="brand-launch">Brand Launch Kit</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div>
    <label for="message" class="block mb-2 text-sm font-medium">Tell us about your project</label>
    <textarea id="message" name="message" rows="6" class="form-input"></textarea>
  </div>
  <button type="submit" class="cta-button w-full">Submit</button>
</form>
```

**JavaScript Logic** (form-validation.js):
```javascript
class ContactForm {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.init();
  }

  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();
    
    // Validate fields
    if (!this.validate()) {
      return;
    }
    
    // Get form data
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);
    
    // Show success message (or integrate with backend)
    this.showSuccess();
  }

  validate() {
    const name = this.form.querySelector('#name').value.trim();
    const email = this.form.querySelector('#email').value.trim();
    
    if (!name || !email) {
      this.showError('Please fill in all required fields');
      return false;
    }
    
    if (!this.isValidEmail(email)) {
      this.showError('Please enter a valid email address');
      return false;
    }
    
    return true;
  }

  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  showError(message) {
    // Display error message
  }

  showSuccess() {
    // Display success message and reset form
  }
}
```

## Data Models

### Portfolio Item Structure

```javascript
const portfolioItem = {
  id: 'unique-id',
  category: 'fashion', // fashion, beauty, tech, food-beverage, home, jewelry, fitness
  imagePath: 'assets/images/portfolio/fashion/item-01.jpg',
  brandName: 'Brand Name',
  headline: 'Campaign Headline',
  featured: true // Boolean for homepage featured section
};
```

### Service Package Structure

```javascript
const servicePackage = {
  name: 'Starter',
  price: 950,
  period: 'month',
  description: 'Perfect for brands needing a consistent flow of high-performing ad creative.',
  deliverables: [
    '15 Unique Ad Creatives',
    'Square & Story Formats',
    '5-7 Day Delivery'
  ]
};
```

## Error Handling

### Image Loading Errors

- Implement lazy loading with Intersection Observer API
- Provide placeholder images for failed loads
- Use low-quality image placeholders (LQIP) for progressive loading

```javascript
const lazyLoadImages = () => {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
};
```

### Form Submission Errors

- Client-side validation before submission
- Display inline error messages below fields
- Prevent multiple submissions with loading state
- Graceful degradation if JavaScript fails

### Video Loading Errors

- Provide fallback static image if video fails to load
- Detect slow connections and skip video autoplay
- Use poster attribute for initial frame

```html
<video autoplay muted loop playsinline poster="assets/images/hero-poster.jpg" onerror="this.style.display='none'">
  <source src="assets/videos/hero-montage.mp4" type="video/mp4">
</video>
```

## Testing Strategy

### Browser Compatibility Testing

- Test on Chrome, Firefox, Safari, Edge (latest 2 versions)
- Test on iOS Safari and Chrome Mobile
- Verify video autoplay works across browsers
- Test form submission and validation

### Responsive Design Testing

- Test breakpoints: 320px, 768px, 1024px, 1440px, 1920px
- Verify grid layouts adapt correctly
- Test navigation menu on mobile
- Verify touch interactions on mobile devices

### Performance Testing

- Lighthouse audit (target: 90+ performance score)
- Test image lazy loading functionality
- Verify smooth animations (60fps)
- Test page load time (target: < 3 seconds on 3G)

### Accessibility Testing

- Keyboard navigation for all interactive elements
- ARIA labels for icon buttons
- Alt text for all images
- Color contrast ratios meet WCAG AA standards
- Form labels properly associated with inputs

### Functional Testing

**Portfolio Filter**:
- Verify all filter buttons work correctly
- Test filter animations
- Verify "All" shows all items
- Test rapid filter switching

**Lightbox**:
- Test open/close functionality
- Test keyboard navigation (arrow keys, ESC)
- Test on touch devices (swipe gestures)
- Verify body scroll lock when open

**Contact Form**:
- Test all validation rules
- Test error message display
- Test success message display
- Test form reset after submission

### User Acceptance Testing

- Show 3-5 potential clients the homepage
- Measure time to understand value proposition (target: < 3 seconds)
- Gather feedback on visual impact
- Test CTA clarity and effectiveness

## Performance Optimization

### Image Optimization

- Convert all images to WebP format with JPEG fallback
- Implement responsive images with srcset
- Compress images to 80% quality
- Use appropriate dimensions (max 2000px width)

### CSS Optimization

- Use Tailwind's purge feature to remove unused CSS
- Inline critical CSS for above-the-fold content
- Defer non-critical CSS loading

### JavaScript Optimization

- Minify all JavaScript files
- Use async/defer attributes for script loading
- Implement code splitting if needed
- Debounce scroll and resize event handlers

### Video Optimization

- Compress hero video to < 5MB
- Use H.264 codec for broad compatibility
- Provide multiple resolutions for different devices
- Consider using animated WebP as alternative for mobile

## Deployment Considerations

- Host on static site hosting (Netlify, Vercel, GitHub Pages)
- Configure custom domain
- Enable HTTPS
- Set up CDN for asset delivery
- Configure caching headers for static assets
- Set up analytics (Google Analytics or similar)
- Implement contact form backend (Formspree, Netlify Forms, or custom API)
