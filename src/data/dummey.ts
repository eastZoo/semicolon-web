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
      oid: "admin",
      parentOid: "0",
      sortNo: 1,
      depth: 0,
      menuType: "1",
      menuName: "ADMIN",
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
      selectIconUrl: "/assets/svg/selectBoard.svg",
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
      selectIconUrl: "/assets/svg/selectDashboard.svg",
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
      selectIconUrl: "/assets/svg/selectCalendar.svg",
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
      selectIconUrl: "/assets/svg/selectKanban.svg",
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
      selectIconUrl: "/assets/svg/selectGantt.svg",
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
      selectIconUrl: "/assets/svg/selectChat.svg",
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
      selectIconUrl: "/assets/svg/selectBoard.svg",
      path: "/dashboard/board",
      remark: null,
    },
    {
      oid: "announce",
      parentOid: "admin",
      sortNo: 70,
      depth: 1,
      menuType: "2",
      menuName: "Announce",
      useYn: 1,
      isSelected: 0,
      isOpen: 0,
      iconUrl: "/assets/svg/announce_icon.svg",
      selectIconUrl: "/assets/svg/select_announce_icon.svg",
      path: "/admin/announce",
      remark: null,
    },
    {
      oid: "adminsetting",
      parentOid: "admin",
      sortNo: 70,
      depth: 1,
      menuType: "2",
      menuName: "Setting",
      useYn: 1,
      isSelected: 0,
      isOpen: 0,
      iconUrl: "/assets/svg/setting.svg",
      selectIconUrl: "/assets/svg/selectSetting.svg",
      path: "/admin/setting",
      remark: null,
    },
  ],
};

export interface ColonyData {
  id?: number;
  title: string;
  category: string;
  user: string;
  view: string;
  bookmark: string;
  stack: string[];
  src: string;
  bookmark_isTure: boolean;
  team?: string;
  tag?: string[];
  dec?: string;
  people?: string;
  check?: string;
}

export const findColonyData: ColonyData[] = [
  {
    id: 1,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title: "전국 7만여개의 전기차 충전소를 한눈에! 플러그파인더",
    category: "developer",
    user: "Eastzoo",
    view: "200",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    id: 2,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title: "오디션 자동신청 프로젝트 함께하실 프론트 구합니다.",
    category: "developer",
    user: "조동그라미",
    view: "300",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    id: 3,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title:
      "[사이드 프로젝트] 운동 관리 플랫폼 팀원 모집 (프론트 개발자, 머신러닝 개발자)",
    category: "developer",
    user: "coco",
    view: "150",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    id: 4,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title:
      "[프론트] '폴더' 글로벌 패션 커뮤니티 함께 창업하실 개발자 모십니다. ",
    category: "developer",
    user: "이은채",
    view: "200",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    id: 5,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title: "STRCAT: 글을 이어 만드는 롤링페이퍼! ",
    category: "developer",
    user: "코코볼",
    view: "200",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    id: 6,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title:
      "[사이드 프로젝트] 운동 관리 플랫폼 팀원 모집 (프론트 개발자, 머신러닝 개발자)",
    category: "developer",
    user: "coco",
    view: "200",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    id: 7,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title:
      "[프론트] '폴더' 글로벌 패션 커뮤니티 함께 창업하실 개발자 모십니다. ",
    category: "developer",
    user: "이은채",
    view: "200",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    id: 8,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title: "STRCAT: 글을 이어 만드는 롤링페이퍼! ",
    category: "developer",
    user: "코코볼",
    view: "200",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    id: 9,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title: "전국 7만여개의 전기차 충전소를 한눈에! 플러그파인더",
    category: "developer",
    user: "Eastzoo",
    view: "200",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    id: 10,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title: "오디션 자동신청 프로젝트 함께하실 프론트 구합니다.",
    category: "developer",
    user: "조동그라미",
    view: "300",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    id: 11,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title:
      "[사이드프로젝트] 전원생활 플랫폼을 함께 제작할 팀원 모집합니다.(모바일 앱, 모바일 UI, 웹 UI 등)",
    category: "developer",
    user: "신동주",
    view: "430",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    id: 12,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title:
      "[사이드 프로젝트] 운동 관리 플랫폼 팀원 모집 (프론트 개발자, 머신러닝 개발자)",
    category: "developer",
    user: "coco",
    view: "150",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    id: 13,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title:
      "[프론트] '폴더' 글로벌 패션 커뮤니티 함께 창업하실 개발자 모십니다. ",
    category: "developer",
    user: "이은채",
    view: "200",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    id: 14,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title: "STRCAT: 글을 이어 만드는 롤링페이퍼! ",
    category: "developer",
    user: "코코볼",
    view: "200",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    id: 15,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title:
      "[사이드 프로젝트] 운동 관리 플랫폼 팀원 모집 (프론트 개발자, 머신러닝 개발자)",
    category: "developer",
    user: "coco",
    view: "200",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    id: 16,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title:
      "[프론트] '폴더' 글로벌 패션 커뮤니티 함께 창업하실 개발자 모십니다. ",
    category: "developer",
    user: "이은채",
    view: "200",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    id: 17,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title: "STRCAT: 글을 이어 만드는 롤링페이퍼! ",
    category: "developer",
    user: "코코볼",
    view: "200",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    id: 18,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title: "전국 7만여개의 전기차 충전소를 한눈에! 플러그파인더",
    category: "developer",
    user: "Eastzoo",
    view: "200",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    id: 19,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title: "오디션 자동신청 프로젝트 함께하실 프론트 구합니다.",
    category: "developer",
    user: "조동그라미",
    view: "300",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    id: 20,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title:
      "[사이드프로젝트] 전원생활 플랫폼을 함께 제작할 팀원 모집합니다.(모바일 앱, 모바일 UI, 웹 UI 등)",
    category: "developer",
    user: "신동주",
    view: "430",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: true,
  },
  {
    id: 21,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title:
      "[사이드 프로젝트] 운동 관리 플랫폼 팀원 모집 (프론트 개발자, 머신러닝 개발자)",
    category: "developer",
    user: "coco",
    view: "150",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
    bookmark_isTure: false,
  },
  {
    id: 22,
    team: "EastZoo 1",
    tag: ["소통 잘 되는 분", "20대 이상 선호"],
    dec: "저는 아래와 같은 동기를 가지고 프로젝트를 만들고 있습니다. 1) 운동을 효율적으로 하고 싶습니다. 2) 내 운동자세가 정확한지 알고 싶습니다. 3) 전문가에게 내 운동자세에 대한 피드백을 받고 싶습니다. 4) 헬스 PT를 등록하고 싶은데 헬스장의 헬스 트레이너에 대한 정보가 너무 없어서 어려웠습니다.",
    people:
      "기획자 1명 디자이너 1명 백엔드 1명 MVP 핵심 기능에 대한 디자인 80% 완료",
    check:
      "문의가 있을 경우 메일 : gyoon00125@gmail.com 으로 문의 부탁드립니다.",
    title:
      "[프론트] '폴더' 글로벌 패션 커뮤니티 함께 창업하실 개발자 모십니다. ",
    category: "developer",
    user: "이은채",
    view: "200",
    bookmark: "300",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    src: "/assets/image/colonyCard.png",
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
        { menu: "PM, PO" },
        { menu: "사업개발, 기회자" },
        { menu: "서비스 기획자" },
        { menu: "전략 기획자" },
        { menu: "경영 지원" },
        { menu: "운영 매니저" },
        { menu: "회계, 경리" },
        { menu: "데이터 분석가" },
        { menu: "상품 기획자(BM)" },
        { menu: "총무" },
        { menu: "PM, PO" },
        { menu: "해외 사업개발, 기획자" },
        { menu: "자금 담당" },
        { menu: "컨설턴트" },
        { menu: "사무보조" },
        { menu: "조직관리" },
        { menu: "정보보호 담당자" },
      ],
    },
  ],
};

