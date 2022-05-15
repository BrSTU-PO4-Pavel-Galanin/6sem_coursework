const mysql_promise = require('mysql2/promise');

const AbstractObject = require('../AbstractObject/AbstractObject');

class AbstractQueryCrud {
  constructor(login, password) {
    this.login = login;
    this.password = password;
    this.pObjectClass = AbstractObject;
    this.table = 'depaby_someTable';
    this.database_settings = {
      host: process.env.depaby_mysql_host,
      user: process.env.depaby_mysql_username,
      password: process.env.depaby_mysql_password,
      database: process.env.depaby_mysql_database,
    };
  }

  async create(array = [{}]) {
    try {
      let sql = `INSERT INTO \`${this.table}\` (\``;

      // Получаю массив ключей
      const keys = this.pObjectClass.get_keys();

      // Добавляю ключи в кавычках через запятую
      sql += keys.join('`, `');
      sql += "`) VALUES ('";

      // Получаю массив значений без ключей
      let values = [];
      for (let i = 0; i < array.length; ++i) {
        const class_instance = new this.pObjectClass(array[i]);
        values.push(class_instance.get_values());
      }

      // Добавляю через запятую значение полей
      sql += values
        .map(function (el) {
          return el.join("', '");
        })
        .join("'), ('"); // Добавляю через скобки следующий элемент массива

      sql += "');";
      console.log(sql);

      // Выполняю SQL запрос
      const connect = await mysql_promise.createConnection(
        this.database_settings,
      );
      const [rows, fields] = await connect.execute(sql);
      await connect.end();
      return {
        code: 200,
        message: 'Added data in database with success',
      };
    } catch (err) {
      return {
        code: 418,
        message: '' + err,
      };
    }
  }

  get_read_sql(params = {}) {
    let sql = `SELECT * FROM \`${this.table}\`;`;

    // Получаем по ид
    if (params.id) {
      sql = `SELECT * FROM \`${this.table}\` WHERE \`code\` = '${params.id}';`;
    }

    return sql;
  }

  async read(params = {}) {
    try {
      const sql = this.get_read_sql(params);
      console.log(params);
      console.log(sql);

      // Выполняю SQL запрос
      const connect = await mysql_promise.createConnection(
        this.database_settings,
      );
      const [rows] = await connect.execute(sql);
      await connect.end();
      return {
        code: 200,
        message: 'Success get data',
        data: rows,
      };
    } catch (err) {
      // depaby_ Если ошибка MySQL
      return {
        code: 418,
        message: '' + err,
      };
    }
  }

  async update(id = -1, data = {}) {
    try {
      let sql = `UPDATE \`${this.table}\` SET `;

      // Получаю массив ключей
      const keys = this.pObjectClass.get_keys();

      const class_instance = new this.pObjectClass(data);
      const productCategories_data = class_instance.get();

      // Перечисляем ключ-равно-значение-запятая
      for (let i = 0; i < keys.length - 1; ++i) {
        const key = keys[i];
        const value = productCategories_data[key];
        sql += `\`${key}\` = '${value}', `;
      }

      if (keys.length != 0) {
        const key = keys[keys.length - 1];
        const value = productCategories_data[key];
        sql += `\`${key}\` = '${value}' `;
      }

      sql += `WHERE \`code\` = '${id}';`;
      console.log(sql);

      // Выполняю SQL запрос
      const connect = await mysql_promise.createConnection(
        this.database_settings,
      );
      const [rows, fields] = await connect.execute(sql);
      await connect.end();
      return {
        code: 200,
        message: `Data updated on code = ${id}`,
      };
    } catch (err) {
      return {
        code: 418,
        message: '' + err,
      };
    }
  }

  async delete(params) {
    try {
      let sql = `TRUNCATE TABLE \`${this.table}\`;`;

      if (params.id) {
        sql = `DELETE FROM \`${this.table}\` WHERE \`code\` = '${params.id}';`;
      }

      console.log(sql);

      // Выполняю SQL запрос
      const connect = await mysql_promise.createConnection(
        this.database_settings,
      );
      const [rows, fields] = await connect.execute(sql);
      await connect.end();
      return {
        code: 200,
        message: 'Deleted with success',
      };
    } catch (gpi_error) {
      return {
        code: 418,
        message: '' + gpi_error,
      };
    }
  }
}

module.exports = AbstractQueryCrud;
