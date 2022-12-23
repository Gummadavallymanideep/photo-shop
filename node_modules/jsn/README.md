# [jsn](https://npmjs.org/package/jsn "jsn on npmjs") [![Build Status](https://travis-ci.org/bevacqua/jsn.png?branch=master)](https://travis-ci.org/bevacqua/jsn)

**jsn** is an open-source Node to JavaScript variable parser.

# What does JSN do?

**jsn** will take variables you pass as a context, and parse the source code to produce valid JavaScript.

 Sample **.jsn** file:

```javascript
var thatMuch = '@how.awesome';
alert(thatMuch);
```

You will need to install [jsn](https://npmjs.org/package/jsn "jsn on npmjs"), you can do that directly from **npm**

    npm install jsn

In your Node.JS code, you can parse these variables by accessing the **jsn** compiler.

```javascript
var jsn = require('jsn');

jsn.parse(source, { how: { awesome: 'well, very much, tee-hee!' } }, function(err, js){
    if(err){
        throw err;
    }
    console.log(js); // valid js.
});
```

You can alternatively use `jsn.parseFile(path, model, callback)` to use a template file directly, instead.

This is particularly useful when you have small pieces of data you want to pass to your JavaScript files. It's often most useful when paired with [**node-assetify**](https://github.com/bevacqua/node-assetify "Node.JS asset manager"), which supports **jsn** out the box.

To keep things simple, JSN supports only context variable names with **[A-z], [0-9], -, or _** characters. _`@` characters can be escaped using `@@`._