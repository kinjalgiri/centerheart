/**
 * Primary file for your Clustered API Server
 *
 * @author Kinjalgiri Goswami <kinjalgiri@gmail.com>
 */

import express from "express";
import * as http from "http";
import ioserver, { Socket, Server } from "socket.io";

import Locals from "./Locals";
import Routes from "./Routes";
import SocketIO from "./SocketIO";
import Bootstrap from "../middlewares/Kernel";
import ExceptionHandler from "../exception/Handler";
import Log from "../middlewares/Log";

class Express {
  /**
   * Create the express object
   */
  public express: express.Application;

  /**
   * Initializes the express server
   */
  constructor() {
    this.express = express();

    this.mountDotEnv();
    this.mountMiddlewares();
    this.mountRoutes();
  }

  private mountDotEnv(): void {
    this.express = Locals.init(this.express);
  }

  /**
   * Mounts all the defined middlewares
   */
  private mountMiddlewares(): void {
    this.express = Bootstrap.init(this.express);
  }

  /**
   * Mounts all the defined routes
   */
  private mountRoutes(): void {
    this.express = Routes.mountWeb(this.express);
    this.express = Routes.mountApi(this.express);
  }

  /**
   * Starts the express server
   */
  public init(): any {
    try {
      const port: number = Locals.config().port;

      // Registering Exception / Error Handlers
      this.express.use(ExceptionHandler.logErrors);
      this.express.use(ExceptionHandler.clientErrorHandler);
      this.express.use(ExceptionHandler.errorHandler);
      this.express = ExceptionHandler.notFoundHandler(this.express);

      // Start the server on the specified port
      const httpServer = this.express.listen(port, (_error: void) => {
        return console.log(
          "\x1b[33m%s\x1b[0m",
          `Server :: Running @ 'http://localhost:${port}'`
        );
      });

      Log.info("Booting SocketIO");

      SocketIO.init(httpServer);
    } catch (_err) {
      Log.error(_err.stack);
    }
  }
}

/** Export the express module */
export default new Express();
