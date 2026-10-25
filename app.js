/**
 * 도담도배 (DoDam Wallpaper Craft & Tools)
 * Interactive Application Logic
 */

// ===================================================================
// 1. Data Definitions (Projects, Reviews, Tools)
// ===================================================================

const PORTFOLIO_PROJECTS = [
  {
    id: 'proj-1',
    category: 'living',
    categoryName: '거실 / 아파트 (34평형)',
    title: '강남 개포 래미안 실크벽지 전체 리뉴얼',
    desc: '기존 들뜬 실크벽지 완전 철거 후 친환경 부직포 띄움 시공. 은은한 웜화이트 패브릭 질감 실크로 호텔 라운지 분위기를 구현했습니다.',
    material: 'LX 프리미엄 친환경 실크 (웜화이트)',
    duration: '1일 (숙련 도배사 3인 투입)',
    rating: '★ 5.0 / 5.0',
    location: '서울 강남구 개포동',
    icon: '🛋️',
    beforeStyle: {
      wallColor: '#232733',
      pattern: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 60px, transparent 60px, transparent 120px)',
      stain1: 'rgba(140, 110, 70, 0.4)',
      stain2: 'rgba(120, 90, 60, 0.35)'
    },
    afterStyle: {
      wallBg: 'radial-gradient(circle at 50% 30%, rgba(229, 169, 60, 0.18) 0%, transparent 70%), linear-gradient(180deg, #1A2740 0%, #152035 100%)',
      silkColor: 'rgba(244, 196, 106, 0.12)'
    }
  },
  {
    id: 'proj-2',
    category: 'bedroom',
    categoryName: '침실 / 아이방 (24평형)',
    title: '송파 헬리오시티 파스텔 그린 친환경 도배',
    desc: '어린 자녀의 아토피를 고려하여 100% 천연 밀풀 및 독일 수용성 실리콘 사용. 틈새 벌어짐 없이 아늑한 톤온톤 침실 완성.',
    material: '신한 친환경 에어코트 실크벽지',
    duration: '1일 (도배사 2인 투입)',
    rating: '★ 5.0 / 5.0',
    location: '서울 송파구 가락동',
    icon: '🛏️',
    beforeStyle: {
      wallColor: '#2A2925',
      pattern: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 30px, transparent 30px, transparent 60px)',
      stain1: 'rgba(110, 100, 70, 0.35)',
      stain2: 'rgba(90, 80, 50, 0.3)'
    },
    afterStyle: {
      wallBg: 'radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.15) 0%, transparent 70%), linear-gradient(180deg, #152A28 0%, #0F1F1D 100%)',
      silkColor: 'rgba(52, 211, 153, 0.12)'
    }
  },
  {
    id: 'proj-3',
    category: 'commercial',
    categoryName: '상가 / 스튜디오 (45평형)',
    title: '성수동 감성 셀렉트숍 무몰딩 특수 도배',
    desc: '층고 3.2m의 높은 공간에 방염 시험성적서 인증 프리미엄 수입 질감 벽지 시공. 칼선 단차 0.1mm 오차 없는 장인 마감.',
    material: '프랑스 수입 텍스처 벽지 (방염)',
    duration: '2일 (도배사 4인 투입)',
    rating: '★ 5.0 / 5.0',
    location: '서울 성동구 성수동',
    icon: '🏬',
    beforeStyle: {
      wallColor: '#21252B',
      pattern: 'radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)',
      stain1: 'rgba(80, 80, 80, 0.5)',
      stain2: 'rgba(50, 50, 50, 0.4)'
    },
    afterStyle: {
      wallBg: 'radial-gradient(circle at 60% 30%, rgba(139, 92, 246, 0.18) 0%, transparent 70%), linear-gradient(180deg, #221B35 0%, #151022 100%)',
      silkColor: 'rgba(196, 181, 253, 0.12)'
    }
  },
  {
    id: 'proj-4',
    category: 'living',
    categoryName: '빌라 / 노후주택 (28평형)',
    title: '마포 연남동 노후 빌라 결로·곰팡이 완벽 차단 도배',
    desc: '외벽 결로로 곰팡이가 심했던 벽면을 3중 항균 코팅 및 특수 방습 초배지 시공 후 화사한 베이지 톤 광폭 합지로 가성비 리뉴얼.',
    material: '개나리 프리미엄 광폭 합지 (소프트베이지)',
    duration: '1일 (도배사 2인 투입)',
    rating: '★ 4.9 / 5.0',
    location: '서울 마포구 연남동',
    icon: '🏡',
    beforeStyle: {
      wallColor: '#1E232A',
      pattern: 'linear-gradient(90deg, #181C22 50%, #20262E 50%)',
      stain1: 'rgba(30, 60, 40, 0.7)',
      stain2: 'rgba(40, 50, 45, 0.6)'
    },
    afterStyle: {
      wallBg: 'radial-gradient(circle at 50% 40%, rgba(229, 169, 60, 0.15) 0%, transparent 70%), linear-gradient(180deg, #27231E 0%, #1A1713 100%)',
      silkColor: 'rgba(250, 204, 110, 0.1)'
    }
  }
];

