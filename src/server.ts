import 'dotenv/config';
import App from './app';
import HelloWorldController from './hello/hello.controller';
import validateEnv from './utils/validateEnv';

const app = new App(
  [
    new HelloWorldController(),
  ],
);
validateEnv();
app.listen();
