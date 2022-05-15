const express = require('express');
const router = express.Router();
const QueryGameResults = require('../../scripts/AbstractQueryCrud/QueryCrudGameResults');

/**
 * @swagger
 * /api/GameResults:
 *  delete:
 *    tags:
 *      - GameResults
 *    description: Очищаем таблицу записей, либо удаляем запись по ид
 *    parameters:
 *      - in: body
 *        description: Тело запроса
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            code:
 *              type: integer
 *    responses:
 *      '200':
 *        description: Успешная очистка таблицы, либо успешное удаление по ид
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

router.delete("/GameResults", async function (req, res) {
  console.log(req.body)
  // Создаем экземпляр класса
  const GameResults_object = new QueryGameResults(req.body.login, req.body.password);

  // Выполняем sql
  const GameResults_response = await GameResults_object.delete(req.body);

  // Возвращаем ответ сервера
  res.status(GameResults_response.code).send(GameResults_response);
});

module.exports = router;
