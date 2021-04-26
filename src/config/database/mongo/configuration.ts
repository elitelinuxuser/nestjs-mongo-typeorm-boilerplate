import { registerAs } from '@nestjs/config';
export default registerAs('mongo', () => ({
  dbName: process.env.MONGODB_NAME,
  user: process.env.MONGODB_USER,
  pass: process.env.MONGODB_PASS,
  uri: process.env.MONGODB_URI,
}));
