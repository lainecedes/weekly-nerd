Kilian Valkhof is a web developer who is part of Elektron and is also the founder of Polypane, a web browser for developers to build and improve their websites. He has already built more than 20 websites and counting.

## Stop using Javascript!

Out of all the 3 languages, JS is the most breakable, then CSS and HTML. This makes a lot of sense if you work a lot with progressive enhancement. If you're developing, it's very easy to use too much data with Javascript. But, browser makers are listening and are implementing the stuff we built by hand. There's a saying for this: Once you learn something, you don't learn it again. That means that everything we build in a browsers, just keeps working. The functionality keeps working, but that doesn't mean there are better ways to achieve it.

So if something is built, you can try to find better ways to apply that in the coming years of your career. Here are a few ways or methods you can apply instead of Javascript:

### Custom toggles
On the web, you have checkboxes that you can use so users can select something with their mouse. and on touchscreens, you have switches and toggles. But, you're much better off using checkboxes and preferring to style that as a toggle with CSS. This helps with browser functionality and accessibility while still being usable on your phone. It's much better than looking for an easy fix on the internet that uses unnecessary JS, for example.

These checkboxes are also known as "replaced content", and this refers to elements such as images or input fields, where the browser renders them with their own space allocation rather than being styled directly through CSS. This means that while the browser knows where to place them, it doesn't allow as much styling flexibility compared to other elements. The CSS ```appearance:none``` ensures that these elements function properly and maintain their intended appearance across different browsers and devices, and you can ass the pseudoelements ::before and ::after to make your own custom appearances for your toggle button.


In the past, when developers needed to toggle a button on non-mouse devices, they often used outline:none to remove the focus outline. However, for better accessibility, it's now recommended to use focus-visible instead. This ensures that users navigating with keyboards or other non-mouse input methods can still easily identify which element has focus, improving the overall usability and inclusivity of the interface.

### Datalists
Datalists, built into HTML, offer suggestions in web browser input fields. When users type, they receive automatic suggestions and can continue typing or select from options in a dropdown menu. This simplifies data input, making it more efficient and convenient.

```
<datalist id="browsers">
  <option value="Edge">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>
```
### Color picker
The ```input type=color``` feature in HTML triggers a color picker when clicked, providing users with a palette of color options. However, the browser controls the entire screen for selecting colors, and JavaScript is restricted from interacting with this process due to security concerns.

```  
<label for="favorite-color">Select a color:</label>
<input type="color" id="favorite-color" name="favorite-color" value="#ff0000"> 
```

### Color schemes

There are light, dark and custom schemes you can implement on your website or app. For example, by using ```color-scheme: dark``` in CSS, you're telling the browser to switch to a dark mode theme, matching your operating system's choice. This keeps input elements in line with the overall look of your system, making everything more consistent and easy on the eyes.

``` 
input { 
    color-scheme: dark; 
}
```


### Smooth in page transitions
When you click on a link to navigate to another page on a website, it happens instantly, which can be annoying. In the past, developers used jQuery to create smooth transitions for this, but it required hundreds of lines of JavaScript code. Now, you can achieve the same effect with just one line of CSS: ```scroll-behavior: smooth```. This adds a smooth transition. For people sensitive to motion, such as those with motion sickness or balance issues, you can use a media query, like ```prefers-reduced-motion: no-preference```, to maintain smooth navigation.


### Navigation and header layouts
If you have a header that stays put as you scroll, the ```scroll-margin``` only affects scrolling actions. You can't style fixed elements based on what part of the page is targeted, and it changes depending on the screen size. So instead, you can use ```position: sticky``` to keep elements in view while scrolling.

