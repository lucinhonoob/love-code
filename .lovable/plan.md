

## Plan: Replace Testimonials with Feedback Image

Replace the entire testimonials card grid in `Testimonials.tsx` with a single image from the provided Imgur link, keeping the section title.

### Changes

**`src/components/Testimonials.tsx`**:
- Remove the `Star` import, `Testimonial` interface, and testimonials array
- Keep the section wrapper and heading "O que os homens estão dizendo:"
- Replace the card grid with a single `<img>` tag using the direct Imgur image URL (`https://i.imgur.com/KXnhx7N.png`) with proper alt text, rounded corners, and responsive width

