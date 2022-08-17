# Exolite

Exolite is a Vite template used to bootstrap new Sesimi templates.

<img width="1226" alt="Screen Shot 2022-08-13 at 11 54 08 am" src="https://user-images.githubusercontent.com/75602/185010306-04d03d7e-ff9f-477f-a20d-477cae7e1394.png">

## Getting Started

### tl;dr:

```
 npx degit -m=git myadbox/exolite my-template
```

### Longer version:

1. `cd` in to the directory in which you store templates on your computer.
2. Type the following, replacing `my-template` with the name you wish to use for your new template directory. `npx degit -m=git myadbox/exolite my-template`
3. The first time you use this tool, you will be asked to agree to install the `degit` package globally. Hit `y` to agree.
4. You now have your own project folder based on a copy of Exolite. Feel free to (optionally) add further tooling to suit your taste (eg. Eslint, prettier, etc.). The src/ folder is solely for your actual Sesimi template files.
5. Run `npm install && npm start` to download dependency node_modules and run Vite's development environment. A browser window will open showing the contents of src/index.jsx. “Hot module replacement” will automatically update the browser preview as you edit template files in the src/ directory.
6. Edit src/index.jsx to create your template. Edit styling via src/index.css, edit animation via src/index.js, if required.
