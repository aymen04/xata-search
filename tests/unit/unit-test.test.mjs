import { test, expect } from '@playwright/test';

// Vos tests ici...


function add(a, b) {
  return a + b;
}

test('Test d\'addition', () => {
  const num1 = 2;
  const num2 = 3;
  const result = add(num1, num2);
  expect(result).toBe(5);
});
