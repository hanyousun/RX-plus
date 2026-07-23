# RX+ (병·의원 청구 사전점검 서비스 웹사이트)

병·의원의 보험 청구 사전점검 서비스를 컨셉으로, 기획·UI/UX 디자인·퍼블리싱을 1인으로 직접 진행한 개인 포트폴리오 프로젝트입니다.

> 포트폴리오 목적의 데모 사이트이며, 실제 서비스가 아닙니다. 회사명·사업자등록번호·대표자명·연락처 등은 모두 가상의 정보입니다.

## 기술 스택

- HTML5 / CSS3 (Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- [Swiper](https://swiperjs.com/) (메인 배너 슬라이더, CDN)
- 별도 빌드 도구 없이 정적 파일로 구성 (VSCode Live Server로 로컬 구동)

## 실행 방법

1. 저장소를 clone 또는 다운로드합니다.
2. VSCode의 Live Server 확장(또는 임의의 정적 서버)으로 `main.html`을 엽니다.

## 폴더 구조

```
├─ css/            페이지별 스타일시트 (reset / common + 페이지 전용)
├─ font/           웹폰트 (SCDream, Pretendard)
├─ img/            이미지 리소스
├─ js/
│  ├─ com.js       전 페이지 공통 스크립트 (퀵메뉴 등)
│  └─ member.js    회원 관련 페이지 공통 스크립트 (셀렉트박스, 회원 메뉴 활성화 등)
└─ *.html          페이지별 마크업
```

## 주요 페이지

- `main.html` — 메인 랜딩 페이지
- `login.html` / `signup.html` / `signup-agree.html` / `signup-info.html` — 로그인/회원가입 플로우
- `password-find.html` / `password-confirm.html` / `password-popup.html` — 비밀번호 찾기 플로우
- `mypage.html` — 마이페이지(요양기관정보)
- `service-guide.html` / `standerd-service.html` / `premium-service.html` / `service-payment.html` / `service-finish.html` — 서비스 안내 및 결제 플로우
- `board-detail.html`, `error.html` 등 부가 페이지

## 알려진 한계 (TODO)

- 전 페이지 CSS(`common.css`, `main.css`, `joinus.css`, `mypage.css`, `service.css`, `popup.css`, `board.css`)에 1024px/768px/640px 기준 반응형 브레이크포인트를 적용했습니다. 다만 브라우저 렌더링을 직접 확인할 수 없는 환경에서 작업해 시각적으로 검증하지 못했습니다 — 특히 마이페이지의 요금제 비교표(`#tab-page03 .service-items`)와 서비스 결제 단계 표시(`.service-depth`)처럼 절대 위치/픽셀 계산에 의존하던 컴포넌트는 실제 화면에서 꼭 확인이 필요합니다.
- 실제 백엔드/DB 연동이 없어 로그인, 회원가입, 결제 등은 화면 흐름만 구현되어 있고 폼 유효성 검사·데이터 처리는 되어 있지 않습니다.
- 크로스 브라우저 및 다양한 해상도에서의 시각적 QA가 필요합니다.
