/** Tour API 관련 세팅 */
export const mobileOS   = "ETC";
export const mobileApp  = "TravelP";
export const serviceKey = "ESun5Z0R0NacQfzLb0UEPB7j8XxI7tACyhwpT80fp%2FpDXspB2JKUjsrZh6DWJmSJvTlL9vKPkbJInjZtVHUXVw%3D%3D"
export const _type      = "json";

export const crsKorNm = ((key: number) => {
    switch(key) {
        case 1: return "해파랑길"
        case 3: return "남파랑길"
        case 4: return "서해랑길"
    }
});

export const level = [
    "하",
    "중",
    "상"
]

export const load = [
    "자전거",
    "걷기"
]

export const login = [
    "https://travelp.vercel.app/kakao.png",
    "https://travelp.vercel.app/google.png"
]

export const keywords = [
    {
        key: 1,
        title: "서울"
    },
    {
        key: 2,
        title: "강원"
    },
    {
        key: 3,
        title: "경기"
    },
    {
        key: 4,
        title: "충청"
    },
    {
        key: 5,
        title: "경상"
    },
    {
        key: 6,
        title: "전라"
    }
]

export const contentType = [
    {
        key: 1,
        title: "관광지"
    },
    {
        key: 2,
        title: "문화시설"
    },
    {
        key: 3,
        title: "축제공연행사"
    },
    {
        key: 4,
        title: "여행코스"
    },
    {
        key: 5,
        title: "레포츠"
    },
    {
        key: 6,
        title: "숙박"
    },
    {
        key: 7,
        title: "쇼핑"
    },
    {
        key: 8,
        title: "음식점"
    }
]

export const categoryHeaderItems = [
    {
        key: 0,
        title: "소개"
    },
    {
        key: 1,
        title: "커뮤니티"
    },
    {
        key: 2,
        title: "관광"
    },
    {
        key: 3,
        title: "여행 코스"
    },
    {
        key: 4,
        title: "로그인"
    }
]

export const travelCourseItems = [
    {
        key: 1,
        title: "코리아 둘레길"
    },
    {
        key: 2,
        title: "해파랑길"
    },
    {
        key: 3,
        title: "남파랑길"
    },
    {
        key: 4,
        title: "서해랑길"
    }
]