

Ex. 4

```sequence
Browser->Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
Server->Browser: HTML document
Browser->Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
Server->Browser: HTML document
Browser->Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
Server->Browser: CSS document
Browser->Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
Server->Browser: JS file
Note left of Browser: Browser starts executing JS code
Browser->Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
Server->Browser: JSON file
Note left of Browser: Browser executes callback to render notes
```



Ex.5

```sequence
Browser->Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
Server->Browser: HTML document
Browser->Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
Server->Browser: CSS document
Browser->Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
Server->Browser: JS file
Note left of Browser: Browser starts executing JS code
Browser->Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
Server->Browser: JSON file
Note left of Browser: Browser executes callback to render notes
```



Ex.6

```sequence
Browser->Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
Server->Browser: JSON file
```

