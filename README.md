# auto-gen-code-blog-post-build-with-autogen-build-perf

Used to compare the performance of webpack between two identical projects with the exception that one uses babel-plugin-codegen to generate code (this project) and the other does not.

## After a fresh dependency install
1. Running webpack-dev-server for the first time took **2914ms**
2. Subsequent webpack-dev-server (no changes) took **2824ms** (quicker maybe because of webpack / babel-loader caching)
3. Made change (added extra line) to index.js file component <Test50/> - reload took **251ms**

## Delete dependencies and then perform another fresh install
1. Running webpack-dev-server for the first time took **2736ms**
2. Subsequent webpack-dev-server (no changes) took **2874ms**
3. Made change (added extra line) to index.js file component <Test50/> - reload took **170ms**

## Delete dependencies and then perform another fresh install
1. Running webpack-dev-server for the first time took **2726ms**
2. Subsequent webpack-dev-server (no changes) took **2726ms**
3. Made change (added extra line) to index.js file component <Test50/> - reload took **117ms**

## Delete dependencies and then perform another fresh install
1. Running webpack-dev-server for the first time took **2799ms**
2. Made change (added extra line) to index.js file component <Test50/> - reload took **174ms**
3. Made change (added extra line) to index.js file component <Test50/> - reload took **169ms**
4. Made change (added extra line) to index.js file component <Test50/> - reload took **129ms**
5. Made change (added extra line) to index.js file component <Test50/> - reload took **118ms**

## Delete dependencies and then perform another fresh install
1. Running webpack-dev-server for the first time took **2463ms**
2. Made change (added extra line) to index.js file component <Test50/> - reload took **127ms**
3. Made change (added extra line) to index.js file component <Test50/> - reload took **153ms**
4. Made change (added extra line) to index.js file component <Test50/> - reload took **174ms**
5. Made change (added extra line) to index.js file component <Test50/> - reload took **134ms**
