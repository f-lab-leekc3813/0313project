import styled from 'styled-components';
import '../App.css';

const MainArea = styled.div`
  background-image: url('https://i.pinimg.com/564x/25/2a/85/252a8531ff0b79234be74178758db6da.jpg');
  background-repeat: no-repeat;
  background-position: right;

  max-height: 864px;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 128px 0px 0 0px;

  div.text {
    width: 1200px;
    margin: 0 auto;
    p {
      position: relative;
      top: 60px;
      width: 100%;
      height: auto;
      color: black;
      font-weight: 600;
      font-size: 60px;
      letter-spacing: 6px;
      line-height: 1.4;
    }
  }
`;

const Render = () => {
  return (
    <>
      <MainArea>
        <div className="text">
        <body>
          <div class="inform">
              <h2>요금제 선택하기</h2>
              <p>휴대폰, 스피커 및 기타기기에서 제한없이 마음껏 들으세요</p>
          </div>
          <div class="wrapper">
              <article class="pricing">
                  <div class="pricing-plan">
                      <span class="free-duration">3개월 무료</span>
                      <h3 class="pricing-header">베이직</h3>
                      <p class="pricing-header-sub">체험기간 이후 매월 7,900원(부가세 별도)<br />
                      계정 1개</p> 
                      <ul class="pricing-features">
                          <li>무광고로 음악 감상하기</li>
                          <li>나만의 맞춤 플레이리스트</li>
                          <li>8천만 곡 감상 가능</li>
                          <li>여러 디바이스에서 감상</li>
                      
                      </ul>
                      <a href="#/" class="pricing-button">시작하기</a>
                      <p class="tos">베이직 요금제에만 적용됩니다.</p>
                  </div>
          
                  <div class="pricing-plan">
                      <span class="free-duration">3개월 무료</span>
                      <h3 class="pricing-header">개인</h3>
                      <p class="pricing-header-sub">체험기간 이후 매월 10,900원 정기결제(부가세 별도).<br />
                      계정 1개</p>
                      <ul class="pricing-features">
                          <li>무광고로 음악 감상하기</li>
                          <li>다운로드하여 오프라인에서 감상</li>
                          <li>나만의 맞춤 플레이리스트</li>
                          <li>8천만 곡 감상 가능</li>
                          <li>여러 디바이스에서 감상</li>
                      </ul>
                      <a href="#/" class="pricing-button">시작하기</a>

                      <p class="tos">체험기간 이후 매월 정기결제 됩니다.</p>
                  </div>
          
                  <div class="pricing-plan">
                      
                      <span class="free-duration">1개월 무료</span>
                      <h3 class="pricing-header">듀오</h3>
                      <p class="pricing-header-sub">체험기간 이후 매월 16,350원 정기결제(부가세 별도)<br />
                      계정 2개</p>
                      <ul class="pricing-features">
                          <li>Premium 별도 계정 2개</li>
                          <li>무광고로 음악 감상하기</li>
                          <li>다운로드하여 오프라인에서 감상</li>
                          <li>나만의 맞춤 플레이리스트</li>
                          <li>8천만 곡 감상 가능</li>
                          <li>여러 디바이스에서 감상</li>
                      </ul>
                      <a href="#/" class="pricing-button">시작하기</a>
                      <p class="tos">이용약관이 적용됩니다.</p>
                  </div>
              </article>
          </div>
          
      </body>


        </div>
      </MainArea>
    </>
  );
};

export default Render;
