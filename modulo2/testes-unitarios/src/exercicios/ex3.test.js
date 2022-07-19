import { checaItensDuplicados } from "./ex3";
checaItensDuplicados(['oi', 'tchau'])

describe("Checa itens duplicados", () => {
    test("retorta false oara [1,2]", () => {
        const ehPalindromo = checaItensDuplicados([1,2]);
        expect(ehPalindromo).toEqual(false);
    });
    test("retorta true oara [1, 2, 1]]", () => {
        const TemDuplicado = checaItensDuplicados([1, 2, 1]);
        expect(TemDuplicado).toEqual(true);
    });
    test("retorta true oara ['oi', 2, 'oi']", () => {
        const TemDuplicado = checaItensDuplicados(['oi', 2, 'oi']);
        expect(TemDuplicado).toEqual(true);
    });
    test("retorta false oara ['oi', 2, 'oI']", () => {
        const TemDuplicado = checaItensDuplicados(['oi', 2, 'oI']);
        expect(TemDuplicado).toEqual(false);
    });
});

