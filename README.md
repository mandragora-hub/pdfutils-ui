# Pdfutils UI

It is just a tool that allows you to extract metadata from PDF files.

The services will respond with the next JSON, given the URL <https://litterarum.onrender.com/api/v1/files/tratado-beccaria.pdf>

```json
{
  "pages": 535,
  "wordCount": 146926,
  "readTime": 33527000,
  "metadata": {
    "author": "V. Scott Gordon/ John Clevenger",
    "creationDate": "2020-11-13T16:57:48+05:30",
    "keywords": null,
    "modificationDate": "2020-12-02T15:50:34+05:30",
    "creator": "Adobe InDesign CC 13.0 (Windows)",
    "producer": "Adobe PDF Library 15.0",
    "subject": null,
    "title": "Computer Graphics Programming in OpenGL with C++, Second Edition"
  }
}
```

## Development

Run docker-compose in watch mode:

```bash
docker compose up --watch
```
