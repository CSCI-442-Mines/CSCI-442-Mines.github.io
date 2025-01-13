# CSCI442: Operating Systems Course Website

[![gh-pages](https://github.com/CSCI-442-Mines/CSCI-442-Mines.github.io/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/CSCI-442-Mines/CSCI-442-Mines.github.io/actions/workflows/gh-pages.yml)

This is the course website for CSCI442: Operating Systems at the
[Colorado School of Mines](https://mines.edu).

## Development Documentation

1. Install [NodeJS](https://nodejs.org/en/download/)
2. Clone this repository
3. Install dependencies:
   ```shell
   npm install
   ```
4. Start the development server:
   ```shell
   npm run dev
   ```
5. Go to the URL the development server prints (usually `http://localhost:5173`)
6. Edit the files in the [`src`](src) directory
7. Commit your changes and [GitHub Actions](https://docs.github.com/en/actions) will automatically
   deploy the changes to the live site.
