import express from 'express';

const app = express();
const port = 8081;

app.get('/', (req, res) => {
  res.send('Hello from server');
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
