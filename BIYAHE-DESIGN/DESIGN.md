---
name: Biyahe System
colors:
  surface: '#f8f9fc'
  surface-dim: '#d9dadd'
  surface-bright: '#f8f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3f6'
  surface-container: '#edeef1'
  surface-container-high: '#e7e8eb'
  surface-container-highest: '#e1e2e5'
  on-surface: '#191c1e'
  on-surface-variant: '#424753'
  inverse-surface: '#2e3133'
  inverse-on-surface: '#eff1f4'
  outline: '#727784'
  outline-variant: '#c2c6d5'
  surface-tint: '#005ac3'
  primary: '#004497'
  on-primary: '#ffffff'
  primary-container: '#005bc5'
  on-primary-container: '#ccdaff'
  inverse-primary: '#aec6ff'
  secondary: '#006a68'
  on-secondary: '#ffffff'
  secondary-container: '#79f2f0'
  on-secondary-container: '#006e6d'
  tertiary: '#50388b'
  on-tertiary: '#ffffff'
  tertiary-container: '#6851a5'
  on-tertiary-container: '#e1d4ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#aec6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#7df5f3'
  secondary-fixed-dim: '#5dd9d6'
  on-secondary-fixed: '#00201f'
  on-secondary-fixed-variant: '#00504f'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#cfbcff'
  on-tertiary-fixed: '#22005d'
  on-tertiary-fixed-variant: '#4f378a'
  background: '#f8f9fc'
  on-background: '#191c1e'
  surface-variant: '#e1e2e5'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 57px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.25px
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  title-lg:
    fontFamily: Hanken Grotesk
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.5px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.25px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.1px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.5px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter-mobile: 16px
  gutter-desktop: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style
The brand personality is rooted in reliability and modern mobility. It aims to evoke a sense of confidence and ease, positioning the act of renting a vehicle as a seamless, high-end experience rather than a transactional chore. 

The design style follows a **Corporate / Modern** approach, heavily influenced by Material Design 3 principles. It prioritizes clarity, systematic hierarchy, and functional elegance. By utilizing ample whitespace and a structured grid, the UI maintains a "breathable" quality that highlights high-resolution vehicle imagery. The aesthetic is sleek and professional, ensuring that users—whether traveling for business or leisure—feel they are interacting with a premium, trustworthy service.

## Colors
The palette is anchored by **Biyahe Blue**, a vibrant yet stable primary hue that signals trust and authority. **Tropical Teal** serves as the secondary color, used for accents and success states to provide a fresh, modern contrast that hints at travel and adventure.

Following Material 3 logic, the system utilizes a tonal surface strategy:
- **Surface:** `#FBFCFF` (The base background).
- **Surface Container:** A range of soft greys (e.g., `#F3F4F9`) used to distinguish cards and content areas from the background.
- **On-Surface:** High-contrast dark greys for maximum legibility.
- **Outline:** Subtle grey borders to define boundaries without adding visual noise.

## Typography
The typography system uses **Hanken Grotesk** for headings to provide a sharp, contemporary character that distinguishes the brand from generic platforms. **Inter** is utilized for body copy and labels, ensuring exceptional legibility across all screen densities.

The hierarchy is strictly enforced:
- **Headlines:** Reserved for page titles and major sections, utilizing a medium-to-bold weight.
- **Body:** Optimized for readability with generous line heights.
- **Labels:** Used for small metadata, buttons, and navigation items, often utilizing a slightly heavier weight to maintain visibility at small sizes.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop and a **Fluid Grid** for mobile devices. 
- **Desktop:** A 12-column grid with a maximum content width of 1280px. Gutters are set to 24px to provide clear separation between vehicle listings.
- **Mobile:** A 4-column fluid grid with 16px margins and gutters. 

Spacing follows an 8px linear scale. Internal component padding should prioritize "breathability"—for example, card padding is typically 16px or 24px to prevent content from feeling cramped. Elements should align to the grid to maintain the "Sleek" and "Systematic" feel of the design system.

## Elevation & Depth
Depth is created through a combination of **Tonal Layers** and **Ambient Shadows**, strictly adhering to Material 3's elevation levels (Level 0 to Level 5).

- **Level 0 (Flat):** Used for the main background.
- **Level 1 (Soft Elevation):** Applied to vehicle listing cards. This uses a very subtle, diffused shadow (blur: 4px, Y: 2px, Opacity: 8%) to "lift" the card slightly off the surface without creating harsh edges.
- **Level 2 (Active):** Used for hovered cards or primary interaction points, increasing shadow depth and adding a subtle tint of the primary color to the shadow.
- **Backdrop Blurs:** High-level overlays (like date pickers or mobile menus) use a subtle background blur to maintain context while focusing user attention.

## Shapes
The shape language is consistently **Rounded**, reflecting the approachable and fluid nature of modern travel. 

- **Containers:** Standard cards and containers use a 0.5rem (8px) radius.
- **Search Inputs:** To emphasize the "Sleek" aesthetic, search bars and primary inputs utilize a higher `rounded-xl` (1.5rem) or pill-shaped (full radius) corner to stand out as key interactive elements.
- **Buttons:** Fully rounded (pill-shaped) to maximize clickability and provide a friendly visual cue.

## Components
- **Elevated Cards:** Used for vehicle listings. They feature a high-quality image at the top, followed by a title in `title-lg` and pricing in `headline-md`. They include a subtle border (`1px`) in a light neutral shade to ensure definition on all surfaces.
- **Search Inputs:** Centrally located on homepages. They utilize a large, pill-shaped container with an icon prefix. The focus state uses a 2px Biyahe Blue border.
- **Buttons:** 
  - *Primary:* Filled with Biyahe Blue, white text, pill-shaped.
  - *Secondary:* Outlined with Tropical Teal, pill-shaped.
- **Chips:** Small, rounded-lg elements used for vehicle features (e.g., "Automatic", "Electric"). They use a low-chroma version of the secondary color as a background.
- **Input Fields:** Floating label style (Material 3). They use a soft grey background and a bottom-border or full-outline focus state.
- **Vehicle Specs Grid:** A specific component for the vehicle detail page that uses a 2-column layout on mobile and 4-column on desktop to show features like fuel type, seats, and luggage capacity using simplified icons.