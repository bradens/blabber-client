export default class Router {
  static history = null;
  static setRouter(history) {
    this.history = history;
  }
}

window.BlabberRouter = Router;
