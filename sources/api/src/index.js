require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swagger_jsdoc = require('swagger-jsdoc');
const swagger_ui_express = require('swagger-ui-express');

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// = = = = = = = = Swagger
const swagger_data = {
  swagger: '2.0',
  info: {
    version: '0.0.1',
    title: 'Документация API',
    description: 'Расписал возможные API. ',
    contact: {
      name: 'Павел Иннокентьевич Галанин',
      email: 'Pavel.Innokentevich.Galanin@gmail.com',
    },
  },
  host: `${process.env.depaby_swagger_host}`,
  tags: [
    {
      name: 'GameResults',
      description: 'Манипуляции с таблицей результатов игры',
    },
  ],
  schemes: ['http'],
};

const depaby_swagger_options = {
  swaggerDefinition: swagger_data,
  apis: [
    'src/index.js',
    'src/routes/GameResults/GameResults.js',
    'src/routes/GameResults/GameResults_create.js',
    'src/routes/GameResults/GameResults_read.js',
    'src/routes/GameResults/GameResults_update.js',
    'src/routes/GameResults/GameResults_delete.js',
  ],
};
const depaby_swagger_docs = swagger_jsdoc(depaby_swagger_options);
app.use(
  '/api/docs',
  swagger_ui_express.serve,
  swagger_ui_express.setup(depaby_swagger_docs),
);
// = = = = = = = = end swagger

// Start server
app.listen(process.env.depaby_nodejs_port);
console.log(
  `Open ${process.env.depaby_nodejs_protocol}//${process.env.depaby_nodejs_host}:${process.env.depaby_nodejs_port}/`,
);

app.get('/api', (req, res) => {
  res.send(`Read documentation: <a href="/api/docs">/api/docs</a>`);
});

// contacts CRUD
app.use('/api', require('./routes/GameResults/GameResults_create'));
app.use('/api', require('./routes/GameResults/GameResults_read'));
app.use('/api', require('./routes/GameResults/GameResults_update'));
app.use('/api', require('./routes/GameResults/GameResults_delete'));
