import { renderToString } from 'react-dom/server';
import App from 'source/app';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
import { CacheProvider } from '@emotion/react';

const render = () => {
  const cache = createCache({ key: 'css-sync' });
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

  const content = renderToString(
    <CacheProvider value={cache}>
      <App />
    </CacheProvider>
  );

  const emotionChunks = extractCriticalToChunks(content);
  const style = constructStyleTagsFromChunks(emotionChunks);

  return {
    content,
    style,
  };
};

export default render;
