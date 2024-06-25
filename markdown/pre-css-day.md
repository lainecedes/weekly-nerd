
## View Transitions with Bramus van Damme
During a captivating lecture at the Pre CSS Day event at Hogeschool van Amsterdam, Bramus van Damme, our first lecturer that opened for today and working at Google, introduced us to the world of view transitions. The View Transition API gives you the power to create seamless visual transitions between two different views on your website. Here’s a recap of Bramus's insights and how you can implement this exciting feature in your projects:

### A Glimpse into View Transitions
Bramus opened the session with an overview of the View Transition API, emphasizing its potential to enhance user experiences by creating smooth transitions between views. This API, currently supported by Chrome and Safari, and soon Firefox, provides a way to make changes to web pages feel more cohesive and fluid.

#### Implementing View Transitions
Here's a step by step guide to get started with view transitions, follow these key steps:

- Identify and Name the Transition: Use the view-transition-name property in CSS to designate the elements involved in the transition.
- Trigger the Transition: Implement document.startViewTransition in your JavaScript code to initiate the transition.
- Customize Animations (Optional): Enhance the transition effects by adding custom animations through CSS.

Here's a simple example Bramus shared to illustrate the process in Javascript and CSS:

```
// Javascript
document.addEventListener('click', e => {
  document.startViewTransition(() => {
    nextSentence();
  });
});
```

CSS:
```
// CSS
:root {
  view-transition-name: root;
}
```

### Diving Deeper into Customization and Tweaking
Bramus explained that while you can customize and tweak the animations using CSS, there are some limitations to keep in mind. For example, you can't change the text color in the snapshot or add an animation delay. Despite these constraints, you can achieve impressive effects. Here's a quick example:

```
animation-name: -ua-view-transition-group-anim-box;
```

It's like Powerpoint... but in code.

### Exploring Cross-Document View Transitions for MPAs
One of the highlights of Bramus's talk was the introduction of cross-document view transitions for multi-page applications (MPAs). This feature allows for seamless navigation between different pages of a site, although it is currently opt-in and not cross-origin. He demonstrated the implementation with the some code snippets, which I was too late to note down.

He also talked on how View Transitions can be integrated with JavaScript Promises to handle asynchronous operations, adding another layer of flexibility and functionality to web applications.

### Real-World Applications and Demos
Bramus showed us some cool demos that I recommended checking out:

- Bramus' CodePen - 
- Adam Argyle's Grid Placement with View Transitions on Codepen - 
- And the Chrome and Mozilla pages for the View Transitions API
- view-transitions.netlify.app/profiles/mpa/


## Miriam Suzanne on Container Queries

Then, I had a second lecture by Miriam Suzanne about CSS Container Queries. Miriam is a leader in CSS and shared some really cool insights. Here’s a simpler summary of what she talked about and what I learned.

### The Basics of Responsive Web Design
She started by talking about how web design changed in 2010 with responsive web design. This allowed websites to change and adapt to different screen sizes using media queries. But as websites got more complex, developers wanted even more control over how their designs responded. This led to the idea of container queries.

### What Are Container Queries?
Miriam explained the difference between media queries and container queries. Media queries adjust the design based on the size of the whole screen (the viewport). In contrast, container queries adjust the design based on the size of a specific part of the page (a container). This gives developers more precise control over how their designs look in different situations.

### Challenges with Container Queries and Importance
One interesting part of Miriam’s talk was about the challenges of making container queries work. Some developers worried they could cause problems, like endless loops in the layout. Miriam acknowledged this concern, saying, “They’re not wrong… it’s complicated.” Despite these challenges, she was hopeful about the future of container queries.

Miriam also highlighted the mission of the W3C (World Wide Web Consortium), which aims to make the web accessible and useful for everyone. Container queries help achieve this by allowing for more flexible and adaptive designs.

### Intrinsic vs. Extrinsic Sizing
Miriam also talked about intrinsic and extrinsic sizing. Intrinsic sizing combines fixed and fluid elements, which can make layouts more flexible. She explained how this becomes more complex with tools like flexbox and grid. This part of the talk made me appreciate how detailed and thoughtful web design can be.

## The Future?
Despite the challenges, Miriam was optimistic about container queries becoming more common. They are now one of the most requested features by developers. Her enthusiasm made me excited to try out container queries in my own projects.

## Bramus and Miriam - Too long, didn't read?
At Bramus' lecture, View Transitions in CSS allow for seamless visual transitions between two different views on a website, offering a powerful tool to enhance user experience. The concept operates on the basis of having an old view and a new view, with the two views layered to create a 'snapshot' effect. To implement, Bramus said to identify and name the transition using the `view-transition-name` property in CSS, trigger the view transition with `document.startViewTransition`, and optionally customize the animations using CSS. Notably, these transitions are currently supported by Chrome and Safari, but not Firefox.

However, there are limitations to consider. For instance, you cannot change the text color in the snapshot, nor can you give it an animation delay. The new view is live, but still flattened. Yet, despite these constraints, view transitions present an exciting feature for web developers, similar to bringing PowerPoint transitions to code.

At Miriam's lecture, she covered the shift from basic responsive design using media queries to the more precise control offered by container queries. She explained the challenges, like potential layout issues, while emphasizing the benefits for making web layouts more adaptable and user-friendly. Miriam’s insights into sizing options and her optimistic view on the future of container queries left attendees inspired to explore these new possibilities in their web development work.







