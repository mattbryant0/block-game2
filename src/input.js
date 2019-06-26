export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          break;

        case 39:
          paddle.moveRight();
          break;

        //this is needed to stop lint from complaining
        default:
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          // here 0 is the posiiton so negative is to the left
          if (paddle.speed < 0) paddle.stop();
          break;

        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;

        //this is also needed to stop lint complaining
        default:
          break;
      }
    });
  }
}
