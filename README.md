# SCM Static Site

A static website demonstrating **Software Configuration Management** concepts, deployed automatically via **GitHub Actions** to **GitHub Pages**.

## Features

- **Static Site** — Clean HTML/CSS/JS site showcasing SCM concepts
- **CI/CD Pipeline** — GitHub Actions workflow that lints and deploys on every push
- **ESLint Quality Gate** — JavaScript linter runs before deployment; broken code blocks the deploy

## Project Structure

```
├── .github/workflows/deploy.yml   # CI/CD pipeline
├── css/style.css                  # Styles
├── js/main.js                     # JavaScript (linted by ESLint)
├── index.html                     # Main page
├── eslint.config.mjs              # ESLint configuration
├── package.json                   # Node.js dependencies
└── README.md
```

## How the Pipeline Works

1. **Push to `main`** triggers the workflow
2. **Lint job** installs Node.js, runs `npm ci`, then `npm run lint` (ESLint)
3. **Deploy job** (depends on lint passing) uploads the site and publishes to GitHub Pages

## Local Development

```bash
npm install          # Install ESLint
npm run lint         # Run the linter
```

## Testing the Quality Gate

To see the linter block deployment, intentionally break a JS rule — for example, remove a semicolon:

```js
// Before (passes):
const ctaButton = document.getElementById("cta-btn");

// After (fails):
const ctaButton = document.getElementById("cta-btn")
```

Push the change and watch the Actions workflow fail at the lint step.