// Sample Initial Verified Customer Reviews
const INITIAL_REVIEWS = [
  {
    id: 'rev-1',
    author: '김*진 고객님',
    type: 'silk',
    typeName: '친환경 실크도배',
    space: '송파 헬리오시티 34평 (전체 시공)',
    rating: 5,
    date: '2026.03.18',
    content: '타 업체에서 거실 몰딩 칼선이 다 울어서 스트레스받다가 도담도배 박 대표님께 재시공 맡겼습니다. 칼받이 각도부터 부직포 띄움 시공까지 진짜 장인이세요. 조명 비출 때 울퉁불퉁한 게 하나도 안 보입니다. 강력 추천합니다!',
    helpful: 34
  },
  {
    id: 'rev-2',
    author: '이*훈 고객님',
    type: 'silk',
    typeName: '친환경 실크도배',
    space: '마포 래미안 푸르지오 25평 (거실+안방)',
    rating: 5,
    date: '2026.03.11',
    content: '아이가 비염이 심해서 친환경 풀 쓰는 곳을 찾다가 상담받았습니다. 시공 당일에도 풀 냄새나 본드 냄새가 전혀 없었고 바닥 보양 작업도 깔끔하게 해주셨네요. 폐기물도 싹 수거해 주셔서 감동이었습니다.',
    helpful: 28
  },
  {
    id: 'rev-3',
    author: '박*서 고객님',
    type: 'paper',
    typeName: '고급 광폭 합지',
    space: '용산 투룸 빌라 18평 (전체 도배)',
    rating: 5,
    date: '2026.02.27',
    content: '전세 놓으려고 가성비 합지도배를 의뢰했는데, 솔직히 다른 집 실크 못지않게 이음매가 티 안 나고 정갈합니다. 견적 계산기에서 나온 금액 그대로 추가 비용 없이 딱 맞춰주셨습니다.',
    helpful: 19
  },
  {
    id: 'rev-4',
    author: '정*우 고객님',
    type: 'partial',
    typeName: '부분/누수보수',
    space: '분당 정자동 파크뷰 천장 누수 복구',
    rating: 5,
    date: '2026.02.15',
    content: '윗집 누수로 거실 천장 석고보드와 벽지가 곰팡이 피어 골치 아팠는데, 곰팡이 방지 프라이머 발라주시고 같은 품번 벽지 구해다가 티 하나도 안 나게 맞춰주셨습니다. 실력 최고입니다.',
    helpful: 22
  },
  {
    id: 'rev-5',
    author: '최*민 고객님',
    type: 'silk',
    typeName: '친환경 실크도배',
    space: '하남 미사 강변도시 30평 아파트',
    rating: 5,
    date: '2026.01.29',
    content: '콘센트 주변이랑 스위치 박스 커버 칼선 보시면 왜 도담도배를 부르는지 압니다. 삐뚤빼뚤한 곳 하나 없이 면이 매끄럽게 잘 빠졌습니다. 1년 A/S도 보증서 써주셔서 든든합니다.',
    helpful: 16
  },
  {
    id: 'rev-6',
    author: '강*호 고객님',
    type: 'paper',
    typeName: '고급 광폭 합지',
    space: '일산 백석동 오피스텔 15평',
    rating: 4,
    date: '2026.01.12',
    content: '하루 만에 빠르게 시공 끝내주시고 걸레받이 실리콘 마감까지 깔끔하게 돌려주셨어요. 일정도 잘 맞춰주셔서 이사 당일 차질 없이 입주했습니다.',
    helpful: 11
  }
];

