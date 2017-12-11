'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ClientSocketCreator = require('./ClientSocketCreator');

var _ClientSocketCreator2 = _interopRequireDefault(_ClientSocketCreator);

var _ServerSocketCreator = require('./ServerSocketCreator');

var _ServerSocketCreator2 = _interopRequireDefault(_ServerSocketCreator);

var _AbstractSocketCreator = require('./AbstractSocketCreator');

var _AbstractSocketCreator2 = _interopRequireDefault(_AbstractSocketCreator);

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
    const creator = new _ClientSocketCreator2.default(options);
    return clientSocketCreator.getPromise();
  }

  /**
   * @method
   * @return {Promise}
   */
  static buildServerSocket(options) {
    const creator = new _ServerSocketCreator2.default(options);
    return clientSocketCreator.getPromise();
  }
}

exports.default = SocketBuilder;