import { getPokemonById } from "../../src/js-foundation/06-promise";

describe("js-foundation/06-promise.ts", () => {
  test("getPokemonById should return a pokemon", async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);

    expect(pokemonName).toBe("bulbasaur");
  });

  test("should return an error if pokemon does not exist", async () => {
    const pokemonId = 10000;
    try {
      await getPokemonById(pokemonId);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
    }
  });

  test("should return a pokemon with the id 3", async () => {
    const pokemonId = 3;
    const pokemonName = await getPokemonById(pokemonId);
    expect(pokemonName).toBe("venusaur");
  });
});
