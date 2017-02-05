
<!--#echo json="package.json" key="name" underline="=" -->
epiphany-shims-pmb
==================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Selected ES5+ shims for the epiphany browser, and (as of 0.1.2) MSIE&#xA0;6.
<!--/#echo -->


MSIE&nbsp;6 shims
-----------------

In v0.1.1 I announced I'd rename this package to `msie6-shims-pmb`.
However, just before publishing 0.1.2, with my favorite shims for IE
added already, I discovered I won't need them (or so I thought):
After all, the `es5-shim` module actually does work in my MSIE&nbsp;6,
so better use <del>that one as it's more complete</del> both.
Its prior failures in my tests were due to a problem with my
[Wine](https://www.winehq.org/) config.


Use this as your secondary shim
-------------------------------

* … in order to make `.map` and `.forEach` assume arrays aren't sparse.
  This can fix the problem of result arrays unexpectedly being sparse in
  MSIE&nbsp;6 ([#190](https://github.com/es-shims/es5-shim/issues/190))
  at the cost of filling the result arrays if you really had a sparse array
  as input.






Usage
-----

```html
<script src="../../es5-shim/es5-shim.js"></script>
<script src="../../epiphany-shims-pmb/shims.js">
  // work-around for es5-shim's assumption your arrays tend to be sparse:
  // https://github.com/es-shims/es5-shim/issues/190
</script>
```



License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
