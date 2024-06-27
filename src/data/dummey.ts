export const menuListDum = {
  data: [
    {
      oid: "overview",
      parentOid: "0",
      sortNo: 1,
      depth: 0,
      menuType: "1",
      menuName: "OVERVIEW",
      useYn: 1,
      isSelected: 0,
      isOpen: 1,
      iconUrl: "",
      path: "/system",
      remark: null,
    },
    {
      oid: "user",
      parentOid: "0",
      sortNo: 1,
      depth: 0,
      menuType: "1",
      menuName: "USER",
      useYn: 1,
      isSelected: 0,
      isOpen: 1,
      iconUrl: "",
      path: "/system",
      remark: null,
    },
    {
      oid: "memo",
      parentOid: "user",
      sortNo: 1,
      depth: 1,
      menuType: "2",
      menuName: "Memo",
      useYn: 1,
      isSelected: 0,
      isOpen: 0,
      iconUrl: "/assets/svg/board.svg",
      path: "/system",
      remark: null,
    },
    {
      oid: "dashboard",
      parentOid: "overview",
      sortNo: 10,
      depth: 1,
      menuType: "2",
      menuName: "Dashboard",
      useYn: 1,
      isSelected: 0,
      isOpen: 0,
      iconUrl: "/assets/svg/dashboard.svg",
      path: "/dashboard",
      remark: null,
    },

    {
      oid: "calendar",
      parentOid: "overview",
      sortNo: 20,
      depth: 1,
      menuType: "2",
      menuName: "Calendar",
      useYn: 1,
      isSelected: 0,
      isOpen: 0,
      iconUrl: "/assets/svg/calendar.svg",
      path: "/dashboard/calendar",
      remark: null,
    },

    {
      oid: "kanban",
      parentOid: "overview",
      sortNo: 30,
      depth: 1,
      menuType: "2",
      menuName: "Kanban",
      useYn: 1,
      isSelected: 0,
      isOpen: 0,
      iconUrl: "/assets/svg/kanban.svg",
      path: "/dashboard/kanban",
      remark: null,
    },

    {
      oid: "gantt",
      parentOid: "overview",
      sortNo: 50,
      depth: 1,
      menuType: "2",
      menuName: "Gantt",
      useYn: 1,
      isSelected: 0,
      isOpen: 0,
      iconUrl: "/assets/svg/gantt.svg",
      path: "/dashboard/gantt",
      remark: null,
    },
    {
      oid: "chat",
      parentOid: "overview",
      sortNo: 60,
      depth: 1,
      menuType: "2",
      menuName: "Chat",
      useYn: 1,
      isSelected: 0,
      isOpen: 0,
      iconUrl: "/assets/svg/chat.svg",
      path: "/dashboard/chat",
      remark: null,
    },
    {
      oid: "board",
      parentOid: "overview",
      sortNo: 70,
      depth: 1,
      menuType: "2",
      menuName: "Board",
      useYn: 1,
      isSelected: 0,
      isOpen: 0,
      iconUrl: "/assets/svg/board.svg",
      path: "/dashboard/board",
      remark: null,
    },
  ],
};

export interface ColonyData {
  title: string;
  category: string;
  user: string;
  view: string;
  bookmark: string;
  stack: string;
  src: string;
  bookmark_isTure: boolean;
}

