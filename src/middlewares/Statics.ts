/**
 * Defines all the app-statics
 *
 * @author Kinjalgiri Goswami <kinjalgiri@gmail.com>
 */

import path from "path";
import express from "express";

import Log from "./Log";

class Statics {
  public static mount(_express: express.Application): express.Application {
    Log.info("Booting the 'Statics' middleware...");

    // Loads Options
    const options = { maxAge: 31557600000 };

    // Load Statics
    _express.use(
      "/public",
      express.static(path.join(__dirname, "../../public"), options)
    );

    // Load NPM Statics
    _express.use(
      "/vendor",
      express.static(path.join(__dirname, "../../node_modules"), options)
    );

    return _express;
  }
}

export default Statics;
