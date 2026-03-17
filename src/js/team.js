  export class Team {
    constructor(name) {
      this.members = new Set();
      this.name = name;
    }

    add(character) {
      if (this.members.has(character)) {
        console.log(`Ошибка: Персонаж ${character.name} уже был добавлен в команду "${this.name}"`);
        return;
      }
      this.members.add(character);
    }
      
    addAll(...characters) {
      for (let character of characters) {
        this.add(character);
      }
    }

    toArray() {
      return [...this.members];
    }
  }
