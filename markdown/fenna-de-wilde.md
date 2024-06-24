Fenna de Wilde is a creative developer working at Norwegian design studio Bakken and Baeck. She is a former student who also did the minor in Web Design and Development at the Hogeschool van Amsterdam.

She has designed some great websites, such as the websites of the companies Moooi, a luxury interior design store, and Phantom, a crypto wallet. She mainly creates websites that look playful and friendly, with lots of animations and interactive elements.  

## Accessibility
When it comes to accessibility and websites, it is also said that no one cares because it is overlooked. 

So Fenna paid attention to this and thus created an "accessibility case study," to see how she could make the website Phantom as accessible as possible. 

## Phantom and the accessibility case study

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
Not everyone uses mouse or touch and have limitations so you can apply this so these people can use the site too
focus-visible and no global styling but try to define it per element.

### Aria attributes
ARIA stands for Accessible Rich Internet Applications. These are attributes and roles that give additional info to elements that are not well descriptive enough. 

**Aria-label** gives label to descriptive text for elements that have no visible label, handivoor onion elements such as buttons with icons or cases where visible text gives too little context.

**Aria-controls** is used arm a control t link to the element it controls, for screen readers, understand more connection and provide more context.

**Aria-expanded** indicates the state of an element that can be expanded and collapsed such as an accordion, dropdown menu, hamburger menu and it switches between the states true and false

**ARIA live**
With js you can dynamically change things without reloading the page, people who see are immediately visible but for screen readers new messages are not automatically read out, and this tells to screen reader to announce changes immediately
Values= off, Polite, Assertive

**Aria atomic**
Values false and true, how are the updates on behalf of screenreader

### Accessible carousels
In html:
Carousel must have a role=''region'' or semantic element section
`Aria-roledescription="carousel"`.
And aria-labelledby or aria-label, depends if a title is available
Title = area-labelledby
No title - aria-label

Slide = ```role="group"```
Aria-label to let you know which slide you are on
If slide is not visible = ```aria-hidden='true'``` to wrapper and ```tabindex='-1'``` to all children that are focusable.
And avoid list items for creating slides because the number of li items will match the actual number of slides.

Carousel controls buttons should have a ```role='group'``` on the container
Control button that shows current slide has ```aria-disabled='true'````

### Focus guards and esc key configurations.
These allow keyboard users to navigate within the modal without accidentally clicking away. The focus is simply sent right to the close button. Dialog modal is an example of this.

If you can't use that then use a bpm package broken like react-focus-lock, react-aria-components

### Good color contrasts
- WAI color contrast formula (look up)
- 1 to 21
- Pure black against white has contrast of 21:1
- You also have a Figma plugin for this
- Lighthouse-audit
- DevTools in Chrome and Firefox

### Font sizes
Avoid eyestrain at least 16 px

### Line lengths
- Line length of 50 to 75 characters including spaces, ideal
- Ch (character) unit you can use for the text. So e.g. 50ch is 50 words.

### Alt text for images
- Avoid saying 'image of' in the alt text
- Good description
- Add seo

### Correct semantics
Correct HTML elements

### What else can you do?
- Skip to content button
- Prefers-reduced-motion
- All autoplay videos/carousels should be paused
- Use a screenreader yourself

### Too long, didn't read?
In this lecture, Fenna de Wilde, a creative developer at Bakken and Baeck, emphasizes accessibility in her playful, animation-rich websites. Utilizing a stack that includes Next.JS, React, and Framer Motion, she created an accessibility case study for the Phantom website. Key tips from her study include using focus states for keyboard users, implementing ARIA attributes, ensuring accessible carousels, maintaining good color contrast and font sizes, and using correct semantics and alt text for images.
