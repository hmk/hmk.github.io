# Development commands for hmk.github.io Jekyll site

# Show a list of all commands by order in this file (--unsorted)
_default:
    @just --list --unsorted

# Start development server with CSS watching (equivalent to Procfile)
serve:
    bundle exec jekyll serve --livereload

# Build the site for production
build:
    bundle exec jekyll build

# Install all dependencies
install:
    bundle install

# Clean build artifacts
clean:
    rm -rf _site
    rm -rf .sass-cache
    rm -rf .jekyll-cache
    rm -rf .jekyll-metadata

