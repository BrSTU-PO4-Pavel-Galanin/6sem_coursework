import axios from 'axios';
import { useEffect } from 'react';

import styles from './EndGameWindow.module.css';

function EndGameWindow(props) {
  useEffect(function () {
    (async function () {
      await add_statistic_to_server();
    })();
  });

  async function add_statistic_to_server() {
    try {
      const url = 'http://localhost:3001/api/GameResults';
      const object = {
        data: [
          {
            player1: props.player1_name,
            player2: props.player1_name,
            player1_damage: props.player1_damage,
            player2_damage: props.player2_damage,
          },
        ],
      };
      await axios.post(url, object);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.window}>
      <div>{props.player1_damage ? props.player1_damage : '?'}</div>
      <div>VS</div>
      <div>{props.player2_damage ? props.player2_damage : '?'}</div>
    </div>
  );
}

export default EndGameWindow;
