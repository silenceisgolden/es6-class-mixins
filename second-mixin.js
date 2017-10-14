/** @module second-mixin */

/**
 * Function to return the class mixin
 * @param {*} baseClass 
 */
export function SecondMixin (baseClass = class {}) {
  /**
   * Return the class extension
   * @return class
   */
  return class extends baseClass {
    /**
     * Log that second mixin was called
     */
    constructor() {
      super();

      console.log('second mixin called');
    }

    secondMixinMethod() {}
  }
}
