# Kowid Website

A professional, clean, and credible website for Kowid - an early-stage education startup focused on transforming foundational learning in India.

## 🌟 Overview

This website provides comprehensive information about Kowid's mission, vision, and approach to addressing India's foundational learning challenges. Built with transparency and credibility in mind.

**🚀 Ready for Vercel deployment with automated CI/CD pipeline!**

## 📁 Project Structure

```
Kowid_revamp/
├── .github/
│   └── workflows/
│       ├── deploy.yml              # Auto-deploy main website
│       └── deploy-investors.yml    # Auto-deploy investors subdomain
├── investors-subdomain/            # 🆕 Separate investors site
│   ├── index.html                  # Investors-only page
│   ├── styles.css                  # Shared styles
│   ├── script.js                   # Shared scripts
│   ├── vercel.json                 # Vercel config for subdomain
│   └── .vercelignore               # Deployment exclusions
├── index.html                      # Homepage with hero section
├── about.html                      # About Kowid
├── problem.html                    # The learning crisis
├── solution.html                   # Our direction and vision
├── founders.html                   # Founders information
├── careers.html                    # Career opportunities
├── interns.html                    # Internship program
├── contact.html                    # Contact information
├── investors.html                  # ⚠️ Legacy file (kept for reference)
├── collaborate.html                # ⚠️ Legacy file (kept for reference)
├── styles.css                      # Complete styling
├── script.js                       # JavaScript for interactivity
├── vercel.json                     # 🆕 Vercel config for main site
├── .vercelignore                   # 🆕 Deployment exclusions
├── DEPLOYMENT-GUIDE.md             # 🆕 Detailed deployment instructions
├── QUICK-START.md                  # 🆕 Quick deployment guide
└── README.md                       # This file
```

## 🎯 Recent Changes

### ✅ Removed from Main Website

- **Investors page** - No longer accessible from main navigation
- **Collaborate page** - Removed from main navigation
- All navigation links updated across all HTML files
- Footer links cleaned up
- CTA buttons updated

### 🆕 New: Investors Subdomain

