# Exolite

Exolite is a Vite template used to bootstrap new Sesimi templates.

<img width="1630" alt="Screen Shot 2022-08-17 at 11 02 41 am" src="https://user-images.githubusercontent.com/75602/185011381-298e27f6-1c97-4a5f-a7de-6e84db3e62a7.png">

## Getting Started

### tl;dr:

```
 npx degit myadbox/exolite my-template
```

### Longer version:

1. `cd` in to the directory in which you store templates on your computer.
2. Type the following, replacing `my-template` with the name you wish to use for your new template directory.
   `npx degit myadbox/exolite my-template`
3. The first time you use this tool, you will be asked to agree to install the `degit` package globally. Hit `y` to
   agree.
4. You now have your own project folder based on a copy of Exolite. The src/ folder is solely for your actual Sesimi template files.
5. Run `npm run setup` to download dependency node_modules and run Vite's development environment. A browser
   window will open showing the contents of src/index.jsx and will automatically update the preview as you edit template files in the src/ directory.
6. Edit src/index.jsx to create your template. Edit styling via src/index.css, edit animation via src/index.js, if
   required.
