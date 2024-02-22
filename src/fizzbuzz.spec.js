import generarfizzbuzz from "./fizzbuzz.js";

describe("Sumar", () => {
  it("Deberia generar un numero sin regla como el 1", () => {
    expect(generarfizzbuzz(1)).toEqual("1");
  });
});


