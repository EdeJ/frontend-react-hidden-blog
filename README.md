# Uitwerking: React Router

Dit is de eenvoudigste variant ven de uitwerking. Hierbij even de aandachtspunten hiervoor:

* Zorg er voor dat je de `App` in de `BrowserRouter` plaatst. Dit kan in zowel `App.js` als in `index.js`. In veel tutorials wordt `BrowserRouter` naar `Router` hernoemd.
* In deze opdracht zijn er een aantal posts welke niet altijd getoond mogen worden. Hiervoor kun je de `PrivateRoute` gebruiken.


# Opdracht: React Router

Deze opdracht hoort bij de derde les over react. In de opdracht zullen zowel zaken die in de voorbereiding als zaken die in de les zelf zijn behandeld gebruikt worden. Om het gevoel van ‘de praktijk’ meer naar de opdracht te halen is de opzet zoals deze in een userstory gebruikt kan worden.

———

## Als klant wil een website om publieke en private blogs te tonen om ……….

### Context

Om meer abonnee’s te krijgen op mijn blog wil ik een aalt posts verborgen kunnen houden. Deze moeten dan enkel zichtbaar worden voor abonnee’s

### Acceptatie Criteria

* De website heeft een homepage, inlog pagina, een blog overzicht en post pagina’s
* Als een bezoeker niet ingelogd is moet er een inlog link in de navigatie zijn
* Als een bezoeker niet ingelogd is mogen de private posts niet zichtbaar zijn
* Als een bezoeker wel ingelogd is moet er een uitlog link in de navigatie zijn
* Als een bezoeker wel ingelogd is moeten alle posts zichtbaar zijn
* Een bezoeker moet in en uit kunnen loggen

### Notes

* Styling is niet relevant
* **_De packages zijn nog niet geïnstalleerd_**
* Gebruik react-hook-form voor de inlog
* Gebruik react-router-dom voor de routing
* Laat het weten als je vragen hebt
* Authenticatie is al toegevoegd. Onderin dit document staat wat meer info.
* De data is al toegevoegd. Deze kun je importeren. Zie bij de blog pagina voor een voorbeeld
* De losse pagina’s zijn initieel aangemaakt met enkel 1 regel tekst

## Subtasks (volgorde van aanpak)

Deze volgorde is niet verplicht.

1. Maak de navigatie en routing
1. Maak de homepage
1. Maak de inlogpagina
1. Maak het blog overzicht
1. Maak de post pagina


## Authenticatie

In de hooksmap staat `authentication.js`. Deze heeft alle nodige methods in zich om de authenticatie uit te kunnen voeren. Het toevoegen van de AuthProvider is in index.js reeds voor jullie gedaan.
De gebruikers met wachtwoorden die mogelijk zijn staan in `src/data/users.json`.

## useAuthentication

Geeft een object terug met 3 values:

* `isAuthenticated`: geeft een boolean terug. `false` als niet ge-authetiseerd, anders een `true`
* `login`: De inlog functie. heeft 2 parameters: `username`, `password`
* `logout`: Om een gebruiker uit te loggen. Heeft geen parameters

