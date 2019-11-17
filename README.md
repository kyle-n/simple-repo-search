# Simple Repo Search

A simple React app to search GitHub repositories.

## Concept

SRS uses a Node.js server to deliver a single-page React frontend for searching GitHub repositories.

[Try it out](http://simple-repo-search.herokuapp.com/).

## Major dependencies

* Layout: [Material UI](https://material-ui.com/), a fast and beautiful Material CSS framework for React.
* Network requests: [axios](https://github.com/axios/axios), a powerful Promise-based request client.
* Caching: [memory-cache](https://www.npmjs.com/package/memory-cache), an easy caching tool for GET requests in Node.
* Imports: [esm](https://www.npmjs.com/package/esm), so Node.js can use ES6 imports.
* Icons: [devicon](https://konpa.github.io/devicon/), to provide language-specific icons
* Debouncing: [throttle-debounce](https://www.npmjs.com/package/throttle-debounce) to debounce user input on searches
* Testing: [Mocha](https://mochajs.org/), [chai](https://www.chaijs.com/), [sinon](https://sinonjs.org/), [Jest](https://jestjs.io/) and [Enzyme](https://github.com/airbnb/enzyme)