import { renderToString } from 'react-dom/server';
import App from 'source/app';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
import { CacheProvider } from '@emotion/react';
import { ServerStyleSheet } from 'styled-components';

const render = () => {
  const cache = createCache({ key: 'css-sync' });
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);
  const sheet = new ServerStyleSheet();

  const content = renderToString(
    sheet.collectStyles(
      <CacheProvider value={cache}>
        <App />
      </CacheProvider>
    )
  );

  const emotionChunks = extractCriticalToChunks(content);
  const style = constructStyleTagsFromChunks(emotionChunks);
  const styledComponentsCss = sheet.getStyleTags();

  return {
    content,
    style: `${style}${styledComponentsCss}`,
  };
};

export default render;
