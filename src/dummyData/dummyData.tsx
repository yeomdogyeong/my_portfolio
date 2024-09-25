import signup from "../assets/signup2.png";
import dowajoyak from "../assets/dowajoyak.png";
import portfolio from "../assets/portfolio.png";
import gaezzange from "../assets/gaezzange.png";
import oneului from "../assets/oneului.png";
import sainti from "../assets/sainti.png";
export const dogyeong = [
  {
    name: "염도경",
    birth: "1995.10.31",
    stay: "서울시 강서구",
    email: "kangs19951@gmail.com",
    github: "https://github.com/yeomdogyeong",
    blog: "https://velog.io/@ehrud1031/posts",
  },
];

export const cardData = [
  {
    frontImage: gaezzange,
    frontDescription: "개짱이",
    description: {
      title: "개짱이",
      subtitle:
        "유저가 루틴 등록, 생성을 통해 개미 vs 배짱이인지를 확인하고 유저의 성향과의 반대 성향의 루틴을 실행하도록하여 라이프 밸런스를 맞추도록 고안한 애플리케이션입니다.",
      tech: "# Tech : Next.js, React-Query, TailwindCss, Zustand, TypeScript",
      work: "# Work : 초기화면부터 온보딩, 설문, 로그인, 프로필 설정, 메인 페이지를 제작했습니다.",
    },
    gitLink: "https://github.com/yeomdogyeong/GaejjangE",
    demoLink: "https://gaejjange.swygbro.com",
  },
  {
    frontImage: sainti,
    frontDescription: "자사 홈페이지",
    description: {
      title: "자사 홈페이지",
      subtitle: "재직 중 자사 홈페이지의 리모델링을 맡았습니다.",
      tech: "# Tech : Vue.js, Pinia, Vuetify",
      work: "# Work : 리디자인 및 퍼블리싱, 기능 구현 및 추가 유지보수",
    },
    demoLink: "https://sainti.co.kr",
  },
  {
    frontImage: oneului,
    frontDescription: "오늘의",
    description: {
      title: "오늘의",
      subtitle:
        "온도에 따른 날씨를 기록하고 유저의 ootd를 기록으로 남겨 날씨에 따른 옷차림을 구경할 수 있게 만든 웹애플리케이션입니다.",
      tech: "# Tech : Next.js, TailwindCss, TypeScript, GitHub Actions",
      work: "# Work : 이미지 업로드 및 저장, 커뮤니티의 CRUD",
    },
    gitLink: "https://github.com/OneulUi/client",
  },
  {
    frontImage: dowajoyak,
    frontDescription: "도와조약",
    description: {
      title: "도와조약",
      subtitle: "메인 페이지의, 검색페이지의 디자인 및 기능을 구현했습니다.",
      tech: "# Tech : React, CSS, StyledComponent",
      work: "# Work : 헤더,푸터,메인페이지의 레이아웃, css 스타일링",
    },
    gitLink: "https://github.com/codestates-seb/seb43_main_009",
    demoLink: "https://dowajoyak.store/",
  },

  {
    frontImage: signup,
    frontDescription: "펫칭",
    description: {
      title: "펫칭",
      subtitle: "회원가입, 로그인 및 문의하기를 제작했습니다.",
      tech: "# Tech : React, TailwindCSS, Axios",
      work: "# Work : 아이디와 닉네임 중복검사, 비밀번호 유효성 검사",
    },
    gitLink:
      "https://github.com/Petching/Petching/blob/main/client/src/Components/signUpComponent.tsx",
    demoLink: "https://petching.net/signup",
  },
  {
    frontImage: portfolio,
    frontDescription: "포트폴리오",
    description: {
      title: "포트폴리오",
      subtitle: "포트폴리오 제작",
      tech: "# Tech : React,CSS, TailwindCSS, Zustand",
      work: "# Work : CRA로 시작해 직접 만든 포트폴리오입니다.",
    },
    gitLink: "https://my-portfolio-pi-taupe.vercel.app/",
    demoLink: "https://github.com/yeomdogyeong/my_portfolio",
  },
];
