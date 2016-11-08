Closest ratio
=============

A tiny module for node and the browser which selects the closest ratio from a list of options.

Default options: `[[3,2],[4,3],[16,9],[3,4],[1,1]]`

Usage
-----

```
var closestRatio = require('closest-ratio');

closestRatio([32,18]); // [16,9]

// Supply a specific list once off
closestRatio([3,2],[2,1]); // [2,1]
```

Tests
-----

```
npm test
```
