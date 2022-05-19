import Calculadora from "../lib/Calculadora";

test('la suma de 2 y 3 es 5', () => {
    // arrange
    const calculadora = new Calculadora();
    // act
    const resultado = calculadora.suma(2, 3);
    // assert
    expect(resultado).toBe(5);
 })

 test('la suma de -1 y 1 es 0', () => {
    // arrange
    const calculadora = new Calculadora();
    // act
    const resultado = calculadora.suma(-1, 1);
    // assert
    expect(resultado).toBe(0);
 })