/**
 * Defines Custom method types over Express's Request
 *
 * @author Kinjalgiri Goswami <kinjalgiri@gmail.com>
 */

import { Request } from "express";

export interface IRequest extends Request {
  flash(message: string, callback: any): any;
  assert(field: string, message: string): any;
  sanitize(field: string): any;
  logIn(user: any, callback: any): any;
  user(): any;
  validationErrors(): any;
  logout(): void;
  session: any;
}
