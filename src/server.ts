import 'dotenv/config';
import App from './app';
import AuthenticationController from './authentication/authentication.controller';
import PostController from './post/post.controller';
import HelloWorldController from './hello/hello.controller';
import UserController from './user/user.controller';
import validateEnv from './utils/validateEnv';
import * as express from 'express';

const app = new App(
  [
    new HelloWorldController(),
  ],
);
validateEnv();
app.listen();
