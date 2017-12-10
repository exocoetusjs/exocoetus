"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @class
 */
class OptionsParameterError extends Error {
  /**
   * @constructor
   */
  constructor(...args) {
    super(...args);
  }
}

exports.default = OptionsParameterError;