// Curated Equipment & Tools
const TOOLS_CATALOG = [
  {
    id: 'tool-1',
    category: 'cut',
    badge: '15년차 애용',
    isHot: true,
    title: '독일 정밀 30° 스텐레스 롱 칼받이',
    categoryName: '칼·칼받이',
    price: 38000,
    priceFormatted: '38,000원',
    tip: '벽지 손상 없이 몰딩 코너 칼선을 0.1mm로 반듯하게 자르는 현장 필수템',
    stock: '당일 발송 가능',
    specs: '재질: 고탄성 SUS304 스테인리스 / 길이: 320mm / 두께: 0.5mm / 미끄럼방지 널링 핸들',
    description: '독일제 초정밀 가공으로 모서리 각도가 무뎌지지 않으며, 실크벽지와 합지 재단 시 벽지가 뜯기는 현상을 완벽하게 방지합니다.',
    icon: `<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#E5A93C" stroke-width="1.8">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>`
  },
  {
    id: 'tool-2',
    category: 'roller',
    badge: '장인 추천',
    isHot: true,
    title: '초경량 광폭 실리콘 이음매 롤러',
    categoryName: '롤러·도배솔',
    price: 29000,
    priceFormatted: '29,000원',
    tip: '실크벽지 맞물림 이음선(조인트)을 완벽히 밀착시켜 벌어짐을 방지',
    stock: '재고 15개 남음',
    specs: '롤러 폭: 50mm / 롤러 재질: 무독성 실리카겔 / 고속 정밀 베어링 내장 / 무게: 110g',
    description: '부드러운 고탄성 실리콘 롤러 헤드가 벽지 텍스처를 뭉개지 않고 이음매 풀을 균일하게 눌러주어 티 없는 이음새를 만듭니다.',
    icon: `<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#E5A93C" stroke-width="1.8">
      <circle cx="12" cy="12" r="8"></circle>
      <line x1="12" y1="2" x2="12" y2="4"></line>
      <line x1="12" y1="20" x2="12" y2="22"></line>
      <line x1="2" y1="12" x2="4" y2="12"></line>
      <line x1="20" y1="12" x2="22" y2="12"></line>
    </svg>`
  },
  {
    id: 'tool-3',
    category: 'roller',
    badge: '스테디셀러',
    isHot: false,
    title: '천연 백마모 양손 정전기 방지 도배솔',
    categoryName: '롤러·도배솔',
    price: 24000,
    priceFormatted: '24,000원',
    tip: '벽지 안 공기 방울을 부드럽게 배출하며 표면 스크래치 방지',
    stock: '당일 발송 가능',
    specs: '솔 폭: 300mm / 털 길이: 45mm / 모질: 엄선 1등급 천연 백마모 / 편백나무 원목 그립',
    description: '합성 플라스틱 솔과 달리 정전기가 생기지 않아 벽지에 먼지가 달라붙지 않으며, 초보자도 손목 피로감 없이 공기를 쉽게 뺄 수 있습니다.',
    icon: `<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#E5A93C" stroke-width="1.8">
      <path d="M4 11a9 9 0 0 1 9 9"></path>
      <path d="M4 4a16 16 0 0 1 16 16"></path>
      <circle cx="5" cy="19" r="1"></circle>
    </svg>`
  },
  {
    id: 'tool-4',
    category: 'cut',
    badge: '전문가 세트',
    isHot: false,
    title: '고탄성 황동 하이엔드 도배 헤라 & 주걱 (3종)',
    categoryName: '칼·칼받이·헤라',
    price: 32000,
    priceFormatted: '32,000원',
    tip: '스위치 박스 및 문틀 구석 틈새 각잡기에 특화된 인체공학 주걱 세트',
    stock: '당일 발송 가능',
    specs: '구성: 30mm 코너헤라 + 75mm 평헤라 + 황동 포인트주걱 / 엣지 라운딩 가공',
    description: '몰딩 틈새의 미세한 굴곡까지 손상 없이 깊숙이 밀어 넣을 수 있는 최적의 탄성을 보유한 프로용 헤라 3종 구성입니다.',
    icon: `<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#E5A93C" stroke-width="1.8">
      <polygon points="12 2 2 22 22 22"></polygon>
    </svg>`
  },
  {
    id: 'tool-5',
    category: 'paste',
    badge: '장인 픽',
    isHot: true,
    title: '콤팩트 탁상용 수동 풀칠기 & 재단 가이드',
    categoryName: '풀칠·재단',
    price: 340000,
    priceFormatted: '340,000원',
    tip: '풀 두께를 5단계로 균일 조절하여 1인 시공 작업 속도를 3배 향상',
    stock: '주문 제작 (2일 소요)',
    specs: '최대 벽지 폭: 1060mm / 풀탱크 용량: 12L / 알루미늄 다이캐스팅 본체 / 카운터 미터기 탑재',
    description: '협소한 아파트 현장에서도 거실 한쪽에 두고 손쉽게 풀칠 및 재단이 가능한 콤팩트형 풀칠기입니다. 누구나 전문가 수준의 풀 두께를 구현합니다.',
    icon: `<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#E5A93C" stroke-width="1.8">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>`
  },
  {
    id: 'tool-6',
    category: 'bag',
    badge: '인기 상품',
    isHot: false,
    title: '프로페셔널 소가죽 도배 툴벨트 & 수납 파우치',
    categoryName: '수납가방·안전용품',
    price: 45000,
    priceFormatted: '45,000원',
    tip: '칼, 롤러, 헤라, 줄자, 여분 칼날을 한 손으로 꺼낼 수 있는 최적의 수납각',
    stock: '당일 발송 가능',
    specs: '소재: 프리미엄 오일 풀업 소가죽 / 허리둘레: 28~44인치 조절 가능 / 6구 수납포켓',
    description: '오랜 시간 착용해도 허리가 배기지 않도록 쿠션 패드가 덧대어져 있으며, 날카로운 도배 칼날에도 찢어지지 않는 고내구성 소가죽으로 제작되었습니다.',
    icon: `<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#E5A93C" stroke-width="1.8">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>`
  },
  {
    id: 'tool-7',
    category: 'bag',
    badge: '작업 필수',
    isHot: false,
    title: '초경량 젤쿠션 무릎보호대 (마룻바닥 스크래치 무방)',
    categoryName: '수납가방·안전용품',
    price: 28000,
    priceFormatted: '28,000원',
    tip: '하루 종일 걸레받이 하단 작업 시 무릎 관절을 보호해주는 도배사 필수품',
    stock: '당일 발송 가능',
    specs: '쿠션: 에어셀 충격흡수 젤패드 / 외피: 무흔적 연질 실리콘 캡 / 퀵 릴리즈 벨크로',
    description: '고객님의 고급 원목마루나 타일 바닥을 긁지 않는 무흔적 실리콘 캡이 적용되어 있어 안심하고 작업에만 몰입할 수 있습니다.',
    icon: `<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#E5A93C" stroke-width="1.8">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
    </svg>`
  },
  {
    id: 'tool-8',
    category: 'paste',
    badge: '시공 노하우',
    isHot: true,
    title: '독일 수용성 항균 곰팡이 방지 프라이머 (4L)',
    categoryName: '풀칠·재단',
    price: 35000,
    priceFormatted: '35,000원',
    tip: '베란다, 외벽, 결로 벽면에 곰팡이 재발을 99.9% 억제하는 친환경 하도제',
    stock: '당일 발송 가능',
    specs: '용량: 4L (약 15평 시공 가능) / 도포 방식: 붓, 롤러 도포 / 건조 시간: 2시간',
    description: '냄새가 거의 없는 친환경 수용성 조색으로, 콘크리트 및 석고보드 깊숙이 침투하여 습기와 곰팡이 포자를 원천 봉쇄합니다.',
    icon: `<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#E5A93C" stroke-width="1.8">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    </svg>`
  }
];

