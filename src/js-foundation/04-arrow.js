"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users = [
    {
        id: 1,
        name: "Jane Doe",
    },
    {
        id: 2,
        name: "Jan Doe",
    },
];
const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);
    if (!user) {
        throw new Error(`No se encontro el usuario por el id ${id}`);
    }
    return callback(undefined, user);
};
exports.getUserById = getUserById;
