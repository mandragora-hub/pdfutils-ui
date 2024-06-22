# Pdfutils UI

It is just a tool that allows you to extract metadata from PDF files.

The services will respond with the next JSON, given the URL <https://litterarum.onrender.com/api/v1/files/tratado-beccaria.pdf>

```json
{
  "pages": 92,
  "wordCount": 34684,
  "readTime": 7493000,
  "metadata": {
    "author": "Cesare Beccaria",
    "creationDate": "2015-03-06T10:24:27+01:00",
    "keywords": "Historia; Derecho; Delitos; Penas",
    "modificationDate": "2015-03-06T10:36:53+01:00",
    "creator": "Adobe InDesign CS6 (Windows)",
    "producer": "Adobe PDF Library 10.0.1",
    "subject": "Historia del Derecho, 32",
    "title": "Tratado de los delitos y de las penas"
  }
}
```
## Development

Run docker-compose in watch mode:

```bash
docker compose up --watch
```