### Carousels en sliders
The Scroll Snap API in CSS allows you to create sliders that snap to the edges of the surrounding element. You only have to set ```scroll-snap-type``` on the parent element and ```scroll-snap-align``` on the child elements. Adam Argyle has a good [video](https://www.youtube.com/watch?v=34zcWFLCDIc) on what you can do with the Scroll Snap API.

### Accordions and modals
Accordions are a helpful way to organize your webpage. You can use ```details``` and ```summary``` elements for this. They let you split up content and make it easier to understand. If you want some content to be visible right away, you can set it to open with the details tag. The open feature automatically updates to show what's open. You can also personalize the little triangle indicator using the ```::marker``` pseudo-element. Plus, you can use ```[open]``` to apply styles specifically when something is open. For a hover effect and to show it's interactive, you can use ```summary:hover```.

### <dialog>
A dialog (requires a bit of JS to display) is a new HTML element that you can use to present choices to users in the form of a modal. The dialog backdrop serves as a background overlay that helps focus the user's attention on the modal content and prevents interaction with elements outside the modal while it's open.
```
<dialog>
   <form method=“dialog”>
     <h1>A pretty good dialog</h1>
     <button type=“submit”>Close</button>
   </form>
</dialog>

<button onclick=“$$(‘dialog’).showModal()”>Show the dialog</button>
```


### Container queries
Container queries function similarly to media queries, but instead of looking at the width of the browser, they examine the width of the surrounding element. You define the container type using ```container-type```, and for flex layouts, you can use container query units, such as ```cqw```. Additionally, you can apply styles with ```@container (min-width: px)``` based on the size of the container, allowing for more targeted and responsive designs.

### :has()
The :has() pseudo-class in CSS allows you to select elements based on their descendants. It's similar to the if/else from Javascript, and is useful when you want to style a parent element based on the presence of a specific child element, without needing to add additional classes or attributes. For example, you can use :has() to target a list item ```<li>``` only if it contains an anchor ```<a>``` element. This pseudo-class simplifies CSS targeting and enables more flexible and concise styling options.
```
/* Select paragraphs that contain a span element and make them red! */
p:has(span) {
  color: red;
}
```

[Polypane](https://polypane.app/blog/where-is-has-new-css-selectors-that-make-your-life-easier/) has a good article about the use of :has() and more selectors 'that make your life easier'.

## Stop using JS in the future: New CSS selectors

As web development is further developing, new CSS selectors are making it easier to style and interact with elements on a webpage. These selectors help create cool effects and interactive features that were previously done with JavaScript. By using these new CSS selectors, developers can make their code simpler, improve run speed, and create cool things for users without needing a lot of JavaScript code.

### Field-sizing
Field sizing is a new property that scales text area’s and inputs automatically to the size of their content. You can set it to:
* ```fixed```, where they have a fixed size regardless of what the content is
* ```content```, which makes the form element scale to the size of the content

When you apply it to an ```input``` or ```select``` it will scale to the width of the content. When you apply it to a ```textarea```, it will scale to the height of the content. Just make sure to put a fixed width if you don't want it to expand it so much when you type in the field, for an example.

```
textarea {
   field-sizing: fixed;
}
```

### Masonry layout
Grid-template-rows: masonry; is a new feature in CSS where you can make masonry grid layouts with rows and columns. This is still very new and experimental, so use it with caution:
```
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: masonry;
}
```

### Selectlists and options
Then you have the select list that works just like a select, but now you can style them separately the dropdown list that exists out of <option> in CSS (This currently works in Chrome and Polypane):
```
<selectlist>
        <option>Ferrari</option>
        <option>Mercedes</option>
        <option>McLaren</option>
        <option>Aston Martin</option>
        <option>Red Bull</option>
    </div>
</selectlist>
```

### Scroll driven animations
Scroll driven animations are available in Chrome and are connected to how far you've scrolled in a scrollable area. So, as you scroll up or down, the animation speeds up or slows down accordingly. It's like when you see cool effects, such as background images moving differently or progress bars showing how far you've scrolled. Another type of animation like this is tied to where an element is on the screen as you scroll. For instance, elements can gradually appear as you scroll down the page.

### Too long, didn't read?
In this lecture, many HTML and CSS techniques/features are shown that reduce dependency on JavaScript for creating dynamic web experiences. From custom toggles to smooth transitions and scroll-driven animations, Developers can use these tools to build super cool websites with optimized code. By using these CSS improvements, developers can make websites better and easier to build, leading to less need for JavaScript in the future.

