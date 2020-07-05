const productsData = [
  {
    id: 1,
    title: "Google Pixel - Black",
    img: "img/product-1.png",
    price: 100000,
    company: "GOOGLE",
    info:
      "구글에서 자체 기획하고 유통까지 책임지는 자체 하드웨어 브랜드이며, 안드로이드 혹은 크롬 OS를 사용하는 스마트폰, 태블릿 컴퓨터, 크롬북 등의 기기를 말한다. 2013년 크롬북 픽셀을 출시하면서 처음 픽셀이라는 브랜드명을 사용하기 시작하였으며, 이때는 단순히 구글이 직접 만든 크롬북 이름 정도로만 쓰였지만 2015년 태블릿 컴퓨터인 구글 픽셀 C를 출시하면서 영역을 안드로이드 운영체제로 확대하였다. 그리고 2016년 구글은 'Made by Google'이라는 슬로건을 내걸면서 구글 픽셀 스마트폰을 출시하였다. 태블릿 라인업은 픽셀 슬레이트를 마지막으로 더 이상 태블릿 컴퓨터를 개발하지 않는다 선언하였다",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 2,
    title: "Samsung Galaxy S7",
    img: "img/product-2.png",
    price: 160000,
    company: "SAMSUNG",
    info:
      "갤럭시 S7의 러기드 파생 모델이다. 개발 코드네임은 Poseidon. 전작들과 마찬가지로 미국 AT&T를 통해 출시되었다.전반적인 사양은 갤럭시 S 시리즈의 Active 라인업처럼 본가 모델과 사양이 동결이며 디자인 역시 패밀리룩을 이루고 있다. 또한, 지문인식 센서가 전면 홈 버튼에 내장되어 있어 전작보다 개선되었다. 특히, 배터리 용량이 4,000 mAh로 증가했고, 대신 그만큼 두꺼워졌다. 그리고 갤럭시 S 시리즈 최초로 비산방지 스크린이 적용되었다. 다만, 메탈 소재와 유리 소재를 사용한 본가 모델과는 달리 플라스틱 소재를 사용했다.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 3,
    title: "HTC 10 - Black",
    img: "img/product-3.png",
    price: 80000,
    company: "htc",
    info:
      "HTC의 2016년 타겟 플래그십 스마트폰으로 ONE M9의 후속작이다. LG전자의 옵티머스 G 후속작이 G2인 것처럼 ONE 시리즈에서 이탈했다. 전작이 기본형 모델인 ONE M9와 상위형 모델인 ONE M9 Plus로 이원화된 것과는 달리, 기본형 모델인 10과 하위형 모델인 10 Lifestyle로 이원화되어 공개되었다.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 4,
    title: "HTC 10 - White",
    img: "img/product-4.png",
    price: 180000,
    company: "htc",
    info:
      "HTC의 2016년 타겟 플래그십 스마트폰으로 ONE M9의 후속작이다. LG전자의 옵티머스 G 후속작이 G2인 것처럼 ONE 시리즈에서 이탈했다. 전작이 기본형 모델인 ONE M9와 상위형 모델인 ONE M9 Plus로 이원화된 것과는 달리, 기본형 모델인 10과 하위형 모델인 10 Lifestyle로 이원화되어 공개되었다.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 5,
    title: "HTC Desire 626s",
    img: "img/product-5.png",
    price: 240000,
    company: "htc",
    info:
      "HTC의 2016년 타겟 플래그십 스마트폰으로 ONE M9의 후속작이다. LG전자의 옵티머스 G 후속작이 G2인 것처럼 ONE 시리즈에서 이탈했다. 전작이 기본형 모델인 ONE M9와 상위형 모델인 ONE M9 Plus로 이원화된 것과는 달리, 기본형 모델인 10과 하위형 모델인 10 Lifestyle로 이원화되어 공개되었다.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 6,
    title: "Vintage Iphone",
    img: "img/product-6.png",
    price: 170000,
    company: "apple",
    info:
      "애플의 2016년형 아이폰 중 하나이자 아이폰 6s의 후속작이다. 전통적으로 애플은 숫자 넘버링이 올라가는 라인업과 숫자 넘버링은 유지한 채 s를 접미시킨 일종의 개선판 라인업을 격년 주기로 출시했었지만, 숫자 넘버링이 올라가는 라인업임에도 불구하고 아이폰 6s와 비교해 외관상 큰 변화가 없다. 소재를 포함해 대부분이 아이폰 6s를 그대로 계승했으며, 디자인에서의 차이점은 절연띠 디자인 및 다소 심해진 일명 카툭튀 현상, 그리고 카메라 렌즈 크기가 약간 커진게 전부이다. 기본 색상은 로즈 골드, 골드, 실버, 블랙, 제트 블랙으로 총 5종이다. 기존에 존재했던 스페이스 그레이 색상이 삭제되고 블랙과 제트 블랙 색상이 추가되었다. 아이폰 5 이후로 거의 4년 만에 풀 블랙이 돌아온 셈이다. 블랙 색상은 일반 무광 검정 계열, 제트 블랙 색상은 유광 검정 계열로 차이가 있으며 제트 블랙 색상은 고도의 광택 기술이 적용되어 유리 소재와 비슷한 느낌을 준다고 한다.[4] 다만 제트 블랙 색상의 경우 흠집에 취약한 편이라 기기를 보호하는 케이스 악세서리의 사용이 권장된다고 한다. 바람만 스쳐도 흠집나기로 유명하고, 아이폰 시리즈보다 상대적으로 출고가가 저렴한 일부 아이팟 터치에서도 이러한 권장사항이 없었음을 고려하면 얼마나 스크래치에 취약한 지 가늠해볼 수 있다.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 7,
    title: "Iphone 7",
    img: "img/product-7.png",
    price: 300000,
    company: "apple",
    info:
      "애플의 2016년형 아이폰 중 하나이자 아이폰 6s의 후속작이다. 전통적으로 애플은 숫자 넘버링이 올라가는 라인업과 숫자 넘버링은 유지한 채 s를 접미시킨 일종의 개선판 라인업을 격년 주기로 출시했었지만, 숫자 넘버링이 올라가는 라인업임에도 불구하고 아이폰 6s와 비교해 외관상 큰 변화가 없다. 소재를 포함해 대부분이 아이폰 6s를 그대로 계승했으며, 디자인에서의 차이점은 절연띠 디자인 및 다소 심해진 일명 카툭튀 현상, 그리고 카메라 렌즈 크기가 약간 커진게 전부이다. 기본 색상은 로즈 골드, 골드, 실버, 블랙, 제트 블랙으로 총 5종이다. 기존에 존재했던 스페이스 그레이 색상이 삭제되고 블랙과 제트 블랙 색상이 추가되었다. 아이폰 5 이후로 거의 4년 만에 풀 블랙이 돌아온 셈이다. 블랙 색상은 일반 무광 검정 계열, 제트 블랙 색상은 유광 검정 계열로 차이가 있으며 제트 블랙 색상은 고도의 광택 기술이 적용되어 유리 소재와 비슷한 느낌을 준다고 한다.[4] 다만 제트 블랙 색상의 경우 흠집에 취약한 편이라 기기를 보호하는 케이스 악세서리의 사용이 권장된다고 한다. 바람만 스쳐도 흠집나기로 유명하고, 아이폰 시리즈보다 상대적으로 출고가가 저렴한 일부 아이팟 터치에서도 이러한 권장사항이 없었음을 고려하면 얼마나 스크래치에 취약한 지 가늠해볼 수 있다.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 8,
    title: "Smashed Iphone",
    img: "img/product-8.png",
    price: 20000,
    company: "apple",
    info: "완전히 부서져버린 스마트폰.",
    inCart: false,
    count: 0,
    total: 0,
  },
];

export default productsData;
