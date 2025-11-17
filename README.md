# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript, designed for deployment on GitHub Pages.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth scrolling and animations
- 🎯 Easy to customize
- 🚀 Ready for GitHub Pages deployment

## Sections

- **Hero**: Introduction and call-to-action
- **About**: Personal information and statistics
- **Projects**: Showcase of your work
- **Skills**: Technical skills and technologies
- **Contact**: Links to social media and email

## Customization

### Personal Information

1. **Name**: Replace "Your Name" throughout `index.html`
2. **Email**: Update the email link in the contact section
3. **Social Links**: Update GitHub and LinkedIn URLs in the contact section
4. **About Section**: Edit the about text to reflect your background
5. **Projects**: Add your actual projects with descriptions, tags, and links
6. **Skills**: Update the skills list to match your expertise
7. **Statistics**: Modify the numbers in the about section stats

### Styling

- **Colors**: Edit the CSS variables in `styles.css` (lines 7-14) to change the color scheme
- **Fonts**: The site uses Google Fonts (Inter). You can change this in `index.html`

## Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. Create a new repository on GitHub (e.g., `portfolio` or `yourusername.github.io`)
2. Upload all files to the repository
3. Go to **Settings** → **Pages**
4. Under **Source**, select the branch (usually `main` or `master`)
5. Select the folder (usually `/ (root)`)
6. Click **Save**
7. Your site will be available at `https://yourusername.github.io/repository-name`

### Method 2: Using Git Command Line

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then follow steps 3-7 from Method 1 to enable GitHub Pages.

### Custom Domain (Optional)

If you want to use a custom domain:

1. Create a file named `CNAME` in the root directory
2. Add your domain name (e.g., `www.yourdomain.com`)
3. Configure your DNS settings as per GitHub Pages documentation

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # CSS styles
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this template for your own portfolio!

## Credits

Built with ❤️ for showcasing your work as a CS student.

