import { Character } from "../src/model";

export const validateCharacter = (input: Character): boolean => {
    if (
        !input.name ||
        input.life === undefined ||
        input.strength === undefined ||
        input.defense === undefined
    ) {
        return false;
    }

    if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
        return false;
    }

    return true;
};

test("Deve retornar falso para campo 'name' vazio", () => {
    const result = validateCharacter({
        name: "",
        life: 1500,
        strength: 300,
        defense: 500,
    });

    expect(result).toBe(false);
});

test("Deve retornar falso para 'life' = 0 ", () => {
    const result = validateCharacter({
        name: "SubZero",
        life: 0,
        strength: 800,
        defense: 200,
    });

    expect(result).toBe(false);
});

test("Deve retornar falso para 'strength' = 0 ", () => {
    const result = validateCharacter({
        name: "SubZero",
        life: 1590,
        strength: 0,
        defense: 200,
    });

    expect(result).toBe(false);
});