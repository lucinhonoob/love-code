

## Plan: Replace VideoPlayer with Clean Embedded iframe

Replace the entire `VideoPlayer.tsx` component (thumbnail + play button + state logic) with a simple always-visible YouTube iframe embed using the provided HTML block.

### Changes

**`src/components/VideoPlayer.tsx`**:
- Remove `useState`, `Play` icon import, and all thumbnail/play button logic
- Replace with a single `div` using `relative` positioning + `padding-bottom: 56.25%` for 16:9 aspect ratio
- Embed the iframe directly with the provided YouTube parameters (`controls=0`, `modestbranding=1`, `rel=0`, etc.)
- Keep the `max-w-[760px]` and `rounded-2xl` styling on the outer wrapper for consistency with the page layout

