/**
 * @interface
 */
interface SocketBuilder {
  /**
   * @method
   * @return {Promise}
   */
  buildSocket(options: object): Promise;

  /**
   * @method
   * @return {Promise}
   */
  buildClientSocket(options: object): Promise;

  /**
   * @interface
   * @return {Promise}
   */
  buildServerSocket(options: object): Promise;
}

export default SocketIOBuilder;
