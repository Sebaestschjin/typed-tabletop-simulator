const handlerFunctions = new Map<UIHandler, string>();

/**
 * Returns the name of a global UI handler function for the given local handler function.
 *
 * @param func The function to call
 */
export const getHandlerName = (func: UIHandler): string => {
  let handlerName = handlerFunctions.get(func);
  if (!handlerName) {
    handlerName = "__uiHandler_" + handlerFunctions.size;
    _G[handlerName] = func;
    handlerFunctions.set(func, handlerName);
  }

  return handlerName;
};
