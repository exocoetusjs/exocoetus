/**
 * @interface
 */
interface Proxy {
  /**
   * @method
   * @return {mixed}
   */
  requestSubject(): mixed;

  /**
   * @method
   * @return {mixed}
   */
  request(): mixed;
}

export default Proxy;
