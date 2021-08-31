/**
 * Primary file for your Socket.io Server
 *
 * @author Kinjalgiri Goswami <kinjalgiri@gmail.com>
 */
import { Server } from "socket.io";

import Log from "../middlewares/Log";

class SocketIO {
  /**
   * Initializes the socket.io server properties
   */
  constructor() {
    Log.info("SocketIO constructor");
  }
  /**
   * Starts the socket.io server
   */
  public init(httpServer: any): any {
    try {
      Log.info("Booting SocketIO");
      const io = new Server(httpServer, {
        cors: {
          origin: "*",
          methods: ["GET", "POST"],
        },
      });

      io.on("connection", (socket: any) => {
        Log.info("Client connected");
        socket.on("disconnect", () => console.log("Client disconnected"));
      });
    } catch (_err) {
      Log.error(_err.stack);
    }
  }
}

/** Export the socket.io module */
export default new SocketIO();
