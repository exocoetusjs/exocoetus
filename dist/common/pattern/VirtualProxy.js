'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Proxy = require('./Proxy');

var _Proxy2 = _interopRequireDefault(_Proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class
 */
class AbstractVirtualProxy {
  /**
   * @constructor
   */
  constructor() {
    const { getInstances } = this.constructor;
    Object.assign(this, getInstance());
  }

  /**
   * @static
   * @return {object}
   */
  static getInstances() {
    return {
      remoteSubject: null
    };
  }

  /**
   * @method
   */
  request(...args) {
    const { subject } = this;
    if (subject === null) {
      this.subject = this.requestSubject(...args);
    }

    return this.subject;
  }
}

exports.default = AbstractVirtualProxy;