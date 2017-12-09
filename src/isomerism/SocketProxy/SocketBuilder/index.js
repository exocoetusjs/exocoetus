/**
 * @class
 */
class SocketBuilder {
  /**
   * @method
   * @return {promise}
   */
  static buildClientSocket(options) {
    const clientSocket = new ClientSocket(options);
    const socket = clientSocket.getSocket();
    return socket;
  }

  /**
   * @method
   * @return {promise}
   */
  static buildServerSocket(options) {
    const serverSocket = new ServerSocket(options);
    const socket = serverSocket.getSocket();
    return socket;
  }
}

export default SocketBuilder;
