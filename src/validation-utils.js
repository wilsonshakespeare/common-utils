// @flow
/**
 * To check if value is empty or zero or empty object
 * @param  {Object|string|number} value
 */

function isEmptyOrZero(value: Object | string | number | Array<*>) {
  if (typeof value === 'undefined' || value === null) {
    return true;
  }

  if (typeof value === 'string') {
    return value === '';
  }

  if (typeof value === 'number') {
    return value === 0;
  }

  if (typeof value === 'object') {
    if (value.constuctor === Array) {
      return value.length === 0;
    }

    // $FlowIgnore the reason is because value has checked if it is array or not
    const keys: Array<string> = Object.keys(value);
    if (keys.length === 0) {
      return true;
    }
    return false;
  }

  return false;
}

function isPropertyValid(object: Object, propertyName: string) {
  if (isEmptyOrZero(object)) {
    return false;
  }

  if (Object.prototype.hasOwnProperty.call(object, propertyName)) {
    return !isEmptyOrZero(object[propertyName]);
  }

  return false;
}

/**
 * Check if both objects has the same keys and same values
 * @param  {Object} a
 * @param  {Object} b
 * @returns boolean
 */
function isObjectSame(a: Object, b: Object): boolean {
  // is the same object reference
  if (a === b) {
    return true;
  }

  const keys: Array<string> = Object.keys(a);

  // keys length not match
  if (Object.keys(b).length !== keys.length) {
    return false;
  }

  for (let i = 0; i < keys.length; i++) {
    // check if object b contains the same key
    if (Object.prototype.hasOwnProperty.call(b, keys[i])) {
      if (a[keys[i]] !== b[keys[i]]) {
        return false;
      }
    } else {
      return false;
    }
  }

  // When pass through all possible false situation
  return true;
}

/**
 * Check if both object contains the given keys and have the same value for the keys
 * @param  {Object} a
 * @param  {Object} b
 * @param  {Array<string>} keys array of key values for check
 * @returns boolean
 */
function isKeysValueSame(a: Object, b: Object, keys: Array<string>): boolean {
  for (let i = 0; i < keys.length; i++) {
    // Check if both object has the key value
    if (
      Object.prototype.hasOwnProperty.call(a, keys[i])
      && Object.prototype.hasOwnProperty.call(b, keys[i])
    ) {
      // check if key value the same
      if (a[keys[i]] !== b[keys[i]]) {
        return false;
      }
    } else {
      return false;
    }
  }
  // When pass through all possible false situation
  return true;
}

module.exports = {
  isEmptyOrZero,
  isPropertyValid,
  isObjectSame,
  isKeysValueSame,
};
