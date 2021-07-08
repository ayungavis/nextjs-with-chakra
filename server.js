/* eslint-disable @typescript-eslint/no-var-requires */
const next = require('next');
const express = require('express');
const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const port = process.env.APP_PORT;
    const mainUrl = process.env.APP_MAIN_URL;

    // support gzip
    server.use(compression());

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on ${mainUrl}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
