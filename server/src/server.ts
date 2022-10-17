import express from 'express'

const app = express()

// HTTP methods / API RESTful / HTTP Codes
/**
 * Query: ...
 * Route: ...
 * Body: ...
 */

app.get('/games', (request, response) => {
  return response.json([]);
});

app.post('/ads', (request, response) => {
  return response.status(201).json([]);
});

app.get('/games/:id/ads', (request, response) => {
  //const gameId = request.params.id;

  return response.json([
    { id: 1, name: 'Anúncio 1'},
    { id: 2, name: 'Anúncio 2'},
    { id: 3, name: 'Anúncio 3'},
    { id: 4, name: 'Anúncio 4'},
  ]);
});

app.get('/ads/:id/discord', (request, response) => {
  //const adId = request.params.id;

  return response.json([]);
});

app.listen(3333)