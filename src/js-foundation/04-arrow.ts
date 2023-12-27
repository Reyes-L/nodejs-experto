interface User {
  id: number;
  name: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Jane Doe",
  },
  {
    id: 2,
    name: "Jan Doe",
  },
];

export const getUserById = (
  id: number,
  callback: (err?: string, user?: User) => void,
) => {
  const user = users.find((user) => user.id === id);
  if (!user) {
    throw new Error(`No se encontro el usuario por el id ${id}`);
  }

  return callback(undefined, user);
};
