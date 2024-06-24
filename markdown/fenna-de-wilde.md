Fenna de Wilde is a creative developer working at Norwegian design studio Bakken and Baeck. She is a former student who also did the minor in Web Design and Development at the Hogeschool van Amsterdam.

She has designed some great websites, such as the websites of the companies Moooi, a luxury interior design store, and Phantom, a crypto wallet. She mainly creates websites that look playful and friendly, with lots of animations and interactive elements.  

## Phantom and the accessibility case study
When it comes to accessibility and websites, it is also said that no one cares because it is overlooked. 

So Fenna paid attention to this and thus created an "accessibility case study," to see how she could make the website Phantom as accessible as possible. 

### Dev Stack
Fenna and her company use a development stack to build websites:

- Next.JS with React
- Emotion (A CSS in JS library)
- Deploying on Vercel
- Sanity, a headless CMS
- Creating animations in Framer Motion


## Fenna's observations and tips
Fenna shared some observations and tips that she discovered while working on the Phantom case study. Here are a few useful ones:

### Focus state for keyboard users
Not everyone uses mouse or touch and/or have limitations, so you can apply a :```focus``` state so these people can use the site too, using a keyboard. 
If you have a focus-visible and no global styling, try to define it per element.

### Aria attributes
ARIA stands for Accessible Rich Internet Applications. These are attributes and roles that give additional info to elements that are not well descriptive enough. 

```aria-label``` gives a label to descriptive text for elements that have no visible label, this is handy for UI elements such as buttons with icons or cases where visible text gives too little context.

```aria-controls``` is an attribute that links a control to the element it controls, helping screen readers understand the connection and providing more context. It enhances accessibility by indicating which elements are controlled by a particular interactive element, such as linking a button to the corresponding expandable section.

```aria-expanded``` indicates the state of an element that can be expanded and collapsed such as an accordion, dropdown menu, hamburger menu, and it switches between the states true and false.

With JavaScript, you can dynamically change content on a webpage without reloading it. While these changes are immediately visible to sighted users, screen readers do not automatically announce them. The ```aria-live``` attribute addresses this by telling screen readers to announce changes as they occur. It has three possible values: ```off``` (default, no announcement), ```polite``` (announcements are made at the next available opportunity), and ```assertive``` (announcements are made immediately, interrupting any current speech).

The ```aria-atomic``` attribute, which can be set to either "true" or "false," determines how updates are presented to screen readers. When set to "true," screen readers will read the entire region as a whole whenever any part of it is updated. When set to "false," only the changed elements within the region are announced. This helps ensure that users receive updates in a clear and understandable manner.

### Accessible carousels

To make carousels accessible in HTML, the carousel should have a role="region" or use a semantic section element with ```aria-roledescription="carousel"``` . If a title is available, use ```aria-labelledby``` for the title; otherwise, use ```aria-label```. Each slide should have ```role="group"``` and an ```aria-label``` to indicate the current slide. 

For slides that are not visible, set ```aria-hidden='true'``` on the wrapper and ```tabindex='-1'``` on all focusable children. Avoid using list items for slides, as the number of list items will match the actual number of slides, which can be misleading. Carousel control buttons should be grouped with ```role='group'```, and the button that shows the current slide should have ```aria-disabled='true'```.

### Focus guards and esc key configurations.
Focus guards and ESC key configurations ensure keyboard users can navigate within a modal without accidentally clicking outside of it, typically redirecting focus to the close button. If native implementation isn't available, use npm packages like react-focus-lock or react-aria-components for similar functionality.

### Good color contrasts
Good color contrast is essential for accessibility. The WAI color contrast formula, which ranges from 1 to 21, ensures readability (e.g., pure black against white has a contrast of 21:1). Tools like Figma plugins, Lighthouse audit, and DevTools in Chrome and Firefox can help assess and ensure proper contrast.

### Font sizes
Avoid eyestrain at least 16 px.

### Line lengths
- Line length of 50 to 75 characters including spaces is ideal for readability.
- You can use ```ch``` (character) units for the text. So e.g. 50ch is 50 words.

### Alt text for images
- Avoid saying 'image of' in the alt text
- Good description
- Add SEO

### What else can you do?
- Skip to content button
- Prefers-reduced-motion
- All autoplay videos/carousels should be paused
- Use a screenreader yourself
- Use the correct HTML elements for semantics.

### Too long, didn't read?
In this lecture, Fenna de Wilde, a creative developer at Bakken and Baeck, emphasizes accessibility in her playful, animation-rich websites. Utilizing a stack that includes Next.JS, React, and Framer Motion, she created an accessibility case study for the Phantom website. Key tips from her study include using focus states for keyboard users, implementing ARIA attributes, ensuring accessible carousels, maintaining good color contrast and font sizes, and using correct semantics and alt text for images.
