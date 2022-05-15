const express = require('express');
const router = express.Router();
const QueryGameResults = require('../../scripts/AbstractQueryCrud/QueryCrudGameResults');

/**
 * @swagger
 * /api/GameResults:
 *  get:
 *    tags:
 *      - GameResults
 *    description: Получаем все записи из таблицы БД
 *    parameters:
 *      - in: query
 *        name: id
 *        description: Вывод массива записи (нашли по ИД)
 *        required: false
 *        type: integer
 *    responses:
 *      '200':
 *        description: Успешный ответ
 *        schema:
 *          type: object
 *          properties:
 *            code:
 *              type: integer
 *            message:
 *              type: string
 *            data:
 *              type: array
 *              items:
 *                $ref: '#/definitions/GameResults'
 *      '418':
 *        description: Ошибка на сервере
 *        schema:
 *          type: object
 *          properties:
 *            code:
 *              type: integer
 *            message:
 *              type: string
 */

router.get('/GameResults', async function (req, res) {
  const GameResults_object = new QueryGameResults();
  const GameResults_response = await GameResults_object.read(req.query);
  res.status(GameResults_response.code).send(GameResults_response);
});

module.exports = router;
