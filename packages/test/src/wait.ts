Wait.time(() => log("done"), 1);

Wait.condition(
  () => log("success"),
  () => false,
  100,
  () => log("Error")
);

Wait.condition(
  () => log("success"),
  () => false
);

const timer = Wait.frames(() => log("success"));
Wait.frames(() => log("success"), 10);

Wait.stop(timer);
Wait.stopAll();
