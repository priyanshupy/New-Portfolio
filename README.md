# Priyanshu Pareta - Portfolio Website

A modern, responsive portfolio website built with **FastAPI (Python)** backend and **vanilla JavaScript** frontend, showcasing professional experience, skills, achievements, and startup projects.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Smooth scrolling navigation and animated sections
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Built with modern web practices and optimized animations
- **SEO Friendly**: Proper meta tags and structured content
- **Fast Backend**: FastAPI with automatic API documentation
- **Multi-Page Structure**: Comprehensive sections for different aspects of your portfolio
- **Startup Showcase**: Detailed case studies for your entrepreneurial projects
- **Professional Metrics**: Highlight key achievements and impact
- **Testimonials System**: Centralized reviews and references

## 🛠️ Technology Stack

### Backend
- **FastAPI** - Modern, fast web framework for building APIs with Python
- **Uvicorn** - Lightning-fast ASGI server
- **CORS Support** - Cross-origin request handling
- **Automatic API Docs** - Interactive documentation at `/docs`

### Frontend
- **Vanilla JavaScript** - No framework dependencies
- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Professional icons
- **Google Fonts** - Beautiful typography
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
Portfolio/
├── main.py              # FastAPI application
├── start.py             # Backend startup script
├── requirements.txt     # Python dependencies
├── index.html          # Main HTML file (multi-page structure)
├── script.js           # JavaScript functionality
├── startup-rise-lift-repeat.html  # Rise Lift Repeat case study
├── startup-matchmate-ai.html      # MatchMate AI case study
└── README.md           # Project documentation
```

## 🚀 Quick Start

### 1. Install Python Dependencies
```bash
pip install -r requirements.txt
```

### 2. Start the Backend Server
```bash
python start.py
```
Or alternatively:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### 3. Open the Frontend
Simply open `index.html` in your web browser, or serve it with a local server:

```bash
# Using Python's built-in server
python -m http.server 3000

# Using Node.js (if you have it installed)
npx serve .

