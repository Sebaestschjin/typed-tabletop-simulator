type EventHandler = (...args: any[]) => unknown;

const eventHandlers = new Map<string, EventHandler[]>();
const saveModules = new Map<string, [OnLoadHandler, OnSaveHandler]>();

export const addEventHandler = (eventName: string, handler: EventHandler) => {
  if (!hasGlobalFunction(eventName)) {
    addGlobalHandler(eventName);
  }

  if (!eventHandlers.has(eventName)) {
    eventHandlers.set(eventName, []);
  }

  eventHandlers.get(eventName)!.push(handler);
};

export function addSaveModule(moduleName: string, onLoad: OnLoadHandler, onSave: OnSaveHandler): void {
  saveModules.set(moduleName, [onLoad, onSave]);
}

export const triggerEvent = (eventName: string, ...args: any[]) => {
  if (hasGlobalFunction(eventName)) {
    _G[eventName](...args);
  }
};

const previousOnLoad = onLoad;

onLoad = (savedState?: string) => {
  notifyHandlers("onLoad", savedState);
  for (const object of getObjects()) {
    notifyHandlers("onObjectSpawn", object);
  }

  if (previousOnLoad !== undefined) {
    previousOnLoad(savedState);
  }
};

const hasGlobalFunction = (eventName: string): boolean => {
  return _G[eventName] !== undefined;
};

const addGlobalHandler = (eventName: string) => {
  const handler = (...args: any[]) => {
    const handlers = eventHandlers.get(eventName) ?? [];
    let result;
    for (const handler of handlers) {
      const handlerResult = handler(...args);
      result = result ?? handlerResult;
    }

    return result;
  };

  _G[eventName] = handler;
};

const notifyHandlers = (eventName: string, ...args: any[]) => {
  const handlers = eventHandlers.get(eventName) ?? [];
  let result;
  for (const handler of handlers) {
    const handlerResult = handler(...args);
    result = result ?? handlerResult;
  }

  return result;
};