// ===================================================================
// 2. Global State & LocalStorage Synchronization
// ===================================================================

let cart = JSON.parse(localStorage.getItem('dodam_cart')) || [];
let customerReviews = JSON.parse(localStorage.getItem('dodam_reviews')) || INITIAL_REVIEWS;
let currentProject = PORTFOLIO_PROJECTS[0];
let activeReviewFilter = 'all';
let activeReviewSort = 'latest';
let activeStoreCategory = 'all';
let currentStarRating = 5;

// Calculator State
let calcState = {
  buildingType: 'apt',
  buildingFactor: 1.0,
  area: 24,
  scope: 'all',
  scopeFactor: 1.0,
  wallpaper: 'silk',
  wallpaperFactor: 1.0,
  options: {
    mold: 0,
    highCeiling: 0,
    livingIn: 0
  }
};

// ===================================================================
// 3. Initialization
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initComparisonSlider();
  initPortfolioThumbnails();
  initReviewsSection();
  initStoreSection();
  initCalculator();
  initStarSelector();
  updateCartUI();
});

// ===================================================================
// 4. Navigation & Mobile Menu
// ===================================================================

function initNavigation() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  const cartTrigger = document.getElementById('cartTriggerBtn');
  const cartOverlay = document.getElementById('cartOverlay');
  const closeCartBtn = document.getElementById('closeCartBtn');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });

    // Close on link click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
      });
    });
  }

  // Cart Drawer open/close
  if (cartTrigger) {
    cartTrigger.addEventListener('click', () => openCart());
  }
  if (cartOverlay) {
    cartOverlay.addEventListener('click', () => closeCart());
  }
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', () => closeCart());
  }

  // Active Nav Scroll Spy
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        navLink.classList.add('active');
      }
    });
  });
}

// ===================================================================
// 5. Interactive Before & After Slider
// ===================================================================

function initComparisonSlider() {
  const container = document.getElementById('comparisonSlider');
  const afterLayer = document.getElementById('afterLayer');
  const handle = document.getElementById('sliderHandle');
  if (!container || !afterLayer || !handle) return;

  let isDragging = false;

  const updateSliderPosition = (xPos) => {
    const rect = container.getBoundingClientRect();
    let offsetX = xPos - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    const percentage = (offsetX / rect.width) * 100;
    afterLayer.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  };

  // Mouse Events
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Events for Mobile
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches[0]) updateSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches[0]) updateSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Filter Buttons for Gallery
  const filterBtns = document.querySelectorAll('#galleryFilters .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      filterPortfolio(cat);
    });
  });
}

function initPortfolioThumbnails() {
  const thumbsContainer = document.getElementById('portfolioThumbs');
  if (!thumbsContainer) return;

  renderThumbnails(PORTFOLIO_PROJECTS);
}

function renderThumbnails(projects) {
  const thumbsContainer = document.getElementById('portfolioThumbs');
  if (!thumbsContainer) return;

  thumbsContainer.innerHTML = projects.map((proj, idx) => `
    <div class="thumb-card ${proj.id === currentProject.id ? 'active' : ''}" onclick="selectProject('${proj.id}')">
      <div class="thumb-icon-box">${proj.icon}</div>
      <div class="thumb-info">
        <span class="thumb-name">${proj.title}</span>
        <span class="thumb-loc">${proj.location}</span>
      </div>
    </div>
  `).join('');
}

function filterPortfolio(category) {
  const filtered = category === 'all' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === category);

  renderThumbnails(filtered);
  if (filtered.length > 0) {
    selectProject(filtered[0].id);
  }
}

