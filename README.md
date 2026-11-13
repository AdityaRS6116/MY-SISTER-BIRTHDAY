# 📸 Add Your Photos Here

## How to Add Photos

1. **Copy your photo** to this folder (`public/photos/`)
2. **Name it**: `harshita-and-me.jpg` (or any name you like)
3. **Update the config**: Open `src/config.js` and find the `photos` section
4. **Change the filename** to match your photo's name

## Supported Formats
- `.jpg` / `.jpeg`
- `.png`
- `.webp`

## Example config.js entry:
```js
photos: [
  {
    src: "/photos/harshita-and-me.jpg",
    caption: "Us & our little world 💗",
    subcaption: "Some memories are priceless",
  },
  {
    src: "/photos/another-photo.jpg",
    caption: "Another beautiful moment",
    subcaption: "Always remembered",
  }
]
```

## Tips
- Use portrait-oriented photos (taller than wide) for best Polaroid effect
- Maximum recommended size: 2MB per photo
- Photos will be automatically resized to fit the frames
