import SocketClient from 'socket.io-client';
import AbstractSocketCreator from '../AbstractSocketCreator';
import ConnectTimeoutError from './ConnectTimeoutError';

/**
 * @class
 */
class ClientSocketCreator extends AbstractSocketCreator {
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
    const socket = new SocketClient((url: string), options);

    return new Promise((resolve, reject) => {
      socket.on('connect', () => {
        resolve(socket);
      });
      socket.on('connect_error', (error) => {
        reject(error);
      });
      socket.on('connect_timeout', () => {
        const error = new ConnectTimeoutError();
        reject(error);
      });
    });
  }
}

export default ClientSocketCreator;
