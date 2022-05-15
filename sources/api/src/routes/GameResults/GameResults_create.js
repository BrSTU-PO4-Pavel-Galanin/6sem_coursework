const express = require('express');
const router = express.Router();
const QueryGameResults = require('../../scripts/AbstractQueryCrud/QueryCrudGameResults');

/**
 * @swagger
 * /api/GameResults:
 *  post:
 *    tags:
 *      - GameResults
 *    description: Добавляем массив записи\записей
 *    parameters:
 *      - in: body
 *        description: Тело запроса
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            data:
 *              type: array
 *              items:
 *                $ref: '#/definitions/GameResults'
 *    responses:
 *      '200':
 *        description: Успешное добавление записи\записей
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
 *      '400':
 *        description: Ошибка в теле запроса
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

router.post('/GameResults', async function (req, res) {
  // Создаем экземпляр класса
  const GameResults_object = new QueryGameResults(
    req.body.login,
    req.body.password,
  );

  // Получаем массив контактов
  const GameResults_array = req.body.data;

  // Если это не массив, а другой тип данных, то
  if (Array.isArray(GameResults_array) == false) {
    res.status(400).send({
      code: 400,
      message: 'Not found attribute `data`: [{}]',
    });
    return;
  }

  // Выполняем sql, и получаем ответ сервера
  const GameResults_response = await GameResults_object.create(req.body.data);

  res.status(GameResults_response.code).send(GameResults_response);
});

module.exports = router;