export const findColonyData: ColonyData[] = [
  {
    title: "전국 7만여개의 전기차 충전소를 한눈에! 플러그파인더",
    category: "developer",
    user: "Eastzoo",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title: "오디션 자동신청 프로젝트 함께하실 프론트 구합니다.",
    category: "developer",
    user: "조동그라미",
    view: "300",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title:
      "[사이드프로젝트] 전원생활 플랫폼을 함께 제작할 팀원 모집합니다.(모바일 앱, 모바일 UI, 웹 UI 등)",
    category: "developer",
    user: "신동주",
    view: "430",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title:
      "[사이드 프로젝트] 운동 관리 플랫폼 팀원 모집 (프론트 개발자, 머신러닝 개발자)",
    category: "developer",
    user: "coco",
    view: "150",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title:
      "[프론트] '폴더' 글로벌 패션 커뮤니티 함께 창업하실 개발자 모십니다. ",
    category: "developer",
    user: "이은채",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title: "STRCAT: 글을 이어 만드는 롤링페이퍼! ",
    category: "developer",
    user: "코코볼",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title:
      "[사이드 프로젝트] 운동 관리 플랫폼 팀원 모집 (프론트 개발자, 머신러닝 개발자)",
    category: "developer",
    user: "coco",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title:
      "[프론트] '폴더' 글로벌 패션 커뮤니티 함께 창업하실 개발자 모십니다. ",
    category: "developer",
    user: "이은채",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title: "STRCAT: 글을 이어 만드는 롤링페이퍼! ",
    category: "developer",
    user: "코코볼",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title: "전국 7만여개의 전기차 충전소를 한눈에! 플러그파인더",
    category: "developer",
    user: "Eastzoo",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title: "오디션 자동신청 프로젝트 함께하실 프론트 구합니다.",
    category: "developer",
    user: "조동그라미",
    view: "300",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title:
      "[사이드프로젝트] 전원생활 플랫폼을 함께 제작할 팀원 모집합니다.(모바일 앱, 모바일 UI, 웹 UI 등)",
    category: "developer",
    user: "신동주",
    view: "430",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title:
      "[사이드 프로젝트] 운동 관리 플랫폼 팀원 모집 (프론트 개발자, 머신러닝 개발자)",
    category: "developer",
    user: "coco",
    view: "150",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title:
      "[프론트] '폴더' 글로벌 패션 커뮤니티 함께 창업하실 개발자 모십니다. ",
    category: "developer",
    user: "이은채",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title: "STRCAT: 글을 이어 만드는 롤링페이퍼! ",
    category: "developer",
    user: "코코볼",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title:
      "[사이드 프로젝트] 운동 관리 플랫폼 팀원 모집 (프론트 개발자, 머신러닝 개발자)",
    category: "developer",
    user: "coco",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title:
      "[프론트] '폴더' 글로벌 패션 커뮤니티 함께 창업하실 개발자 모십니다. ",
    category: "developer",
    user: "이은채",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title: "STRCAT: 글을 이어 만드는 롤링페이퍼! ",
    category: "developer",
    user: "코코볼",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title: "전국 7만여개의 전기차 충전소를 한눈에! 플러그파인더",
    category: "developer",
    user: "Eastzoo",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title: "오디션 자동신청 프로젝트 함께하실 프론트 구합니다.",
    category: "developer",
    user: "조동그라미",
    view: "300",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title:
      "[사이드프로젝트] 전원생활 플랫폼을 함께 제작할 팀원 모집합니다.(모바일 앱, 모바일 UI, 웹 UI 등)",
    category: "developer",
    user: "신동주",
    view: "430",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title:
      "[사이드 프로젝트] 운동 관리 플랫폼 팀원 모집 (프론트 개발자, 머신러닝 개발자)",
    category: "developer",
    user: "coco",
    view: "150",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title:
      "[프론트] '폴더' 글로벌 패션 커뮤니티 함께 창업하실 개발자 모십니다. ",
    category: "developer",
    user: "이은채",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title: "STRCAT: 글을 이어 만드는 롤링페이퍼! ",
    category: "developer",
    user: "코코볼",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title:
      "[사이드 프로젝트] 운동 관리 플랫폼 팀원 모집 (프론트 개발자, 머신러닝 개발자)",
    category: "developer",
    user: "coco",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title:
      "[프론트] '폴더' 글로벌 패션 커뮤니티 함께 창업하실 개발자 모십니다. ",
    category: "developer",
    user: "이은채",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title: "STRCAT: 글을 이어 만드는 롤링페이퍼! ",
    category: "developer",
    user: "코코볼",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title: "전국 7만여개의 전기차 충전소를 한눈에! 플러그파인더",
    category: "developer",
    user: "Eastzoo",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title: "오디션 자동신청 프로젝트 함께하실 프론트 구합니다.",
    category: "developer",
    user: "조동그라미",
    view: "300",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title:
      "[사이드프로젝트] 전원생활 플랫폼을 함께 제작할 팀원 모집합니다.(모바일 앱, 모바일 UI, 웹 UI 등)",
    category: "developer",
    user: "신동주",
    view: "430",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title:
      "[사이드 프로젝트] 운동 관리 플랫폼 팀원 모집 (프론트 개발자, 머신러닝 개발자)",
    category: "developer",
    user: "coco",
    view: "150",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title:
      "[프론트] '폴더' 글로벌 패션 커뮤니티 함께 창업하실 개발자 모십니다. ",
    category: "developer",
    user: "이은채",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title: "STRCAT: 글을 이어 만드는 롤링페이퍼! ",
    category: "developer",
    user: "코코볼",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title:
      "[사이드 프로젝트] 운동 관리 플랫폼 팀원 모집 (프론트 개발자, 머신러닝 개발자)",
    category: "developer",
    user: "coco",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title:
      "[프론트] '폴더' 글로벌 패션 커뮤니티 함께 창업하실 개발자 모십니다. ",
    category: "developer",
    user: "이은채",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title: "STRCAT: 글을 이어 만드는 롤링페이퍼! ",
    category: "developer",
    user: "코코볼",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title: "전국 7만여개의 전기차 충전소를 한눈에! 플러그파인더",
    category: "developer",
    user: "Eastzoo",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title: "오디션 자동신청 프로젝트 함께하실 프론트 구합니다.",
    category: "developer",
    user: "조동그라미",
    view: "300",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title:
      "[사이드프로젝트] 전원생활 플랫폼을 함께 제작할 팀원 모집합니다.(모바일 앱, 모바일 UI, 웹 UI 등)",
    category: "developer",
    user: "신동주",
    view: "430",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title:
      "[사이드 프로젝트] 운동 관리 플랫폼 팀원 모집 (프론트 개발자, 머신러닝 개발자)",
    category: "developer",
    user: "coco",
    view: "150",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title:
      "[프론트] '폴더' 글로벌 패션 커뮤니티 함께 창업하실 개발자 모십니다. ",
    category: "developer",
    user: "이은채",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title: "STRCAT: 글을 이어 만드는 롤링페이퍼! ",
    category: "developer",
    user: "코코볼",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title:
      "[사이드 프로젝트] 운동 관리 플랫폼 팀원 모집 (프론트 개발자, 머신러닝 개발자)",
    category: "developer",
    user: "coco",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    title:
      "[프론트] '폴더' 글로벌 패션 커뮤니티 함께 창업하실 개발자 모십니다. ",
    category: "developer",
    user: "이은채",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    title: "STRCAT: 글을 이어 만드는 롤링페이퍼! ",
    category: "developer",
    user: "코코볼",
    view: "200",
    bookmark: "300",
    stack: "HTML5 , CSS3, JavaScript, TypeScript",
    src: "/assets/svg/colonyCard.png",
    bookmark_isTure: false,
  },
];

