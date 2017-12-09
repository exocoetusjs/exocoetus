import OptionsParameterError from 'error/OptionsParameterError ';
import SocketBuilder from './SocketBuilder';

/**
 * @class
 */
class SocketProxy {
  /**
   * @constructor
   */
  constructor(options = {}) {
    const { getInstances } = this.constructor;
    const instances = getInstances();
    Object.assign(this, instances);
    this.options = options;
  }

  /**
   * @static
   * @return {object}
   */
  static getInstances() {
    return {
      socket: null,
    };
  }

  /**
   * @method
   * @return {promise}
   */
  establishSocket() {
    const { options } = this;
    switch (options.type) {
      case 'server': {
        return SocketBuilder.buildServerSocket(options);
      }
      case 'client': {
        return SocketBuilder.buildClientSocket(options);
      }
      default: {
        const message = 'Options parameter type should in set(server|client);';
        throw new OptionsParameterError(message);
      }
    }
  }

  /**
   * @method
   * @return {object}
   */
  getSocket() {
    const { socket } = this;
    if (socket === null) {
      this.socket = this.estabilshSocket();
    }

    return this.socket;
  }
}

export default SocketProxy;
