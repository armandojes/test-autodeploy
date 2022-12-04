import { PUBLIC_PATH } from 'source/env';

/* eslint-disable no-empty-pattern */
interface Markup {
  ({}: { content: string; style: string }): string;
}

const renderMarkup: Markup = ({ content, style }) => {
  return `
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          ${style}
        </head>
        <body>
          <div id="render_target">${content}</div>
          <script src=${PUBLIC_PATH}app.js></script>
        </body>
      </html>
    `;
};

export default renderMarkup;
