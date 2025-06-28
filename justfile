# Development commands for hmk.github.io Jekyll site

# Start development server with CSS watching (equivalent to Procfile)
serve:
    overmind start

# Build the site for production
build:
    npm run build:css
    bundle exec jekyll build

# Install all dependencies
install:
    bundle install
    npm install

# Clean build artifacts
clean:
    rm -rf _site
    rm -rf .sass-cache
    rm -rf .jekyll-cache
    rm -rf .jekyll-metadata

# Build CSS for production
build-css:
    npm run build:css
