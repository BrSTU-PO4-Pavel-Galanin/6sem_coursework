import axios from 'axios';
import { useEffect, useState } from 'react';

import styles from './ResultsTable.module.css';

function ResultsTable() {
  const [array_data, set_array_data] = useState([{}]);

  useEffect(function () {
    (async function () {
      await get_statistic_data();
    })();

    if (array_data.length === 0) {
      alert('Нет данных в статистике');
    }
  }, []);

  async function get_statistic_data() {
    try {
      const url = 'http://localhost:3001/api/GameResults';
      const response = await axios.get(url);
      const array = response.data.data;
      console.log(array);
      set_array_data(array);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td>№</td>
          <td>Player1 name</td>
          <td>Player2 name</td>
          <td>Player1 damage</td>
          <td>Player2 damage</td>
        </tr>
      </thead>
      <tbody>
        {array_data.map((element, index) => {
          return (
            <tr key={index}>
              <td>{element.code}</td>
              <td>{element.player1}</td>
              <td>{element.player2}</td>
              <td>{element.player1_damage}</td>
              <td>{element.player2_damage}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ResultsTable;
