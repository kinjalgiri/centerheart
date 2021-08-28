/**
 * Defines Custom method types over Express's Request
 *
 * @author Kinjalgiri Goswami <kinjalgiri@gmail.com>
 */

import { Session } from "express-session";

export interface ISession extends Session {
  returnTo: string;
}
