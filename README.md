# HMK Family Website

A Jekyll-based personal website with Tailwind CSS styling.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Ruby** (version specified in `.ruby-version`)
- **Node.js** (version specified in `.node-version`)
- **Bundler** (`gem install bundler`)
- **Just** (optional, for development commands): `brew install just` on macOS

## Quick Start

### 1. Install Dependencies

```bash
# Install Ruby dependencies
bundle install

# Install Node.js dependencies
npm install
```

Or use the justfile command:
```bash
just install
```

### 2. Start Development Server

The easiest way to start development is using the justfile:

```bash
just serve
```

This will:
- Start the Jekyll development server
- Watch and compile Tailwind CSS in real-time
- Serve the site at `http://localhost:4000`

## Development Commands

This project uses a `justfile` for convenient development commands. Here are the available commands:

### `just serve`
Start the development server with CSS watching (equivalent to the Procfile).
- Runs Jekyll server and CSS watcher concurrently
- Best for active development

### `just build`
Build the site for production.
- Compiles CSS for production
- Builds the complete Jekyll site

### `just css`
Watch and compile CSS only.
- Useful when you only need to work on styles

### `just jekyll`
Serve Jekyll only (without CSS watching).
- Faster startup when you don't need CSS changes

### `just install`
Install all dependencies.
- Runs both `bundle install` and `npm install`

### `just clean`
Clean build artifacts.
- Removes `_site`, `.sass-cache`, `.jekyll-cache`, and `.jekyll-metadata`

### `just build-css`
Build CSS for production.
- Compiles Tailwind CSS without watching

### `just` (no arguments)
Show all available commands.

## Alternative Methods

If you don't have `just` installed, you can use these alternatives:

### Using npm scripts
```bash
npm run dev          # Same as 'just serve'
npm run build:css    # Build CSS for production
npm run watch:css    # Watch CSS changes
```

### Using the Procfile
```bash
overmind start       # If you have overmind installed
```

### Direct commands
```bash
bundle exec jekyll serve
npm run watch:css
```

## Project Structure

```
hmk.github.io/
├── _config.yml          # Jekyll configuration
├── _layouts/            # Jekyll layout templates
├── _includes/           # Jekyll include files
├── _posts/              # Blog posts
├── assets/
│   ├── css/
│   │   ├── tailwind.css # Tailwind source
│   │   └── style.css    # Compiled CSS (generated)
│   └── images/          # Site images
├── justfile             # Development commands
├── Procfile             # Process definitions
├── package.json         # Node.js dependencies
└── Gemfile              # Ruby dependencies
```

## Deployment

This site is configured for GitHub Pages deployment. The `CNAME` file indicates it's deployed to a custom domain.

To build for production:
```bash
just build
```

The built site will be in the `_site/` directory.

## Customization

- **Styling**: Edit `assets/css/tailwind.css` for Tailwind styles
- **Layout**: Modify files in `_layouts/` and `_includes/`
- **Content**: Add posts to `_posts/` or create new pages
- **Configuration**: Update `_config.yml` for site settings

## Troubleshooting

### CSS not updating
- Ensure the CSS watcher is running: `just css`
- Check that `assets/css/style.css` is being generated
- Verify PostCSS configuration in `postcss.config.js`

### Jekyll server issues
- Run `just clean` to clear cache
- Check Ruby version matches `.ruby-version`
- Verify all gems are installed: `bundle install`

### Port conflicts
- Jekyll defaults to port 4000
- Use `bundle exec jekyll serve --port 4001` to change port 
