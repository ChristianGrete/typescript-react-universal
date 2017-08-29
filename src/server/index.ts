import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as compress from 'koa-compress';
import * as minifyHTML from 'koa-html-minifier';
import * as serve from 'koa-static';
import * as views from 'koa-views';
import * as path from 'path';
import * as zlib from 'zlib';
import userController from './controllers/api/userController';
import appController from './controllers/appController';

const app = new Koa();

app.use(bodyParser());

app.use(
  serve(path.join(__dirname, '..', 'public'), {
    gzip: true,
  }),
);

app.use(
  compress({
    filter: contentType => {
      return /text/i.test(contentType);
    },
    flush: zlib.Z_SYNC_FLUSH,
    threshold: 2048,
  }),
);

app.use(
  views(path.join(__dirname, 'views'), {
    extension: 'pug',
    map: {
      pug: 'pug',
    },
  }),
);

if (process.env.NODE_ENV === 'production') {
  app.use(
    minifyHTML({
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      minifyJS: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
    }),
  );
}

app.use(appController.routes());
app.use(appController.allowedMethods());
app.use(userController.routes());
app.use(userController.allowedMethods());

app.listen(3000);
