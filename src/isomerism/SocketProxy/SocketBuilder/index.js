import ClientSocketCreator from './ClientSocketCreator';
import ServerSocketCreator from './ServerSocketCreator';

/**
 * @class
 */
class SocketBuilder {
  /**
   * @method
   * @return {Promise}
   */
  static buildClientSocket(options: object): Promise {
    const clientSocketCreator = new ClientSocketCreator(options);
    const socket = clientSocketCreator.create();
    return socket;
  }

  /**
   * @method
   * @return {Promise}
   */
  static buildServerSocket(options: object): Promise {
    const serverSocketCreator = new ServerSocketCreator(options);
    const socket = serverSocketCreator.create();
    return socket;
  }
}

export default SocketBuilder;
