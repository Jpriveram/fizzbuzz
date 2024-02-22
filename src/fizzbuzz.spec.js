import generarfizzbuzz from "./fizzbuzz.js";

describe("Sumar", () => {
  it("Deberia generar un numero sin regla el 1", () => {
    expect(generarfizzbuzz(1)).toEqual("1");
  });

  it("Deberia generar otro numero sin regla como el 2", () => {
    expect(generarfizzbuzz(2)).toEqual("2");
  });

  it("Deberia generar fizz para numero 3", () => {
    expect(generarfizzbuzz(3)).toEqual("FIZZ");
  });

  it("Deberia generar fizz para numeros multiplos de 3 como el 6", () => {
    expect(generarfizzbuzz(6)).toEqual("FIZZ");
  });
});


