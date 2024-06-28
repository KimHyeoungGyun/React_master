const { createProxyMiddleware } = require("http-proxy-middleware");


// 프록시 미들웨어 서버 생성 -->
// 클라이언트 주소 일시적으로 네이버 api 주소와 같게 만들기위함
module.exports = function (app) {
  app.use(
    // /v1 -> api endPoint(API 에 접근 할 수 있는 마지막 주소)
    // 주의! 각각의 api 마다 endPoint가 다르므로 꼭 문서에서 확인이 필요하닫!
    createProxyMiddleware("/v1", {
    // 바꿔지는 주소값
      target: "https://openapi.naver.com",
    //   출처를 바꾸는 행위를 허용 하겠습니다.
      changeOrigin: true,
    })
  );
};