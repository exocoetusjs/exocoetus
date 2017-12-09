import SocketServer from 'socket.io';
import OptionsParameterError from 'error/OptionsParameterError ';
import Socket from '../Socket';

/**
 * @class
 */
class ServerSocket extends Socket {
  /**
   * @constructor
   */
  constructor(...args) {
    super(...arg);
  }

  /**
   * @method
   * @return {object}
   */
  establishSocket() {
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

export default ServerSocket;
