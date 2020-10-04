import Application from 'full-challenge-ysi-front-end/app';
import config from 'full-challenge-ysi-front-end/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
