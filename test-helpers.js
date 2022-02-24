function equal(actual, expected) {
  if (actual === expected) {
    console.info(`Passed the test: ${actual} equals ${expected}`);
  } else {
    console.error(
      `Failed the test:  expected ${expected}, but received ${actual}`
    );
  }
}

function notEqual(actual, expected) {
  if (actual !== expected) {
    console.info(`Passed the test: ${actual} is different to ${expected}`);
  } else {
    console.error(`Failed the test: ${actual} equals ${expected}`);
  }
}

function test(name, fnName) {
  console.group(name);
  fnName();
  console.groupEnd(name);
}