function selectProject(projId) {
  const found = PORTFOLIO_PROJECTS.find(p => p.id === projId);
  if (!found) return;

  currentProject = found;

  // Update Detail Texts
  document.getElementById('caseCategory').innerText = found.categoryName;
  document.getElementById('caseTitle').innerText = found.title;
  document.getElementById('caseDesc').innerText = found.desc;
  document.getElementById('caseMaterial').innerText = found.material;
  document.getElementById('caseDuration').innerText = found.duration;

  // Update Visual Aesthetics
  const sceneBefore = document.getElementById('sceneBefore');
  const sceneAfter = document.getElementById('sceneAfter');
  if (sceneBefore && found.beforeStyle) {
    const oldWall = sceneBefore.querySelector('.old-wall');
    if (oldWall) {
      oldWall.style.backgroundColor = found.beforeStyle.wallColor;
      oldWall.style.backgroundImage = found.beforeStyle.pattern;
    }
  }
  if (sceneAfter && found.afterStyle) {
    const newWall = sceneAfter.querySelector('.new-wall');
    if (newWall) {
      newWall.style.background = found.afterStyle.wallBg;
    }
  }

  // Update Active Thumbnail
  document.querySelectorAll('.thumb-card').forEach(card => {
    card.classList.remove('active');
  });
  const activeThumb = Array.from(document.querySelectorAll('.thumb-card')).find(c => c.getAttribute('onclick')?.includes(projId));
  if (activeThumb) activeThumb.classList.add('active');
}

// ===================================================================
// 6. Customer Reviews Management
// ===================================================================

function initReviewsSection() {
  renderReviews();

  // Review Filter Tabs
  const reviewTabs = document.querySelectorAll('#reviewFilterTabs .review-tab');
  reviewTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      reviewTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeReviewFilter = tab.getAttribute('data-filter');
      renderReviews();
    });
  });

  // Sort Selector
  const sortSelect = document.getElementById('reviewSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeReviewSort = e.target.value;
      renderReviews();
    });
  }

  // Open Review Modal
  const openModalBtn = document.getElementById('openReviewModalBtn');
  if (openModalBtn) {
    openModalBtn.addEventListener('click', () => openReviewModal());
  }
}

