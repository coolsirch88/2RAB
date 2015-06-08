export class GameRouter{
    heading = 'Game';

    configureRouter(config, router){
        config.map([
          { route: ['','index'],  moduleId: './index',      nav: true, title:'Game Index' }
        ]);

        this.router = router;
    }
}