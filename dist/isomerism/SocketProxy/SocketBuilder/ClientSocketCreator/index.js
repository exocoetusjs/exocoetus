'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _AbstractSocketCreator = require('../AbstractSocketCreator');

var _AbstractSocketCreator2 = _interopRequireDefault(_AbstractSocketCreator);

var _ConnectTimeoutError = require('./ConnectTimeoutError');

var _ConnectTimeoutError2 = _interopRequireDefault(_ConnectTimeoutError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class
 */
class ClientSocketCreator extends _AbstractSocketCreator2.default {
  /**
   * @constructor
   */
  constructor(options) {
    super(options);
  }

  /**
   * @method
   * @return {Promise}
   */
  create() {
    const { options } = this;
    const { url } = options;
    const socket = new _socket2.default(url, options);

    return new Promise((resolve, reject) => {
      socket.on('connect', () => {
        resolve(socket);
      });
      socket.on('connect_error', error => {
        reject(error);
      });
      socket.on('connect_timeout', () => {
        const error = new _ConnectTimeoutError2.default();
        reject(error);
      });
    });
  }
}

exports.default = ClientSocketCreator;