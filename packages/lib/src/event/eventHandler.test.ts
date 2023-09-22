import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import * as EventHandler from "./eventHandler";

describe("EventHandler", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.stubGlobal("_G", {});
  });

  test("adds event to _G", () => {
    const eventName = "onObjectDestroy";
    const handler = vi.fn().mockImplementation(() => {});

    EventHandler.addEventHandler(eventName, handler);

    expect(_G[eventName]).to.be.toBeDefined;
  });

  test("call handler with parameter", () => {
    const eventName = "onObjectDestroy";
    const paramA = "foobar";
    const paramB = 42;
    const handler = vi.fn().mockImplementation(() => {});

    EventHandler.addEventHandler(eventName, handler);

    expect(_G[eventName]).to.be.toBeDefined;

    const result = _G[eventName](paramA, paramB);

    expect(result).to.toBeUndefined;
    expect(handler).to.toHaveBeenCalledTimes(1);
    expect(handler).to.toHaveBeenCalledWith(paramA, paramB);
  });

  test("call multiple handlers with parameter", () => {
    const eventName = "onObjectDestroy";
    const paramA = "foobar";
    const paramB = 42;
    const handlerA = vi.fn().mockImplementation(() => {});
    const handlerB = vi.fn().mockImplementation(() => {});

    EventHandler.addEventHandler(eventName, handlerA);
    EventHandler.addEventHandler(eventName, handlerB);

    expect(_G[eventName]).to.be.toBeDefined;

    const result = _G[eventName](paramA, paramB);

    expect(result).to.toBeUndefined;
    expect(handlerA).to.toHaveBeenCalledTimes(1);
    expect(handlerA).to.toHaveBeenCalledWith(paramA, paramB);
    expect(handlerB).to.toHaveBeenCalledTimes(1);
    expect(handlerB).to.toHaveBeenCalledWith(paramA, paramB);
  });

  test("returns value from handlers", () => {
    const eventName = "onChat";
    const handlerA = vi.fn().mockImplementation(() => true);

    EventHandler.addEventHandler(eventName, handlerA);

    expect(_G[eventName]).to.be.toBeDefined;

    const result = _G[eventName]();

    expect(handlerA).to.toHaveBeenCalledTimes(1);
    expect(result).to.be.true;
  });

  test("returns value from multipe handlers", () => {
    const eventName = "onChat";
    const handlerA = vi.fn().mockImplementation(() => false);
    const handlerB = vi.fn().mockImplementation(() => true);

    EventHandler.addEventHandler(eventName, handlerA);
    EventHandler.addEventHandler(eventName, handlerB);

    expect(_G[eventName]).to.be.toBeDefined;

    const result = _G[eventName]();

    expect(handlerA).to.toHaveBeenCalledTimes(1);
    expect(handlerB).to.toHaveBeenCalledTimes(1);
    expect(result).to.be.false;
  });

  test("trigger handlers with parameter", () => {
    const eventName = "onObjectDestroy";
    const paramA = "foobar";
    const paramB = 42;
    const handlerA = vi.fn().mockImplementation(() => {});

    EventHandler.addEventHandler(eventName, handlerA);

    expect(_G[eventName]).to.be.toBeDefined;

    EventHandler.triggerEvent(eventName, paramA, paramB);

    expect(handlerA).to.toHaveBeenCalledTimes(1);
    expect(handlerA).to.toHaveBeenCalledWith(paramA, paramB);
  });
});
