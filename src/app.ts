// const { emailTemplate } = require("./js-foundation/01-template");
// require("./js-foundation/02-destructuring");
// const { getUserById } = require("./js-foundation/03-callbacks");
/* const { getUUID, getAge } = require("./plugins");
const { buildMakePerson } = require("./js-foundation/05-factory");
 */

// import { getPokemonNameById } from "./js-foundation/06-promise";
// import { buildLogger } from "./plugins/logger.plugin";

// const { getPokemonById } = require("./js-foundation/06-promise");
// const { buildLogger } = require("./plugins");

// getPokemonById(1)
//   .then((pokemon) => {
//     console.log({ pokemon });
//   })
//   .catch((err) => {
//     console.log("Pokemon no existe");
//   })
//   .finally(() => console.log("Finalmente"));

// getPokemonNameById(1).then((resp) => {
//   console.log(resp);
// });

// const logger = buildLogger("app.js");
// logger.log("hola mundo");
// logger.error("Esto es algo malo");

//! Referencia a la funcion factory y uso
/* const makePerson = buildMakePerson({ getUUID, getAge });

const obj = {
  name: "Luis",
  birthdate: "1997-01-15",
};

const john = makePerson(obj);
console.log({ john });
 */
