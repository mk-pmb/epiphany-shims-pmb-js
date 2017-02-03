
<!--#echo json="package.json" key="name" underline="=" -->
epiphany-shims-pmb
==================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Selected ES5+ shims for the epiphany browser, and (as of 0.1.2) MSIE 6.
<!--/#echo -->


MSIE 6 shims
------------

In v0.1.1 I announced I'd rename this package to `msie6-shims-pmb`.
However, just before publishing 0.1.2, with my favorite shims for IE
added already, I discovered I won't need them:
After all, the `es5-shim` module actually does work in my MSIE 6,
so better use that one as it's more complete.
Its prior failures in my tests were due to a problem with my
[Wine](https://www.winehq.org/) config.

I'll publish them anyway in case someone can't easily use `es5-shim`
for whatever reason.




Usage
-----

```html
<script src="/node_modules/msie6-shims-pmb/shims.js"></script>
```



License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