# Using PHP (if you have it installed)
php -S localhost:3000
```

## 🌐 Access Points

- **Frontend**: http://localhost:3000 (or open index.html directly)
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs
- **Health Check**: http://localhost:8000/api/health
- **Portfolio Data**: http://localhost:8000/api/portfolio

## 📱 Portfolio Sections

### 1. **Home** (`/`)
- Eye-catching hero section with your name and title
- Headline metrics (4+ years experience, 500+ restaurants, 100+ students)
- Quick links to Resume, GitHub, LinkedIn, and Startups
- Headshot dropzone for professional photo

### 2. **About** (`/about`)
- Personal introduction and core copy
- Strengths, tech stack, and what you enjoy
- Work environment image gallery placeholders
- Professional summary and key highlights

### 3. **Journey** (`/journey`)
- Story and timeline of your career progression
- Educational background and work experience
- Current status and future goals
- Call-to-action to view startups

### 4. **Startups** (`/startups`)
- Hub showcasing your entrepreneurial projects
- **Rise Lift Repeat**: Fitness & coaching platform
- **MatchMate AI**: AI roommate matching
- Links to detailed case studies

### 5. **Projects** (`/projects`)
- Featured project: Pricebook (500+ restaurants, ~60% time savings)
- Scrapy pipelines and KPI dashboards
- Technical architecture and impact metrics
- Image placeholders for project screenshots

### 6. **GitHub** (`/github`)
- GitHub username: priyanshupy
- Repository grid with top 6 repos
- Contributions heatmap placeholder
- Badge row with total stars, forks, and public repos

### 7. **Testimonials** (`/testimonials`)
- Featured CTO testimonial from SmartQ
- Centralized reviews and references
- "Add review" functionality
- Professional feedback showcase

### 8. **Contact** (`/contact`)
- Contact form with validation
- Contact information display
- Availability status
- Professional contact methods

## 🔧 Customization

### Personal Information
Update the portfolio data in `main.py`:

```python
portfolio_data = {
    "name": "Your Name",
    "tagline": "Your Title",
    # ... other fields
}
```

### Styling
Modify colors and themes in `index.html`:

```html
<style>
    .gradient-text {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
```

### Adding New Sections
1. Add the HTML structure in `index.html`
2. Add the corresponding JavaScript logic in `script.js`
3. Update the navigation menu
4. Add corresponding data to the backend if needed

## 📊 API Endpoints

### GET `/api/portfolio`
Returns complete portfolio data including:
- Personal information
- Work experience
- Education
- Skills
- Certifications
- Hobbies
- Startups
- Projects
- Testimonials

### GET `/api/startups`
Returns list of startup projects.

### GET `/api/startups/{startup_slug}`
Returns specific startup details.

### GET `/api/projects`
Returns list of technical projects.

### GET `/api/testimonials`
Returns testimonials and reviews.

### GET `/api/health`
Health check endpoint for monitoring.

### GET `/docs`
Interactive API documentation (Swagger UI).

## 🎨 Design Features

- **Gradient Text**: Beautiful gradient text effects
- **Card Hover Effects**: Smooth hover animations
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Smooth Scrolling**: Elegant navigation between sections
- **Loading States**: Professional loading indicators
- **Mobile Menu**: Collapsible navigation for mobile devices
- **Multi-Page Navigation**: Seamless page transitions
- **Professional Layout**: Clean, modern design suitable for business

## 🌟 Key Benefits

1. **Fast Development**: FastAPI provides rapid API development
2. **No Build Process**: Frontend works directly without compilation
3. **Easy Deployment**: Simple file-based structure
4. **Modern Standards**: Uses latest web technologies
5. **SEO Optimized**: Proper meta tags and semantic HTML
6. **Performance**: Lightweight and fast loading
7. **Comprehensive**: Covers all aspects of your professional profile
8. **Startup Showcase**: Dedicated sections for entrepreneurial projects

## 🚀 Deployment

### Backend Deployment
1. **Heroku**: Easy deployment with Python support
2. **DigitalOcean**: App Platform or Droplets
3. **AWS**: EC2 or Lambda with API Gateway
4. **Google Cloud**: App Engine or Cloud Run

### Frontend Deployment
1. **Netlify**: Drag and drop deployment
2. **Vercel**: Zero-config deployment
3. **GitHub Pages**: Free hosting for static sites
4. **AWS S3**: Static website hosting

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📈 Performance Features

- Optimized animations
- Efficient DOM manipulation
- Compressed assets
- Responsive images
- Lazy loading of content
- Smooth page transitions

## 🛡️ Security Features

- CORS configuration
- Input validation
- XSS protection
- Secure headers
- API rate limiting (configurable)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

For questions or support, please contact:
- **Email**: priyanshupareta@gmail.com
- **LinkedIn**: [linkedin.com/in/priyanshu-pareta](https://linkedin.com/in/priyanshu-pareta)

## 🎯 Future Enhancements

- [ ] Blog section
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Contact form backend
- [ ] Image optimization
- [ ] PWA features
- [ ] Advanced animations
- [ ] Portfolio analytics dashboard
- [ ] Integration with external APIs (GitHub, LinkedIn)

## 🚀 Getting Started with Development

### Prerequisites
- Python 3.8 or higher
- pip (Python package installer)
- Modern web browser

### Development Setup
1. Clone the repository
2. Install dependencies: `pip install -r requirements.txt`
3. Start backend: `python start.py`
4. Open `index.html` in your browser
5. Make changes and refresh to see updates

### File Structure Overview
- **`main.py`**: Contains all portfolio data and API endpoints
- **`index.html`**: Main HTML structure with all pages
- **`script.js`**: All frontend functionality and data population
- **`startup-*.html`**: Individual startup case study pages
- **`start.py`**: Convenient startup script for development

---

**Built with ❤️ using FastAPI, Python, and Vanilla JavaScript**

*This portfolio showcases the perfect blend of modern backend technologies and clean frontend development, reflecting the skills and expertise of a professional software engineer. The comprehensive structure highlights not just technical skills, but also entrepreneurial spirit and real-world impact.*
