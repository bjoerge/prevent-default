# prevent-default

A prevent-default decorator for DOM listeners

## Example

```js
var listener = preventDefault(function(ev) {
  alert("Default prevented! "+ev.defaultPrevented);
});

document.getElementsByTagName('body')[0].addEventListener("click", listener);
```