function renderReviews() {
  const reviewsGrid = document.getElementById('reviewsGrid');
  const countAll = document.getElementById('countAllReviews');
  const headerCount = document.getElementById('headerReviewCount');
  if (!reviewsGrid) return;

  if (countAll) countAll.innerText = customerReviews.length;
  if (headerCount) headerCount.innerText = customerReviews.length;

  let filtered = activeReviewFilter === 'all'
    ? [...customerReviews]
    : customerReviews.filter(r => r.type === activeReviewFilter);

  // Sorting
  if (activeReviewSort === 'highest') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (activeReviewSort === 'helpful') {
    filtered.sort((a, b) => (b.helpful || 0) - (a.helpful || 0));
  } else {
    // latest
    filtered.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  }

  if (filtered.length === 0) {
    reviewsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">
        선택하신 조건의 후기가 아직 없습니다. 첫 후기를 작성해 보세요!
      </div>
    `;
    return;
  }

  reviewsGrid.innerHTML = filtered.map(rev => `
    <div class="review-card">
      <div class="review-card-header">
        <div class="review-user-info">
          <div class="user-avatar">${rev.author.charAt(0)}</div>
          <div class="user-names">
            <strong>${rev.author}</strong>
            <span class="verified-tag">✔ 실제 시공 인증</span>
          </div>
        </div>
        <span class="review-badge-type">${rev.typeName || '친환경 시공'}</span>
      </div>

      <div class="review-space-info">
        <span>📍 ${rev.space}</span>
      </div>

      <div class="stars" style="margin-bottom: 8px;">${'★'.repeat(rev.rating)}${'☆'.repeat(5 - rev.rating)}</div>

      <p class="review-text">“${rev.content}”</p>

      <div class="review-card-footer">
        <span class="review-date">${rev.date}</span>
        <button type="button" class="btn-helpful" onclick="incrementHelpful('${rev.id}')">
          <span>👍 도움이 돼요</span>
          <strong>(${rev.helpful || 0})</strong>
        </button>
      </div>
    </div>
  `).join('');
}

function incrementHelpful(revId) {
  const rev = customerReviews.find(r => r.id === revId);
  if (rev) {
    rev.helpful = (rev.helpful || 0) + 1;
    localStorage.setItem('dodam_reviews', JSON.stringify(customerReviews));
    renderReviews();
    showToast('소중한 의견 감사합니다!');
  }
}

// Review Modal Logic
function openReviewModal() {
  const modal = document.getElementById('reviewModal');
  if (modal) modal.style.display = 'flex';
}

function closeReviewModal() {
  const modal = document.getElementById('reviewModal');
  if (modal) modal.style.display = 'none';
}

function initStarSelector() {
  const starBtns = document.querySelectorAll('#starRatingSelect .star-btn');
  const starHint = document.getElementById('starHint');
  const hints = {
    1: '1점 (개선이 필요해요)',
    2: '2점 (조금 아쉬워요)',
    3: '3점 (보통이에요)',
    4: '4점 (만족스러워요)',
    5: '5점 만점 (매우 만족)'
  };

  starBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = parseInt(btn.getAttribute('data-val'), 10);
      currentStarRating = val;
      if (starHint) starHint.innerText = hints[val] || '';

      starBtns.forEach(b => {
        const bVal = parseInt(b.getAttribute('data-val'), 10);
        if (bVal <= val) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
    });
  });
}

function handleReviewSubmit(e) {
  e.preventDefault();
  const author = document.getElementById('reviewAuthor').value.trim();
  const type = document.getElementById('reviewType').value;
  const space = document.getElementById('reviewSpace').value.trim();
  const content = document.getElementById('reviewContent').value.trim();

  const typeNames = {
    silk: '친환경 실크도배',
    paper: '고급 광폭 합지',
    partial: '부분 / 누수 복구'
  };

  const today = new Date();
  const dateFormatted = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

  const newReview = {
    id: `rev-${Date.now()}`,
    author,
    type,
    typeName: typeNames[type] || '친환경 도배',
    space,
    rating: currentStarRating,
    date: dateFormatted,
    content,
    helpful: 0
  };

  customerReviews.unshift(newReview);
  localStorage.setItem('dodam_reviews', JSON.stringify(customerReviews));

  renderReviews();
  closeReviewModal();
  document.getElementById('newReviewForm').reset();
  showToast('소중한 시공 후기가 등록되었습니다. 감사합니다!');
}

// ===================================================================
// 7. Equipment Store & Cart Management
// ===================================================================

function initStoreSection() {
  renderProducts();

  const catTabs = document.querySelectorAll('#storeCategoryTabs .cat-pill');
  catTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      catTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeStoreCategory = tab.getAttribute('data-cat');
      renderProducts();
    });
  });
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  const countAll = document.getElementById('countAllTools');
  if (!grid) return;

  if (countAll) countAll.innerText = TOOLS_CATALOG.length;

  const filtered = activeStoreCategory === 'all'
    ? TOOLS_CATALOG
    : TOOLS_CATALOG.filter(p => p.category === activeStoreCategory);

  grid.innerHTML = filtered.map(item => `
    <div class="product-card">
      <span class="product-badge-float ${item.isHot ? 'hot' : ''}">${item.badge}</span>
      <div class="product-img-box">
        ${item.icon}
      </div>
      <div class="product-body">
        <span class="product-category-text">${item.categoryName}</span>
        <h4 class="product-title">${item.title}</h4>
        <div class="product-tip">💡 ${item.tip}</div>
        <div class="product-price-row">
          <span class="product-price">${item.priceFormatted}</span>
          <span class="product-stock">${item.stock}</span>
        </div>
        <div class="product-actions">
          <button type="button" class="btn btn-secondary btn-sm" onclick="openProductModal('${item.id}')">상세보기</button>
          <button type="button" class="btn btn-primary btn-sm" onclick="addToCart('${item.id}')">장바구니 담기</button>
        </div>
      </div>
    </div>
  `).join('');
}

function openProductModal(toolId) {
  const item = TOOLS_CATALOG.find(t => t.id === toolId);
  if (!item) return;

  const modal = document.getElementById('productModal');
  const body = document.getElementById('productModalBody');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="display: grid; grid-template-columns: 240px 1fr; gap: 28px; align-items: start;">
      <div style="background: #172338; border-radius: 12px; height: 240px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--border-subtle);">
        ${item.icon}
      </div>
      <div>
        <span class="product-category-text">${item.categoryName}</span>
        <h3 style="font-size: 1.5rem; margin: 4px 0 10px; color: var(--text-white);">${item.title}</h3>
        <div style="font-family: 'Outfit'; font-size: 1.6rem; font-weight: 800; color: var(--gold-light); margin-bottom: 14px;">
          ${item.priceFormatted}
        </div>
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 16px; line-height: 1.6;">
          ${item.description}
        </p>
        <div style="background: rgba(10, 15, 29, 0.7); padding: 14px; border-radius: 8px; margin-bottom: 20px; font-size: 0.85rem; border-left: 3px solid var(--gold-primary);">
          <strong>장인 실사용 팁:</strong><br>${item.tip}
        </div>
        <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 20px;">
          <strong>상세 스펙:</strong> ${item.specs}
        </div>
        <div style="display: flex; gap: 12px;">
          <button type="button" class="btn btn-primary btn-block btn-lg" onclick="addToCart('${item.id}'); closeProductModal();">
            장바구니에 담기
          </button>
        </div>
      </div>
    </div>
  `;

  modal.style.display = 'flex';
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) modal.style.display = 'none';
}

// Cart Management
function addToCart(toolId) {
  const item = TOOLS_CATALOG.find(t => t.id === toolId);
  if (!item) return;

  const existing = cart.find(c => c.id === toolId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: item.id,
      title: item.title,
      price: item.price,
      priceFormatted: item.priceFormatted,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`[${item.title}] 공구가 장바구니에 담겼습니다.`);
}

function quickAddToCart(toolId) {
  addToCart(toolId);
  openCart();
}