export const cityCategory = {
  data: [
    {
      city: "서울",
      area: [
        { menu: "전체" },
        { menu: "강남구" },
        { menu: "강동구" },
        { menu: "강북구" },
        { menu: "강서구" },
        { menu: "관악구" },
        { menu: "광진구" },
        { menu: "구로구" },
        { menu: "금천구" },
        { menu: "노원구" },
        { menu: "도봉구" },
        { menu: "동대문구" },
        { menu: "동작구" },
        { menu: "마포구" },
        { menu: "서대문구" },
        { menu: "서초구" },
        { menu: "성동구" },
        { menu: "성북구" },
        { menu: "송파구" },
        { menu: "양천구" },
        { menu: "영등포구" },
        { menu: "용산구" },
        { menu: "은평구" },
        { menu: "종로구" },
        { menu: "중구" },
        { menu: "중랑구" },
      ],
    },
    {
      city: "부산",
      area: [
        { menu: "전체" },
        { menu: "강서구" },
        { menu: "금정구" },
        { menu: "남구" },
        { menu: "동구" },
        { menu: "동래구" },
        { menu: "부산진구" },
        { menu: "북구" },
        { menu: "사상구" },
        { menu: "사하구" },
        { menu: "서구" },
        { menu: "수영구" },
        { menu: "연제구" },
        { menu: "영도구" },
        { menu: "중구" },
        { menu: "해운대구" },
        { menu: "기장군" },
      ],
    },
  ],
};

export const stackCategory = {
  data: [
    {
      stack_id: 0,
      stack: "Python",
    },
    {
      stack_id: 1,
      stack: "Spring Framwork",
    },
    {
      stack_id: 2,
      stack: "AWS",
    },
    {
      stack_id: 3,
      stack: "Git",
    },
    {
      stack_id: 4,
      stack: "iOS",
    },
    {
      stack_id: 5,
      stack: "HTML",
    },
    {
      stack_id: 6,
      stack: "JavaScript",
    },
    {
      stack_id: 7,
      stack: "MySQL",
    },
    {
      stack_id: 8,
      stack: "SQL",
    },
    {
      stack_id: 9,
      stack: "Linux",
    },
    {
      stack_id: 10,
      stack: "Android",
    },
    {
      stack_id: 11,
      stack: "Kotlin",
    },
    {
      stack_id: 12,
      stack: "Swift",
    },
    {
      stack_id: 13,
      stack: "C/C++",
    },
    {
      stack_id: 14,
      stack: "PHP",
    },
    {
      stack_id: 15,
      stack: "Docker",
    },
    {
      stack_id: 16,
      stack: "React",
    },
    {
      stack_id: 17,
      stack: "Github",
    },
    {
      stack_id: 18,
      stack: "JPA",
    },
    {
      stack_id: 19,
      stack: "C++",
    },
  ],
};

export const statusCategory = {
  data: [
    {
      status_id: 0,
      status: "전체",
    },
    {
      status_id: 1,
      status: "모집중",
    },
    {
      status_id: 2,
      status: "모집마감",
    },
  ],
};

export const fdData: ColonyData[] = [];
