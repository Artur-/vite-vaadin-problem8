# To reproduce the problem

```
npm i
node_modules/.bin/vite
```

Open http://localhost:5173/test.html

The browser console will show
```
runrun
```
which indicates that the file in test-npm-package/multiple.js has been executed twice


If you remove 
```
exclude: ["@vaadin/flow-frontend"]
```
from the configuration, the error is gone
