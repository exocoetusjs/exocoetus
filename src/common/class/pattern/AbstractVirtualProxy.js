import Proxy from 'common/interface/pattern/Proxy';

/**
 * @class
 */
class AbstractVirtualProxy<T> implements Proxy {
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
   */
  request(...args): T {
    const { subject } = this;
    if ((subject: null)) {
      this.subject = this.requestSubject(...args);
    }

    return this.subject;
  }
}

export default AbstractVirtualProxy;
