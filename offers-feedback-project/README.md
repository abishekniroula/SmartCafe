# Offers & Feedback - Smart Cafe

A modern, responsive web application for displaying special offers and collecting customer feedback. Built with HTML, CSS, and vanilla JavaScript.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Navigation Bar**: Sticky navigation with smooth scrolling and mobile hamburger menu
- **Hero Banner**: Eye-catching banner section with promotional messaging
- **Offers Section**: Showcase special offers with discount badges and call-to-action buttons
- **Feedback Form**: Comprehensive feedback form with real-time validation
  - Name, Email, Rating, and Message fields
  - Field-level validation with helpful error messages
  - Success confirmation after submission
- **Footer**: Contact information and social media links
- **Interactive Elements**: 
  - Smooth animations and transitions
  - Hover effects on buttons and cards
  - Mobile-friendly hamburger menu
  - Real-time form validation feedback
- **Accessibility**: 
  - Semantic HTML5 markup
  - ARIA labels for screen readers
  - Keyboard navigation support
  - Focus indicators for accessibility

## 📁 Folder Structure

```
offers-feedback-project/
│
├── index.html              # Main HTML file with page structure
├── css/
│   └── style.css          # External stylesheet with responsive design
├── js/
│   └── script.js          # JavaScript for form validation and interactions
├── images/
│   ├── offer1.jpg         # First offer card image
│   ├── offer2.jpg         # Second offer card image
│   └── banner.jpg         # Hero banner background image
└── README.md              # Project documentation
```

## 🎨 Design Features

- **Color Palette**:
  - Primary: #8B6F47 (Coffee Brown)
  - Secondary: #D4A373 (Warm Tan)
  - Accent: #E8D5C4 (Soft Cream)
  - Light Background: #F5F1E8

- **Typography**: Clean, modern fonts with proper hierarchy
- **Spacing**: Consistent padding and margins for visual balance
- **Cards**: Rounded corners (15px) with subtle shadows
- **Buttons**: Smooth hover effects with elevation and color changes
- **Animations**: Fade-in effects and smooth transitions throughout

## 🚀 How to Run the Project

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - works as static HTML

### Steps

1. **Navigate to the project folder**:
   ```bash
   cd offers-feedback-project
   ```

2. **Open the project**:
   - **Option 1**: Double-click `index.html` in your file explorer
   - **Option 2**: Right-click `index.html` → Open with → Select your browser
   - **Option 3**: Use a local server (recommended)

3. **Using a Local Server (Recommended)**:
   
   **With Python 3**:
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser

   **With Python 2**:
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   Then open `http://localhost:8000` in your browser

   **With Node.js (http-server)**:
   ```bash
   npx http-server
   ```
   Then open the provided URL in your browser

## 📋 Form Validation Rules

### Name Field
- Required field
- Minimum 2 characters
- Only letters and spaces allowed

### Email Field
- Required field
- Must be a valid email format (example@domain.com)

### Rating Field
- Required field
- Must select one of: Excellent, Good, Average, Poor, Very Poor

### Message Field
- Required field
- Minimum 10 characters
- Can contain any characters

## ✨ Interactive Features

### Mobile Navigation
- Hamburger menu appears on screens below 768px
- Click to toggle menu open/close
- Menu closes when clicking on links
- Menu closes when clicking outside

### Form Validation
- Real-time validation on field blur
- Visual error indicators
- Error messages display below fields
- Form prevents submission if any field is invalid
- Success alert shows after successful submission

### Offer Cards
- Hover effects with elevation
- Image zoom on hover
- Claim button with feedback

### Smooth Scrolling
- Smooth transitions between sections
- Navigation links scroll to sections
- Navigation bar shadow increases on scroll

## 🔧 Customization

### Change Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #8B6F47;
    --secondary-color: #D4A373;
    --accent-color: #E8D5C4;
    /* ... more variables ... */
}
```

### Add More Offers
Copy an offer card in `index.html` and update the content:
```html
<article class="offer-card">
    <div class="card-image">
        <img src="images/offer3.jpg" alt="Your offer">
        <div class="discount-badge">DISCOUNT</div>
    </div>
    <!-- ... rest of card ... -->
</article>
```

### Modify Social Media Links
Update the social media URLs in the footer:
```html
<a href="https://your-facebook-url.com" aria-label="Facebook">
    <i class="fab fa-facebook"></i>
</a>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 480px to 767px
- **Ultra Mobile**: Below 360px

## ♿ Accessibility Features

- Semantic HTML5 elements (nav, header, main, footer, section, article)
- ARIA labels for images and links
- Form labels properly associated with inputs
- Keyboard navigation support
- Focus indicators on interactive elements
- Color contrast meets WCAG standards
- Reduced motion support for users with motion sensitivity

## 🛠️ Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 File Descriptions

### index.html
Contains the complete page structure with:
- Navigation bar with logo and menu
- Hero banner section
- Offers display section
- Feedback form section
- Footer with social links
- Links to external CSS and JavaScript

### css/style.css
Comprehensive stylesheet including:
- Global styles and CSS variables
- Navigation bar styling
- Hero banner animations
- Card and button styling
- Responsive grid layouts
- Mobile-first responsive design
- Accessibility features
- Smooth transitions and animations

### js/script.js
JavaScript functionality for:
- Mobile menu toggle
- Form field validation functions
- Real-time error handling
- Form submission processing
- Success notifications
- Offer button interactions
- Scroll effects
- Error handling

## 🎯 Project Goals Achieved

✅ Responsive design for all devices
✅ Modern UI with professional styling
✅ Complete form validation
✅ Interactive JavaScript features
✅ Semantic HTML markup
✅ Accessibility compliance
✅ Clean, commented code
✅ Mobile-friendly layout
✅ Smooth animations and transitions
✅ Easy to customize and extend

## 📞 Support & Questions

For questions or issues:
1. Check the code comments for explanations
2. Review the form validation rules section
3. Test responsive design using browser dev tools
4. Check browser console for any error messages

## 📄 License

This project is free to use and modify for educational and personal purposes.

---

**Created with ❤️ for Smart Cafe**

Enjoy building with this responsive web application template!
