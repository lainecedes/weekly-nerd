## Hackathon
In the middle of our minor, we held a week long (or 3 days long) hackathon for the CSS Day Anniversary. 

Krijn Hoetman, one of the organisers of CSS Day, a conference that brings together speakers and fanatics about CSS for 1-2 days, guided us through the assignment. After all, it was the 10th anniversary. In fact, CSS Day has a website where all the information and data from the conferences are stored in JSON. He had asked us, if we can create a completely new web app that displays the JSON data from the previous years of CSS day in a nice data visualisation.

There was also a prize for the winners, they would get a ticket to CSS Day 2024 if they came on top. Well, let’s get to work then!

### The Process
We all worked in teams, and I teamed up with Brianne, Rose and Sena Nur. We first looked at the data structure of CSS Day, and then discussed what we will do with this data and how we would visualise it. So data visualisation. I’ve never done this before, so it was exciting to see how I could tackle this. We had made a list of what this could look like:

- The year
- The colour 
- The attendees
- Country of attendees

We were of course free to use whatever we wanted, so on Brianne's recommendation we tried SvelteKit as a framework. This was a total new world for me and the first contact with a real framework. Neither I nor Sena Nur had any knowledge of it of course, Brianne did and Rose a bit, so I went with Sena Nur to follow some tutorials and to make a little setup.

### A Globe as a Concept
Since we wanted to do something fancy with the number of attendees and the country of origin, we thought we could maybe showcase a map of the world and assign the colours to the countries and the number coming from there. For this, we used MapboxGL, a 3d interactive globe API. Cool!

So we had the idea that then the focus would be on the colour, countries, and spectators per year.

Then we got to work, Brianne had made a repo, set-up done with SvelteKit and MapboxGL installed, Rose started with the boiler plate, and me and Sena Nur started with the styling. We each wanted to create our own unique custom header, me with a simple responsive carousel and 2 buttons, and Sena Nur with a 3d styling that matched the globe. Then we linked it to the globe and map styling, so when the right year is selected, that the countries then display the correct colour of the CSS Day Year. 

This eventually worked well, but was not without problems. We did have some issues with triggering the map colours, so we went to FDND for help.


### The End Result
The end result can be seen here, at cssdayta.vercel.app.