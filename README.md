# Abdul Basit Khattak - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Computer Science student at LUMS University, with expertise in cybersecurity, computer networking, and algorithm design.

## 🌟 Features

- **Responsive Design**: Optimized for all device sizes (desktop, tablet, mobile)
- **Dark/Light Theme**: Toggle between themes with persistent preference storage
- **Interactive Animations**: Parallax effects, floating particles, and smooth scrolling
- **Modern UI**: Clean, professional design with smooth transitions
- **Bilingual Support**: English and Urdu text elements
- **Contact Form**: Interactive contact form for inquiries
- **Project Showcase**: Detailed project cards with links to live demos and code
- **Performance Optimized**: Fast loading with optimized assets

## 🚀 Live Demo

Visit the live website: [https://abdulbaaesit.github.io](https://abdulbaaesit.github.io)

## 📁 Project Structure

```
portfolio-site/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── assets/
│   ├── images/            # Profile pictures and project images
│   │   ├── IMG_2464.jpg   # Profile photo
│   │   ├── profile-circle.png
│   │   ├── profile.png
│   │   └── smart-house.jpeg
│   └── icons/             # Icon assets
└── README.md              # Project documentation
```

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Animations**: GSAP (GreenSock Animation Platform)
- **Icons**: Material Icons, Font Awesome
- **Fonts**: Google Fonts (Poppins, JetBrains Mono, DM Sans)
- **Deployment**: GitHub Pages

## 📱 Sections

1. **Hero Section**: Introduction with profile picture and contact links
2. **Projects**: Featured projects with descriptions and links
3. **Teaching**: Teaching assistant experience at LUMS
4. **Education**: Academic background and certifications
5. **Awards**: Academic achievements and recognitions
6. **Courses**: Complete list of courses taken at LUMS
7. **Contact**: Contact form and social media links

## 🎨 Key Features

### Interactive Elements
- **Parallax Background**: Multi-layered parallax effects
- **Floating Particles**: Dynamic particle animations
- **Interactive Grid**: Responsive grid animations
- **Stellar Effects**: Space-themed visual elements
- **Mouse Trail**: Custom cursor trail effect

### Responsive Design
- Mobile-first approach
- Adaptive navigation menu
- Optimized layouts for different screen sizes
- Touch-friendly interface

### Theme System
- Light and dark mode toggle
- System preference detection
- Persistent theme storage

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdulbaaesit/abdulbaaesit.github.io.git
   cd abdulbaaesit.github.io
   ```

2. **Start a local server**
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js (if you have live-server installed)
   npx live-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   Navigate to `http://localhost:8000`

### GitHub Pages Deployment

This site is automatically deployed using GitHub Pages. Any push to the `main` branch will trigger a new deployment.

## 📝 Customization

### Adding New Projects

1. Edit `index.html`
2. Find the Projects section
3. Add a new card following this structure:

```html
<div class="column is-one-third">
    <div class="card equal-height">
        <header class="card-header has-background-primary" style="opacity:70%">
            <p class="card-header-title has-text-white">Project Title</p>
        </header>
        <div class="card-content">
            <p class="content is-italic"><span class="has-text-weight-semibold"><em>Your Name</em></span></p>
            <div class="content is-small">
                Project description here...
            </div>
            <p class="content">Project Date</p>
        </div>
        <footer class="card-footer">
            <a href="demo-link" class="card-footer-item material-icons icon-link has-text-link" target="_blank">description</a>
            <a href="github-link" class="card-footer-item material-icons icon-link has-text-link" target="_blank">code</a>
        </footer>
    </div>
</div>
```

### Updating Personal Information

- **Profile Image**: Replace `assets/images/IMG_2464.jpg`
- **Contact Info**: Update email addresses and social links in the hero and contact sections
- **Bio**: Modify the introduction paragraph in the hero section

### Modifying Theme Colors

Edit the CSS custom properties in `css/styles.css`:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
}
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all categories
- **Load Time**: < 2 seconds on 3G
- **Bundle Size**: Optimized assets and minimal dependencies
- **SEO**: Semantic HTML and proper meta tags

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Abdul Basit Khattak**
- Email: [abdulbaesit13@gmail.com](mailto:abdulbaesit13@gmail.com)
- University: [26100381@lums.edu.pk](mailto:26100381@lums.edu.pk)
- LinkedIn: [linkedin.com/in/abdulbaesit](https://linkedin.com/in/abdulbaesit)
- GitHub: [github.com/abdulbaaesit](https://github.com/abdulbaaesit)

## 🎓 About

This portfolio represents my journey as a Computer Science student at Lahore University of Management Sciences (LUMS), showcasing my projects, academic achievements, and technical skills in cybersecurity, networking, and algorithm design.

---

**⭐ If you like this portfolio, please consider giving it a star!**
