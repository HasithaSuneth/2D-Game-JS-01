export class Mobile {
  constructor(game) {
    this.game = game;
    this.restartImgWidth = 50;
    this.restartImgHeight = 50;
    this.restartImage = restart;
  }
  restartLogo(context) {
    context.drawImage(
      this.restartImage,
      this.game.width - 70,
      20,
      this.restartImgWidth,
      this.restartImgHeight
    );
  }
  powerButton(context) {
    context.beginPath();
    context.arc(100, this.game.height - 100, 50, 0, 2 * Math.PI);
    context.stroke();
  }
}
