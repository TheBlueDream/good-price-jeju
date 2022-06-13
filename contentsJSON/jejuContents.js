const jejuContents = [
  {
    title : "뽈살집",
    category : "음식점",
    place : "제주시",
    phone : "064-796-5860",
    address : "제주특별자치도 제주시 한림읍 한림상로 194",
    time: "12:30~23:00 / 월 2회(휴무일 유동적)",
    menu : "뽈살(180g) 9500 갈매기살(180g) 10000원 가브리살(180g) 10000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "동명본가",
    category : "음식점",
    place : "제주시",
    phone : "064-796-6534",
    address : "제주특별자치도 제주시 한림읍 한림상로 61",
    time: "17:00~22:00 / 매주 일요일",
    menu : "흑돼지무한리필 (1인) 13900",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "구이사이",
    category : "음식점",
    place : "제주시",
    phone : "064-799-9242",
    address : "제주특별자치도 제주시 애월읍 신엄9길 2",
    time: "06:00~21:00 / 둘째.넷쨰 일요일",
    menu : "양념갈비(300g) 14000원 정식 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "진심칼국수",
    category : "음식점",
    place : "제주시",
    phone : "",
    address : "제주특별자치도 제주시 애월읍 중산간서로 6703",
    time: "월~금 10:00~20:00토 10:00~15:00 / 매주 일요일",
    menu : "칼국수 6500원 김치칼국수 6500원 흑돼지불고기(120g) 3500원 제육덮밥 7500원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "산들촌",
    category : "음식점",
    place : "제주시",
    phone : "064-712-1200",
    address : "제주특별자치도 제주시 애월읍 평화로 2751",
    time: "09:00~21:00 / 매주 일요일",
    menu : "성게국 10000원 전복죽 10000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "비자림길",
    category : "음식점",
    place : "제주시",
    phone : "064-782-5118",
    address : "제주특별자치도 제주시 구좌읍 비자림로 2682",
    time: "11:00~18:00 /매주 화요일",
    menu : "흑돼지정식 8000원 갈치조림 中 38000원 고등어조림 中 25000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "오동여",
    category : "음식점",
    place : "제주시",
    phone : "064-742-9086",
    address : "제주특별자치도 제주시 추자면 추자로 18",
    time: "09:00~21:00 /연중 무휴",
    menu : "삼치회(2인) 30000원 자연산회(대) 50000원 해산물모듬회(대) 50000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "도원식당",
    category : "음식점",
    place : "제주시",
    phone : "",
    address : "제주특별자치도 제주시 동문로4길 9",
    time: "09:00~20:00 /설 추석당일",
    menu : "칼국수 6000원 김밥 2000원 콩국수 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "속초집",
    category : "음식점",
    place : "제주시",
    phone : "064-752-2848",
    address : "제주특별자치도 제주시 신산로 6",
    time: "10:00~22:00/연중무휴",
    menu : "냉면 7000원 쭈꾸미 8000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "동우네",
    category : "음식점",
    place : "제주시",
    phone : "064-755-7482",
    address : "제주특별자치도 제주시 연수로3길 23",
    time: "08:00~20:00 / 매주 일요일",
    menu : "순두부 5000원 비빔밥 5500원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "삼주손칼국수",
    category : "음식점",
    place : "제주시",
    phone : "064-756-8892",
    address : "제주특별자치도 제주시 천수로 56",
    time: "07:00~17:00 / 매주 일요일",
    menu : "닭칼국수 6000원 해물칼국수 6000원 멸치칼국수 5500원 김밥 2000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "성춘식당",
    category : "음식점",
    place : "제주시",
    phone : "064-753-0528",
    address : "제주특별자치도 제주시 성지로 68",
    time: "08:00~21:00 / 연중무휴",
    menu : "순두부 5000원 몸국 6000원 고기국수 6000원 국밥 6000원 자리물회 8000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "다랑시국수",
    category : "음식점",
    place : "제주시",
    phone : "064-752-8013",
    address : "제주특별자치도 제주시 신산로 52",
    time: "17:00~06:00 / 연중무휴",
    menu : "멸치국수 4000원 고기국수 6000원 열무국수 6000원 비빔국수 5000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "남현순대",
    category : "음식점",
    place : "제주시",
    phone : "064-751-3374",
    address : "제주특별자치도 제주시 천수로 56",
    time: "10:00~23:00 / 연중무휴",
    menu : "순대국밥 6000원 고기국수 6000원 멸치국수 5000원 콩국수 6000원 몸국 6000원 냉국수 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "용초밥",
    category : "음식점",
    place : "제주시",
    phone : "",
    address : "제주특별자치도 제주시 신선동길 19-1",
    time: "11:00~15:00(커피) 08:00~13:00 / 연중무휴(예약제운영)",
    menu : "부시리초밥 7900 광어초밥 8900 부시리용초밥(2인분) 17800",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "명가돈까스",
    category : "음식점",
    place : "제주시",
    phone : "064-711-0204",
    address : "제주특별자치도 제주시 태성로2길 30-1",
    time: "11:00~21:00브레이크타임 15:00~17:00 / 제주민속오일장날(매월 2·7·12·17·22·27일)",
    menu : "등심돈까스 6000원 치즈돈까스 7000원 안심돈까스 6000원 치킨까스 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "제주토속",
    category : "음식점",
    place : "제주시",
    phone : "064-758-8948",
    address : "제주특별자치도 제주시 동광로1길 27-1",
    time: "09:00~19:00 / 매월 마지막 일요일",
    menu : "몸국 5000원 멸치국수 4000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "광주빛고을",
    category : "음식점",
    place : "제주시",
    phone : "",
    address : "제주특별자치도 제주시 동광로5길 8",
    time: "17:00~22:00(배달 15:00~23:00) / 연중무휴",
    menu : "아귀찜(소) 25000원 아귀찜(중) 30000원 아귀찜(대) 40000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "도남오거리도남점",
    category : "음식점",
    place : "제주시",
    phone : "064-757-9118",
    address : "제주특별자치도 제주시 도남로6길 16",
    time: "15:00~24:00 / 설.추석 전날과 당일",
    menu : "김치찌개 5000원 돼지양념갈비(360g) 14000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "본가",
    category : "음식점",
    place : "제주시",
    phone : "064-724-8588",
    address : "제주특별자치도 제주시 도남로 101",
    time: "08:00~23:00 / 셋째 일요일",
    menu : "순두부해장국 6000원 선지해장국 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "또다시영림",
    category : "음식점",
    place : "제주시",
    phone : "064-758-8649",
    address : "제주특별자치도 제주시 동광로6길 14",
    time: "11:30~20:00 / 매주 토.일요일.공휴일",
    menu : "된장찌개 6000원 김치찌개 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "추억의집",
    category : "음식점",
    place : "제주시",
    phone : "064-743-9779",
    address : "제주특별자치도 제주시 연삼로 414-1",
    time: "11:00~21:00 / 매주 일요일",
    menu : "순대국밥 6000원 김치찌개 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "미루네",
    category : "음식점",
    place : "제주시",
    phone : "064-756-3048",
    address : "제주특별자치도 제주시 오복4길 5",
    time: "17:00~24:00 / 매주 일요일",
    menu : "돼지갈비(320g) 12000원 냉면 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "부지깽이",
    category : "음식점",
    place : "제주시",
    phone : "064-723-3522",
    address : "제주특별자치도 제주시 광양13길 11-2",
    time: "09:30~23:00 / 매주 일요일",
    menu : "고등어밥 6000원 보말국 8000원 고등어국 8000원 고등어조림(소) 20000원 고등어조림(중) 25000원 고등어조림(대) 30000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "광양왕소금깡통구이",
    category : "음식점",
    place : "제주시",
    phone : "064-755-9966",
    address : "제주특별자치도 제주시 광양13길 13",
    time: "10:00~23:00 / 매주 화요일",
    menu : "돌솥비빔밥 5000원 된장찌개 5000원 비빔밥 5000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "효동각",
    category : "음식점",
    place : "제주시",
    phone : "064-751-1507",
    address : "제주특별자치도 제주시 동광로6길 31",
    time: "11:00~20:00 / 매주 화요일",
    menu : "짜장면 4000원 짬뽕면 5000원 볶음밤 5000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "도남해돈가",
    category : "음식점",
    place : "제주시",
    phone : "064-753-8851",
    address : "제주특별자치도 제주시 신성로 61-1",
    time: "18:00~22:00 / 둘째.넷째 화요일",
    menu : "제주산오겹살(200g) 12000원 냉면 5000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "영춘식당",
    category : "음식점",
    place : "제주시",
    phone : "064-900-2770",
    address : "제주특별자치도 제주시 도남로7길 37-1",
    time: "10:00~20:00 / 매주 일요일",
    menu : "두루치기(2인분) 12000원 김치찌개 6000원 갈비탕 7000원 된장찌개 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "명가돈까스",
    category : "음식점",
    place : "제주시",
    phone : "064-711-0204",
    address : "제주특별자치도 제주시 태성로2길 30-1",
    time: "11:00~21:00브레이크타임 15:00~17:00 / 제주민속오일장날(매월 2·7·12·17·22·27일)",
    menu : "등심돈까스 6000원 치즈돈까스 7000원 안심돈까스 6000원 치킨까스 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "해아름",
    category : "음식점",
    place : "제주시",
    phone : "064-758-1833",
    address : "제주특별자치도 제주시 가령로 7",
    time: "10:00~21:00 / 매주 일요일",
    menu : "뼈해장국 7000원 접짝뼈국 8000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "마중물삼계탕",
    category : "음식점",
    place : "제주시",
    phone : "064-702-8250",
    address : "제주특별자치도 제주시 서사로 62-2",
    time: "10:00~22:00 / 6·7·8월 연중무휴그외 일요일 16시부터 영업",
    menu : "삼계탕 10000원 닭곰탕 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "24시국수회관",
    category : "음식점",
    place : "제주시",
    phone : "064-702-1162",
    address : "제주특별자치도 제주시 남성로 122-1",
    time: "24시간 영업 / 연중무휴",
    menu : "고기국수 6000원 순대국밥 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "탐라가든",
    category : "음식점",
    place : "제주시",
    phone : "064-757-5187",
    address : "제주특별자치도 제주시 서사로 51",
    time: "12:00~22:00 / 매주 월요일",
    menu : "돼지 생갈비(200g) 10000원 돼지 양념갈비(230g) 8000원 냉면 6000원 흑돼지(180g) 17000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "이서림",
    category : "음식점",
    place : "제주시",
    phone : "064-724-0058",
    address : "제주특별자치도 제주시 중앙로24길 4",
    time: "11:30~23:00브레이크타임 14:00~17:00 / 첫째. 셋째 일요일",
    menu : "김치찌개(공기밥 별도) 5000원 열무국수 4000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "해녀할망국수",
    category : "음식점",
    place : "제주시",
    phone : "064-726-1381",
    address : "제주특별자치도 제주시 탑동로 31-1",
    time: "08:00~24:00 / 연중무휴",
    menu : "고기국수 6000원 멸치국수 5000원 비빔국수 5000원 냉면 6000원 콩국수 6000원 찐만두 5000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "국수정복",
    category : "음식점",
    place : "제주시",
    phone : "064-758-7807",
    address : "제주특별자치도 제주시 탑동로13길 27",
    time: "11:00~22:00 / 매주 일요일",
    menu : "멸치국수 4000원 고기국수 6000원 제주산고사리육개장 7000원 비빔국수 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "양반촌",
    category : "음식점",
    place : "제주시",
    phone : "064-721-7185",
    address : "제주특별자치도 제주시 서광로5길 29",
    time: "10:00~22:00 / 매주 일요일",
    menu : "돼지주물럭 7000원 된장찌개 6000원 냉면 6000원 국수 4000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "해림식당",
    category : "음식점",
    place : "제주시",
    phone : "064-757-7698",
    address : "제주특별자치도 제주시 남성로 20-1",
    time: "06:00~17:00 / 매주 일요일",
    menu : "김치찌개 7000원 된장찌개 7000원 만두백반 6000원 순두부 7000원 참치찌개 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "한라산도야지 남사골",
    category : "음식점",
    place : "제주시",
    phone : "064-751-0202",
    address : "제주특별자치도 제주시 서광로 3길 48",
    time: "17:00~22:00 / 매주 월요일",
    menu : "오겹살(200g) 11000원 목살(200g) 11000원 돼지고기 샤브샤브(200g) 11000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "넉둥베기",
    category : "음식점",
    place : "제주시",
    phone : "064-743-2585",
    address : "제주특별자치도 제주시 서문로 9-1",
    time: "10:00~22:00 / 둘째.넷째 일요일",
    menu : "김치찌개 5000원 돼지국밥 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "용담생국수",
    category : "음식점",
    place : "제주시",
    phone : "064-743-2503",
    address : "제주특별자치도 제주시 용담로 95",
    time: "07:00~22:00 / 매주 일요일",
    menu : "고기국수 6000원 몸국 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "남도별미식당",
    category : "음식점",
    place : "제주시",
    phone : "064-742-0765",
    address : "제주특별자치도 제주시 흥운길 31",
    time: "10:00~22:00 / 연중무휴",
    menu : "순두부 5000원 청국장 6000원 백반 6000원 두루치기 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "만나아구찜",
    category : "음식점",
    place : "제주시",
    phone : "064-745-0230",
    address : "제주특별자치도 제주시 흥운길 31",
    time: "10:00~22:00 / 둘째.넷째 일요일",
    menu : "동태찌개 6000원 김치찌개 6000원 순두부 6000원 된장찌개 6000원 콩국수 7000원 오겹살(제주산 200g) 12000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "인풍감자탕",
    category : "음식점",
    place : "제주시",
    phone : "064-758-8414",
    address : "제주특별자치도 제주시 만덕로 36",
    time: "11:00~22:00브레이크타임 14:00~16:30일요일 16:00~22:00 / 연중무휴",
    menu : "뼈우거지탕 7000원 콩나물해장국 6000원 몸국 7000원 육개장 7000원 대패삼겹살 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "해동이네",
    category : "음식점",
    place : "제주시",
    phone : "064-725-2007",
    address : "제주특별자치도 제주시 임항로 242. 1층",
    time: "05:00~15:00 / 매주 월요일",
    menu : "해장국 7000원 내장탕 8000원 육개장 8000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "내가 찾은 맛고을",
    category : "음식점",
    place : "제주시",
    phone : "064-702-0216",
    address : "제주특별자치도 제주시 진남로8길 39",
    time: "11:00~21:30 / 매주 일요일",
    menu : "삼계탕 8000원 녹두삼계탕 10000원 소머리국밥 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "일오삼가든",
    category : "음식점",
    place : "제주시",
    phone : "064-723-0153",
    address : "제주특별자치도 제주시 진남로8길 13",
    time: "16:30~22:30 / 설.추석연휴",
    menu : "돼지목살(제주산) 12000원 김치찌개 6000원 된장찌개 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "신춘반점",
    category : "음식점",
    place : "제주시",
    phone : "064-722-6992",
    address : "제주특별자치도 제주시 진동로5길 30",
    time: "10:30~20:00 / 매주 월요일",
    menu : "짜장면 4000원 간짜장 5000원 볶음밥 5000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "서림칡냉면",
    category : "음식점",
    place : "제주시",
    phone : "064-756-2009",
    address : "제주특별자치도 제주시 진남로8길 13",
    time: "11:00~16:00 / 매주 일요일",
    menu : "동태찌개 6000원 냉면 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "행복맛집",
    category : "음식점",
    place : "제주시",
    phone : "064-758-6788",
    address : "제주특별자치도 제주시 진남로6길 32",
    time: "10:00~23:00 / 매주 일요일",
    menu : "순두부(수제) 7000원 제주산고사리육개장 7000원 동태탕 7000원 알내장탕 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "복자네",
    category : "음식점",
    place : "제주시",
    phone : "064-752-0611",
    address : "제주특별자치도 제주시 진동로3길 34",
    time: "11:00~22:00 / 첫째. 셋째. 다섯째 화요일",
    menu : "냉모밀면 6000원 멸치국수 6000원 돼지고기숙주볶음(공기밥포함) 9000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "후년하우스",
    category : "음식점",
    place : "제주시",
    phone : "064-759-9292",
    address : "제주특별자치도 제주시 삼봉로 12",
    time: "10:00~22:00브레이크타임 14:00~17:00 / 매주 일요일. 공휴일. 설추석연휴",
    menu : "돼지고기샤브샤브 11000원 말고기샤브샤브 13000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "현기네식당",
    category : "음식점",
    place : "제주시",
    phone : "064-722-0722",
    address : "제주특별자치도 제주시 번영로 487",
    time: "05:30~14:30 / 매주 일요일",
    menu : "순두부 6000원 된장찌개 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "또옵써 식당",
    category : "음식점",
    place : "제주시",
    phone : "064-723-0720",
    address : "제주특별자치도 제주시 번영로 459",
    time: "10:00~22:00브레이크타임 14:30~17:00 / 연중무휴",
    menu : "된장찌개 5000원 김치찌개 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "공주네국수",
    category : "음식점",
    place : "제주시",
    phone : "064-722-4533",
    address : "제주특별자치도 제주시 삼봉로 353",
    time: "08:00~20:00 / 매주 월요일",
    menu : "멸치국수 5000원 물만두 5000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "명가국밥집",
    category : "음식점",
    place : "제주시",
    phone : "064-755-5999",
    address : "제주특별자치도 제주시 번영로 553",
    time: "06:00~20:00 / 연중무휴",
    menu : "부페 7000원 검은콩국수 6000원 한식 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "넉넉한 밥상",
    category : "음식점",
    place : "제주시",
    phone : "",
    address : "제주특별자치도 제주시 인다5길 12-21",
    time: "11:00~21:00 / 둘째.넷째 일요일",
    menu : "돼지주물럭 8000원 소불고기 9000원 삼겹살 14000원 오겹살 17000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "은혜중화요리",
    category : "음식점",
    place : "제주시",
    phone : "064-723-0919",
    address : "제주특별자치도 제주시 인다2길 20",
    time: "11:00~20:00 / 매주 월요일",
    menu : "짜장면 5000원 셋탕 탕수육 10000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "추가네",
    category : "음식점",
    place : "제주시",
    phone : "064-723-7588",
    address : "제주특별자치도 제주시 서사로 176",
    time: "10:00~17:00 / 매주 토요일",
    menu : "추어탕 6000원 통추어탕 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "마라톤식당",
    category : "음식점",
    place : "제주시",
    phone : "064-757-1945",
    address : "제주특별자치도 제주시 서광로 174",
    time: "07:00~19:00 / 매주 일요일",
    menu : "김치찌개 6000원 된장찌개 6000원 만두국 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "현옥식당",
    category : "음식점",
    place : "제주시",
    phone : "064-757-3439",
    address : "제주특별자치도 제주시 서광로2길 35",
    time: "07:00~22:00 / 설.추석 연휴",
    menu : "정식 4000원 김치찌개 6000원 된장찌개 6000원 두루치기 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "산내들식당",
    category : "음식점",
    place : "제주시",
    phone : "064-702-0885",
    address : "제주특별자치도 제주시 서광로4길 16",
    time: "07:00~20:30 / 둘째.넷째 일요일",
    menu : "김치찌개 6000원 순두부 6000원 비빔밥 6000원 육개장 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "감나무집",
    category : "음식점",
    place : "제주시",
    phone : "064-722-8292",
    address : "제주특별자치도 제주시 오남로 12",
    time: "11:00~22:00 / 설.추석 당일",
    menu : "우거지탕 7000원 된장찌개 7000원 김치찌개 7000원 차돌국밥 7000원 정식 8000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "무진장오라점",
    category : "음식점",
    place : "제주시",
    phone : "064-712-6881",
    address : "제주특별자치도 제주시 서광로2길 11-9",
    time: "10:00~20:00 / 매주 월요일",
    menu : "한치물회 7000원 자리물회 7000원 회덮밥 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "태연종합정육식당",
    category : "음식점",
    place : "제주시",
    phone : "064-723-0187",
    address : "제주특별자치도 제주시 서사로 187",
    time: "11:00~24:00 / 연중무휴",
    menu : "김치찌개 5000원 된장찌개 5000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "또만나",
    category : "음식점",
    place : "제주시",
    phone : "064-712-3478",
    address : "제주특별자치도 제주시 서광로2길 35",
    time: "08:00~21:00 / 매주 화요일",
    menu : "소고기 콩나물비빔밥 6000원 순두부찌개 6000원 된장찌개 6000원 김치찌개 6000원 떡만두국 5000원 고기국수 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "돈가",
    category : "음식점",
    place : "제주시",
    phone : "064-744-5700",
    address : "제주특별자치도 제주시 문송길 36",
    time: "11:00~22:00 / 설.추석 당일",
    menu : "샤브샤브 13000원 점심식사 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "좀녀마을뚝배기",
    category : "음식점",
    place : "제주시",
    phone : "064-745-3535",
    address : "제주특별자치도 제주시 은남길 25",
    time: "08:00~20:00 / 설.추석 당일",
    menu : "성게국 10000원 순두부 5000원 해물뚝배기 8000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "다해복국",
    category : "음식점",
    place : "제주시",
    phone : "064-749-9868",
    address : "제주특별자치도 제주시 문송1길 17",
    time: "11:00~15:00 / 매주 일요일(예약시 휴무관계없음)",
    menu : "복해장국 8000원 복지리 8000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "깜돈흑돼지",
    category : "음식점",
    place : "제주시",
    phone : "064-712-9229",
    address : "제주특별자치도 제주시 삼무로3길 6",
    time: "15:00~23:00 / 둘째.넷째 일요일",
    menu : "흑돼지오겹살(200g) 17000원 흑돼지목살(200g) 17000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "재현이네갈비",
    category : "음식점",
    place : "제주시",
    phone : "064-711-5323",
    address : "제주특별자치도 제주시 선덕로 7",
    time: "16:00~22:00 /첫째.셋째 일요일",
    menu : "갈비 10000원 등갈비 11000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "장군닭",
    category : "음식점",
    place : "제주시",
    phone : "064-744-2216",
    address : "제주특별자치도 제주시 신광로6길 2",
    time: "14:00~02:00 / 매주 일요일",
    menu : "후라이드치킨 16000원 양념치킨 17000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "황궁쟁반 탐라원",
    category : "음식점",
    place : "제주시",
    phone : "064-749-6644",
    address : "제주특별자치도 제주시 원노형6길 7",
    time: "11:00~20:00 / 매주 일요일",
    menu : "짜장면 2500 짬뽕 3500 탕수육 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "승범이네집",
    category : "음식점",
    place : "제주시",
    phone : "064-744-3538",
    address : "제주특별자치도 제주시 월랑로 56-1",
    time: "10:00~23:00 / 설.추석 당일",
    menu : "생선지리 8000원 어내장탕 8000원 회덮밥 8000원 매운탕 8000원 초밥 8000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "길벗식당",
    category : "음식점",
    place : "제주시",
    phone : "064-744-0848",
    address : "제주특별자치도 제주시 월광로 162",
    time: "10:00~22:00일요일 16:00~22:00 / 연중무휴",
    menu : "오리구이(1마리) 45000원 오리주물럭(1마리) 45000원 오겹살(200g) 12000원 몸국(정식) 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "푸른바다회포차",
    category : "음식점",
    place : "제주시",
    phone : "",
    address : "제주특별자치도 제주시 수덕7길 47",
    time: "17:30~24:00 / 연중무휴",
    menu : "광어회 30000원 돈까스 5000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "금순이네",
    category : "음식점",
    place : "제주시",
    phone : "064-711-1114",
    address : "제주특별자치도 제주시 정존1길 31",
    time: "17:00~23:30※단체time무관 / 설.추석 연휴 봉사기간(7.25~8.10)",
    menu : "흑돼지오겹(180g) 13000원 흑돼지김치찌개 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "내도바당",
    category : "음식점",
    place : "제주시",
    phone : "064-743-8339",
    address : "제주특별자치도 제주시 내도중길 9-7",
    time: "11:00~22:00 / 매주 일요일",
    menu : "매운탕 8000원 활아나고매운탕 10000원 돔지리 10000원 활한치물회 12000원 활한치회덮밥 12000원 자리물회 10000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "이오리",
    category : "음식점",
    place : "제주시",
    phone : "064-751-4905",
    address : "제주특별자치도 제주시 도리로 53",
    time: "10:00~21:30 / 설.추석 연휴",
    menu : "정식 7000원 오리탕 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "도두해녀의집",
    category : "음식점",
    place : "제주시",
    phone : "064-743-1500",
    address : "제주특별자치도 제주시 도두항길 16",
    time: "10:0~21:00 / 설.추석 전날과 당일",
    menu : "전복성게물회 10000원 전복물회 10000원 회덮밥 11000원 전복죽 11000원 성게미역국 9000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "테왁식당",
    category : "음식점",
    place : "제주시",
    phone : "064-742-4949",
    address : "제주특별자치도 제주시 서해안로 155",
    time: "11:00~23:00 / 설.추석 연휴",
    menu : "전복물회 10000원 자리물회 10000원 성게미역국 8000원 회덮밥 10000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "요메기섬 현재식당",
    category : "음식점",
    place : "제주시",
    phone : "070-7778-3356",
    address : "제주특별자치도 제주시 도두항길 10",
    time: "09:00~21:00 / 매주 일요일",
    menu : "정식 6000원 활우럭매운탕 10000원 전복해물뚝배기 12000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "자매미용실",
    category : "이미용",
    place : "제주시",
    phone : "064-752-7583",
    address : "제주특별자치도 제주시 동문로4길 17",
    time: "09:00~18:00 / 매주 일요일",
    menu : "파마 20000원 커트 5000원 염색 20000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "이애란헤어샵",
    category : "이미용",
    place : "제주시",
    phone : "064-724-0090",
    address : "제주특별자치도 제주시 고마로 58",
    time: "09:30~19:30 / 매주 일요일",
    menu : "커트 7000원 기본파마 25000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "은가미용실",
    category : "이미용",
    place : "제주시",
    phone : "064-723-1216",
    address : "제주특별자치도 제주시 중앙로 192",
    time: "10:00~17:00(계절별 변동) / 매주 일요일",
    menu : "커트 7000원 커트(샴푸시) 10000원 파마 20000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "머리만지는 남자",
    category : "이미용",
    place : "제주시",
    phone : "064-723-8501",
    address : "제주특별자치도 제주시 중앙로 205",
    time: "10:00~20:00 / 연중무휴",
    menu : "커트 9000원 펌 20000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "아름다운 사람들",
    category : "이미용",
    place : "제주시",
    phone : "064-722-7741",
    address : "제주특별자치도 제주시 중앙로 69",
    time: "09:30~20:00 / 연중무휴",
    menu : "일반 펌 30000원 컷트 10000원 매직 50000원~70000원 염색 20000원~50000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "도남이용원",
    category : "이미용",
    place : "제주시",
    phone : "064-752-2882",
    address : "제주특별자치도 제주시 신성로 55",
    time: "06:30~19:00 / 매주 일요일",
    menu : "커트 7000원 커트+염색 15000원 커트+앞면도 12000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "지혜미용실",
    category : "이미용",
    place : "제주시",
    phone : "064-757-8525",
    address : "제주특별자치도 제주시 서사로19길 5",
    time: "10:00~19:00 / 매주 일요일",
    menu : "컷트 10000원 파마 25000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "남문이용원",
    category : "이미용",
    place : "제주시",
    phone : "064-757-5935",
    address : "제주특별자치도 제주시 남성로 125",
    time: "08:00~19:00 / 매주 일요일",
    menu : "이발(학생) 5000원 이발+면도+염색 25000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "행복한머리방",
    category : "이미용",
    place : "제주시",
    phone : "064-758-8799",
    address : "제주특별자치도 제주시 서광로3길 42",
    time: "10:00~19:30 / 매주 일요일",
    menu : "컷트(초등90세이상) 3000원 커트(여성) 4000원 컷트(남성) 5000원 펌(일반) 20000원 펌(60세이상) 15000원 매직(단발기준) 30000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "수앤진미용실",
    category : "이미용",
    place : "제주시",
    phone : "064-723-3244",
    address : "제주특별자치도 제주시 용남길 20",
    time: "09:00~19:00 / 매주 월요일",
    menu : "컷트 10000원 염색 25000원 파마 25000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "전원미용실",
    category : "이미용",
    place : "제주시",
    phone : "064-751-5682",
    address : "제주특별자치도 제주시 임항로 261",
    time: "08:00~19:30 / 매주 월요일",
    menu : "파마 20000원 커트 8000원 셋팅 35000원 드라이 8000원 올림머리 25000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "정다운미용샵",
    category : "이미용",
    place : "제주시",
    phone : "064-784-5667",
    address : "제주특별자치도 제주시 진남로6길 36-1",
    time: "09:00~20:00 / 매주 수요일",
    menu : "파마 20000원 컷트(샴푸미포함) 8000원 업스타일 30000원 매직 50000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "머리하기좋은날",
    category : "이미용",
    place : "제주시",
    phone : "064-713-6667",
    address : "제주특별자치도 제주시 신대로6길 11",
    time: "10:00~19:00 / 연중무휴",
    menu : "컷트 7000원 염색(커트드라이별도) 25000원 파마 25000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "라영헤어숍",
    category : "이미용",
    place : "제주시",
    phone : "064-744-3340",
    address : "제주특별자치도 제주시 다랑곶4길 18",
    time: "09:00~20:00 / 첫째.셋째 일요일",
    menu : "컷트 8000원 컷트(샴푸시) 10000원 염색 20000원~30000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "바다풍경펜션",
    category : "숙박업",
    place : "제주시",
    phone : "064-711-0808",
    address : "제주특별자치도 제주시 애월읍 애월해안로 923",
    time: "24시간영업 / 연중무휴",
    menu : "2인실 40000원 6인실 110000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "시드니호텔",
    category : "숙박업",
    place : "제주시",
    phone : "064-713-3399",
    address : "제주특별자치도 제주시 애월읍 애월해안로 943",
    time: "24시간영업 / 연중무휴",
    menu : "본관 50000원 작은방 40000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "예예하우스",
    category : "숙박업",
    place : "제주시",
    phone : "070-4404-1474",
    address : "제주특별자치도 제주시 애월읍 도치돌길 279-1",
    time: "24시간영업 / 연중무휴",
    menu : "2인실 45000원 4인실 70000원 6인실 120000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "봉골레하우스",
    category : "숙박업",
    place : "제주시",
    phone : "064-744-1551",
    address : "제주특별자치도 제주시 추자면 추자로 94-1",
    time: "24시간영업 / 연중무휴",
    menu : "숙박(1인실) 30000원 숙박(식사포함)40000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "너븐팡게스트하우스",
    category : "숙박업",
    place : "제주시",
    phone : "",
    address : "제주특별자치도 제주시 신광로 102-1",
    time: "07:30~20:30 /연중무휴",
    menu : "도미토리 25000원 독립실 50000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "진영세탁소",
    category : "세탁업",
    place : "제주시",
    phone : "064-724-1629",
    address : "제주특별자치도 제주시 오복4길 9",
    time: "07:30~20:00 / 매주 일요일",
    menu : "양복 상의 4000원 양복 하의 4000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "동광회센타",
    category : "음식점",
    place : "제주시",
    phone : "064-757-2981",
    address : "제주특별자치도 제주시 연삼로 544",
    time: "15:00~24:00 / 연중무휴",
    menu : "모듬회(小) 35000원 모듬회(中) 50000원 도듬회(大) 65000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "사계오름",
    category : "음식점",
    place : "제주시",
    phone : "064-724-1162",
    address : "제주특별자치도 제주시 복지로3길 2-9",
    time: "11:30~14:00 / 매주 토.일요일",
    menu : "정식 6000원 순두부찌개 5000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "동문통해장국",
    category : "음식점",
    place : "제주시",
    phone : "064-721-3692",
    address : "제주특별자치도 제주시 동문로11길 5",
    time: "10:00~14:0017:00~22:00 / 설.추석명절 당일",
    menu : "소고기해장국 7000원 황태해장국 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "블랙데이",
    category : "음식점",
    place : "제주시",
    phone : "064-758-3286",
    address : "제주특별자치도 제주시 만덕로 23-2",
    time: "11:00~19:30※BREAK TIME 14:30~17:00(7~8월) 10:30~15:00 / 매주 월요일. 명절 전날 및 당일",
    menu : "자장면 3000원 짬뽕 5000원 볶음밥 5000원 탕수육(1인) 5000원 탕수육(대) 13000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "하귀밀면",
    category : "음식점",
    place : "제주시",
    phone : "064-792-1101",
    address : "제주특별자치도 제주시 산지로 25",
    time: "10:00~15:00 / 매주 일요일",
    menu : "밀면 6000원 비빔밀면 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "조약돌",
    category : "음식점",
    place : "제주시",
    phone : "064-757-7884",
    address : "제주특별자치도 제주시 임항로 255",
    time: "08:00~22:00 / 설.추석명절 당일",
    menu : "갈비정식 8000원 파불고기 8000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "오솔길",
    category : "음식점",
    place : "제주시",
    phone : "064-758-3663",
    address : "제주특별자치도 제주시 임항로 264",
    time: "(평일) 11:00~14:00. 17:00~22:30. (토일) 17:00~22:30 / 설.추석명절 당일",
    menu : "흑돼지오겹살(200g) 13000원 흑돼지목살(200g) 13000원 백돼지오겹살(200g) 10000원 항정살(200g) 11000원 가브리살(200g) 11000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "삼양백년짜장",
    category : "음식점",
    place : "제주시",
    phone : "064-753-4578",
    address : "제주특별자치도 제주시 설촌로12길 36",
    time: "10:30~20:00 (※BREAK TIME 15:00~15:30) / 매주 토요일. 설/추석명절 당일",
    menu : "자장면 4000원 짬뽕 5500원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "마마칼국수",
    category : "음식점",
    place : "제주시",
    phone : "064-743-3398",
    address : "제주특별자치도 제주시 한라대학로 87",
    time: "10:30~22:00 / 매주 금요일. 명절연휴",
    menu : "칼국수 5000원 냉칼국수 5000원 닭칼국수 6000원 한치냉칼국수 8000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "바다사랑채",
    category : "음식점",
    place : "제주시",
    phone : "064-748-9785",
    address : "제주특별자치도 제주시 테우해안로 132",
    time: "09:00~21:30 / 매주 화요일. 명절연휴",
    menu : "생돼지김치찌개 5000원 고등어구이 6000원 보말미역국 6000원 고등어조림 8000원 갈치구이 8000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "해바라기",
    category : "음식점",
    place : "서귀포시",
    phone : "064-764-9909",
    address : "제주특별자치도 서귀포시 남원읍 한신로 280",
    time: "10:30~22:00 / 둘째. 넷째 목요일",
    menu : "보리밥(겨울철 김치찌개) 6000원 순대국밥 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "고성장터국밥",
    category : "음식점",
    place : "서귀포시",
    phone : "064-783-3233",
    address : "제주특별자치도 서귀포시 성산읍 고성동서로45번길 19",
    time: "07:00 ~ 18:00 / 설 . 추석 당일",
    menu : "국밥 6000원 몸국 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "백년손님",
    category : "음식점",
    place : "서귀포시",
    phone : "064-783-3456",
    address : "제주특별자치도 서귀포시 성산읍 금백조로 114",
    time: "07:00~21:00 / 둘째. 넷째 목요일",
    menu : "국밥 6000원 고기국수 6000원 멸치국수 5000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "새당골식당",
    category : "음식점",
    place : "서귀포시",
    phone : "064-794-2251",
    address : "제주특별자치도 서귀포시 안덕면 덕수서로 40",
    time: "11:00~21:00브레이크타임 14:30~17:00 / 둘째. 넷째 일요일",
    menu : "정식 7000원 갈치조림(중) 35000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "명경식당",
    category : "음식점",
    place : "서귀포시",
    phone : "064-794-9557",
    address : "제주특별자치도 서귀포시 안덕면 화순로 88",
    time: "10:00~19:00(하절기)10:00~20:00(동절기)11:00~19:00 / 연중무휴(사전 문의바람)",
    menu : "짜장면 5000원 짬뽕 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "생원전복",
    category : "음식점",
    place : "서귀포시",
    phone : "064-792-2109",
    address : "제주특별자치도 서귀포시 안덕면 산방로 7",
    time: "10:00~21:00브레이크타임 15:00~17:00 / 연중무휴",
    menu : "돈샤브샤브 10000원 전복죽 10000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "한아름식당",
    category : "음식점",
    place : "서귀포시",
    phone : "064-787-5403",
    address : "제주특별자치도 서귀포시 표선면 세성로 265",
    time: "11:00~20:00브레이크타임 14:00~17:00 / 연중무휴",
    menu : "돼지고기(생고기) 10000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "새서울두루치기",
    category : "음식점",
    place : "서귀포시",
    phone : "064-732-4211",
    address : "제주특별자치도 서귀포시 태평로 406",
    time: "10:00 ~ 22:00 / 설 . 추석 당일",
    menu : "흑돼지두루치기 6000원 낙지두루치기 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "한동네",
    category : "음식점",
    place : "서귀포시",
    phone : "064-732-4573",
    address : "제주특별자치도 서귀포시 동부로 4",
    time: "11:00 ~ 23:00 / 둘째. 넷째 월요일",
    menu : "성게보말국 12000원 열무국수 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "삼이사",
    category : "음식점",
    place : "서귀포시",
    phone : "064-732-0324",
    address : "제주특별자치도 서귀포시 명동로 6",
    time: "11:00 ~ 15:00 / 연중무휴",
    menu : "행복밥상정식 7000원 몸국 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "뽕뽕식당",
    category : "음식점",
    place : "서귀포시",
    phone : "064-733-6639",
    address : "제주특별자치도 서귀포시 중앙로42번길 32",
    time: "11:00 ~ 20:00 / 매주 일요일",
    menu : "멸치국수 4000원 비빔국수 5000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "바당국수",
    category : "음식점",
    place : "서귀포시",
    phone : "064-733-9259",
    address : "제주특별자치도 서귀포시 동문동로 21-1",
    time: "09:00 ~ 24:00 / 둘째. 넷째 화요일",
    menu : "멸치국수 5000원 비빔국수 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "뽈살집 본관",
    category : "음식점",
    place : "서귀포시",
    phone : "064-763-6860",
    address : "제주특별자치도 서귀포시 중정로 91번길 37",
    time: "16:00 ~ 01:00 / 연중무휴",
    menu : "뽈살 9500 청국장 3000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "옛날어전",
    category : "음식점",
    place : "서귀포시",
    phone : "064-733-2333",
    address : "제주특별자치도 서귀포시 동문동로 31",
    time: "11:00~22:30(토.일)17:00~22:30 / 연중무휴",
    menu : "참치초밥 8000원 참치회덮밥 8000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "뽈살집별관",
    category : "음식점",
    place : "서귀포시",
    phone : "064-763-6860",
    address : "제주특별자치도 서귀포시 중정로91번길 39-1",
    time: "16:00 ~ 01:00 / 연중무휴",
    menu : "돼지고기 뽈살(180g) 9500 가브리살(180g) 10000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "신영식당",
    category : "음식점",
    place : "서귀포시",
    phone : "064-763-3022",
    address : "제주특별자치도 서귀포시 중앙로71번길 4",
    time: "11:00 ~ 23:00 / 연중무휴",
    menu : "된장찌개 6000원 순두부 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "대광장식당",
    category : "음식점",
    place : "서귀포시",
    phone : "064-762-9233",
    address : "제주특별자치도 서귀포시 중앙로 79",
    time: "06:00 ~ 21:00 / 매주 일요일",
    menu : "김치찌개 5000원 비빔밥 5000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "성광식당",
    category : "음식점",
    place : "서귀포시",
    phone : "064-767-4110",
    address : "제주특별자치도 서귀포시 일주동로 8184",
    time: "11:00 ~ 19:00 / 매주 일요일",
    menu : "순대국 5000원 내장탕 5000원 순두부 5000원 김치찌개 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "도새기1982식당",
    category : "음식점",
    place : "서귀포시",
    phone : "064-732-1982",
    address : "제주특별자치도 서귀포시 일주동로 8580",
    time: "11:00 ~ 02:00 / 연중무휴",
    menu : "대패삼겹살 8000원 오겹살 10000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "영춘반점",
    category : "음식점",
    place : "서귀포시",
    phone : "",
    address : "제주특별자치도 서귀포시 중앙로 154",
    time: "10:30 ~ 20:00화요일 10:30~15:00 / 매주 토요일",
    menu : "짜장면 3500원 짬뽕 6500원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "김대감숯불갈비",
    category : "음식점",
    place : "서귀포시",
    phone : "064-763-2707",
    address : "제주특별자치도 서귀포시 동홍중앙로 67",
    time: "10:30 ~ 22:30 / 연중무휴",
    menu : "양념갈비(500g) 12000원 생갈비(400g) 14000원 삼겹살(200g) 12000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "맛있는집",
    category : "음식점",
    place : "서귀포시",
    phone : "064-763-3760",
    address : "제주특별자치도 서귀포시 중앙로 110",
    time: "09:00~20:00브레이크타임 14:30~17:00※ 토요일 09:00~14:00 / 매주 일요일",
    menu : "비빔밥 6000원 순두부 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "낙지마당",
    category : "음식점",
    place : "서귀포시",
    phone : "064-738-1524",
    address : "제주특별자치도 서귀포시 신중로 73",
    time: "10:00 ~ 22:00브레이크타임 14:30~17:00 / 둘째.넷째 일요일",
    menu : "낙지덮밥 8000원 낙지돌솥비빔밥 8000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "둠비정원",
    category : "음식점",
    place : "서귀포시",
    phone : "064-739-7787",
    address : "제주특별자치도 서귀포시 신중로13번길 20",
    time: "10:00 ~ 21:00 / 매주 일요일",
    menu : "비지탕 6000원 순두부 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "줄서서먹는짜장",
    category : "음식점",
    place : "서귀포시",
    phone : "064-738-6465",
    address : "제주특별자치도 서귀포시 일주동로 9213",
    time: "11:00~20:00브레이크타임 14:30~17:00 / 첫째. 둘째 금요일셋째. 넷째 토요일",
    menu : "환경짜장 3500원 짬뽕 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "소리헤어샵",
    category : "이미용",
    place : "서귀포시",
    phone : "064-762-0806",
    address : "제주특별자치도 서귀포시 중앙로4번길 4",
    time: "09:00 ~ 20:00 / 매주 화요일",
    menu : "일반펌 30000원 염색 30000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "영미용실",
    category : "이미용",
    place : "서귀포시",
    phone : "064-762-8043",
    address : "제주특별자치도 서귀포시 이중섭로 5-7",
    time: "08:00 ~ 18:00 / 연중무휴",
    menu : "커트 7000원 파마 30000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "영미헤어라인",
    category : "이미용",
    place : "서귀포시",
    phone : "064-762-5458",
    address : "제주특별자치도 서귀포시 중앙로48번길 8-1",
    time: "09:30 ~ 18:30 / 매주 일요일",
    menu : "커트 10000원 드라이 6000원~10000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "영천이용원",
    category : "이미용",
    place : "서귀포시",
    phone : "064-732-7683",
    address : "제주특별자치도 서귀포시 516로 462",
    time: "07:30 ~ 19:00 / 매주 화요일",
    menu : "커트 12000원 이발 15000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "삼진미용실",
    category : "이미용",
    place : "서귀포시",
    phone : "064-762-9933",
    address : "제주특별자치도 서귀포시 중앙로 198-11",
    time: "09:00 ~ 18:30 / 연중무휴",
    menu : "커트(샴푸미포함) 12000원 파마 25000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "아름다운풍경미용실",
    category : "이미용",
    place : "서귀포시",
    phone : "064-732-8588",
    address : "제주특별자치도 서귀포시 흙담솔로 20",
    time: "08:00 ~ 19:00 / 첫째.셋째 일요일",
    menu : "커트 9000원 파마 25000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "웰빙이용원",
    category : "이미용",
    place : "서귀포시",
    phone : "064-738-6444",
    address : "제주특별자치도 서귀포시 천제연로188번길 6-6",
    time: "08:00 ~ 19:00 / 매주 월요일",
    menu : "커트 10000원~12000원 염색 12000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "대림모텔",
    category : "숙박업",
    place : "서귀포시",
    phone : "064-732-0500",
    address : "제주특별자치도 서귀포시 중정로 21",
    time: "24시간 영업 / 연중무휴",
    menu : "일반실 30000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "장원민박",
    category : "숙박업",
    place : "서귀포시",
    phone : "064-738-1110",
    address : "제주특별자치도 서귀포시 천제연로 49",
    time: "24시간 영업 / 연중무휴",
    menu : "8평 25000원 10평 30000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "스피드세탁소",
    category : "세탁업",
    place : "서귀포시",
    phone : "064-764-4071",
    address : "제주특별자치도 서귀포시 남원읍 태위로 657",
    time: "07:30 ~ 19:30토요일 14시까지 / 매주 일요일. 공휴일(예약시 24시간 운영)",
    menu : "양복1벌 7000원 이불(겨울용) 6000원~7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "화순새마을목욕탕",
    category : "목욕업",
    place : "서귀포시",
    phone : "064-794-8884",
    address : "제주특별자치도 서귀포시 안덕면 화순중앙로 76",
    time: "06:30~20:00 / 연중무휴",
    menu : "목욕(성인) 4000원 목욕(사랑의 열매소지자 성인) 3000원 목욕(어린이) 2000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "큰길",
    category : "음식점",
    place : "서귀포시",
    phone : "064-792-0661",
    address : "제주특별자치도 서귀포시 안덕면 병악로 113",
    time: "10:30~16:00 / 설.추석 당일 및 익일",
    menu : "김치찌개 6000원 비빔밥 6000원 돈가스 7000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "윤경미용실",
    category : "이미용",
    place : "서귀포시",
    phone : "064-762-1954",
    address : "제주특별자치도 서귀포시 중정로 91번길 53-1",
    time: "09:00~21:30 / 매주 수요일",
    menu : "커트 10000원 파마 30000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "금복식당",
    category : "음식점",
    place : "서귀포시",
    phone : "064-762-2243",
    address : "제주특별자치도 서귀포시 중앙로62번길 18",
    time: "11:00~15:00 / 매주 일요일.명절연휴",
    menu : "비빔밥 3000원 보리밥 3000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "오일장왕십리식당",
    category : "음식점",
    place : "서귀포시",
    phone : "064-733-0105",
    address : "제주특별자치도 서귀포시 토평서로11번길 150",
    time: "(장날) 05:00~19:00 (평일) 07:30~16:00 / 연중무휴",
    menu : "고기국밥 6000원 순대국밥 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "일번지식당",
    category : "음식점",
    place : "서귀포시",
    phone : "064-733-0686",
    address : "제주특별자치도 서귀포시 토평서로11번길 150",
    time: "(장날) 05:00~20:00 (평일) 07:00~15:00 / 설.추석당일",
    menu : "정식 6000원 순대국밥 6000원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "오규동",
    category : "음식점",
    place : "서귀포시",
    phone : "064-733-0590",
    address : "제주특별자치도 서귀포시 홍중로 23",
    time: "11:00~21:00 / 연중무휴",
    menu : "규동 5900원 부타동 5900원 김치동 5900원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "엠버의 국수가게",
    category : "음식점",
    place : "서귀포시",
    phone : "",
    address : "제주특별자치도 서귀포시 중앙로101번길 13-2",
    time: "11:00~20:00 / 매주 일요일",
    menu : "잔치국수 4500원 비빔국수 5500원",
    "데이터기준일자": "2021.6.15"
  },
  {
    title : "삼매봉153",
    category : "음식점",
    place : "서귀포시",
    phone : "064-762-1532",
    address : "제주특별자치도 서귀포시 남성중로 153번길 15",
    time: "11:30~14:3017:00~18:00 / 매주 금요일",
    menu : "돈까스 6000원 생선까스 6000원 함박스테이크 6000원",
    "데이터기준일자": "2021.6.15"
  }
]