type Env = 'development' | 'production';

export const ENV = process.env.ENV as Env;
export const PUBLIC_PATH = process.env.PUBLIC_PATH as string;

export default {
  ENV,
  PUBLIC_PATH,
};
