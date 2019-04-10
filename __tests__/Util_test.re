open Jest;
open Expect;

JestJs.mockWithFactory("os", () =>
  {"userInfo": () => {"username": "jest"}, "platform": () => "darwin"}
);

describe("Util", () =>
  describe("getSublimeTextPackageDir", () =>
    test("should return the macOS path", () =>
      expect(Util.getSublimeTextPackageDir())
      |> toBe(
           "/Users/jest/Library/Application Support/Sublime Text 3/Packages/",
         )
    )
  )
);