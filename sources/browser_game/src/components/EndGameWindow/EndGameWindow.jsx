import styles from './EndGameWindow.module.css';

function EndGameWindow(props) {
  return (
    <div className={styles.window}>
      <div>{props.counter1 ? props.counter1 : '?'}</div>
      <div>VS</div>
      <div>{props.counter2 ? props.counter2 : '?'}</div>
    </div>
  );
}

export default EndGameWindow;
