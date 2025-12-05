# Responsive Design Guide

## Enquiry Form Implementation

The enquiry form has been redesigned to be compact and responsive across all screen sizes.

### Layout Behavior

#### Large Screens (1024px and above - Desktop)
- **Hero Section**: Form appears on the right side of the carousel
- **Layout**: Two-column grid layout (Content | Form)
- **Form Width**: Fixed at 400px
- **Position**: Sticky on the right side of hero slides
- **Height**: Carousel height is 650px
- **Visibility**: Form is always visible in the hero section

#### Medium Screens (768px - 1023px - Tablets)
- **Hero Section**: Form is hidden from carousel
- **Form Location**: Appears in a dedicated section below the carousel
- **Layout**: Centered, maximum width 448px (md)
- **Background**: Light gray background section
- **Padding**: 8 units (2rem) vertical padding

#### Small Screens (0px - 767px - Mobile)
- **Hero Section**: Form is hidden from carousel
- **Form Location**: Appears in a dedicated section below the carousel
- **Layout**: Full-width with padding, centered
- **Background**: Light gray background section
- **Padding**: 8 units (2rem) vertical padding
- **Carousel Height**: Minimum 500px for proper content display

### Form Styling

#### Compact Design Features:
- **Padding**: 4-6 units (16-24px) instead of 8 units
- **Font Sizes**: Reduced by ~25%
  - Title: xl to 2xl (20-24px)
  - Labels: xs (12px)
  - Inputs: sm (14px)
- **Input Padding**: py-2 (8px vertical) instead of py-3
- **Icon Size**: 16px instead of 20px
- **Button Height**: py-2.5 instead of py-3
- **Spacing**: gap-3 (12px) instead of gap-4 (16px)
- **Message Rows**: 3 rows instead of 4

### Breakpoint Summary

```css
/* Tailwind Breakpoints Used */
lg: 1024px  /* Desktop - Form in hero */
md: 768px   /* Tablet - Form below hero */
sm: 640px   /* Mobile - Form below hero */
```

### Component Files Modified

1. **EnquiryForm.jsx** - Made compact and responsive
2. **HeroCarousel.jsx** - Integrated form for large screens
3. **Home.jsx** - Added mobile/tablet form section

### Testing Checklist

- [x] Form displays correctly on mobile (< 768px)
- [x] Form displays correctly on tablet (768px - 1023px)
- [x] Form displays in hero on desktop (>= 1024px)
- [x] Form is hidden in hero on mobile/tablet
- [x] Form appears below hero on mobile/tablet
- [x] All form fields are properly sized and accessible
- [x] Carousel height adjusts properly across breakpoints
- [x] Build completes without errors

### Future Enhancements

- Add form validation messages
- Implement backend API integration
- Add reCAPTCHA for spam protection
- Add success/error toast notifications
- Implement form analytics tracking
