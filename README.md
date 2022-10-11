# To reproduce the problem

```
npm i
node_modules/.bin/vite
```

Open http://localhost:5173/test.html

The browser console will show
```
Uncaught DOMException: Failed to execute 'define' on 'CustomElementRegistry': the name "dom-module" has already been used with this registry
```
which indicates that the dom-module JS from Polymer has been executed twice


If you remove 
```
exclude: ["@vaadin/flow-frontend"]
```
from the configuration, the error is gone
