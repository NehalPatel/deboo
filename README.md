# Deboo Progressbar

> Deboo Progressbar is a jQuery Plugin which helps developers to create colorful progress bars for every object on the page. 

## How To Use

1) Include `jquery-deboo.js` and `jquery-deboo.css` in the page (use the minified version from `minified` folder for production)

2) Execute the following JavaScript code in the page:

```html
<div class="progress-bar-wrapper">
    <div id="myprogress-bar"></div>    
</div>
```

```javascript
$("#myprogress-bar").deboo({
    start_value : 0,
    end_value : 80,
    skill:'jQuery Plugin',
    pclass : 'progress-yellow',
    beforeStart : function(){
        //code before start
    },
    afterEnd : function(){
        //code after complete
    },
    onProgress : function(current_value){
        //code on progress
    }
});
```

## API

Check the API and method usage with example here: [Example](http://nehalpatel.in/deboo){:target="_blank"}

## Release History
 * **v0.1.0** - 2015-03-12
   - First version
   - Progress with scroll animation effect
   - Callback function added for plugin events.

## Author
**Nehal Patel**

- [Twitter](https://twitter.com/iNehalPatel)
- [Github](https://github.com/NehalPatel)
- [Facebook](https://facebook.com/iNehalPatel)
- [StackOverflow](http://stackoverflow.com/users/465554/nehal)
- [Personal page](http://nehalpatel.in/)  

## License
> Copyright (C) 2015 Nehal Patel (tecknic.in@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions 
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
IN THE SOFTWARE.