test("Rock vs Paper -> Paper should win", () => {
  const actual = rPS("rock", "paper");
  const expected = "The winner is paper";
  equal(actual, expected);
});

test("Rock vs Scissor -> Rock should win", () => {
  const actual = rPS("rock", "scissor");
  const expected = "The winner is rock";
  equal(actual, expected);
});

test("Paper vs Scissor -> Scissor should win", () => {
  const actual = rPS("paper", "scissor");
  const expected = "The winner is scissor";
  equal(actual, expected);
});

test("Paper vs Paper -> It should be a draw", () => {
  const actual = rPS("paper", "paper");
  const expected = "Draw";
  equal(actual, expected);
});

test("Rock vs Rock -> It should be a draw", () => {
  const actual = rPS("rock", "rock");
  const expected = "Draw";
  equal(actual, expected);
});

test("Scissor vs Scissor -> It should be a draw", () => {
  const actual = rPS("scissor", "scissor");
  const expected = "Draw";
  equal(actual, expected);
});

test("Paper vs Scissor -> Paper shouldn't win", () => {
  const actual = rPS("paper", "scissor");
  const expected = "The winner is paper";
  notEqual(actual, expected);
});

test("Paper vs Rock -> Rock shouldn't win", () => {
  const actual = rPS("paper", "rock");
  const expected = "The winner is rock";
  notEqual(actual, expected);
});

test("Scissor vs Rock -> Scissor shouldn't win", () => {
  const actual = rPS("scissor", "rock");
  const expected = "The winner is scissor";
  notEqual(actual, expected);
});
