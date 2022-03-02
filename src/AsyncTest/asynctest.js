// callback 비동기 처리
const LoginFns = {
  cbLogin: (cb, result) => {
    setTimeout(() => {
      if (!result) {
        cb(() => {
          throw new Error("network 에러");
        });
      } else {
        cb(() => "로그인 성공");
      }
    }, 1000);
  },

  // promise 비동기 처리 & async await 비동기 처리
  promiseLogin: result => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!result)
          reject(() => {
            throw new Error("network 에러");
          });
        else resolve("로그인 성공");
      }, 1000);
    });
  }
};

module.exports = LoginFns;
