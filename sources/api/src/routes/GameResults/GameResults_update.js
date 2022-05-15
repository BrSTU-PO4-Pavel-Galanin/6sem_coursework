const express = require('express');
const router = express.Router();
const QueryGameResults = require('../../scripts/AbstractQueryCrud/QueryCrudGameResults');

/**
 * @swagger
 * /api/GameResults:
 *  put:
 *    tags:
 *      - GameResults
 *    description: Обновляем данные по ид
 *    parameters:
 *      - in: body
 *        description: Тело запроса
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            code:
 *              type: integer
 *            data:
 *              $ref: '#/definitions/GameResults'
 *    responses:
 *      '200':
 *        description: Успешное обновление
 *        schema:
 *          type: object
 *          properties:
 *            code:
 *              type: integer
 *            message:
 *              type: string
 *      '202':
 *        description: Не авторизовался
 *        schema:
 *          type: object
 *          properties:
 *            code:
 *              type: integer
 *            message:
 *              type: string
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

router.put('/GameResults', async function (req, res) {
  // Создаем экземпляр класса
  const GameResults_object = new QueryGameResults(
    req.body.login,
    req.body.password,
  );

  // Выполняем sql
  const GameResults_response = await GameResults_object.update(
    req.body.code,
    req.body.data,
  );

  // Возвращаем ответ сервера
  res.status(GameResults_response.code).send(GameResults_response);
});

module.exports = router;
