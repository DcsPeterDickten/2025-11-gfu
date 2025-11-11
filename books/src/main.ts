import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Katze } from './app/app';

bootstrapApplication(Katze, appConfig)
  .catch((err) => console.error(err));
