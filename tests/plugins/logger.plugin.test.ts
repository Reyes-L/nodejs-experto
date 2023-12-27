import { buildLogger } from "../../src/plugins";
import { logger as winstonLogger } from "../../src/plugins/logger.plugin";

describe("plugins/logger.plugin.ts", () => {
  test("buildLogger should return a function logger", () => {
    const logger = buildLogger("test");
    expect(typeof logger).toBe("object");
    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  test("logger.log should log a message", () => {
    const winstonLogggerMock = jest.spyOn(winstonLogger, "log");
    const message = "test message";
    const service = "test service";

    const logger = buildLogger(service);

    logger.log(message);

    expect(winstonLogggerMock).toHaveBeenCalledWith(
      "info",
      expect.objectContaining({
        level: "info",
        message,
        service,
      }),
    );
  });

  test("logger.error should error a message", () => {
    const winstonLogggerMock = jest.spyOn(winstonLogger, "error");

    expect(winstonLogggerMock).not.toHaveBeenCalled();
  });
});
