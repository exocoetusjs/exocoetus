'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _OptionsParameterError = require('common/error/OptionsParameterError ');

var _OptionsParameterError2 = _interopRequireDefault(_OptionsParameterError);

var _AbstractSocketCreator = require('../AbstractSocketCreator');

var _AbstractSocketCreator2 = _interopRequireDefault(_AbstractSocketCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class
 */
class ServerSocketCreator extends _AbstractSocketCreator2.default {
  /**
   * @constructor
   */
  constructor(options) {
    super(options);
  }

  /**
   * @method
   * @return {object}
   */
  create() {
    const { options } = this;
    const { httpServer, port } = options;
    if (httpServer && port) {
      const message = 'options parameter can only contain one of (httpServer|port)';
      throw new _OptionsParameterError2.default(message);
    }

    let socket;
    if (httpServer) {
      socket = new _socket2.default(httpServer, options);
    } else if (port) {
      socket = new _socket2.default(port, options);
    } else {
      socket = new _socket2.default(options);
    }

    return socket;
  }
}

exports.default = ServerSocketCreator;