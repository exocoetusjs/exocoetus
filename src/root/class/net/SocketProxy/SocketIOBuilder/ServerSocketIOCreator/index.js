import SocketServer from 'socket.io';
import AbstractSocketCreator from 'root/class/net/AbstractSocketCreator';
import OptionsParameterError from 'root/error/OptionsParameterError ';

/**
 * @class
 */
class ServerSocketCreator extends AbstractSocketCreator {
  /**
   * @constructor
   */
  constructor(options: { httpServer?: object, port?: number }) {
    super(options);
  }

  /**
   * @method
   * @return {object}
   */
  create(): SocketServer {
    const { options } = this;
    const { httpServer, port } = options;
    if (httpServer && port) {
      const message = 'options parameter can only contain one of (httpServer|port)';
      throw new OptionsParameterError(message);
    }

    let socket;
    if (httpServer) {
      socket = new SocketServer(httpServer, options);
    } else if (port) {
      socket = new SocketServer(port, options);
    } else {
      socket = new SocketServer(options);
    }

    return socket;
  }
}

export default ServerSocketCreator;
