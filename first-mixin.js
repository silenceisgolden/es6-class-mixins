/** @module first-mixin */

/**
 * Function to return the class mixin
 * @param {*} baseClass 
 */
export function FirstMixin (baseClass = class {}) {
  /**
   * Return the class extension
   * @return class
   */
  return class extends baseClass {
    /**
     * Log that first mixin was called
     */
    constructor() {
      super();

      console.log('first mixin called');
    }
    
    firstMixinMethod() {}
  }
}
