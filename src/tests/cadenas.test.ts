import Cadenas from "../lib/Cadenas";

test('Invertir "abc" devuelve "cba"', () => { 
    // arramge
    const cad = new Cadenas();
    const valor = "abc";
    const resultadoEsperado = "cba";
    // act
    const resultado = cad.invertir(valor);

    // assert
    expect(resultado).toBe(resultadoEsperado);

 })