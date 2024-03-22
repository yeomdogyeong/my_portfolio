import petching1 from "../assets/petchinginquery.png";
import petching2 from "../assets/petching2.png";
import petching3 from "../assets/login.png";
import dowajoyak2 from "../assets/dowajoyakwrite.png";
import dowajoyak3 from "../assets/dowajoyaksearch.png";
import signup from "../assets/signup2.png";
import dowajoyak from "../assets/dowajoyak.png";
import portfolio from "../assets/portfolio.png";
import todolist from "../assets/todolist.png";

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
    frontImage: dowajoyak,
    frontDescription: "도와조약 메인페이지",
    description: {
      title: "도와조약 메인페이지",
      subtitle: "메인 페이지의 레이아웃과 디자인을 구현했습니다.",
      tech: "# Tech : React, CSS, StyledComponent",
      work: "# Work : 헤더,푸터,메인페이지의 레이아웃, css 스타일링",
    },
    gitLink: "https://github.com/codestates-seb/seb43_main_009",
    demoLink: "https://dowajoyak.store/",
  },
  {
    frontImage: dowajoyak2,
    frontDescription: "도와조약 CRUD",
    description: {
      title: "도와조약 CRUD",
      subtitle: "글쓰기, 글 조회 페이지를 구현했습니다. ",
      tech: "# Tech : React, CSS, Redux, Axios, StyledComponent",
      work: "# Work : 페이지 제작 ",
    },
    gitLink:
      "https://github.com/codestates-seb/seb43_main_009/blob/main/client/src/page/community/Board.js",
    demoLink: "https://dowajoyak.store/commu/58",
  },
  {
    frontImage: dowajoyak3,
    frontDescription: "도와조약 의약품 검색",
    description: {
      title: "도와조약 의약품 검색",
      subtitle: "도와조약 검색 페이지를 구현했습니다.",
      tech: "# Tech : React, CSS, StyledComponent",
      work: "# Work : css 스타일링",
    },
    gitLink:
      "https://github.com/codestates-seb/seb43_main_009/blob/main/client/src/page/search/SearchMain.js",
    demoLink: "https://dowajoyak.store/search",
  },
  {
    frontImage: signup,
    frontDescription: "펫칭 회원가입",
    description: {
      title: "펫칭 회원가입",
      subtitle: "회원가입 페이지를 제작했습니다.",
      tech: "# Tech : React, TailwindCSS, Axios",
      work: "# Work : 아이디와 닉네임 중복검사, 비밀번호 유효성 검사",
    },
    gitLink:
      "https://github.com/Petching/Petching/blob/main/client/src/Components/signUpComponent.tsx",
    demoLink: "https://petching.net/signup",
  },
  {
    frontImage: petching3,
    frontDescription: "펫칭 로그인",
    description: {
      title: "펫칭 로그인",
      subtitle: "회원 로그인 페이지를 제작했습니다.",
      tech: "# Tech : React, TailwindCSS, Axios",
      work: "# Work : OAuth2.0구현, Axios로 소통",
    },
    gitLink:
      "https://github.com/Petching/Petching/blob/main/client/src/Components/signInComponent.tsx",
    demoLink: "https://petching.net/signin",
  },
  {
    frontImage: petching2,
    frontDescription: "펫칭 F&Q",
    description: {
      title: "펫칭 F&Q",
      subtitle:
        "F&Q로 질문과 답변을 상태관리로 접고 펼 수 있습니다. 버튼을 눌러 4개의 페이지 경로로 이동합니다.",
      tech: "# Tech : React,CSS",
      work: "# Work : react로 구현",
    },
    gitLink:
      "https://github.com/Petching/Petching/blob/dev-FE/client/src/Page/Inquery.tsx",
    demoLink: "https://petching.net/inquery",
  },
  {
    frontImage: petching1,
    frontDescription: "펫칭 문의하기",
    description: {
      title: "펫칭 문의하기",
      subtitle: "회원이 글을 작성할 수 있는 textEditor를 삽입했습니다.",
      tech: "# Tech : React,CSS",
      work: "# Work : css 스타일링",
    },
    gitLink:
      "https://github.com/Petching/Petching/blob/dev-FE/client/src/Page/InqueryWrite.tsx",
    demoLink: "https://petching.net/inquery/write",
  },
  {
    frontImage: portfolio,
    frontDescription: "포트폴리오",
    description: {
      title: "포트폴리오",
      subtitle: "포트폴리오 제작",
      tech: "# Tech : React,CSS, TailwindCSS, Zustand",
      work: "# Work : 야간모드, 카드 뒤집기 등을 구현했습니다.",
    },
    gitLink: "https://my-portfolio-pi-taupe.vercel.app/",
    demoLink: "https://github.com/yeomdogyeong/my_portfolio",
  },
  {
    frontImage: todolist,
    frontDescription: "스케줄 관리하기",
    description: {
      title: "스케줄 리스트",
      subtitle: "스케줄리스트를 전역상태로 관리합니다",
      tech: "# Tech : React,CSS, TailwindCSS, Zustand",
      work: "# Work : 호버시 안내모달을 볼수 있습니다.todo를 complete, active, all 별로 볼 수 있습니다. 할일을 상세보기로 볼 수 있습니다.",
    },
    gitLink: "https://github.com/yeomdogyeong/Todo_myself",
    demoLink: "https://github.com/yeomdogyeong/my_portfolio",
  },
];
