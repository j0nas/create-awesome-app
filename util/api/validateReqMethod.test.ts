import validateReqMethod from "./validateReqMethod";

describe("validateReqMethod", () => {
  it("should return true for allowlisted methods", () =>
    expect(validateReqMethod(["GET", "POST", "PUT"], "GET")).toBe(true));

  it("should return false for undefined method", () =>
    expect(validateReqMethod(["GET", "POST", "PUT"])).toBe(false));

  it("should return false for method not in allowlist", () =>
    expect(validateReqMethod(["GET", "POST", "PUT"], "PATCH")).toBe(false));
});

export {};
