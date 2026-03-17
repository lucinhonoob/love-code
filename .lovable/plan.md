

## Analysis

The CTA buttons use `<button>` elements with `onClick={() => window.location.href = url}` instead of `<a href="...">` tags. Browsers only show the URL preview in the bottom-left corner on hover for actual anchor (`<a>`) elements with an `href` attribute, not for buttons with click handlers.

The scripts (Utmify and Pixel) in `index.html` are correctly installed. The issue is specifically about the **buttons not showing the destination URL on hover** because they are `<button>` elements, not links.

## Plan

**`src/pages/Index.tsx`**:
- Change both CTA `<Button>` components to use `asChild` prop and wrap an `<a href={checkoutUrl}>` inside them. This makes the Button render as an anchor tag, which shows the URL on hover in the browser status bar.
- Remove the `handleCheckout` function since it will no longer be needed.
- Both button instances (lines ~120-126 and ~161-167) will be updated.

This is a minimal change that preserves all styling while making the links behave as proper anchor elements.

