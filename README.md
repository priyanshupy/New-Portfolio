# Priyanshu Pareta - Portfolio Website

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Software Engineer specializing in AI, cloud, and data-heavy backends.

## 🌟 Features

- **Journey-Style Navigation**: Smooth, slideshow-like experience between sections
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Dark Theme**: Modern dark color scheme with gradient accents
- **Interactive Elements**: Floating animations, progress bar, smooth scrolling
- **Contact Form**: EmailJS integration for direct communication
- **Progress Tracking**: Visual progress bar showing website navigation
- **Touch Support**: Swipe navigation for mobile devices
- **Keyboard Navigation**: Arrow keys, Page Up/Down, Home/End support

## 🚀 Tech Stack

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with gradients, animations, and responsive design
- **JavaScript (ES6+)**: Interactive functionality and smooth animations
- **Bootstrap 5**: Responsive grid system and components
- **Font Awesome**: Professional icons throughout the interface
- **Google Fonts**: Inter font family for modern typography

### External Services
- **EmailJS**: Contact form email functionality
- **CDN Resources**: Bootstrap, Font Awesome, Google Fonts

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML file with all content
├── script.js           # JavaScript functionality and animations
├── images/             # Image assets
│   ├── headshot.jpeg   # Profile photo
│   ├── pricebook-dashboard.svg    # Project placeholder
│   ├── menu-themes.svg # Project placeholder
│   └── README.md       # Image replacement instructions
├── resume.pdf          # Downloadable resume
└── README.md           # This file
```

## 🎯 Sections

1. **Hero**: Introduction with key metrics and quick links
2. **About**: Personal background, skills, and tech stack
3. **Journey**: Professional experience timeline
4. **Startups**: Current entrepreneurial projects
5. **Projects**: Technical projects and achievements
6. **Contact**: Contact information and message form

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - this is a static website

### Running the Website

#### Option 1: Direct File Opening (Simplest)
1. Navigate to the Portfolio folder
2. Double-click `index.html`
3. Website opens in your default browser

#### Option 2: Live Server (Development)
If you have VS Code:
1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

#### Option 3: Python HTTP Server
```bash
cd Portfolio
python -m http.server 8000
# Open http://localhost:8000
```

#### Option 4: Node.js HTTP Server
```bash
npm install -g http-server
cd Portfolio
http-server
# Open the displayed URL
```

## ⚙️ Configuration

### EmailJS Setup (Required for Contact Form)
1. Go to [emailjs.com](https://emailjs.com) and create an account
2. Get your **User ID**
3. Replace `YOUR_USER_ID` in `index.html` with your actual ID
4. Set up email service (Gmail, Outlook, etc.)
5. Configure email template

### Image Replacements
- `images/headshot.jpeg` - Your profile photo (already added)
- `images/pricebook-dashboard.svg` - Replace with actual project screenshot
- `images/menu-themes.svg` - Replace with actual project screenshot
- Add more images for startups and projects as needed

## 🎨 Customization

### Colors
The website uses a dark theme with:
- Primary: Blue-purple gradient (`#667eea` to `#764ba2`)
- Success: Green (`#10b981`)
- Info: Cyan (`#06b6d4`)
- Warning: Amber (`#f59e0b`)

### Styling
- All custom CSS is in the `<style>` section of `index.html`
- JavaScript functionality is in `script.js`
- Bootstrap classes provide responsive layout

## 📱 Responsive Features

- **Mobile-First**: Optimized for small screens
- **Touch Navigation**: Swipe gestures for mobile users
- **Responsive Grid**: Bootstrap grid system adapts to screen size
- **Mobile Enhancements**: Touch feedback and mobile-specific interactions

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact Form

The contact form uses EmailJS to send emails directly to `priyanshupareta@gmail.com`. Users can:
- Fill out name, email, and message
- Submit directly through the website
- Receive confirmation of successful submission

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main` or `master`)

### Netlify
1. Drag and drop the Portfolio folder to Netlify
2. Automatic deployment and HTTPS
3. Custom domain support

### Vercel
1. Connect GitHub repository to Vercel
2. Automatic deployments on push
3. Global CDN and analytics

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ using modern web technologies**
