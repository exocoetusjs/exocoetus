import AbstractSocketCreator from 'root/class/net/AbstractSocketCreator';
import SocketBuilder from 'root/interface/net/SocketBuilder';
import ClientSocketIOCreator from './ClientSocketIOCreator';
import ServerSocketIOCreator from './ServerSocketIOCreator';

/**
 * @class
 */
class SocketIOBuilder implements SocketBuilder {
  buildSocket(options: { type: string }) {
    const { type } = options;
    switch (type) {
      case 'server': {
        return this.buildServerSocket(options);
      }
      case 'client': {
        return this.buildClientSocket(options);
      }
      default: {
        const message = 'Options parameter type should in set(server|client);';
        throw new OptionsParameterError(message);
      }
    }
  }

  /**
   * @method
   * @return {Promise}
   */
  buildClientSocket(options: object): Promise {
    const creator: ConvariantOf<AbstractSocketCreator> = new ClientSocketIOCreator(options);
    return creator.getPromise();
  }

  /**
   * @method
   * @return {Promise}
   */
  buildServerSocket(options: object): Promise {
    const creator: ConvariantOf<AbstractSocketCreator> = new ServerSocketIOCreator(options);
    return creator.getPromise();
  }
}

export default SocketIOBuilder;
