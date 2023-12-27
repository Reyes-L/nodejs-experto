import { httpClientPlugin as httpClient } from "../../src/plugins/http-client.plugin";

describe("plugins/http-client.plugin.ts", () => {
  test("httpClientPlugin.get() should return a object", async () => {
    const data = await httpClient.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean),
    });
  });

  test('httpClientPlugin should have a "post", "put" and "delete" method', async () => {
    expect(typeof httpClient.post).toBe("function");
    expect(typeof httpClient.put).toBe("function");
    expect(typeof httpClient.delete).toBe("function");
  });

  test("httpClientPlugin.post() should return a error", async () => {
    try {
      await httpClient.post("https://jsonplaceholder.typicode.com/todos/1", {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: expect.any(Boolean),
      });
    } catch (error) {
      expect(error).toEqual(new Error("Method not implemented."));
    }
  });
});
