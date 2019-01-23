# Static Object Oriented Views

## Learning Goals

- Practice creating classes that encapsulate DOM element content
- Render content to a page using JavaScript classes

## Introduction

In this lab, we're going to practice creating classes that can be used to add DOM content to a page.

By encapsulating the creation of DOM element content, we can create highly
reusable code.

## Instructions

In `index.js`, create three classes, `Header`, `Paragraph`, and `Image`.

#### Header

The `Header` class should be initialized with one value, the text content of the
header, storing it as a property. The class should also have a `render()` method
that creates an `h1` element, updates the inner text using the text content
property, then returns the newly created element.

#### Paragraph

The `Paragraph` class should be initialized with one value, the text content of the
paragraph, storing it as a property. The class should also have a `render()` method
that creates an `p` element, updates the inner text using the text content property,
then returns the newly created element.

#### Image

The `Image` class should be initialized with two values, the source and alt text of an image, storing them as properties. The class should also have a `render()` method
that creates an `img` element, updates the `src` and `alt` attributes using the
appropriate properties, then returns the newly created element.

#### DOM Content Loaded Event Listener

With the three classes, we're able to create and modify DOM elements, but have
yet to append this content to our actual page. For this lab, we'll just use a
simple event listener.

Create an event listener for `DOMContentLoaded`, that, when triggered, uses the
classes we've just created to append the following content to the page:

- an `h1` element with the text 'Static Views Lab'
- a `p` element with the text 'Hello'
- a `p` element with the text 'World'
- an `img` element with a source set to 'https://curriculum-content.s3.amazonaws.com/fewpjs/fewpjs-oo-mvc-content/hellodog.png' and an alt text set to 'Dog picture'
- an `img` element with a source set to 'https://curriculum-content.s3.amazonaws.com/fewpjs/fewpjs-oo-mvc-content/hellocat.png' and an alt text set to 'Cat picture'

Make sure to append the content in the order listed.

**Note:** Don't forget that `index.html` must call `index.js` in order to render
the content once the DOM is loaded.

## Conclusion

While this example is simple, we can already see that by creating JavaScript
classes, we can create ways to manipulate the DOM in a reusable manner. Creating
DOM content this way ensures that the DOM elements are consistently structured
on our page. We could even modify these classes to add our own custom CSS class
names or additional attributes to style and refine the look of our content!

Notice, also, that our classes are all similar in structure. Classes like
`Header` and `Paragraph` are nearly identical, meaning it might be possible to
create even more efficient designs for similar DOM elements.
