# Accordion

A simple and lightweight JavaScript library for accordion

## Peculiarities

+ __No dependencies__.  The library is written in pure JavaScript and does not require any other libraries to work.
+ __Simplicity and functionality__. You can easily and quickly connect and use a library that implements important functionality for the accordion
+ __Availability__. The accordion meets all accessibility rules.
+ __Customization with CSS__. You can easily change the appearance, layout using CSS.

## How to work with the library

1. Download the latest version of the library
2. Connect accordion.min.css and accordion.min.js from the dist folder to the page
3. Place the following markup in your HTML document:
```html
<ul class="accordion" data-acordion="accordion">
	<li class="accordion__item">
    <button class="accordion__button">button</button>
    <div class="accordion__collapse">
      <div class="accordion__content">
        <div>
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
  </li>
  <li class="accordion__item">
    <button class="accordion__button">button</button>
    <div class="accordion__collapse">
      <div class="accordion__content">
        <div>
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
  </li>
  <li class="accordion__item">
    <button class="accordion__button">button</button>
    <div class="accordion__collapse">
      <div class="accordion__content">
        <div>
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
  </li>
</ul>
```

### Important nuance

You can create positioning styles only for the child element accordion__content, for example for accordion__body
1. margin
2. padding
3. position and so on
```html
<ul class="accordion" data-acordion="accordion">
	<li class="accordion__item">
    <button class="accordion__button">button</button>
    <div class="accordion__collapse">
      <div class="accordion__content">
        <div class="accordion__body">
          You can create positioning styles for the accordion__body element
        </div>
      </div>
    </div>
  </li>
```

`data-accordion` - an important data attribute through which all interaction with the plugin works. The value of this attribute must be unique to the page.

4. Place the following JS code to connect the accordion:

```javascript
const accordion = new Accordion('accordion');
```

## The library supports two parameters:

1. params `speed: 1000` - affects the speed of the accordion
2. params `turn: true` - affects the operation of the accordion


```javascript
const accordion = new Accordion('accordion', {
	speed: 1000,
  turn: true
});
```

You can see an example of how the library works by opening the index.html file from the demo folder in the browser.

Enjoy!