export const noticeData = {
  data: [
    {
      title: "공지사항 입니다.",
      date: "23-01-27",
    },
    {
      title: "공지사항 입니다.",
      date: "23-01-27",
    },
    {
      title: "공지사항 입니다.",
      date: "23-01-27",
    },
    {
      title: "공지사항 입니다.",
      date: "23-01-27",
    },
  ],
};

export const bannerCard = {
  data: [
    {
      title: "오디션 자동신청 프로젝트 함께하실 프론트 구합니다.",
      subtitle: "현재 가장 많은 신청자가 몰린 콜로니",
    },
    {
      title: "오디션 자동신청 프로젝트",
      subtitle: "최근 등록한 콜로니",
    },
    {
      title: "음원 스트리밍 데이터 비교 플랫폼",
      subtitle: "북마크가 가장 많은 콜로니",
    },
    {
      title: "글을 이어 만드는 롤링 페이퍼",
      subtitle: "현재 가장 많은 신청자가 몰린 콜로니",
    },
    {
      title: "전원 생활 플랫폼을 함께 제작할 팀원 모집합니다.",
      subtitle: "최근 등록한 콜로니",
    },
    {
      title: "운동 관리 플랫폼 팀원 모집",
      subtitle: "북마크가 가장 많은 콜로니",
    },
  ],
};

