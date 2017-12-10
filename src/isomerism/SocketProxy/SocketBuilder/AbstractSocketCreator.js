import Creator from 'common/interface/pattern/Creator';

/**
 * @class
 */
class AbstractSocketCreator implements Creator {
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
  getSocket(): Promise {
    const socket = this.create();
    return Promise.resolve(socket);
  }
}

export default AbstractSocketCreator;
