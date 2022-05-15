import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className={styles.wrapper}>
      <ul>
        <li>
          <Link to="/singleplayer">Одиничная игра</Link>
        </li>
        <li>
          <Link to="/statistic">Статистика игр</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
