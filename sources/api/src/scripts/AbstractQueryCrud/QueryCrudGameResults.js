const AbstractQueryCrud = require('./AbstractQueryCrud');
const ObjectGameResults = require('./../AbstractObject/ObjectGameResults');

class QueryCrudGameResults extends AbstractQueryCrud {
  constructor(login, password) {
    super(login, password);
    this.pObjectClass = ObjectGameResults;
    this.table = 'GameResults';
  }

  get_read_sql(params = {}) {
    let sql = `SELECT * FROM \`${this.table}\`;`;

    // Получаем по ид
    if (params.code) {
      sql = `SELECT * FROM \`${this.table}\` WHERE \`code\` = '${params.code}';`;
    }

    return sql;
  }
}

module.exports = QueryCrudGameResults;
