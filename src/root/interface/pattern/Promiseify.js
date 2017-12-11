/**
 * @interface
 */
interface Promiseify {
  /**
   * @method
   * @return {Promise}
   */
  getPromise(): Promise;
}

export default Promiseify;
