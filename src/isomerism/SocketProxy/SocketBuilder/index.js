import ClientSocketCreator from './ClientSocketCreator';
import ServerSocketCreator from './ServerSocketCreator';
import AbstractSocketCreator from './AbstractSocketCreator';

/**
 * @class
 */
class SocketBuilder {
  /**
   * @method
   * @return {Promise}
   */
  static buildClientSocket(options: object): Promise {
    const creator: ConvariantOf<AbstractSocketCreator> = new ClientSocketCreator(options);
    return clientSocketCreator.getPromise();
  }

  /**
   * @method
   * @return {Promise}
   */
  static buildServerSocket(options: object): Promise {
    const creator: ConvariantOf<AbstractSocketCreator> = new ServerSocketCreator(options);
    return clientSocketCreator.getPromise();
  }
}

export default SocketBuilder;
