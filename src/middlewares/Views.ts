/**
 * Defines the view engines
 *
 * @author Kinjalgiri Goswami <kinjalgiri@gmail.com>
 */

import path from "path";
import { Application } from "express";

import Log from "./Log";

class Views {
  public static mount(_express: Application): Application {
    Log.info("Booting the 'Views' middleware...");

    _express.set("view engine", "pug");
    _express.set("view options", { pretty: true });
    _express.set("views", path.join(__dirname, "../../views"));
    _express.locals.pretty = true;

    return _express;
  }
}

export default Views;