export const themeCard = {
  data: [
    {
      title: "맛깔나는 디자이너",
      src: "/assets/svg/paintkit.svg",
    },
    {
      title: "UI/UX 맛깔나는 디자이너 찾는중",
      src: "/assets/svg/paintkit.svg",
    },
    {
      title: "UI/UX",
      src: "/assets/svg/paintkit.svg",
    },
    {
      title: "같이 서버 관리할",
      src: "/assets/svg/paintkit.svg",
    },
    {
      title: "동료 찾는 콜로니",
      src: "/assets/svg/paintkit.svg",
    },
    {
      title: "같이 서버 관리할 동료 찾는 콜로니",
      src: "/assets/svg/paintkit.svg",
    },
  ],
};

export const myDashboard = {
  data: [
    {
      group: "서울",
      decr: "팀 설명입니다.",
      src: "/assets/svg/default_profile.svg",
    },
    {
      group: "경기",
      decr: "팀 설명입니다.",
      src: "/assets/svg/default_profile.svg",
    },
    {
      group: "인천",
      decr: "팀 설명입니다.",
      src: "/assets/svg/paintkit.svg",
    },
    {
      group: "부산",
      decr: "팀 설명입니다.",
      src: "/assets/svg/default_profile.svg",
    },
    {
      group: "경남",
      decr: "팀 설명입니다.",
      src: "/assets/svg/paintkit.svg",
    },
    {
      group: "전라",
      decr: "팀 설명입니다.",
      src: "/assets/svg/paintkit.svg",
    },
    {
      group: "제주",
      decr: "팀 설명입니다.",
      src: "/assets/svg/paintkit.svg",
    },
  ],
};

export const stackCategory = {
  data: [
    {
      category_items: "팀 넘버버버버원1",
      decr: "팀 설명입니다.",
      src: "/assets/svg/default_profile.svg",
    },
    {
      group: "팀 넘버버버버원2",
      decr: "팀 설명입니다.",
      src: "/assets/svg/default_profile.svg",
    },
    {
      group: "팀 넘버버버버원3",
      decr: "팀 설명입니다.",
      src: "/assets/svg/paintkit.svg",
    },
    {
      group: "팀 넘버버버버원4",
      decr: "팀 설명입니다.",
      src: "/assets/svg/default_profile.svg",
    },
    {
      group: "팀 넘버버버버원5",
      decr: "팀 설명입니다.",
      src: "/assets/svg/paintkit.svg",
    },
  ],
};

export const mainCategory = {
  data: [
    {
      name: "개발",
      sub: [
        { menu: "개발" },
        { menu: "소프트웨어 엔지니어" },
        { menu: "웹 개발자" },
        { menu: "서버 개발자" },
        { menu: "프론트엔드 개발자" },
        { menu: "자바 개발자" },
        { menu: "C, C++ 개발자" },
        { menu: "파이썬 개발자" },
        { menu: "머신러닝 엔지니어" },
        { menu: "DevOps/시스템 관리자" },
        { menu: "데이터 엔지니어" },
        { menu: "Node.js 개발자" },
        { menu: "시스템, 네트워크 관리자" },
        { menu: "안드로이드 개발자" },
        { menu: "iOS 개발자" },
        { menu: "임베디드 개발자" },
        { menu: "기술지원" },
      ],
    },
    {
      name: "경영, 비즈니스",
      sub: [
        "PM,PO",
        "사업개발,기획자",
        "서비스 기획자",
        "전략 기획자",
        "경영지원",
        "운영 매니저",
        "화계, 경리",
        "데이터 분석가",
        "상품 기획자(BM)",
        "총무",
        "해외 사업개발, 기획자",
        "자금담당",
        "컨설턴트",
        "사무보조",
        "조직관리",
        "정보보호 담당자",
      ].map(menu => ({menu})),
    },
  ],
};
