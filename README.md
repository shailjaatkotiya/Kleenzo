# Kleenzo Website

Marketing and ordering site for **Kleenzo** cleaning products — fabric liquid detergent, lime dishwash gel, and strawberry handwash. Built with React (Create React App). Orders route to WhatsApp.

<img width="1883" height="853" alt="image" src="https://github.com/user-attachments/assets/40c0a3fa-0658-44af-b670-853a7dd169f6" />

## Products

| Product | Packs | Use |
|---------|-------|-----|
| Fabric Liquid Detergent | 1L, 5L | Machine + bucket wash, stain removal, jasmine fragrance |
| Lime Dishwash Gel | 5L | Grease cutting, utensil shine, lime fragrance |
| Strawberry Handwash | 500ml | 99.9% germ protection, moisturizing |

## Tech

- React 18 + React Router
- `react-responsive-carousel` for product image carousels
- Font Awesome icons
- Static assets in `public/` (1080×1080 normalized product posters)

## Scripts

```bash
npm start    # dev server at http://localhost:3000
npm run build  # production build to /build
npm test     # test runner
```

## Project structure

```
src/
  components/   # Header, HeroSection, Products, Testimonials, Contact, Footer, AboutUs
  pages/        # Home, ProductsPage, About, ContactPage
  styles.css    # global styles
public/         # product images + hero
```

## Ordering

Order buttons open WhatsApp chat (`wa.me/918140888900`) prefilled with the product and pack size.
