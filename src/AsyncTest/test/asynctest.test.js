const { cbLogin, promiseLogin } = require("../asynctest.js");

describe("비동기 처리 테스트", () => {
  // callback;
  describe("callback 방식", () => {
    it("1초 뒤 로그인 성공", done => {
      function loginTest(result) {
        try {
          expect(result()).toBe("로그인 성공");
          done();
        } catch (error) {
          expect(() => result()).toThrow("network 에러");
          done();
        }
      }
      cbLogin(loginTest, true);
    });

    it("1초 뒤 로그인 실패", done => {
      function loginTest(result) {
        try {
          expect(result()).toBe("로그인 성공");
          done();
        } catch (error) {
          expect(() => result()).toThrow("network 에러");
          done();
        }
      }
      cbLogin(loginTest, false);
    });
  });

  // promise;
  describe("promise 방식", () => {
    it("done - 1초 뒤 로그인 성공", done => {
      promiseLogin(true).then(result => {
        expect(result).toBe("로그인 성공");
        done();
      });
    });

    it("done - 1초 뒤 로그인 실패", done => {
      promiseLogin(false)
        .then()
        .catch(result => {
          expect(() => result()).toThrow("network 에러");
          done();
        });
    });

    it("return - 1초 뒤 로그인 성공", () => {
      return promiseLogin(true).then(result => {
        expect(result).toBe("로그인 성공");
      });
    });

    it("return - 1초 뒤 로그인 실패", () => {
      return promiseLogin(false)
        .then()
        .catch(result => {
          expect(() => result()).toThrow("network 에러");
        });
    });

    it("resolves - 1초 뒤 로그인 성공", () => {
      return expect(promiseLogin(true)).resolves.toBe("로그인 성공");
    });

    it("rejects - 1초 뒤 로그인 실패", () => {
      return expect(promiseLogin(false)).rejects.toThrow("network 에러");
    });
  });

  // async await
  describe("async await 방식", () => {
    it("async await - 1초 뒤 로그인 성공", async () => {
      const result = await promiseLogin(true);
      expect(result).toBe("로그인 성공");
    });

    it("async await - 1초 뒤 로그인 실패", async () => {
      try {
        return await promiseLogin(false);
      } catch (result) {
        expect(() => result()).toThrow("network 에러");
      }
    });

    it("async await & resolvers - 1초 뒤 로그인 성공", async () => {
      return await expect(promiseLogin(true)).resolves.toBe("로그인 성공");
    });

    it("async await & rejects - 1초 뒤 로그인 실패", async () => {
      return await expect(promiseLogin(false)).rejects.toThrow("network 에러");
    });
  });
});
