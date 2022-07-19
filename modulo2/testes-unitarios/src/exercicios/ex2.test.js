import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  test("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  test("retorna true pra ovo", () => {
    const ehPalindromo = checaPalindromo("ovo");
    expect(ehPalindromo).toEqual(true);
  });

  test("retorna false pra oval", () => {
    const ehPalindromo = checaPalindromo("oval");
    expect(ehPalindromo).toEqual(false);
  });

  test("retorna true pra Arara ou ararA", () => {
    const ehPalindromo = checaPalindromo("Socorram me subi no onibus em Marrocos");
    expect(ehPalindromo).toEqual(true);
  });
});
