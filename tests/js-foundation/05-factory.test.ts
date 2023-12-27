import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("js-foundation/05-factory.ts", () => {
  const getUUID = () => "1234";
  const getAge = () => 26;
  test("buildMakerPerson should return a function", (done) => {
    const makePerson = buildMakePerson({ getUUID, getAge });

    expect(typeof makePerson).toBe("function");

    done();
  });

  test("makePerson should return a person", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    const johnDoe = makePerson({ name: "John Doe", birthdate: "1997-01-15" });

    expect(johnDoe).toStrictEqual({
      id: "1234",
      name: "John Doe",
      birthdate: "1997-01-15",
      age: 26,
    });
  });
});
