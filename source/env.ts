type Env = 'development' | 'production';

export const env = process.env.ENV as Env;

export default {};
