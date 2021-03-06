import { DB_TYPE } from '../config/appConfig';
import { DB_TYPES } from '../config/constants';
import * as mongo from './mongo';
import * as none from './none';

let dbConfig = null;

switch (DB_TYPE) {
  case DB_TYPES.MONGO:
    dbConfig = mongo;
    break;
  case DB_TYPES.NONE:
    dbConfig = none;
    break;
  default:
    throw new Error(`No database type '${DB_TYPE}' found`);
}

export const connect = dbConfig.connect;
export const controllers = dbConfig.controllers;
export const passport = dbConfig.passport;
export const session = dbConfig.session;

export default dbConfig.default;
