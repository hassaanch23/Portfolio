# Portfolio React App

A modern, responsive portfolio website built with React, converted from the original HTML template.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Modern React Components**: Built with functional components and hooks
- **Smooth Animations**: AOS (Animate On Scroll) integration
- **Interactive Portfolio**: Filterable portfolio gallery
- **Contact Form**: Functional contact form
- **Typed Text Animation**: Dynamic text typing effect
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Mobile-Friendly Navigation**: Collapsible sidebar for mobile devices

## Technologies Used

- **React 18** - Modern React with hooks
- **Bootstrap 5** - Responsive CSS framework
- **React Icons** - Icon library
- **React Typed** - Typing animation
- **AOS** - Animate On Scroll library
- **CSS3** - Custom styling

## Project Structure

```
portfolio-react/
├── public/
│   ├── index.html
│   └── assets/ (images)
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Resume/
│   │   ├── Portfolio/
│   │   ├── Services/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── ScrollTop/
│   │   └── Preloader/
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── index.css
└── package.json
```

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Customization

### Personal Information
Update the following components with your information:
- `Header.js` - Name and social links
- `Hero.js` - Name and typed text
- `About.js` - Personal details and stats
- `Resume.js` - Education and experience
- `Portfolio.js` - Your projects
- `Services.js` - Your services
- `Contact.js` - Contact information

### Styling
- Colors are defined in CSS variables in `index.css`
- Main color scheme: `--primary-color: #149ddd`, `--secondary-color: #173b6c`

### Images
Place your images in the `public/assets/img/` directory:
- Profile image: `my-profile-img.jpg`
- Hero background: `hero-bg.jpg`
- Portfolio images: `portfolio/` folder

## Features to Add

- **Form Validation**: Add proper form validation to contact form
- **Backend Integration**: Connect contact form to a backend service
- **Portfolio Details**: Add detailed project pages
- **Blog Section**: Add a blog or articles section
- **Dark Mode**: Implement dark/light theme toggle
- **SEO Optimization**: Add meta tags and SEO improvements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is based on the iPortfolio template. Please check the original license terms.

## Credits

- Original Template: [iPortfolio by BootstrapMade](https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/)
- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- Animations: [AOS](https://michalsnik.github.io/aos/)
