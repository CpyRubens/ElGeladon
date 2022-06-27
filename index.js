const express = require('express');
const port = 3003;
const app = express();
const cors = require('cors');
const routes = require('./src/routes/paleta.route')



app.use(express.json());
app.use(cors());
app.use('/paletas', routes)



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

