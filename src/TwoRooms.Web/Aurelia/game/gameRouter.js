export class GameRouter{
    heading = 'Game';

    configureRouter(config, router){
        config.map([
          { route: ['','index'],  moduleId: './index',      nav: true, title:'Game Index', name:'index' },
          { route: [':id/config'], moduleId: './config', nav: false, title:'Game Options'},
          { route: [':id', 'game/:id'],   moduleId: './game',       nav: false, title:'Game'}
        ]);

        this.router = router;
    }
}