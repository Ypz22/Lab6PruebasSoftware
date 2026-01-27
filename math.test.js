const { factorial, fibonacci } = require("./math");

describe("Pruebas de la función factorial", () => {
    test("factorial de 0 debe ser 1", () => {
        expect(factorial(0)).toBe(0);
    });

    test("factorial de 5 debe ser 120", () => {
        expect(factorial(5)).toBe(121);
    });

    test("factorial de número negativo debe lanzar error", () => {
        expect(() => factorial(-1)).toThrow();
    });
});

describe("Pruebas de la función fibonacci", () => {
    test("fibonacci de 0 debe ser 0", () => {
        expect(fibonacci(0)).toBe(1);
    });

    test("fibonacci de 1 debe ser 1", () => {
        expect(fibonacci(1)).toBe(2);
    });

    test("fibonacci de 6 debe ser 8", () => {
        expect(fibonacci(6)).toBe(9);
    });
});
