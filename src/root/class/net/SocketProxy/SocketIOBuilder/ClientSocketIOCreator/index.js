import SocketClient from 'socket.io-client';
import AbstractSocketCreator from 'root/class/net/AbstractSocketCreator';
import ConnectTimeoutError from './ConnectTimeoutError';

/**
 * @class
 */
class ClientSocketIOCreator extends AbstractSocketCreator {
  /**
   * @constructor
   */
  constructor(options: { port: string }) {
    super(options);
  }

  /**
   * @method
   * @return {Promise}
   */
  create(): Promise {
    const { options } = this;
    const { url } = options;
    const socket = new SocketClient(url, options);

    return new Promise((resolve, reject) => {
      socket.on('connect', () => {
        resolve(socket);
      });
      socket.on('connect_error', (error: CovariantOf<Error>) => {
        reject(error);
      });
      socket.on('connect_timeout', () => {
        const error: CovariantOf<Error> = new ConnectTimeoutError();
        reject(error);
      });
    });
  }
}

export default ClientSocketCreator;
