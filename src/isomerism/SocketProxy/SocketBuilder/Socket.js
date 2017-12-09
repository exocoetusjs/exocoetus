/**
 * @class
 */
class Socket {
  /**
   * @constructor
   */
  constructor(options = {}) {
    this.options = options;
    this.socket = this.establishSocket();
  }

  /**
   * @method
   * @return {promise}
   */
  getSocket() {
    const { socket } = this;
    return Promise.resolve(socket);
  }
}

export default Socket;
