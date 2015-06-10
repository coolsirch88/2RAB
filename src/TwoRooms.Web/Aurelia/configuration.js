import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .developmentLogging();

    aurelia.start().then(a => a.setRoot());
}