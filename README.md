# AfreecaTV Clone 만들기

프로젝트를 만드는 이유 : html ,css,javascript만으로 웹사이트를 나 혼자서 메인화면 클론코딩 할 수 있는지 테스트하기 위해서

아프리카티비를 개발자 콘솔로 확인해 보니 Jquery를 많이 사용했다. 난 지금 Jquery를 배울 맘이 없어서 기능은 다른 프로젝트에서 많이 연습하기로 하고 일단은 메인페이지의 html,css와 아주 간단한 js만 개발하도록 한다.

프로젝트 계획 : 

2020-05-24 05:09분 초기계획

아프리카티비 메인을 박스단위로 쪼개어 분석하고 눈에 보이는 부분을 카피
frontEnd Project로 계획 , backend서버는 없고 image도 저작권이 걸려있을 수 있으니 무료 이미지로 대체

## memo

css는 같은 속성을 여러 번 정의했을 때,  나중에 설정한 값이 정용된다. 나중에 설정한 값이 적용되지 않게 하려면 뒤에 !important를 붙인다


### 발생한 문제점

1.이미지 스프라이트 좌표 찾기

2020-05-23 18:19 이미지 스프라이트를 실시간 검색어에 적용하는데 좌표를 찾기가 힘든 문제점이 발생

해결 :개발자 콘솔을 이용하여 이미지를 다운받고 http://www.spritecow.com/ 사이트에 이미지를 넣어 좌표를 찾음 

2.css :before ,:after event효과주기

2020-05-24 분명 개발자콘솔로 분석한 css와 같은 옵션인대도 불구하고 마우스엔터를 했을때 :before의 opacity옵션이 변경되지 않는것을 확인

처음에는 자바스크립트로 제어하려고 했으나 구글링 결과 :before :after는 자바스크립트로 제어하기 힘들다고 함 .

결국 ~~~:before 옵션 아래 ~~~:hover:before를 만들어서 opacity를 수정하게 하여 문제를 해결함

### 작업 과정 중간 캡처

헤더 완성
![아프리카 헤더](https://user-images.githubusercontent.com/51103479/82740212-a3a40980-9d81-11ea-941d-21b3062c33eb.JPG)

나브바 완성
![나브바](https://user-images.githubusercontent.com/51103479/82740214-a4d53680-9d81-11ea-8d30-d5cc3cad87d8.JPG)

배너 완성
![배너완성](https://user-images.githubusercontent.com/51103479/83530542-d2ab3f80-a526-11ea-9bed-d6e6eae84e43.JPG)
