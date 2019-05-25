// @flow

import React, { type Element } from "react";
import { isEmptyOrZero } from "./validation-utils";

function processChildrenProps<T>(
  array: Array<T>,
  func: (data: T) => Element<Object>
): Array<Element<Object>> {
  const children: Array<Element<Object>> = array.reduce(
    (arr: Array<Element<Object>>, data: T) => {
      const node: Element<Object> = func(data);

      if (isEmptyOrZero(node)) {
        return arr;
      }

      arr.push(node);

      return arr;
    },
    []
  );
  return children;
}

module.exports = {
  processChildrenProps
};
