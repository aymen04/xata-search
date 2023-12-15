 
function add(a, b) {

    return a + b;

  }

  test('Test d\'addition', () => {

    // Arrange

    const num1 = 2;

    const num2 = 3;

    // Act

    const result = add(num1, num2);

    // Assert

    expect(result).toBe(5);

  });

 