'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Creator = require('../../../common/pattern/Creator');

var _Creator2 = _interopRequireDefault(_Creator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class
 */
class SocketCreator {
  /**
   * @constructor
   */
  constructor(options = {}) {
    this.options = options;
  }

  /**
   * @method
   * @return {promise}
   */
  getSocket() {
    const socket = this.create();
    return Promise.resolve(socket);
  }
}

exports.default = Socket;