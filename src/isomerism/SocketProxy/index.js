import OptionsParameterError from 'common/class/error/OptionsParameterError';
import AbstractVirtualProxy from 'commmon/class/pattern/AbstractVirtualProxy';
import SocketBuilder from './SocketBuilder';

/**
 * @class
 */
class SocketProxy extends AbstractVirtualProxy<Promise> {
  /**
   * @constructor
   */
  constructor(options: { type: string } = {}) {
    super();
    this.options = options;
  }

  /**
   * @method
   * @return {Promise}
   */
  establish(): Promise {
    const { options } = this;
    const { type } = options;
    switch (type) {
      case 'server': {
        return SocketBuilder.buildServerSocket(options);
      }
      case 'client': {
        return SocketBuilder.buildClientSocket(options);
      }
      default: {
        const message = 'Options parameter type should in set(server|client);';
        throw new OptionsParameterError(message);
      }
    }
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
