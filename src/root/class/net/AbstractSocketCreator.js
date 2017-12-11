import Creator from 'root/interface/pattern/Creator';
import Promiseify from 'root/interface/pattern/Promiseify';


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
    return new Promise((resolve, reject) => {
      resolve(this.create());
    });
  }
}

export default AbstractSocketCreator;
