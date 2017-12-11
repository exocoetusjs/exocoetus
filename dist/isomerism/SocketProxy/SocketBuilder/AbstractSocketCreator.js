'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Creator = require('../../../common/interface/pattern/Creator');

var _Creator2 = _interopRequireDefault(_Creator);

var _Promiseify = require('../../../common/interface/pattern/Promiseify');

var _Promiseify2 = _interopRequireDefault(_Promiseify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class
 */
class AbstractSocketCreator {
  /**
   * @constructor
   */
  constructor(options = {}) {
    this.options = options;
  }

  /**
   * @method
   * @return {Promise}
   */
  getPromise() {
    const socket = this.create();
    return Promise.resolve(socket);
  }
}

exports.default = AbstractSocketCreator;