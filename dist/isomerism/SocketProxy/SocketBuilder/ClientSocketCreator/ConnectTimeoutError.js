"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @class
 */
class ConnectTimeoutError extends Error {
  /**
   * @constructor
   */
  constructor(...args) {
    super(...args);
  }
}

exports.default = ConnectTimeoutError;