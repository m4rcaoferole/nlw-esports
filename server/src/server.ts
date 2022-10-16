import express from 'express'

const app = express()

// HTTP methods / API RESTful / HTTP Codes
/**
 * Query: ...
 * Route: ...
 * Body: ...
 */

app.get('/games', (resquest, response) => {
  return response.json([]);
});

app.post('/ads', (resquest, response) => {
  return response.status(201).json([]);
});

app.get('/games/:id/ads', (resquest, response) => {
  //const gameId = resquest.params.id;

  return response.json([
    { id: 1, name: 'Anúncio 1'},
    { id: 2, name: 'Anúncio 2'},
    { id: 3, name: 'Anúncio 3'},
    { id: 4, name: 'Anúncio 4'},
  ]);
});

app.get('/ads/:id/discord', (resquest, response) => {
  //const adId = resquest.params.id;

  return response.json([]);
});

app.listen(3333)