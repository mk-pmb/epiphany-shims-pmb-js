
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
added already, I discovered I won't need them (or so I thought):
After all, the `es5-shim` module actually does work in my MSIE 6,
so better use <del>that one as it's more complete</del> both.
Its prior failures in my tests were due to a problem with my
[Wine](https://www.winehq.org/) config.


Use this as your secondary shim
-------------------------------

* … in order to fix `.map` and `.forEach` for
  [sparse arrays in MSIE 6](https://github.com/es-shims/es5-shim/issues/190).





Usage
-----

```html
<script src="../../es5-shim/es5-shim.js"></script>
<script src="../../epiphany-shims-pmb/shims.js">
  // work-around for es5-shim's sparse array bug:
  // https://github.com/es-shims/es5-shim/issues/190
</script>
```



License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
