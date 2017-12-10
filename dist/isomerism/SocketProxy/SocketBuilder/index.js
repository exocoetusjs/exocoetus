'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ClientSocketCreator = require('./ClientSocketCreator');

var _ClientSocketCreator2 = _interopRequireDefault(_ClientSocketCreator);

var _ServerSocketCreator = require('./ServerSocketCreator');

var _ServerSocketCreator2 = _interopRequireDefault(_ServerSocketCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class
 */
class SocketBuilder {
  /**
   * @method
   * @return {Promise}
   */
  static buildClientSocket(options) {
    const clientSocketCreator = new _ClientSocketCreator2.default(options);
    const socket = clientSocketCreator.create();
    return socket;
  }

  /**
   * @method
   * @return {Promise}
   */
  static buildServerSocket(options) {
    const serverSocketCreator = new _ServerSocketCreator2.default(options);
    const socket = serverSocketCreator.create();
    return socket;
  }
}

exports.default = SocketBuilder;