- Created separate `investors-subdomain/` directory
- Standalone investors page with:
  - Simplified navigation (no links back to main site)
  - `noindex, nofollow` meta tags (won't appear in search results)
  - Same styling as main site
  - Shareable private URL: `investors.yourdomain.com`

### 🚀 Deployment Setup

- Vercel configuration files for both sites
- GitHub Actions workflows for automated deployment
- Detailed deployment documentation

## 🎨 Design Features

### Color Palette

- **Primary Color**: #4a90e2 (Professional Blue)
- **Secondary Color**: #50c878 (Growth Green)
- **Accent Color**: #f39c12 (Energetic Orange)
- **Text Colors**: Dark (#2c3e50) and Light (#6c757d)

### Typography

- **Headings**: Poppins (Bold, Professional)
- **Body**: Inter (Clean, Readable)

### Key Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Clean, modern aesthetics
- ✅ Professional navigation with mobile menu
- ✅ Smooth animations and transitions
- ✅ SEO-friendly structure
- ✅ Accessible design
- ✅ Fast loading times
- ✅ 🆕 Automated deployment pipeline
- ✅ 🆕 Separate investors subdomain

## 🚀 Deployment

### Quick Start

See [QUICK-START.md](QUICK-START.md) for a 3-step deployment guide.

### Detailed Guide

See [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md) for comprehensive instructions including:

- Vercel deployment setup
- Custom domain configuration
- DNS settings
- GitHub Actions automation
- Troubleshooting

### Deploy Now

**Main Website:**

```bash
vercel --prod
```

**Investors Subdomain:**

```bash
cd investors-subdomain
vercel --prod
```

## 🔗 URLs After Deployment

- **Main Website**: `https://yourdomain.com`
- **Investors Subdomain**: `https://investors.yourdomain.com` (private, shareable link)

## 🛠️ Local Development

### Option 1: Open Locally

1. Double-click on `index.html` to open in your browser
2. Navigate through different pages using the menu

### Option 2: Local Server (Recommended)

For better performance:

**Using Python:**

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**

```bash
npx http-server
```

Then visit: `http://localhost:8000`

### Option 3: Deploy Online

Deploy to any hosting service:

- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Drag and drop deployment
- **Vercel**: Simple deployment with CLI
- **Traditional Hosting**: Upload files via FTP

## 📝 Customization Guide

### Update Contact Emails

Search and replace these email addresses throughout the files:

- `hello@kowid.in` - General enquiries
- `collaborate@kowid.in` - Collaboration
- `interns@kowid.in` - Internships
- `investors@kowid.in` - Investors
- `careers@kowid.in` - Careers
- `founders@kowid.in` - Co-founder interest

### Update Social Media Links

In all HTML files, update the footer social links:

```html
<div class="social-links">
  <a href="YOUR_LINKEDIN_URL" aria-label="LinkedIn">in</a>
  <a href="YOUR_TWITTER_URL" aria-label="Twitter">𝕏</a>
  <a href="YOUR_INSTAGRAM_URL" aria-label="Instagram">ig</a>
</div>
```

### Add Your Logo

Replace the text logo in the navigation with an image:

```html
<div class="logo">
  <a href="index.html">
    <img src="path/to/logo.png" alt="Kowid Logo" />
  </a>
</div>
```

### Update Founder Information

In `founders.html`, customize the founder section with actual details:

```html
<h3>Our Founder</h3>
<p>Add specific founder background, experience, and vision here.</p>
```

### Add Real Images

Replace the placeholder SVG in the hero section:

```html
<div class="hero-image">
  <img src="path/to/your/image.jpg" alt="Description" />
</div>
```

### Change Colors

Edit `styles.css` at the `:root` section:

```css
:root {
  --primary-color: #4a90e2; /* Change this */
  --secondary-color: #50c878; /* Change this */
  --accent-color: #f39c12; /* Change this */
}
```

## 📄 Page Descriptions

### Homepage (index.html)

- Hero section with value proposition
- "Why Now" section with 4 key points
- Quick overview cards
- Call-to-action section

### About (about.html)

- What "Kowid" means
- Founding story and mission
- Current stage transparency
- Long-term aspiration

### Problem (problem.html)

- Learning crisis statistics
- Four key challenges
- Why existing solutions fall short

### Solution (solution.html)

- Concept direction
- Research areas
- Guiding principles
- Early ideas
- Complete roadmap

### Founders (founders.html)

- Founder information
- Intern culture
- Who we're looking for

### Collaborate (collaborate.html)

- Partnership opportunities
- Types of collaborators
- Benefits of early collaboration

### Investors (investors.html)

- Market opportunity
- Current stage
- What we're seeking
- What we offer

### Careers (careers.html)

- What it's like to work at Kowid
- Company values
- Future roles
- What we offer

### Interns (interns.html)

- Intern responsibilities
- Learning opportunities
- Application process
- What we offer

### Contact (contact.html)

- All contact channels
- Specific contact cards for different stakeholders
- Social media links

## 🔧 Technical Details

### Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Responsive Breakpoints

- Desktop: > 968px
- Tablet: 640px - 968px
- Mobile: < 640px

### Performance Optimization

- Minimal external dependencies (only Google Fonts)
- Optimized CSS with variables
- Efficient JavaScript
- Fast loading animations

## 📱 Mobile Features

- Hamburger menu for navigation
- Touch-friendly buttons and links
- Optimized font sizes
- Responsive grid layouts
- Proper spacing for mobile devices

## ✨ Interactive Features

- Smooth scroll for anchor links
- Navbar scroll effect
- Card hover animations
- Mobile menu toggle
- Fade-in animations on scroll
- Active page highlighting in navigation

## 🎯 SEO Optimization

- Semantic HTML structure
- Meta descriptions on all pages
- Proper heading hierarchy
- Alt text ready for images
- Keyword-optimized content
- Clean URL structure

## 📊 Analytics Integration (Optional)

To add Google Analytics, insert before `</head>`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "YOUR_GA_ID");
</script>
```

## 🔒 Security Notes

- All external links should be reviewed
- Add `rel="noopener"` to external links
- Validate email addresses server-side
- Consider adding CAPTCHA to contact forms

## 🚀 Next Steps

### Immediate

1. ✅ Update all email addresses
2. ✅ Add real founder information
3. ✅ Set up social media accounts and update links
4. ✅ Add actual images (replace placeholders)
5. ✅ Test all links and navigation

### Short-term

1. Add contact form functionality (using FormSpree, Netlify Forms, or custom backend)
2. Set up email forwarding for all @kowid.in addresses
3. Add blog/news section for updates
4. Implement newsletter signup
5. Add testimonials section (once available)

### Long-term

1. Integrate analytics
2. Add video content
3. Create downloadable resources
4. Build a CMS for easy content updates
5. Add multilingual support

## 💡 Tips for Launch

1. **Test Everything**: Check all pages on multiple devices
2. **Proofread**: Review all content for typos
3. **Optimize Images**: Compress images before adding
4. **Set Up Redirects**: Ensure proper URL structure
5. **Monitor Performance**: Use Google PageSpeed Insights
6. **Backup Regularly**: Keep copies of all files

## 📞 Support

For questions about the website:

- Review this README
- Check the code comments in HTML/CSS/JS files
- Test locally before deploying

## 📜 License

This website is proprietary to Kowid. All rights reserved.

---

**Built with care for Kowid - Building the future of foundational learning in India** 🇮🇳
