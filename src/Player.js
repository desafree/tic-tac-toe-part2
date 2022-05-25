export default class CreatePlayer {
  constructor(name, symbol) {
    this.name = String(name);
    this.symbol = String(symbol);
    this.point = 0;
  }

  addPoint() {
    this.point += 1;
  }
}
