# Broker Logos

This directory contains logos for Indian broker partners displayed in the hero section.

## Current Files

- `zerodha.svg` - Zerodha logo
- `groww.svg` - Groww logo  
- `angel-one.svg` - Angel One logo
- `upstox.svg` - Upstox logo

## Replacing Placeholder Logos

The current SVG files are placeholders. Replace them with the actual broker logos:

1. **Download official logos** from each broker's brand/press kit
2. **Optimize for web**: 
   - Use SVG format (preferred) or high-quality PNG
   - Remove unnecessary metadata
   - Keep file size < 50KB per logo
3. **Maintain aspect ratio**: Logos should be roughly 80-100px wide, height auto-scales
4. **Color**: Original color logos work fine - CSS applies grayscale filter automatically

## Accessibility

- Each logo has proper `alt` text in the Hero component
- Logos include `loading="lazy"` for performance
- Focus indicators are styled for keyboard navigation
- ARIA labels are set on the container

## Usage

Logos are referenced in `src/components/Hero.tsx` as:

```tsx
<img src="/assets/logos/zerodha.svg" alt="Zerodha" />
```

The path is relative to the `public` directory.

