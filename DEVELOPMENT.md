# Abdul Basit Khattak - Portfolio Development Setup

## Quick Start Commands

### Local Development
```bash
# Start local server on port 8000
python3 -m http.server 8000

# Alternative with Node.js (if live-server is installed)
npx live-server --port=8000

# Alternative with PHP
php -S localhost:8000
```

### Git Commands
```bash
# Initialize repository (if not already done)
git init
git remote add origin https://github.com/abdulbaaesit/abdulbaaesit.github.io.git

# Add and commit changes
git add .
git commit -m "Your commit message"

# Push to GitHub
git push origin main

# Quick deployment
./deploy.sh
```

### File Structure Maintenance
```bash
# Check file sizes (optimize if needed)
find . -type f -size +1M -not -path "./.git/*"

# Validate HTML
# Use online validator: https://validator.w3.org/

# Check for broken links
# Use online checker or browser dev tools
```

### Development Tips

1. **Image Optimization**
   - Keep images under 500KB
   - Use WebP format when possible
   - Compress JPEGs to 80-85% quality

2. **Performance Monitoring**
   - Use Lighthouse in Chrome DevTools
   - Test on multiple devices and browsers
   - Monitor Core Web Vitals

3. **SEO Checklist**
   - Update meta descriptions
   - Add alt text to images
   - Use semantic HTML
   - Ensure proper heading hierarchy

4. **Accessibility**
   - Test with screen readers
   - Ensure keyboard navigation works
   - Maintain proper color contrast
   - Add ARIA labels where needed

### Deployment Checklist

- [ ] All images optimized
- [ ] HTML validated
- [ ] CSS/JS minified (if applicable)
- [ ] Meta tags updated
- [ ] Favicon present
- [ ] 404 page exists
- [ ] All links working
- [ ] Mobile responsive
- [ ] Cross-browser tested
- [ ] Performance optimized
- [ ] SEO optimized

### Useful Resources

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Web.dev**: https://web.dev/
- **MDN Web Docs**: https://developer.mozilla.org/
- **Can I Use**: https://caniuse.com/
- **Google Fonts**: https://fonts.google.com/
- **Font Awesome**: https://fontawesome.com/
