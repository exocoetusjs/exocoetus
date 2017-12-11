import Proxy from 'root/interface/pattern/Proxy';

/**
 * @class
 */
class AbstractVirtualProxy implements Proxy {
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
  static getInstances(): object {
    return {
      subject: null,
    };
  }

  /**
   * @method
   * @return {mixed}
   */
  request(...args): mixed {
    const { subject } = this;
    if ((subject: null)) {
      this.subject = this.requestSubject(...args);
    }

    return this.subject;
  }
}

export default AbstractVirtualProxy;
