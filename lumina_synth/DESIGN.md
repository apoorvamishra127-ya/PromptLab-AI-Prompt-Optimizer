---
name: Lumina Synth
colors:
  surface: '#031427'
  surface-dim: '#031427'
  surface-bright: '#2a3a4f'
  surface-container-lowest: '#000f21'
  surface-container-low: '#0b1c30'
  surface-container: '#102034'
  surface-container-high: '#1b2b3f'
  surface-container-highest: '#26364a'
  on-surface: '#d3e4fe'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#d3e4fe'
  inverse-on-surface: '#213145'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#c9c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#929090'
  on-tertiary-container: '#2a2a29'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c9c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#031427'
  on-background: '#d3e4fe'
  surface-variant: '#26364a'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  code:
    fontFamily: jetbrainsMono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
---

## Brand & Style

The design system is engineered for a premium AI SaaS environment, targeting developers and creative professionals. The brand personality is **smart, futuristic, and innovative**, emphasizing precision and high-performance capability. 

The visual style is a fusion of **Modern Minimalist** and **Refined Glassmorphism**. It utilizes a deep, immersive dark-first palette to reduce visual noise, allowing the vibrant AI-driven actions to stand out through light-emitting accents and translucent surfaces. The emotional response is one of calm authority and technical sophistication.

## Colors

The palette is anchored by **Deep Charcoal (#0D0D0D)** for primary backgrounds to create infinite depth. 

- **Primary & Secondary**: A sophisticated gradient transition from Indigo (#6366F1) to Violet (#8B5CF6) is used exclusively for primary actions, active states, and brand-defining moments.
- **Neutrals**: A scale of Slate Greys is employed for typography (Slate 200 for headings, Slate 400 for body) and ultra-thin borders (Slate 900 / #1F1F1F).
- **Accents**: Use high-saturation glows sparingly to indicate AI "thought" processes or generative states.

## Typography

This design system uses **Inter** for its systematic, highly legible qualities across all UI tiers. For headings, a tighter letter-spacing is applied to create a "locked-in" professional look. 

**Geist** is introduced for labels and small metadata to lean into the developer-friendly aesthetic. For code blocks and prompt inputs, **JetBrains Mono** ensures technical clarity. Typography should always prioritize generous line heights to maintain the "uncluttered" brand promise.

## Layout & Spacing

The layout follows a **Fluid Grid** philosophy with significant breathing room. 

- **Desktop**: 12-column grid with 24px gutters and 48px side margins. 
- **Tablet**: 8-column grid with 20px gutters. 
- **Mobile**: 4-column grid with 16px gutters and 16px side margins.

Spacing follows a strict 8px geometric scale. Use "Purposeful Empty Space" (Stack-XL) between major sections to emphasize the premium, minimal nature of the product. Content should be centered in the viewport with a max-width of 1280px to prevent excessive line lengths on wide monitors.

## Elevation & Depth

Depth is achieved through **Glassmorphism** rather than traditional drop shadows.

- **Base Level**: #0D0D0D (Solid).
- **Mid Level (Cards/Modals)**: Background blur (12px to 20px) with a semi-transparent fill of #1A1A1A at 70% opacity.
- **Top Level (Popovers/Tooltips)**: Background blur (8px) with #262626 at 90% opacity.
- **Borders**: All elevated elements must feature an ultra-thin (1px) border using #1F1F1F or a subtle white-alpha (white at 10% opacity) on the top and left edges to simulate a light source.

## Shapes

The shape language is consistently **Rounded**, using a 12px base radius for standard components and 16px for larger containers (Cards). 

- **Standard (Buttons/Inputs)**: 8px to 12px (rounded-lg).
- **Containers (Cards/Sections)**: 16px to 24px (rounded-xl).
- **Status Tags**: Pill-shaped (fully rounded) to contrast against the structured grid.

## Components

- **Buttons**: Primary buttons use the Indigo-to-Violet gradient with white text. Secondary buttons are ghost-style with the ultra-thin #1F1F1F border and a subtle hover blur effect.
- **Input Fields**: Dark backgrounds (#050505) with 1px Slate 900 borders. On focus, the border transitions to the primary gradient and a subtle outer glow is applied.
- **Cards**: Utilize the glassmorphism stack (blur + semi-transparent fill). No heavy shadows; instead, use a 1px border to define the shape.
- **Chips/Badges**: Small, pill-shaped elements with a low-opacity tint of the primary color (e.g., Indigo at 15% opacity) and high-contrast text.
- **Icons**: 24px viewbox, 1.5px stroke width. Use Lucide icons exclusively to maintain the thin-stroke, technical aesthetic.
- **AI Feedback**: Components that involve AI generation should feature a subtle "shimmer" animation or a gradient border-crawl to indicate activity.