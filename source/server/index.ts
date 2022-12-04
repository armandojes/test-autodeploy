import express, { Request, Response } from 'express';
import { ENV } from 'source/env';
import renderMarkup from './markup';
import render from './render';

const server = express();

const requestHandler = (request: Request, response: Response) => {
  const { content, style } = render();
  const fullHtml = renderMarkup({ content, style });
  response.send(fullHtml);
  response.end();
};

server.get('*', requestHandler);

export default server;

// doesn't execute at vercel env
if (ENV !== 'production') {
  server.listen(3000);
}