function updateCartUI() {
  const badge = document.getElementById('cartCountBadge');
  const drawerCount = document.getElementById('cartDrawerCount');
  const itemsContainer = document.getElementById('cartItemsList');
  const totalPriceElem = document.getElementById('cartTotalPrice');

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (badge) badge.innerText = totalQty;
  if (drawerCount) drawerCount.innerText = totalQty;
  if (totalPriceElem) totalPriceElem.innerText = `${totalPrice.toLocaleString()}원`;

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🛒</div>
        <h4>장바구니가 비어 있습니다</h4>
        <p>현직 도배사가 엄선한 검증된 전문가 장비를 둘러보세요.</p>
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-icon">🛠️</div>
      <div class="cart-item-details">
        <span class="cart-item-name">${item.title}</span>
        <span class="cart-item-price">${(item.price * item.qty).toLocaleString()}원</span>
        <div class="cart-item-bottom">
          <div class="qty-control">
            <button type="button" class="btn-qty" onclick="changeQty('${item.id}', -1)">-</button>
            <span class="qty-num">${item.qty}</span>
            <button type="button" class="btn-qty" onclick="changeQty('${item.id}', 1)">+</button>
          </div>
          <button type="button" class="btn-remove-item" onclick="removeFromCart('${item.id}')">삭제</button>
        </div>
      </div>
    </div>
  `).join('');
}

function changeQty(toolId, delta) {
  const item = cart.find(c => c.id === toolId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(c => c.id !== toolId);
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(toolId) {
  cart = cart.filter(c => c.id !== toolId);
  saveCart();
  updateCartUI();
  showToast('공구가 장바구니에서 삭제되었습니다.');
}

function clearCart() {
  if (cart.length === 0) return;
  cart = [];
  saveCart();
  updateCartUI();
  showToast('장바구니를 비웠습니다.');
}

function saveCart() {
  localStorage.setItem('dodam_cart', JSON.stringify(cart));
}

function openCart() {
  document.getElementById('cartDrawer')?.classList.add('active');
  document.getElementById('cartOverlay')?.classList.add('active');
}

function closeCart() {
  document.getElementById('cartDrawer')?.classList.remove('active');
  document.getElementById('cartOverlay')?.classList.remove('active');
}

function openCartInquiry() {
  if (cart.length === 0) {
    showToast('장바구니에 공구를 먼저 담아주세요.');
    return;
  }

  closeCart();
  // Scroll to consultation form and prefill items
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  const consultType = document.getElementById('consultType');
  const userMessage = document.getElementById('userMessage');

  if (consultType) consultType.value = 'tools';
  if (userMessage) {
    const itemsSummary = cart.map(i => `- ${i.title} (${i.qty}개 / ${(i.price * i.qty).toLocaleString()}원)`).join('\n');
    const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    userMessage.value = `[도배 공구 구매 문의]\n${itemsSummary}\n총 금액: ${total.toLocaleString()}원\n\n구매 상담 및 배송 관련 문의드립니다.`;
  }

  showToast('선택하신 공구 목록이 상담 문의 폼에 자동 반영되었습니다.');
}

// ===================================================================
// 8. Smart Estimate Calculator
// ===================================================================

function initCalculator() {
  // Building Type selection
  const buildingBtns = document.querySelectorAll('#buildingTypeGroup .radio-card');
  buildingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      buildingBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      calcState.buildingType = btn.getAttribute('data-type');
      calcState.buildingFactor = parseFloat(btn.getAttribute('data-factor'));
      calculateEstimate();
    });
  });

  // Area Slider
  const slider = document.getElementById('areaSlider');
  const areaDisplay = document.getElementById('areaDisplay');
  const sqmDisplay = document.getElementById('sqmDisplay');

  if (slider) {
    slider.addEventListener('input', (e) => {
      const pyeong = parseInt(e.target.value, 10);
      calcState.area = pyeong;
      if (areaDisplay) areaDisplay.innerText = pyeong;
      if (sqmDisplay) sqmDisplay.innerText = Math.round(pyeong * 3.30578);
      calculateEstimate();
    });
  }

  // Scope selection
  const scopeBtns = document.querySelectorAll('#scopeGroup .pill-option');
  scopeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scopeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      calcState.scope = btn.getAttribute('data-scope');
      calcState.scopeFactor = parseFloat(btn.getAttribute('data-factor'));
      calculateEstimate();
    });
  });

  // Wallpaper selection
  const wallBtns = document.querySelectorAll('#wallpaperGroup .radio-card');
  wallBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      wallBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      calcState.wallpaper = btn.getAttribute('data-wall');
      calcState.wallpaperFactor = parseFloat(btn.getAttribute('data-factor'));
      calculateEstimate();
    });
  });

  // Checkbox Options
  const optMold = document.getElementById('optMold');
  const optHigh = document.getElementById('optHighCeiling');
  const optLiving = document.getElementById('optLivingIn');

  [optMold, optHigh, optLiving].forEach(cb => {
    if (cb) {
      cb.addEventListener('change', () => {
        calcState.options.mold = optMold?.checked ? parseInt(optMold.value, 10) : 0;
        calcState.options.highCeiling = optHigh?.checked ? parseInt(optHigh.value, 10) : 0;
        calcState.options.livingIn = optLiving?.checked ? parseInt(optLiving.value, 10) : 0;
        calculateEstimate();
      });
    }
  });

  // Apply Estimate to Contact Form
  const applyBtn = document.getElementById('applyEstimateBtn');
  if (applyBtn) {
    applyBtn.addEventListener('click', () => applyEstimateToForm());
  }

  calculateEstimate();
}

function calculateEstimate() {
  const { area, buildingFactor, scopeFactor, wallpaperFactor, options } = calcState;

  // Base formula:
  // Base cost per pyeong for standard apt silk is approx 55,000 KRW (material + basic craft labor)
  const baseRatePerPyeong = 56000;
  const baseCost = area * baseRatePerPyeong;

  // Adjusted base
  let adjusted = baseCost * buildingFactor * scopeFactor * wallpaperFactor;

  // Additional options
  const addOns = options.mold + options.highCeiling + options.livingIn;
  const calculatedTotal = adjusted + addOns;

  // Round to ten-thousands
  const minPrice = Math.round((calculatedTotal * 0.95) / 10000) * 10000;
  const maxPrice = Math.round((calculatedTotal * 1.08) / 10000) * 10000;

  // Update Price Display
  const minElem = document.getElementById('priceMin');
  const maxElem = document.getElementById('priceMax');
  if (minElem) minElem.innerText = minPrice.toLocaleString();
  if (maxElem) maxElem.innerText = maxPrice.toLocaleString();

  // Update Breakdown Labels
  const bdSpace = document.getElementById('bdSpace');
  const bdWall = document.getElementById('bdWall');
  const bdWorkers = document.getElementById('bdWorkers');
  const bdDuration = document.getElementById('bdDuration');

  const buildingNames = { apt: '아파트', villa: '빌라/주택', officetel: '오피스텔', commercial: '상가' };
  const scopeNames = { all: '전체 도배', living: '거실+주방만', rooms: '방 전체만', single: '방 1개 부분' };
  const wallNames = { silk: '친환경 프리미엄 실크벽지', paper: '고급 광폭 합지', luxury: '수입 패브릭 / 페인트벽지' };

  if (bdSpace) bdSpace.innerText = `${buildingNames[calcState.buildingType] || '공간'} ${area}평형 (${scopeNames[calcState.scope]})`;
  if (bdWall) bdWall.innerText = wallNames[calcState.wallpaper] || '벽지';

  // Workers calculation
  let workers = 2;
  if (area >= 34) workers = 3;
  if (area >= 45) workers = 4;
  if (calcState.scope === 'single') workers = 1;

  if (bdWorkers) bdWorkers.innerText = `숙련 도배 장인 ${workers}인 투입`;
  if (bdDuration) bdDuration.innerText = area > 45 ? '1~2일 (일정 조율)' : '1일 (오전 8시 ~ 오후 5시)';
}

function applyEstimateToForm() {
  const minPrice = document.getElementById('priceMin')?.innerText || '';
  const maxPrice = document.getElementById('priceMax')?.innerText || '';
  const bdSpace = document.getElementById('bdSpace')?.innerText || '';
  const bdWall = document.getElementById('bdWall')?.innerText || '';

  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  const attBox = document.getElementById('attachedEstimateBox');
  const attText = document.getElementById('attachedEstimateText');
  const userMsg = document.getElementById('userMessage');

  if (attBox && attText) {
    attText.innerText = `${bdSpace} / ${bdWall} (예상: ${minPrice}~${maxPrice}원)`;
    attBox.style.display = 'flex';
  }

  if (userMsg && !userMsg.value) {
    userMsg.value = `[계산기 예상 견적 첨부]\n- 대상: ${bdSpace}\n- 종류: ${bdWall}\n- 예상 금액: 약 ${minPrice} ~ ${maxPrice}원\n\n무료 방문 실측 및 정확한 일정 상담 요청드립니다.`;
  }

  showToast('산출된 견적이 상담 폼에 첨부되었습니다.');
}

function clearAttachedEstimate() {
  const attBox = document.getElementById('attachedEstimateBox');
  if (attBox) attBox.style.display = 'none';
}

// ===================================================================
// 9. Consultation Form Submission
// ===================================================================

function handleConsultSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('userName').value.trim();
  const phone = document.getElementById('userPhone').value.trim();
  const location = document.getElementById('userLocation').value.trim();
  const date = document.getElementById('userDate').value;
  const consultType = document.getElementById('consultType').value;
  const message = document.getElementById('userMessage').value.trim();

  // Save consultation to LocalStorage for persistence
  const inquiries = JSON.parse(localStorage.getItem('dodam_inquiries')) || [];
  const newInquiry = {
    id: `inq-${Date.now()}`,
    name,
    phone,
    location,
    date,
    consultType,
    message,
    timestamp: new Date().toISOString()
  };

  inquiries.push(newInquiry);
  localStorage.setItem('dodam_inquiries', JSON.stringify(inquiries));

  // Reset form and show notification
  document.getElementById('consultForm').reset();
  clearAttachedEstimate();
  showToast(`[${name}님] 상담 신청이 정상 접수되었습니다! 30분 이내에 도배 장인이 직접 연락드립니다.`);
}

// ===================================================================
// 10. Toast Notification Utility
// ===================================================================

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const content = document.getElementById('toastContent');
  if (!toast || !content) return;

  content.innerText = message;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
