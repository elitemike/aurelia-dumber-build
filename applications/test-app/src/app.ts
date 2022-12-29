import { Router } from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config, router: Router) {
    this.router = router;

    config.title = 'Dumber Demo';
    config.options.pushState = true;
    config.options.root = "/";

    config.map([
      { route: '', name: 'home', title: 'Home', nav: true, moduleId: './home' },
      { route: 'page2', name: 'page2', title: 'Page2', nav: true, moduleId: './page2' },
    ]);
  }
}