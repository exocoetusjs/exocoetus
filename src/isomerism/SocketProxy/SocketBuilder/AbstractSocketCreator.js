import Creator from 'common/interface/pattern/Creator';
import Promiseify from 'common/interface/pattern/Promiseify';


/**
 * @class
 */
class AbstractSocketCreator implements Creator, Promiseify {
  /**
   * @constructor
   */
  constructor(options: object = {}) {
    this.options = options;
  }

  /**
   * @method
   * @return {Promise}
   */
  getPromise(): Promise {
    const socket = this.create();
    return Promise.resolve(socket);
  }
}

export default AbstractSocketCreator;
