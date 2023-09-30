# ‘항해 플러스 코육대’ 과제 토이프로젝트

![](https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F83c75a39-3aba-4ba4-a792-7aefe4b07895%2Fd59f4406-f0d1-4803-81d3-6c4446dbd186%2F03-%25E1%2584%258F%25E1%2585%25A9%25E1%2584%258B%25E1%2585%25B2%25E1%2586%25A8%25E1%2584%2583%25E1%2585%25A2_%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A5.png&blockId=dab15746-a2ae-4aeb-b63b-daaa50b26527)

명절에 놀면 뭐하겠는가, 아르바이트를 마치고 어떤 공부를 하면 좋을까 고민하던 중 문자가 한통 날아왔다.
부트캠프를 수료하고난 후 매서운 채용시장의 겨울 바람을 맞으며 굳어버린 코딩 뇌를 다시 깨울 수 있는 기회가 찾아왔다.

상품은 바라지도 않고, 적당한 과제가 있으니 그냥 해보면 공부가 될 것이라는 마음에 참여하기로 결정했다.

내가 선택한 프로젝트는 세뱃돈 계산기이다.
제목이 세뱃돈 계산기이긴 하지만 사칙연산이 가능한 계산기를 만드는 것이다.

복잡한 기능은 없다고 판단하여 불필요하게 많은 라이브러리를 사용할 필요는 없다고 생각했다.
따라서 오직 React와 JS를 이용해서 코드를 작성했다.
다만 CSS는 익숙한 스타일드 컴포넌트를 사용할까 고민하였지만 테일윈드를 사용하기로 결정했다.


테일윈드를 사용하기로 결정한 이유는 세가지가 있었다.

1. 클래스 이름만으로 스타일을 빠르게 완성할 수 있다.
2. CSS에 자바스크립트를 사용하지 않아 성능이 보다 나아진다.
3. 테일윈드의 장단점을 몸으로 느껴보고 싶었다.

앱의 디자인은 MacOS의 계산기를 참고하며 적용했다. 

입력은 키보드 입력을 받지 않는 오직 버튼 클릭만으로 동작하게 작성했다.
모바일에서 사용할때 가상 키보드가 팝업되는 것을 원치 않았기 때문이다.

사용 방법은 최대한 직관적이길 바랬다. 
누가 어떻게 봐도 "그래 이건 계산기로구만!" 하고 즉시 사용 가능해야한다.

그래서 요구사항에 없는 기능은 싹 들어내고 이걸 누르면 이렇게 동작하겠지라는 기능을 구현하려고 했다.


## 기능 구현 과정 

### 1. 입력 값을 받고, 연산자를 누른 후 새로운 입력 값을 받은 뒤 등호(=)를 누르면 결과가 나온다.
처음에 생각했던 방법이다. 이 방법은 직관적이긴 하지만 요구사항을 모두 만족하는 것은 어려웠다. 

이 방법을 이용해서 앱을 만들 경우 문제는 다음과 같다.


1. 연속되는 연산을 하기 어렵다. 
사실 이 문제는 연산 결과를 저장한 뒤 새 값을 받아 연산하는 것으로 해결이 가능하다. 
2. 입력 로그를 기록하는 복잡도가 높아진다. 
지저분한 하드 코딩을 하면 해결할 수는 있을 것이라고 생각하지만, 그렇게 계산기 만들 바에는 종이랑 펜으로 손으로 계산하는 것이 이로울 것 같았다.
3. 복합적인 연산을 정확히 수행할 수 없다. 
덧셈과 뺄셈만으로 동작하는 계산기라면 문제가 되지 않지만 사칙연산이 복합적으로 진행될 때는 이야기가 달라진다. 이 문제를 해결할 방법을 내 능력으로는 찾을 수 없었다. 



위와 같은 문제점으로 인해 과제 해결이 어렵다고 판단하여 작성했던 코드를 모두 날려버렸다.
-----
### 2. 입력 값을 모두 배열에 저장해서 입력 로그를 만들고 입력을 모두 마치면 배열을 문자열로 병합하여 수식을 만들어 계산을 하는 방법

이 방법으로 기능을 구현한다면 입력 로그를 생성하는 것도 간단해지고 복합 사칙 연산도 문제 없이 정상적으로 가능하다.
무엇보다 처음 시도했던 방법보다 로직의 복잡도와 난해함이 크게 줄어들었다. 

무엇보다 만족스러웠던 점은 이렇게 기능 구현할 경우 코드의 가독성이 더 좋아졌다는 점이다. 

또한 계산 결과와 제한 사항을 구현할 때 리액트 생명 주기를 활용할 수 있다는 점이 가장 큰 장점이다. 
useEffect를 활용해서 상태를 추적하고 상태에 따른 분기 처리를 통해서 훨씬 보기 편한 코드가 되었다. 


## 생각보다 어려웠다.

기능 설명을 읽었을 때는 단순하게 생각했으나 처음 로직을 잘못 설계하니 여러 예외상황에 대응할 수 없었고 작성한 코드도 알아보기 힘들어 고통스러웠다. 
힘들게 작성한 코드를 모두 지워야할 때는 한참이나 지우는게 옳은지 고민하였다. 

다행인 것은 빠르게 결단을 내린 덕분에 더 나은 방법으로 기능을 구현할 수 있었던 점이다.
매끄럽지 않게 동작하는 부분들이 종종 보이고 가끔씩 버그가 ... 눈에 띈다. 
싱글 스레드로 동작하는 자바스크립트의 이벤트 루프 문제일 것 같지만 당장 이를 해결할 방법은 떠오르지 않아 손을 대지 못하고 있다. 
AC 버튼을 한번 더 눌러주면 되기 때문에 방법이 떠오를 때 까지는 잠시 보류해야겠다.


앱은 vercel을 통해 배포되어 있다.

