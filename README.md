# SVG detector for [can.js](https://github.com/canjs)

## Installation

**Note:** Please make sure that you installed [can.js](https://github.com/canjs/can) before.

1. `bower install --save canjs/svg`
2. Add references to your HTML.

## Available detections

### can.use('svg:image', callback)

Checks if the browser supports `<img>` tags with SVG files.

```javascript
can.use('svg:image', function (err, supports) {
    if (supports) {
        // Do something special.
    }
});
```

## Author

Copyright 2014, [konexmedia](http://konexmedia.com)