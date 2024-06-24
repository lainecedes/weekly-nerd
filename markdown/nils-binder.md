## Meet Nils Binder: A Key Player at 9elements
Nils Binder is a prominent figure at 9elements, a company known for its integration of technology and design. At 9elements, the structure is divided into three units:

Communication Design: This team focuses on corporate and print design, including logos. With a team of four people, many of whom are non-coding designers, this unit handles the visual identity of various brands.

Product Development: This is the largest unit with 30 people. They work on diverse projects such as banking software, photobook software, data visualization, and the Schalke 04 mobile app.

Web Development: Headed by Nils Binder, this team produces small to medium-sized websites and consists of six people. Despite his leadership role, Nils collaborates closely with other units to ensure seamless integration across projects.

Additionally, 9elements has a cyber security department that specializes in firmware, although they do not engage in traditional cyber security tasks.

Outside of his professional life, Nils is passionate about origami, which reflects his detail-oriented approach to both his hobbies and his work.

### The Wrapper Element in Web Development
Nils Binder draws attention to the importance of the wrapper element in web development. A wrapper serves as a container for the website content, performing three crucial functions:

Setting a maximum width: Ensures the content does not stretch too wide on large screens.
Adding padding: Provides space around the content for better readability and aesthetics.
Centering content: Typically centers the content, although this is not always necessary.

Here’s how to build a wrapper element:

```
.wrapper {
    max-width: 75rem;
    margin: 0 auto;
    padding: 0 1.5rem;
}
```

Alternatively, you can use a more concise version:

```
.wrapper {
    width: min(100% - 3rem, 75rem);
    margin-inline: auto;
}
```

Or a even shorter version:

```
.wrapper {
    margin-inline: max(1.5rem, ((100% - 75rem) / 2));
}
```

You can also customize the max-width by changing it to a custom property.

### Why this approach?
Nils believes that Figma, introduced six years ago, is superior to Photoshop because its tools closely mimic writing code. This makes the transition from design to development smoother. In Figma, the units available are primarily pixels (px), percentages (%), and rems (rem), which aligns well with the units used in CSS such as px, %, rem, ch, ex, and em. This consistency facilitates a more efficient design-to-development workflow, especially with the inclusion of viewport-based units and container queries in CSS.

Nils' Go-To Resources
For inspiration, Nils shared the links dasruhrgebiet.de and bryck.com. These resources provide valuable insights about the use of these techniques.


### Too long, didn't read?
Nils Binder’s role at 9elements, combined with his passion for origami and dedication to efficient web development practices, makes him a standout professional in the field. His expertise in CSS and innovative approach continue to drive the success of 9elements, ensuring high-quality for their diverse range of projects.






