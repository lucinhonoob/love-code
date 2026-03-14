

## Plan: Add Utmify and Facebook Pixel Scripts

Add both scripts to `index.html` in the `<head>` section, before the closing `</head>` tag.

### Changes

**`index.html`** — Add two `<script>` tags inside `<head>`:
1. Utmify UTM tracking script with `data-utmify-prevent-xcod-sck` and `data-utmify-prevent-subids` attributes
2. Facebook pixel inline script that sets `window.pixelId` and dynamically loads the pixel script

