# Favicon.ico Generation

The `favicon.ico` file needs to be generated from the SVG. Modern browsers will use `favicon.svg`, but `favicon.ico` is needed for older browsers and bookmarks.

## To generate favicon.ico:

1. **Option 1: Online Tool**
   - Visit https://realfavicongenerator.net/
   - Upload `favicon.svg`
   - Generate and download `favicon.ico`
   - Place in `/public/favicon.ico`

2. **Option 2: Using ImageMagick** (if installed)
   ```bash
   convert -background none -density 256x256 -resize 64x64 favicon.svg favicon.ico
   ```

3. **Option 3: Using Inkscape**
   ```bash
   inkscape --export-type=ico --export-filename=favicon.ico --export-width=64 --export-height=64 favicon.svg
   ```

The current setup uses SVG which works in modern browsers. For full compatibility, generate the .ico file.



