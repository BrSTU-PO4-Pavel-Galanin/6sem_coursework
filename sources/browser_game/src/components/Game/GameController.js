import archer_4 from './archer_card_4.png';
import archer_5 from './archer_card_5.png';
import archer_6 from './archer_card_6.png';
import artillery_1 from './artillery_card_1.png';
import artillery_5 from './artillery_card_5.png';
import artillery_6 from './artillery_card_6.png';
import artillery_8 from './artillery_card_8.png';
import swordsman_1 from './swordsman_card_1.png';
import swordsman_2 from './swordsman_card_2.png';
import swordsman_4 from './swordsman_card_4.png';
import swordsman_5 from './swordsman_card_5.png';

let cards = [
  {
    id: 1,
    type: 'archer',
    damage: 4,
    img: archer_4,
    where: 'onHome',
  },
  {
    id: 2,
    type: 'archer',
    damage: 5,
    img: archer_5,
    where: 'onHome',
  },
  {
    id: 3,
    type: 'archer',
    damage: 6,
    img: archer_6,
    where: 'onHome',
  },
  {
    id: 4,
    type: 'artillery',
    damage: 1,
    img: artillery_1,
    where: 'onHome',
  },
  {
    id: 5,
    type: 'artillery',
    damage: 5,
    img: artillery_5,
    where: 'onHome',
  },
  {
    id: 6,
    type: 'artillery',
    damage: 6,
    img: artillery_6,
    where: 'onHome',
  },
  {
    id: 7,
    type: 'artillery',
    damage: 8,
    img: artillery_8,
    where: 'onHome',
  },
  {
    id: 8,
    type: 'swordsman',
    damage: 1,
    img: swordsman_1,
    where: 'onHome',
  },
  {
    id: 9,
    type: 'swordsman',
    damage: 2,
    img: swordsman_2,
    where: 'onHome',
  },
  {
    id: 10,
    type: 'swordsman',
    damage: 4,
    img: swordsman_4,
    where: 'onHome',
  },
  {
    id: 11,
    type: 'swordsman',
    damage: 5,
    img: swordsman_5,
    where: 'onHome',
  },
];

class Card {
  constructor(id, type, damage, img, where) {
    this.id = id;
    this.type = type;
    this.damage = damage;
    this.img = img;
    this.where = where;
  }

  take_card() {
    this.where = 'onWar';
  }
}

class GameController {
  constructor() {
    this.player1_cards = [];
    for (let i = 0; i < cards.length; ++i) {
      let id = cards[i].id;
      let type = cards[i].type;
      let damage = cards[i].damage;
      let img = cards[i].img;
      let where = cards[i].where;
      this.player1_cards.push(new Card(id, type, damage, img, where));
    }

    this.player2_cards = [];
    for (let i = 0; i < cards.length; ++i) {
      let id = cards[i].id;
      let type = cards[i].type;
      let damage = cards[i].damage;
      let img = cards[i].img;
      let where = cards[i].where;
      this.player2_cards.push(new Card(id, type, damage, img, where));
    }
  }

  player1_take_card(id) {
    for (let i = 0; i < this.player1_cards.length; ++i) {
      if (this.player1_cards[i].id === id) {
        this.player1_cards[i].where = 'onWar';
      }
    }
  }

  player2_take_card(id) {
    for (let i = 0; i < this.player2_cards.length; ++i) {
      if (this.player2_cards[i].id === id) {
        this.player2_cards[i].where = 'onWar';
      }
    }
  }

  get_player1_cards() {
    return this.player1_cards;
  }

  get_player2_cards() {
    return this.player2_cards;
  }

  get_player1_damage(type) {
    let count = 0;
    this.player1_cards.forEach((element) => {
      if (element.where === 'onWar' && element.type === type) {
        count += element.damage;
      }
    });
    return count;
  }

  get_player1_swordsman_damage() {
    return this.get_player1_damage('swordsman');
  }

  get_player1_archer_damage() {
    return this.get_player1_damage('archer');
  }

  get_player1_arlillery_damage() {
    return this.get_player1_damage('artillery');
  }

  get_player2_damage(type) {
    let count = 0;
    this.player2_cards.forEach((element) => {
      if (element.where === 'onWar' && element.type === type) {
        count += element.damage;
      }
    });
    return count;
  }

  get_player2_swordsman_damage() {
    return this.get_player2_damage('swordsman');
  }

  get_player2_archer_damage() {
    return this.get_player2_damage('archer');
  }

  get_player2_arlillery_damage() {
    return this.get_player2_damage('artillery');
  }

  get_player1_all_damage() {
    let count = 0;
    this.player1_cards.forEach((element) => {
      if (element.where === 'onWar') {
        count += element.damage;
      }
    });
    return count;
  }

  get_player2_all_damage() {
    let count = 0;
    this.player2_cards.forEach((element) => {
      if (element.where === 'onWar') {
        count += element.damage;
      }
    });
    return count;
  }
}

export default GameController;
