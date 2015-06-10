import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = '2RAB';
    config.map([
      { route: ['','welcome'],  moduleId: './welcome',      nav: true, title:'Welcome' },
      { route: 'game', moduleId: './game/gameRouter', nav: true, title:'Games'}
    ]);

    this.router = router;
  }
}
