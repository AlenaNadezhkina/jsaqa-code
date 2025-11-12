module.exports = {
    coverageThreshold: {
      global: {
       "branches": 100,
        "functions": 100,
        "lines": 100
      }
    },
    collectCoverage: true, 
    collectCoverageFrom: [
        "/**/*.{js,jsx}", 
        "/node_modules/",
        "/coverage/"
    ]
  }
