import стили from './Game.module.css';

function Game() {
  return (
    <div className={стили.game_wrapper}>
      <div className={стили.ДоскаПоЦендру}>
        <div className={стили.ДоскаИгры}>
          <div className={стили.СтолСопер}></div>
          <div className={стили.ТяжАльтСопер}></div>
          <div className={стили.ЛучСопер}></div>
          <div className={стили.МечСопер}></div>
          <div className={стили.МоиМеч}></div>
          <div className={стили.МоиЛуч}></div>
          <div className={стили.МояТяжАльт}></div>
          <div className={стили.МойСтол}></div>
        </div>
      </div>
    </div>
  );
}

export default Game;
