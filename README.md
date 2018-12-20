# auto-gen-code-blog-post-build-with-autogen-build-perf

Used to compare the performance of webpack between two identical projects with the exception that one uses babel-plugin-codegen to generate code (this project) and the other does not.

## Fresh dependency install - cold start: webpack-dev-server start up times
- Run 1: 2851ms
- Run 2: 2934ms
- Run 3: 2870ms
- Run 4: 2832ms
- Run 5: 2833ms
- **Average**: **2864ms**


## Previously started and stopped webpack-dev-server: webpack-dev-server start up times
- Run 1: 2725ms
- Run 2: 2530ms
- Run 3: 2511ms
- Run 4: 2403ms
- Run 5: 2577ms
- *Average*: *2549.5ms*


## Running webpack-dev-server, component index.js file change: compile time for change
- Run 1: 181ms
- Run 2: 163ms
- Run 3: 142ms
- Run 4: 238ms
- Run 5: 183ms
- *Average*: *181ms*
