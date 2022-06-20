const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function() {
  // Logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //배지 숨기기
    //gsap.to(요소, 지속시간-초, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0 //버튼을 보일 수 있도록 원래 위치로 이동
    });
  }
  else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100 //버튼을 숨길 수 있도록 오른쪽으로 100px 만큼 이동
    });
  }
}, 300));
// _.throttle(함수, 시간)

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0 //맨 위로 이동
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간-초, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //index는 0부터 넘버링 되기 때문에 1을 더함 //0.7, 1.4, 2.1, 2.8
    opacity: 1
  });
});


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical', // 방향 (수직)
  autoplay: true, // 자동 재생
  loop: true // 반복 재생
});

new Swiper('.promotion .swiper', {
  // direction: 'horizontal', // 방향(기본값 수평)
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 반복 재생
  autoplay: {
    delay: 5000, // 5초
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper', {
  autoplay: true, // 자동 재생
  loop: true, // 반복 재생
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한번에 보여줄 슬라이드 개수
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; // 다른 값으로 재할당 가능
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion // ! 뒤에 있는 값의 반대가 되게 만들어줌 (거짓이면 참, 참이면 거짓이 재할당)
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  //gsap.to(요소, 동작시간, 옵션);
  gsap.to(
    selector, 
    random(1.5, 2.5), 
    {
      y: size, //y축으로 얼마만큼 움직이면서 애니메이션 할 것인지
      repeat: -1, // 무한 반복(자바스크립트 라이브러리에서 지원하는 기능)
      yoyo: true, // 내려왔다 올라왔다 반복
      ease: Power1.easeInOut,
      delay: random(0,delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 뷰포트 0.8 지점에 걸리면 감시됨
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2022