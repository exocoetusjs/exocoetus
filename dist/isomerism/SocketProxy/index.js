'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _OptionsParameterError = require('../../common/class/error/OptionsParameterError');

var _OptionsParameterError2 = _interopRequireDefault(_OptionsParameterError);

var _AbstractVirtualProxy = require('commmon/class/pattern/AbstractVirtualProxy');

var _AbstractVirtualProxy2 = _interopRequireDefault(_AbstractVirtualProxy);

var _SocketBuilder = require('./SocketBuilder');

var _SocketBuilder2 = _interopRequireDefault(_SocketBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class
 */
class SocketProxy extends _AbstractVirtualProxy2.default {
  /**
   * @constructor
   */
  constructor(options = {}) {
    super();
    this.options = options;
  }

  /**
   * @method
   * @return {Promise}
   */
  establish() {
    const { options } = this;
    const { type } = options;
    switch (type) {
      case 'server':
        {
          return _SocketBuilder2.default.buildServerSocket(options);
        }
      case 'client':
        {
          return _SocketBuilder2.default.buildClientSocket(options);
        }
      default:
        {
          const message = 'Options parameter type should in set(server|client);';
          throw new _OptionsParameterError2.default(message);
        }
    }
  }

  /**
   * @method
   * @return {Promise}
   */
  requestSubject() {
    return this.establish();
  }
}

exports.default = SocketProxy;