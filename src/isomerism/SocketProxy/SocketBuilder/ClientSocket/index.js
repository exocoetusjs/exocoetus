import SocketClient from 'socket.io-client';
import Socket from '../Socket';
import ConnectTimeoutError from './ConnectTimeoutError';

/**
 * @class
 */
class ClientSocket extends Socket {
  /**
   * @constructor
   */
  constructor(...args) {
    super(...arg);
  }

  /**
   * @method
   * @return {promise}
   */
  establishSocket() {
    const { options } = this;
    const { url } = options;
    const socket = new SocketClient(url, options);

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

export default ClientSocket;
