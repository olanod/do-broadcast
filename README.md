# do-broadcast

A custom built-in element that "enhances" forms by submiting data to a broadcast channel named after the `action` attribute instead of the default behaviour. 
Useful for handling form submitions inside a web worker.

```
<form action="process-data" is="do-broadcast">...</form>
```

**DISCLAIMER**: This custom element like most I create are proof of concepts that often use features not supported by browsers other than Chrome.
