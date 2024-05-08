Fenna de Wilde is een creative (front end) developer die werkt bij de Noorse design studio Bakken en Baeck. Ze is een oud student die de minor Web Design and Development heeft gevolgd bij het Hogeschool van Amsterdam.

Ze heeft een paar mooie websites ontworpen, zoals de websites van de bedrijven Moooi, een luxe interieurswinkel, en Phantom, een crypto wallet. Ze maakt vooral websites die playful en vriendelijk oogt, met veel animaties en interactieve elementen.  

## Toegankelijkheid
Als het gaat over toegankelijkheid en websites wordt er ook gezegd dat niemand er om geeft omdat het over het hoofd wordt gezien. 

Fenna heeft dus hier aandacht in gestoken en heeft dus een 'accesibility case study' gemaakt, om te kijken hoe ze de website Phantom zo toegankelijk mogelijk kan maken. 

## Phantom en the accessibility case study

### Dev Stack

Fenna en haar bedrijf gebruiken een development stack om websites te bouwen:

- Next.JS met React
- Emotion (is een css in JS library)
- Deployen op Vercel
- Sanity, een headless CMS
- Animaties maken in Framer Motion


## Focus state for keyboard gebruikers
Niet iedereen gebruikt muis of touch en hebben beperkingen dus kan je dit toepassen zodat deze mensen de site ook kunnen gebruiken
:focus-visible en geen globale styling maar probeer het per element de definiëren

## Aria attributes
ARIA staat voor Accessible Rich Internet Applications. Dit zijn attributen en roles die aanvullende info geven aan elementen die niet goed beschrijvend genoeg zijn. 

**Aria-label** geeft label aan beschrijvende tekst voor elementen die geen zichtbare label hebben, handivoor ui elementen zoals buttons met icons of gevallen waarin zichtbare tekst te weinig context geeft.

**Aria-controls** wordt gebruikt arm een bedieningselement t te koppelen aan het element dat het controleert, voor screen readers, meer verbinding begrijpen en meer context bieden.

**Aria-expanded** geeft de status aan van een element dat kan worden uitgeklapt en ingeklapt zoals een accordion, dropdown menu, hamburgermenu en het schakelt tussen de states true en false

**ARIA live**
Met js kan je dynamisch dingen veranderen zonder de pagina de herladen, mensen die zien zijn direct zichtbaar maar voor screen readers worden nieuwe berichten niet automatisch voorgelezen, en deze vertelt te screenreader om veranderingen onmiddellijk aan te kondigen
Waardes= off, Polite, Assertive

**Aria atomic**
Waardes false and true, hoe worden de updates namens screenreader

## Toegankelijke carousels
In html:
Carousel moet een role=‘’region’ hebben of semantisch element section
`Aria-roledescription=“carousel”`
En aria-labelledby of aria-label, hangt ervan af als er een titel beschikbaar is
Titel = area-labelledby
Geen titel - aria-label

Slide = ```role=“group”```
Aria-label om te laten weten op welke slide je bent
Als de  slide niet zichtbaar is = ```aria-hidden=‘true’``` aan wrapper en ```tabindex=‘-1'``` aan alle children die focusable zijn.
En vermijd de list items voor het maken van slides omdat de aantal li items zal overeenkomen met de werkelijke aantal slides.

Carousel controls buttons moet een ```role=‘group’``` hebben op de container
Control button die huidige slide laat zien heeft ```aria-disabled=‘true’```

## Focus guards en esc key configuraties
Deze zorgen ervoor dat gebruikers met keyboard binnen de modal kunnen navigeren zonder per ongelijk weg te klikken. De focus wordt gewoon gelijk naar de close button gestuurd. Dialog modal is een voorbeeld hiervan.

Als je dat niet kan gebruiken gebruik dan een bpm package gebroken zoals react-focus-lock, react-aria-components

## Goede kleurcontrasten
- WAI kleurcontrast formule (zoek op)
- 1 tot 21
- Puur zwart tegen wit heeft contrast van 21:1
- Je hebt hiervoor ook een Figma plugin
- Lighthouse-audit
- DevTools in Chrome en Firefox

## Lettergroottes
Vermoeide ogen voorkomen minimaal 16 px

## Lijnlengtes
- Regellengte van 50 tot 75 tekens inclusief spaties, ideaal
- Ch (character) unit kan je gebruiken voor de tekst. Dus bijv 50ch is 50 woorden.

## Alt tekst voor afbeeldingen
- Vermijd het zeggen van ‘afbeelding van ‘ in de alt tekst
- Goede beschrijving
- Seo toevoegen

## Correcte semantiek
Juiste HTML elementen

## Wat kan je nog meer doen?
- Skip to content button
- Prefers-reduced-motion
- Alle autoplay videos/carousels moeten gepauzeerd worden
- Zelf een screenreader gebruiken
