import OptionsParameterError from 'root/class/error/OptionsParameterError';
import AbstractVirtualProxy from 'root/class/pattern/AbstractVirtualProxy';
import SocketBuilder from 'root/class/interface/SocketBuilder';
import SocketIOBuilder from './SocketIOBuilder';

/**
 * @class
 */
class SocketProxy extends AbstractVirtualProxy {
  /**
   * @constructor
   */
  constructor(options: { builder?: CovariantOf<SocketBuilder> } = {}) {
    super();
    this.options = options;
  }

  /**
   * @method
   * @return {Promise}
   */
  establish(): Promise {
    let { builder } = this;
    if (!(build: CovariantOf<SocketBuilder>)) {
      builder = new SocketIOBuilder();
    }

    const { options } = this;
    return builder.buildeSocket(options);
  }

  /**
   * @method
   * @return {Promise}
   */
  requestSubject(): Promise {
    return this.establish();
  }
}

export default SocketProxy;
