## Building characters with pure CSS master Julia Miocene

Julia Miocene is a product designer and pure CSS that is based in Amsterdam, that has INSANE CSS skills.

She came by at the HvA for a CSS talk in the early morning, and showed us some techniques and some cool stuff that she made as demonstrations.

## Building the characters in HTML

The first thing that she does is building the character structure in HTML. She makes it with divs, and gives each one a class name; head, hair, nose, mouth, and so on. Then she shapes, styles and animates every single part later. It looked like HTML spaghetti at first, but I'll try to visualize how these parts wrapped in divs like this. This is an example of her Pure CSS cartoon that's in Codepen:

```
<div class="scene">
	<div class="person">
		<div class="person__rightarm"></div>
		<div class="person__body">
			<div></div>
			<div></div>
			<div></div>
		</div>
		<div class="person__head">
			<div class="person__hair"></div>
			<div class="person__face2">
				<div></div>
				<div class="person__nose"></div>
				<div class="person__mouth"></div>
				<div class="person__lefteye"></div>
				<div class="person__leftbrow"></div>
				<div class="person__forelock"></div>
				<div class="person__glasses2"></div>
			</div>
			<div class="person__face1">
				<div></div>
				<div class="person__nose"></div>
				<div class="person__mouth"></div>
				<div class="person__righteye"></div>
				<div class="person__lefteye"></div>
				<div class="person__leftbrow"></div>
				<div class="person__rightbrow"></div>
				<div class="person__forelock"></div>
			</div>
			<div class="person__glasses1"></div>
		</div>
		<div class="person__lefttarm"></div>
		<div class="person__helmet"></div>
	</div>
</div>
```

Then she uses absolute positioning to put these parts in place and make a true character. It was so confusing for me but once I looked at it for a minute, I got it!

Then she uses some of the following to give her characters life:
- Joints such as transform origin. This can be used for with arms, hands, joints to give it realistic movement
- ::before and ::afters for adding additional elements
- Outlines, where you can use drop shadows for an example to create a specific design style for your characters (to make it more realistic or comic-ky)
- More stuff such as gradients, masks and further shaping.


## Sources
I wrote down some sources and found some more while I was looking her up online. You should really check out her Codepen, she has some insane projects there, such as an entire animated and working indie game made with only HTMl and CSS.
- Website: https://miocene.io/
- Codepen: https://codepen.io/miocene