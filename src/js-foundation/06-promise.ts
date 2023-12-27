// const { http } = require("../plugins");

import { httpClientPlugin as httpClient } from "../plugins/http-client.plugin";

export const getPokemonById = async (id: number | number): Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await httpClient.get(url);
    return pokemon.name;
  } catch (error) {
    throw `Pokemon not found with id ${id}`;
  }

  /*return fetch(url)
    .then((resp) => resp.json())
    .then((resp) => resp.name); */

  //   const resp = await fetch(url);
  //   const pokemon = await resp.json();
};
