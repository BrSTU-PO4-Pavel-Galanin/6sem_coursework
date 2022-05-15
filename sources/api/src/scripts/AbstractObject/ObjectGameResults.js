class ObjectGameResults {
  constructor(obj = {}) {
    this.set_date();
    this.set_player1(obj.player1);
    this.set_player2(obj.player2);
    this.set_player1_damage(obj.player1_damage);
    this.set_player2_damage(obj.player2_damage);
  }

  get() {
    return {
      date: this.date,
      player1: this.player1,
      player2: this.player2,
      player1_damage: this.player1_damage,
      player2_damage: this.player2_damage,
    };
  }

  static get_keys() {
    return ['date', 'player1', 'player2', 'player1_damage', 'player2_damage'];
  }

  get_values() {
    return [
      this.date,
      this.player1,
      this.player2,
      this.player1_damage,
      this.player2_damage,
    ];
  }

  set_date() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const miliseconds = date.getMilliseconds();
    this.date = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    // this.date = date;
  }

  set_player1(player1) {
    if (typeof player1 != 'string') {
      player1 = 'NoNamePlayer';
    }
    this.player1 = player1;
  }

  set_player2(player2) {
    if (typeof player2 != 'string') {
      player2 = 'NoNamePlayer';
    }
    this.player2 = player2;
  }

  set_player1_damage(player1_damage) {
    if (typeof player1_damage != 'number') {
      player1_damage = 0;
    }
    this.player1_damage = player1_damage;
  }

  set_player2_damage(player2_damage) {
    if (typeof player2_damage != 'number') {
      player2_damage = 0;
    }
    this.player2_damage = player2_damage;
  }
}

module.exports = ObjectGameResults;
