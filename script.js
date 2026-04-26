const routes = [
  {
    id: "jeonju-film",
    region: "전북 전주",
    festival: "제27회 전주국제영화제",
    period: "04.29-05.08",
    place: "영화의거리·소리문화의전당 등",
    route: "전주역 - 전주천 자전거길 - 한옥마을 - 영화의거리",
    distance: 18,
    difficulty: 2,
    access: 5,
    truck: 3,
    participation: 4,
    visual: 4,
    score: 91,
    tags: ["jeonbuk", "train", "city", "beginner", "culture"],
    image: "",
    points: [
      "KTX·일반열차 접근이 좋아 자전거를 접이식 또는 분해 운반하는 팀에게 가장 편합니다.",
      "도심 축제라 속도보다 보행자 동선 분리가 중요하고, 전주천 자전거길을 주행 축으로 삼는 편이 안전합니다.",
      "숙박은 한옥마을·객사 주변, 라이딩은 전주천과 덕진공원 방향으로 나누면 일정이 단순합니다."
    ],
    publicTransport: "전주역 또는 전주고속버스터미널 도착 후 전주천 자전거길로 진입. 영화 상영 시간에 맞춰 짧게 이동.",
    truckBase: "숙소 주차 또는 전주천 외곽 공영주차장을 먼저 확인하고, 영화의거리 주변은 자전거로 접근.",
    lodgeBase: "한옥마을·객사권 숙소에 주차 후 영화의거리와 전주천을 왕복.",
    quietBase: "덕진공원·전주천 북쪽처럼 도심 외곽 공원 주차 후보를 확인한 뒤 짧은 순환.",
    caution: "도심 혼잡과 보행자 밀집 구간에서는 끌바 구간을 미리 정하세요.",
    sourceTitle: "전주시 관광 - 제27회 전주국제영화제",
    sourceUrl: "https://tour.jeonju.go.kr/eng/index.jeonju?facSid=RE_0000894&menuCd=DOM_000000102002001000"
  },
  {
    id: "namwon",
    region: "전북 남원",
    festival: "제96회 남원 춘향제",
    period: "04.30-05.06",
    place: "광한루원·요천변",
    route: "남원역 - 요천 자전거길 - 광한루원 - 금암공원",
    distance: 16,
    difficulty: 2,
    access: 4,
    truck: 5,
    participation: 5,
    visual: 4,
    score: 93,
    tags: ["jeonbuk", "train", "truck", "beginner", "culture"],
    image: "",
    points: [
      "축제 기간 남원 시청 주차장 등 유료 공영주차장 5곳이 무료 개방된다는 보도가 있어 트럭 거점형에 유리합니다.",
      "요천변은 축제장과 붙어 있어 자전거 이동 거리를 짧게 줄이고 공연·야경 시간을 확보하기 좋습니다.",
      "광한루원 주변은 혼잡하므로 외곽 주차 후 요천변으로 접근하는 전략이 안전합니다."
    ],
    publicTransport: "남원역 도착 후 요천 자전거길을 따라 광한루원 방향으로 이동.",
    truckBase: "시청 주차장, 도통지구 주차타워, 시장4가, 구 군청, 관왕묘 옆 주차장 등 무료 개방 공영주차장 후보 확인.",
    lodgeBase: "광한루원 외곽 숙소 주차 후 요천변으로 진입, 야간 공연 후 바로 복귀.",
    quietBase: "금암공원·요천 상류 쪽을 여유 거점으로 잡고 축제 핵심부는 자전거 또는 도보로 접근.",
    caution: "무료 개방 정보는 축제 기간 한정이며, 만차와 높이 제한은 현장에서 확인해야 합니다.",
    sourceTitle: "남원 춘향제 공영주차장 무료 개방 보도",
    sourceUrl: "https://www.nocutnews.co.kr/news/6505029"
  },
  {
    id: "iksan",
    region: "전북 익산",
    festival: "익산서동축제",
    period: "05.01-05.03",
    place: "중앙체육공원·신흥근린공원",
    route: "익산역 - 중앙체육공원 - 신흥근린공원 - 금강동산 선택",
    distance: 14,
    difficulty: 1.5,
    access: 5,
    truck: 4,
    participation: 5,
    visual: 3.5,
    score: 94,
    tags: ["jeonbuk", "train", "truck", "beginner", "family"],
    image: "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/4056068_image2_1.jpg",
    points: [
      "2026년 축제장이 도심권 중앙체육공원과 신흥근린공원으로 옮겨져 접근성이 좋아졌습니다.",
      "익산역에서 자전거로 접근 가능한 거리라 차 없는 팀에게도 운영이 쉽습니다.",
      "공원형 축제라 가족형·초보형 순환 코스를 만들기 좋습니다."
    ],
    publicTransport: "익산역 도착 후 중앙체육공원까지 짧게 이동하고, 퍼레이드 시간에는 도보 전환.",
    truckBase: "중앙체육공원 주변 공영·임시 주차 안내를 확인하고, 혼잡하면 신흥근린공원 쪽 외곽 거점 사용.",
    lodgeBase: "익산역·어양동 숙소 주차 후 중앙체육공원 왕복.",
    quietBase: "신흥근린공원 주변을 공원형 하차 후보로 두고 축제 핵심부까지 저속 이동.",
    caution: "5월 1일 퍼레이드 시간에는 도로 통제 가능성을 반영하세요.",
    sourceTitle: "익산서동축제 - 대한민국 구석구석",
    sourceUrl: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=1429937d-d447-4586-a59f-cf36e7153c63"
  },
  {
    id: "gimje-barley",
    region: "전북 김제",
    festival: "진봉새만금보리밭축제",
    period: "05.01-05.03",
    place: "진봉면 갓민가사섬",
    route: "심포항 후보 거점 - 갓민가사섬 - 망해사 - 새만금 보리밭",
    distance: 22,
    difficulty: 2.5,
    access: 2.5,
    truck: 4.5,
    participation: 4,
    visual: 5,
    score: 86,
    tags: ["jeonbuk", "truck", "photo", "family"],
    image: "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/4058409_image2_1.png",
    points: [
      "5월 1일부터 3일까지 열려 사용자가 요청한 날짜와 정확히 맞습니다.",
      "새만금 보리밭, 유채꽃 사잇길, 트랙터 마차 등 평야형 경관이 자전거 여행과 잘 맞습니다.",
      "대중교통보다 트럭 적재 후 외곽 하차 방식이 현실적인 후보입니다."
    ],
    publicTransport: "김제역 또는 군산권 접근 후 택시·버스 연계가 필요해 차 없는 팀은 준비 시간이 늘어납니다.",
    truckBase: "심포항·망해사 인근·축제 임시 주차 안내를 확인하고 보리밭까지 짧게 진입.",
    lodgeBase: "군산·김제 숙소 주차 후 새만금 방향으로 차량 이동, 마지막 구간을 자전거로 전환.",
    quietBase: "심포항처럼 해안·평야 외곽의 넓은 공간을 후보로 두고 바람 방향을 확인.",
    caution: "간척지 바람이 강하면 복귀 체감 난이도가 크게 올라갑니다.",
    sourceTitle: "진봉새만금보리밭축제 - 대한민국 구석구석",
    sourceUrl: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=00ddd29c-4ac3-465d-84a6-1cedb94d8c6f"
  },
  {
    id: "imsil-pet",
    region: "전북 임실",
    festival: "임실N펫스타",
    period: "05.01-05.03",
    place: "오수의견관광지",
    route: "오수역 - 오수의견관광지 - 오수천 둔치 순환",
    distance: 12,
    difficulty: 1.5,
    access: 4,
    truck: 4,
    participation: 4.5,
    visual: 3.5,
    score: 88,
    tags: ["jeonbuk", "train", "truck", "beginner", "family"],
    image: "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/4053995_image2_1.jpg",
    points: [
      "오수역과 오수의견관광지 거리가 짧아 초보·가족형 자전거 접근이 쉽습니다.",
      "5월 2일에는 댕댕트레인과 열차관광 프로그램이 안내되어 대중교통형 매력이 있습니다.",
      "반려동물 동반 팀은 자전거 주행보다 산책·체험 시간을 넉넉히 잡아야 합니다."
    ],
    publicTransport: "오수역 도착 후 관광지까지 짧은 라이딩. 반려동물 동반 가능 조건은 열차 상품별 확인.",
    truckBase: "오수의견관광지 주변 임시 주차 안내를 확인하고 하천 둔치 순환으로 설계.",
    lodgeBase: "임실·오수권 숙소 주차 후 관광지 왕복.",
    quietBase: "오수천 주변 둔치형 공간을 후보로 삼아 짧고 느린 순환.",
    caution: "반려동물, 보행자, 아이들이 많은 축제라 자전거 주행 구간을 짧게 잡으세요.",
    sourceTitle: "임실N펫스타 - 대한민국 구석구석",
    sourceUrl: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=733ec4a3-66ac-4ead-ba9d-bf1e677de9df"
  },
  {
    id: "gochang",
    region: "전북 고창",
    festival: "고창 청보리밭축제",
    period: "04.18-05.10",
    place: "공음면 학원관광농원",
    route: "고창읍 숙박 - 학원농장 - 청보리밭 사잇길 - 선운산 선택",
    distance: 30,
    difficulty: 3,
    access: 2.5,
    truck: 4.5,
    participation: 4,
    visual: 5,
    score: 84,
    tags: ["jeonbuk", "truck", "photo", "overnight"],
    image: "",
    points: [
      "4월 18일부터 5월 10일까지 열려 5월 1-2일 모두 방문 가능합니다.",
      "축제는 걷는 콘텐츠가 강화되어 자전거는 외곽 접근 수단, 현장에서는 산책 중심으로 전환하는 편이 좋습니다.",
      "주차요금 환급제 보도가 있어 트럭 거점형 후보로 볼 만합니다."
    ],
    publicTransport: "고창터미널 도착 후 지역 버스·택시 연계가 필요해 차 없는 팀은 시간표 확인이 중요합니다.",
    truckBase: "학원관광농원 공식 주차 안내와 주차요금 환급 운영 여부를 확인한 뒤 보리밭 외곽에서 하차.",
    lodgeBase: "고창읍 또는 선운산권 숙소 주차 후 학원농장 왕복.",
    quietBase: "선운산·고창읍 외곽 공원형 주차 후보에서 시작해 농로와 지방도를 조합.",
    caution: "보리밭 내부는 걷기 중심입니다. 자전거 진입 가능 구간을 현장 안내에 맞추세요.",
    sourceTitle: "고창 청보리밭축제 개막 보도",
    sourceUrl: "https://www.wikitree.co.kr/articles/1131870"
  },
  {
    id: "buan",
    region: "전북 부안",
    festival: "부안마실축제",
    period: "05.02-05.05",
    place: "부안 해뜰마루",
    route: "부안읍 숙소 - 해뜰마루 - 매창공원 - 변산 방향 선택",
    distance: 18,
    difficulty: 2,
    access: 3,
    truck: 4,
    participation: 4.5,
    visual: 4,
    score: 83,
    tags: ["jeonbuk", "truck", "family", "overnight"],
    image: "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/4039186_image2_1.jpg",
    points: [
      "5월 2일부터 시작하므로 5월 2일 여행 후보로 정확히 들어맞습니다.",
      "해뜰마루 지방정원 기반이라 가족형·공원형 주차 후 짧은 순환에 어울립니다.",
      "변산반도까지 욕심내기보다 부안읍 주변 순환과 축제 참여를 우선하는 편이 좋습니다."
    ],
    publicTransport: "부안터미널 도착 후 해뜰마루까지 짧은 이동. 자전거 반입 조건은 버스 회사별 확인.",
    truckBase: "부안읍 숙소·공영주차 후보를 확인하고 해뜰마루까지 자전거로 접근.",
    lodgeBase: "부안읍 숙소 주차 후 해뜰마루와 매창공원을 짧게 순환.",
    quietBase: "해뜰마루 외곽 또는 매창공원 주변 공원형 거점을 후보로 설정.",
    caution: "어린이 프로그램과 야간경관이 있어 보행자 밀집 시간대 저속 운행이 필요합니다.",
    sourceTitle: "부안마실축제 - 대한민국 구석구석",
    sourceUrl: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=0404dd7d-69d7-4396-80ed-0066a0c84ec7"
  },
  {
    id: "goyang",
    region: "경기 고양",
    festival: "고양국제꽃박람회",
    period: "04.24-05.10",
    place: "일산호수공원",
    route: "정발산역 - 일산호수공원 순환 - 행주산성 선택",
    distance: 18,
    difficulty: 1.5,
    access: 5,
    truck: 3,
    participation: 4.5,
    visual: 4.5,
    score: 92,
    tags: ["train", "beginner", "photo"],
    image: "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/6995b351-4b45-4c86-947e-f44a07e087f8_47.JPG",
    points: [
      "3호선 정발산역과 호수공원 접근성이 뛰어나 차 없이 가기 좋습니다.",
      "초보자는 호수공원 순환, 중급자는 행주산성·한강 자전거길까지 연장합니다.",
      "수도권 당일형으로 가장 안전한 후보입니다."
    ],
    publicTransport: "3호선 정발산역 하차 후 호수공원 순환.",
    truckBase: "일산 외곽 숙소·공영주차장 확인 후 공원까지 자전거 접근.",
    lodgeBase: "일산 숙박권 주차 후 호수공원과 행주산성 선택.",
    quietBase: "호수공원 주변보다 외곽 공원 주차 후보를 우선.",
    caution: "박람회 주변은 보행자 밀집이 높아 공원 내부는 저속 운행.",
    sourceTitle: "고양국제꽃박람회 공식 보도자료",
    sourceUrl: "https://flower.or.kr/modules/board/bd_notice_view.html?bd_no=681&id=press"
  },
  {
    id: "icheon",
    region: "경기 이천",
    festival: "이천도자기축제",
    period: "04.24-05.05",
    place: "이천도자예술마을·사기막골 도예촌",
    route: "신둔도예촌역 - 도자예술마을 - 사기막골 - 설봉공원 선택",
    distance: 17,
    difficulty: 2.5,
    access: 4,
    truck: 3.5,
    participation: 4.5,
    visual: 3.5,
    score: 84,
    tags: ["train", "truck", "beginner", "culture"],
    image: "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/4004504_image2_1.jpg",
    points: [
      "축제 기간이 4월 24일부터 5월 5일까지라 5월 1-2일 후보에 정확히 들어옵니다.",
      "경강선 신둔도예촌역을 이용하면 차량 없이도 축제장 접근이 가능하고, 도예마을 안쪽은 짧게 끊어 타기 좋습니다.",
      "트럭 이용자는 축제장 바로 앞보다 이천 외곽 숙소나 공영주차장을 거점으로 잡고 마지막 구간만 자전거로 접근하는 방식이 안정적입니다."
    ],
    publicTransport: "경강선 신둔도예촌역 하차 후 도자예술마을 방면으로 짧은 접근 라이딩.",
    truckBase: "이천 외곽 숙소·공영주차장에 주차 후 도자예술마을까지 자전거로 진입.",
    lodgeBase: "신둔면·이천시내 숙소 주차 후 축제장과 설봉공원을 짧게 연결.",
    quietBase: "설봉공원 주변이나 외곽 주차 후보를 잡고 도예마을은 저속 접근.",
    caution: "도예마을 내부는 관람객과 체험 동선이 섞이므로 하차 보행 구간을 넉넉히 잡으세요.",
    sourceTitle: "이천도자기축제 - 대한민국 구석구석",
    sourceUrl: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=9cd48059-8bb6-4ea6-9a5b-126a9c1f671b"
  },
  {
    id: "hampyeong",
    region: "전남 함평",
    festival: "함평나비대축제",
    period: "04.24-05.05",
    place: "함평엑스포공원",
    route: "함평역 - 함평엑스포공원 - 함평천",
    distance: 20,
    difficulty: 2,
    access: 4,
    truck: 4,
    participation: 5,
    visual: 4,
    score: 87,
    tags: ["train", "family", "photo"],
    image: "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/6995b351-4b45-4c86-947e-f44a07e087f8_47.JPG",
    points: [
      "축제 기간 KTX 함평역 임시정차와 무료 셔틀이 안내되어 접근성이 보강됩니다.",
      "엑스포공원 주변 짧은 순환이 가족 팀에게 안전합니다.",
      "나비 체험과 퍼레이드형 콘텐츠 참여도가 높습니다."
    ],
    publicTransport: "KTX 임시정차편과 무료 셔틀 시간 확인.",
    truckBase: "축제장 외곽 임시 주차 안내를 확인하고 함평천 주변 짧은 순환.",
    lodgeBase: "함평읍 숙박 후 엑스포공원 왕복.",
    quietBase: "함평천 주변 공원형 공간 후보.",
    caution: "셔틀 운행 시간과 자전거 반입 가능 여부를 별도로 확인.",
    sourceTitle: "함평나비대축제 - 대한민국 구석구석",
    sourceUrl: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=6995b351-4b45-4c86-947e-f44a07e087f8"
  },
  {
    id: "boseong",
    region: "전남 보성",
    festival: "보성다향대축제",
    period: "05.01-05.05",
    place: "한국차문화공원",
    route: "보성역 - 한국차문화공원 - 대한다원 - 율포해변",
    distance: 34,
    difficulty: 3.5,
    access: 3,
    truck: 4,
    participation: 4.5,
    visual: 5,
    score: 82,
    tags: ["photo", "overnight", "truck"],
    image: "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/4039657_image2_1.png",
    points: [
      "차밭과 해변을 잇는 장면 전환이 탁월합니다.",
      "차밭 접근부 경사가 있어 초보자는 짧은 순환으로 줄이는 편이 좋습니다.",
      "숙박형 또는 트럭 적재형으로 체력 부담을 조절하세요."
    ],
    publicTransport: "보성역 접근 후 행사장 이동. 열차 시간표 여유 필요.",
    truckBase: "보성읍 또는 율포권 주차 후보에서 자전거 하차.",
    lodgeBase: "보성읍·율포 숙소 주차 후 차밭 왕복.",
    quietBase: "율포해변 쪽을 회복 라이딩 거점으로 사용.",
    caution: "차밭 경사와 관광버스 통행을 고려.",
    sourceTitle: "보성다향대축제 - 대한민국 구석구석",
    sourceUrl: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=fefc8ae8-2979-4bdc-b76c-7fe6f2078f47"
  },
  {
    id: "hadong",
    region: "경남 하동",
    festival: "하동야생차문화축제",
    period: "05.01-05.05",
    place: "하동야생차치유관·박물관",
    route: "화개장터 - 야생차박물관 - 섬진강변",
    distance: 28,
    difficulty: 3,
    access: 3,
    truck: 4,
    participation: 4,
    visual: 4.5,
    score: 78,
    tags: ["photo", "overnight", "truck"],
    image: "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/4059274_image2_1.jpg",
    points: [
      "섬진강변과 차 문화가 결합된 휴식형 라이딩입니다.",
      "쌍계사 방향은 완만한 업힐이 있어 중급자에게 맞습니다.",
      "화개장터 거점형으로 설계하면 먹거리와 복귀가 쉽습니다."
    ],
    publicTransport: "하동·구례 접근 후 지역 교통 연계 필요.",
    truckBase: "화개장터 외곽 주차 후보 확인 후 박물관까지 접근.",
    lodgeBase: "화개·하동 숙소 주차 후 섬진강변 순환.",
    quietBase: "섬진강변 둔치형 공간 후보.",
    caution: "주말 화개장터 혼잡을 피하려면 이른 출발.",
    sourceTitle: "하동야생차문화축제 - 대한민국 구석구석",
    sourceUrl: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=563e1356-cddd-4feb-a41f-e800bca34a88"
  },
  {
    id: "hwangmae",
    region: "경남 합천",
    festival: "황매산철쭉제",
    period: "05.01-05.10",
    place: "황매산군립공원",
    route: "합천읍 - 황매산군립공원 - 철쭉군락지",
    distance: 42,
    difficulty: 5,
    access: 2,
    truck: 3.5,
    participation: 3.5,
    visual: 5,
    score: 70,
    tags: ["challenge", "photo", "truck"],
    image: "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/4055193_image2_1.jpg",
    points: [
      "철쭉 경관은 강력하지만 산지 업힐 부담이 가장 큽니다.",
      "초보자보다 숙련자용 코스로 분류했습니다.",
      "트럭은 하산 안전과 회수 동선을 위해 유용합니다."
    ],
    publicTransport: "대중교통만으로는 접근 피로가 큽니다.",
    truckBase: "합천읍 또는 황매산 외곽 주차 안내 확인 후 업힐 진입.",
    lodgeBase: "합천 숙소 주차 후 이른 아침 산지 접근.",
    quietBase: "합천호 방향 회복 라이딩 후보.",
    caution: "브레이크 점검, 저기어, 하산 속도 제어 필수.",
    sourceTitle: "황매산철쭉제 - 대한민국 구석구석",
    sourceUrl: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=fb5400b3-0111-4102-909d-cda418b1b521"
  },
  {
    id: "seoul-palace",
    region: "서울 종로",
    festival: "궁중문화축전",
    period: "04.25-05.03",
    place: "5대 궁궐·종묘",
    route: "한강 - 광화문 - 경복궁 - 창덕궁 - 종묘",
    distance: 24,
    difficulty: 2,
    access: 5,
    truck: 2,
    participation: 4,
    visual: 4,
    score: 88,
    tags: ["train", "beginner", "culture"],
    image: "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/4055393_image2_1.jpg",
    points: [
      "도심 접근은 뛰어나지만 축제 구간은 자전거보다 도보 전환이 많습니다.",
      "한강 자전거길과 궁궐 관람을 분리하면 안전합니다.",
      "대중교통형 초보 코스로 적합합니다."
    ],
    publicTransport: "지하철과 따릉이를 결합.",
    truckBase: "도심 트럭 주차는 비추천.",
    lodgeBase: "서울 숙소 주차 후 지하철·자전거 병행.",
    quietBase: "한강공원 거점에서 궁궐권은 대중교통 전환.",
    caution: "궁궐 주변은 보행자 우선.",
    sourceTitle: "궁중문화축전 - 대한민국 구석구석",
    sourceUrl: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=41577144-a7e0-482a-a7fd-1f94e273d6ad"
  }
];

const routeMaps = {
  "jeonju-film": {
    level: 7,
    stops: [
      { title: "전주역", lat: 35.8497, lng: 127.1606 },
      { title: "전주천 자전거길", lat: 35.825, lng: 127.1458 },
      { title: "한옥마을", lat: 35.8144, lng: 127.1536 },
      { title: "영화의거리", lat: 35.8218, lng: 127.1432 }
    ]
  },
  namwon: {
    level: 7,
    stops: [
      { title: "남원역", lat: 35.4114, lng: 127.3779 },
      { title: "요천 자전거길", lat: 35.4075, lng: 127.3846 },
      { title: "광한루원", lat: 35.4055, lng: 127.3808 },
      { title: "금암공원", lat: 35.3975, lng: 127.384 }
    ]
  },
  iksan: {
    level: 7,
    stops: [
      { title: "익산역", lat: 35.9404, lng: 126.9458 },
      { title: "중앙체육공원", lat: 35.9531, lng: 126.974 },
      { title: "신흥근린공원", lat: 35.947, lng: 126.984 },
      { title: "금강동산 선택", lat: 35.9588, lng: 126.987 }
    ]
  },
  "gimje-barley": {
    level: 9,
    stops: [
      { title: "심포항 주차 후보", lat: 35.842, lng: 126.684 },
      { title: "갓민가사섬", lat: 35.836, lng: 126.725 },
      { title: "망해사", lat: 35.841, lng: 126.728 },
      { title: "새만금 보리밭", lat: 35.833, lng: 126.735 }
    ]
  },
  "imsil-pet": {
    level: 7,
    stops: [
      { title: "오수역", lat: 35.5377, lng: 127.3273 },
      { title: "오수의견관광지", lat: 35.5319, lng: 127.3299 },
      { title: "오수천 둔치", lat: 35.5355, lng: 127.3225 }
    ]
  },
  gochang: {
    level: 10,
    stops: [
      { title: "고창터미널", lat: 35.4351, lng: 126.7015 },
      { title: "학원관광농장", lat: 35.4529, lng: 126.5455 },
      { title: "청보리밭 산책 구간", lat: 35.4565, lng: 126.5482 },
      { title: "선운사 선택", lat: 35.4972, lng: 126.5781 }
    ],
    bikePath: [
      { lat: 35.4351, lng: 126.7015 },
      { lat: 35.4382, lng: 126.684 },
      { lat: 35.4438, lng: 126.664 },
      { lat: 35.4494, lng: 126.638 },
      { lat: 35.4535, lng: 126.608 },
      { lat: 35.456, lng: 126.577 },
      { lat: 35.4529, lng: 126.5455 },
      { lat: 35.4565, lng: 126.5482 },
      { lat: 35.469, lng: 126.556 },
      { lat: 35.486, lng: 126.568 },
      { lat: 35.4972, lng: 126.5781 }
    ]
  },
  buan: {
    level: 8,
    stops: [
      { title: "부안터미널", lat: 35.7289, lng: 126.7357 },
      { title: "해뜰마루", lat: 35.7295, lng: 126.7422 },
      { title: "매창공원", lat: 35.7284, lng: 126.7294 },
      { title: "변산 방향 선택", lat: 35.6742, lng: 126.532 }
    ]
  },
  goyang: {
    level: 8,
    stops: [
      { title: "정발산역", lat: 37.6595, lng: 126.7734 },
      { title: "일산호수공원", lat: 37.6538, lng: 126.7683 },
      { title: "행주산성 선택", lat: 37.6006, lng: 126.8255 }
    ]
  },
  icheon: {
    level: 8,
    stops: [
      { title: "신둔도예촌역", lat: 37.3177, lng: 127.405 },
      { title: "도자예술마을", lat: 37.293, lng: 127.382 },
      { title: "사기막골 도예촌", lat: 37.2915, lng: 127.381 },
      { title: "설봉공원 선택", lat: 37.2795, lng: 127.4302 }
    ]
  },
  hampyeong: {
    level: 8,
    stops: [
      { title: "함평역", lat: 35.0636, lng: 126.5166 },
      { title: "함평엑스포공원", lat: 35.0618, lng: 126.521 },
      { title: "함평천 순환", lat: 35.0685, lng: 126.5202 }
    ]
  },
  boseong: {
    level: 9,
    stops: [
      { title: "보성역", lat: 34.7715, lng: 127.0805 },
      { title: "한국차문화공원", lat: 34.715, lng: 127.0805 },
      { title: "대한다원 선택", lat: 34.7165, lng: 127.0817 }
    ]
  },
  hadong: {
    level: 10,
    stops: [
      { title: "하동역", lat: 35.0674, lng: 127.752 },
      { title: "화개장터", lat: 35.188, lng: 127.6232 },
      { title: "쌍계사 방향 선택", lat: 35.2306, lng: 127.6393 }
    ]
  },
  hwangmae: {
    level: 10,
    stops: [
      { title: "합천터미널", lat: 35.5653, lng: 128.1654 },
      { title: "황매산군립공원 주차 후보", lat: 35.4963, lng: 127.9743 },
      { title: "철쭉 군락지 접근", lat: 35.498, lng: 127.973 }
    ]
  },
  "seoul-palace": {
    level: 8,
    stops: [
      { title: "여의나루 한강공원", lat: 37.5271, lng: 126.9327 },
      { title: "광화문", lat: 37.5759, lng: 126.9768 },
      { title: "경복궁", lat: 37.5796, lng: 126.977 },
      { title: "창덕궁", lat: 37.5794, lng: 126.991 },
      { title: "종묘", lat: 37.5746, lng: 126.9941 }
    ]
  }
};

const KAKAO_MAP_APP_KEY = "565d6dd58f984120d31ffa1e6d24bb2c";

const teamMapRoutes = [
  {
    id: "team-seomjin-66",
    region: "전북 임실·순창·전남 곡성",
    festival: "5월 1일 출발 · 섬진강 GPX 투어 65km",
    route: "전북월드컵경기장 집결 - 트럭으로 장군목 이동 - 섬진강 기차마을·압록유원지·대나무숲길 라이딩",
    distance: 65,
    difficulty: 3,
    score: 94,
    tags: ["team", "truck", "jeonbuk", "photo"]
  },
  {
    id: "team-gimje-62",
    region: "전북 김제",
    festival: "월드컵경기장 집결 · 김제 보리밭 62km",
    route: "전북월드컵경기장 집결 - 트럭으로 심포항 이동 - 새만금 보리밭·망해사·비응항 왕복",
    distance: 62,
    difficulty: 3,
    score: 92,
    tags: ["team", "truck", "jeonbuk", "photo"]
  },
  {
    id: "team-buan-66",
    region: "전북 부안",
    festival: "월드컵경기장 집결 · 부안 변산 66km",
    route: "전북월드컵경기장 집결 - 트럭으로 부안읍 이동 - 해뜰마루·변산·채석강·모항 순환",
    distance: 66,
    difficulty: 3.5,
    score: 89,
    tags: ["team", "truck", "jeonbuk", "overnight", "photo"]
  },
  {
    id: "team-gochang-64",
    region: "전북 고창",
    festival: "월드컵경기장 집결 · 고창 청보리 64km",
    route: "전북월드컵경기장 집결 - 트럭으로 고창읍 이동 - 청보리밭·선운사·해안 선택 순환",
    distance: 64,
    difficulty: 3,
    score: 88,
    tags: ["team", "truck", "jeonbuk", "photo"]
  },
  {
    id: "team-iksan-58",
    region: "전북 익산",
    festival: "월드컵경기장 집결 · 익산 만경강 58km",
    route: "전북월드컵경기장 집결 - 트럭으로 중앙체육공원 이동 - 만경강·금강동산 순환",
    distance: 58,
    difficulty: 2.5,
    score: 90,
    tags: ["team", "truck", "jeonbuk", "beginner"]
  },
  {
    id: "team-namwon-60",
    region: "전북 남원",
    festival: "월드컵경기장 집결 · 남원 요천 60km",
    route: "전북월드컵경기장 집결 - 트럭으로 남원 요천 이동 - 광한루원·요천·섬진강 방향 순환",
    distance: 60,
    difficulty: 3,
    score: 87,
    tags: ["team", "truck", "jeonbuk", "culture"]
  }
];

Object.assign(routeMaps, {
  "team-seomjin-66": {
    level: 10,
    stops: [
      { title: "전북월드컵경기장 집결", lat: 35.868, lng: 127.064 },
      { title: "트럭 하차: 장군목", lat: 35.4691177297715, lng: 127.187368869781 },
      { title: "곡성 섬진강기차마을", lat: 35.278, lng: 127.309 },
      { title: "압록유원지", lat: 35.219, lng: 127.302 },
      { title: "섬진강 대나무숲길", lat: 35.1858155343577, lng: 127.46498554945 }
    ],
    truckPath: [
      { lat: 35.868, lng: 127.064 },
      { lat: 35.4691177297715, lng: 127.187368869781 }
    ],
    bicycleStops: [
      { title: "장군목", lat: 35.4691177297715, lng: 127.187368869781 },
      { title: "곡성 섬진강기차마을", lat: 35.278, lng: 127.309 },
      { title: "압록유원지", lat: 35.219, lng: 127.302 },
      { title: "섬진강 대나무숲길", lat: 35.1858155343577, lng: 127.46498554945 }
    ],
    gpxFile: "gpx/섬진강 장군목_대나무숲.gpx",
    gpxStartName: "장군목",
    gpxEndName: "섬진강 대나무숲길",
    bikePath: [
      { lat: 35.4691177297715, lng: 127.187368869781 },
      { lat: 35.43, lng: 127.205 },
      { lat: 35.36, lng: 127.225 },
      { lat: 35.2793461101383, lng: 127.310106754303 },
      { lat: 35.1948882791799, lng: 127.377923727036 },
      { lat: 35.1858155343577, lng: 127.46498554945 }
    ]
  },
  "team-gimje-62": {
    level: 10,
    stops: [
      { title: "전북월드컵경기장 집결", lat: 35.868, lng: 127.064 },
      { title: "트럭 하차: 심포항", lat: 35.842, lng: 126.684 },
      { title: "망해사", lat: 35.841, lng: 126.728 },
      { title: "새만금 보리밭", lat: 35.833, lng: 126.735 },
      { title: "비응항 반환", lat: 35.939, lng: 126.528 },
      { title: "심포항 복귀", lat: 35.842, lng: 126.684 }
    ],
    truckPath: [
      { lat: 35.868, lng: 127.064 },
      { lat: 35.842, lng: 126.684 }
    ],
    bicycleStops: [
      { title: "심포항", lat: 35.842, lng: 126.684 },
      { title: "망해사", lat: 35.841, lng: 126.728 },
      { title: "새만금 보리밭", lat: 35.833, lng: 126.735 },
      { title: "비응항", lat: 35.939, lng: 126.528 },
      { title: "심포항 복귀", lat: 35.842, lng: 126.684 }
    ],
    bikePath: [
      { lat: 35.842, lng: 126.684 },
      { lat: 35.841, lng: 126.728 },
      { lat: 35.833, lng: 126.735 },
      { lat: 35.852, lng: 126.704 },
      { lat: 35.878, lng: 126.666 },
      { lat: 35.904, lng: 126.596 },
      { lat: 35.939, lng: 126.528 },
      { lat: 35.918, lng: 126.574 },
      { lat: 35.886, lng: 126.637 },
      { lat: 35.858, lng: 126.683 },
      { lat: 35.842, lng: 126.684 }
    ]
  },
  "team-buan-66": {
    level: 10,
    stops: [
      { title: "전북월드컵경기장 집결", lat: 35.868, lng: 127.064 },
      { title: "트럭 하차: 부안읍", lat: 35.7289, lng: 126.7357 },
      { title: "해뜰마루", lat: 35.7295, lng: 126.7422 },
      { title: "변산해수욕장", lat: 35.664, lng: 126.532 },
      { title: "채석강", lat: 35.623, lng: 126.469 },
      { title: "부안읍 복귀", lat: 35.7289, lng: 126.7357 }
    ],
    truckPath: [
      { lat: 35.868, lng: 127.064 },
      { lat: 35.7289, lng: 126.7357 }
    ],
    bicycleStops: [
      { title: "부안읍", lat: 35.7289, lng: 126.7357 },
      { title: "해뜰마루", lat: 35.7295, lng: 126.7422 },
      { title: "변산해수욕장", lat: 35.664, lng: 126.532 },
      { title: "채석강", lat: 35.623, lng: 126.469 },
      { title: "부안읍 복귀", lat: 35.7289, lng: 126.7357 }
    ],
    bikePath: [
      { lat: 35.7289, lng: 126.7357 },
      { lat: 35.7295, lng: 126.7422 },
      { lat: 35.704, lng: 126.684 },
      { lat: 35.681, lng: 126.604 },
      { lat: 35.664, lng: 126.532 },
      { lat: 35.623, lng: 126.469 },
      { lat: 35.646, lng: 126.528 },
      { lat: 35.676, lng: 126.603 },
      { lat: 35.706, lng: 126.681 },
      { lat: 35.7289, lng: 126.7357 }
    ]
  },
  "team-gochang-64": {
    level: 10,
    stops: [
      { title: "전북월드컵경기장 집결", lat: 35.868, lng: 127.064 },
      { title: "트럭 하차: 고창터미널", lat: 35.4351, lng: 126.7015 },
      { title: "학원관광농장", lat: 35.4529, lng: 126.5455 },
      { title: "선운사", lat: 35.4972, lng: 126.5781 },
      { title: "동호해변 선택", lat: 35.507, lng: 126.482 },
      { title: "고창터미널 복귀", lat: 35.4351, lng: 126.7015 }
    ],
    truckPath: [
      { lat: 35.868, lng: 127.064 },
      { lat: 35.4351, lng: 126.7015 }
    ],
    bicycleStops: [
      { title: "고창터미널", lat: 35.4351, lng: 126.7015 },
      { title: "학원관광농장", lat: 35.4529, lng: 126.5455 },
      { title: "선운사", lat: 35.4972, lng: 126.5781 },
      { title: "동호해변", lat: 35.507, lng: 126.482 },
      { title: "고창터미널 복귀", lat: 35.4351, lng: 126.7015 }
    ],
    bikePath: [
      { lat: 35.4351, lng: 126.7015 },
      { lat: 35.4438, lng: 126.664 },
      { lat: 35.4535, lng: 126.608 },
      { lat: 35.4529, lng: 126.5455 },
      { lat: 35.469, lng: 126.556 },
      { lat: 35.4972, lng: 126.5781 },
      { lat: 35.507, lng: 126.482 },
      { lat: 35.486, lng: 126.552 },
      { lat: 35.462, lng: 126.628 },
      { lat: 35.4351, lng: 126.7015 }
    ]
  },
  "team-iksan-58": {
    level: 9,
    stops: [
      { title: "전북월드컵경기장 집결", lat: 35.868, lng: 127.064 },
      { title: "트럭 하차: 중앙체육공원", lat: 35.9531, lng: 126.974 },
      { title: "신흥근린공원", lat: 35.947, lng: 126.984 },
      { title: "만경강 자전거축", lat: 35.998, lng: 126.957 },
      { title: "금강동산 선택", lat: 35.9588, lng: 126.987 },
      { title: "중앙체육공원 복귀", lat: 35.9531, lng: 126.974 }
    ],
    truckPath: [
      { lat: 35.868, lng: 127.064 },
      { lat: 35.9531, lng: 126.974 }
    ],
    bicycleStops: [
      { title: "중앙체육공원", lat: 35.9531, lng: 126.974 },
      { title: "신흥근린공원", lat: 35.947, lng: 126.984 },
      { title: "만경강 자전거축", lat: 35.998, lng: 126.957 },
      { title: "금강동산", lat: 35.9588, lng: 126.987 },
      { title: "중앙체육공원 복귀", lat: 35.9531, lng: 126.974 }
    ],
    bikePath: [
      { lat: 35.9531, lng: 126.974 },
      { lat: 35.947, lng: 126.984 },
      { lat: 35.967, lng: 126.98 },
      { lat: 35.998, lng: 126.957 },
      { lat: 36.016, lng: 126.926 },
      { lat: 36.004, lng: 126.898 },
      { lat: 35.979, lng: 126.916 },
      { lat: 35.9588, lng: 126.987 },
      { lat: 35.9531, lng: 126.974 }
    ]
  },
  "team-namwon-60": {
    level: 10,
    stops: [
      { title: "전북월드컵경기장 집결", lat: 35.868, lng: 127.064 },
      { title: "트럭 하차: 요천 둔치", lat: 35.4075, lng: 127.3846 },
      { title: "광한루원", lat: 35.4055, lng: 127.3808 },
      { title: "요천 자전거길", lat: 35.392, lng: 127.407 },
      { title: "섬진강 방향 반환", lat: 35.318, lng: 127.378 },
      { title: "요천 둔치 복귀", lat: 35.4075, lng: 127.3846 }
    ],
    truckPath: [
      { lat: 35.868, lng: 127.064 },
      { lat: 35.4075, lng: 127.3846 }
    ],
    bicycleStops: [
      { title: "요천 둔치", lat: 35.4075, lng: 127.3846 },
      { title: "광한루원", lat: 35.4055, lng: 127.3808 },
      { title: "요천 자전거길", lat: 35.392, lng: 127.407 },
      { title: "섬진강 방향 반환", lat: 35.318, lng: 127.378 },
      { title: "요천 둔치 복귀", lat: 35.4075, lng: 127.3846 }
    ],
    bikePath: [
      { lat: 35.4075, lng: 127.3846 },
      { lat: 35.4055, lng: 127.3808 },
      { lat: 35.392, lng: 127.407 },
      { lat: 35.365, lng: 127.406 },
      { lat: 35.338, lng: 127.394 },
      { lat: 35.318, lng: 127.378 },
      { lat: 35.343, lng: 127.388 },
      { lat: 35.372, lng: 127.398 },
      { lat: 35.4075, lng: 127.3846 }
    ]
  }
});

const filters = [
  { id: "all", label: "전체" },
  { id: "jeonbuk", label: "전북" },
  { id: "train", label: "대중교통" },
  { id: "truck", label: "트럭 적재" },
  { id: "beginner", label: "초보" },
  { id: "photo", label: "풍경" },
  { id: "overnight", label: "숙박" },
  { id: "challenge", label: "상급" }
];

const methods = [
  {
    title: "대중교통 접근형",
    body: "열차·버스에 자전거를 접이식 또는 분해 상태로 싣고, 역에서 축제장까지 5-20km만 탑니다. 전주, 익산, 고양, 임실이 잘 맞습니다.",
    best: "차 없이 가는 팀, 초보자"
  },
  {
    title: "트럭 적재 후 외곽 주차형",
    body: "트럭에 자전거를 싣고 축제장 외곽 공영주차장·항구·체육공원 후보에 세운 뒤, 마지막 구간만 자전거로 진입합니다.",
    best: "가족·동호회, 장비가 많은 팀"
  },
  {
    title: "숙박장소 거점형",
    body: "숙소 주차장을 베이스캠프로 삼고 오전·오후 순환 코스를 나눕니다. 야간 공연을 볼 때 복귀가 가장 편합니다.",
    best: "1박2일, 야간 행사 관람"
  },
  {
    title: "한가한 공원 주차형",
    body: "축제 핵심부를 피해서 하천 둔치, 도시공원, 항구 주변 같은 넓은 후보지를 먼저 잡고, 축제장까지 저속으로 들어갑니다.",
    best: "혼잡 회피, 짧은 라이딩"
  }
];

const clusters = [
  {
    title: "전주·익산 도심축",
    body: "전주국제영화제와 익산서동축제는 철도 접근이 좋아 차 없는 1박2일에 적합합니다. 전주천과 익산 중앙체육공원을 각각 짧게 타세요."
  },
  {
    title: "남원·임실 내륙축",
    body: "남원 춘향제와 임실N펫스타는 역 접근과 공원형 동선이 좋아 가족형으로 묶기 좋습니다. 남원은 무료 개방 주차장 후보를 확인하세요."
  },
  {
    title: "김제·고창·부안 서해축",
    body: "새만금 보리밭, 고창 청보리, 부안 해뜰마루는 트럭 적재 또는 숙박 거점형에 어울립니다. 바람과 농로 안전을 먼저 봅니다."
  }
];

const plans = [
  {
    title: "5월 1일 섬진강 GPX 투어 65km",
    items: [
      ["07:30", "전북월드컵경기장 집결, 4-5명 팀 장비와 적재 상태 점검"],
      ["08:00", "트럭으로 장군목 거점까지 이동"],
      ["09:30", "GPX 트랙을 따라 장군목, 섬진강 기차마을, 압록유원지 방향 라이딩"],
      ["15:30", "섬진강 대나무숲길 도착 후 트럭 회수와 식사 일정 선택"]
    ]
  },
  {
    title: "전북 도심 대중교통 1박2일",
    items: [
      ["5/1 오전", "전주역 도착, 전주천 라이딩 후 영화의거리"],
      ["5/1 저녁", "전주국제영화제 상영·야간 산책"],
      ["5/2 오전", "익산역 이동, 중앙체육공원까지 짧은 라이딩"],
      ["5/2 오후", "익산서동축제 체험 후 복귀"]
    ]
  },
  {
    title: "트럭 적재 남원 당일형",
    items: [
      ["오전", "남원 외곽 공영주차장 후보에 주차 후 자전거 하차"],
      ["점심", "요천변 자전거길로 광한루원 접근"],
      ["오후", "춘향제 공연·체험 관람"],
      ["저녁", "야간 행사는 도보 관람 후 주차장 복귀"]
    ]
  },
  {
    title: "김제 새만금 보리밭 사진형",
    items: [
      ["오전", "심포항 또는 공식 주차 안내 지점 확인"],
      ["낮", "갓민가사섬 보리밭과 망해사 짧은 왕복"],
      ["오후", "보리밭 포토존·트랙터 마차 체험"],
      ["복귀", "강풍이면 즉시 차량 회수"]
    ]
  },
  {
    title: "고창·부안 숙박 거점형",
    items: [
      ["5/1", "고창 청보리밭축제, 현장 내부는 걷기 중심"],
      ["5/1 밤", "고창읍 또는 부안읍 숙박"],
      ["5/2 오전", "부안 해뜰마루 주변 짧은 순환"],
      ["5/2 오후", "부안마실축제 체험 후 복귀"]
    ]
  },
  {
    title: "임실 초보·가족형",
    items: [
      ["오전", "오수역 또는 관광지 주변 주차 후보 확인"],
      ["낮", "오수의견관광지와 오수천 둔치 짧은 순환"],
      ["오후", "임실N펫스타 반려동물 프로그램 관람"],
      ["복귀", "보행자 많은 구간은 자전거를 끌고 이동"]
    ]
  },
  {
    title: "수도권 쉬운 당일형",
    items: [
      ["오전", "정발산역 또는 일산 숙소에서 호수공원 진입"],
      ["낮", "고양국제꽃박람회 관람"],
      ["오후", "행주산성 방향 선택 연장"],
      ["복귀", "호수공원 내부는 저속 순환"]
    ]
  }
];

let activeFilter = "all";

function byId(id) {
  return document.getElementById(id);
}

function difficultyLabel(value) {
  if (value <= 1.5) return "쉬움";
  if (value <= 2.5) return "보통";
  if (value <= 3.5) return "중상";
  return "상급";
}

function tagName(tag) {
  return {
    jeonbuk: "전북",
    train: "대중교통",
    truck: "트럭",
    beginner: "초보",
    photo: "풍경",
    overnight: "숙박",
    challenge: "상급",
    family: "가족",
    culture: "문화",
    city: "도심"
  }[tag] || tag;
}

function getVisibleRoutes() {
  const sortSelect = byId("sortSelect");
  const list = activeFilter === "all" ? routes : routes.filter((route) => route.tags.includes(activeFilter));
  return [...list].sort((a, b) => {
    switch (sortSelect?.value) {
      case "access":
        return b.access - a.access || b.score - a.score;
      case "easy":
        return a.difficulty - b.difficulty || b.access - a.access;
      case "distance":
        return a.distance - b.distance;
      default:
        return b.score - a.score;
    }
  });
}

function scoreLine(label, value, color) {
  const width = `${Math.max(0, Math.min(100, (value / 5) * 100))}%`;
  return `
    <div class="score-line">
      <span>${label}</span>
      <div class="bar" style="--bar-color:${color}"><span style="--value:${width}"></span></div>
      <b>${value}</b>
    </div>
  `;
}

function card(route) {
  const visual = route.image ? `--card-image:url('${route.image}')` : `--card-image:linear-gradient(135deg, ${route.score > 88 ? "#167355" : "#1d6f96"}, #d95f4a)`;
  return `
    <article class="route-card">
      <div class="card-visual" style="${visual}">
        <strong>${route.region}</strong>
        <span>${route.period}</span>
      </div>
      <div class="route-body">
        <div class="route-title">
          <h3>${route.festival}</h3>
          <p>${route.route}</p>
        </div>
        <div class="meta-row">
          <span class="pill score">추천 ${route.score}</span>
          <span class="pill">${route.distance}km 내외</span>
          <span class="pill">난이도 ${difficultyLabel(route.difficulty)}</span>
        </div>
        <div class="score-bars">
          ${scoreLine("대중교통", route.access, "#167355")}
          ${scoreLine("트럭거점", route.truck, "#1d6f96")}
          ${scoreLine("참여도", route.participation, "#d95f4a")}
          ${scoreLine("시각성", route.visual, "#d6a329")}
        </div>
        <ul class="route-points">${route.points.map((point) => `<li>${point}</li>`).join("")}</ul>
        <div class="tag-row">${route.tags.map((tag) => `<span class="pill">${tagName(tag)}</span>`).join("")}</div>
      </div>
    </article>
  `;
}

function renderFilters() {
  const filterChips = byId("filterChips");
  if (!filterChips) return;
  filterChips.innerHTML = filters
    .map((filter) => `<button class="chip ${filter.id === activeFilter ? "active" : ""}" type="button" data-filter="${filter.id}">${filter.label}</button>`)
    .join("");
  filterChips.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderFestivalPage();
    });
  });
}

function renderFestivalPage() {
  renderFilters();
  const routeGrid = byId("routeGrid");
  if (routeGrid) routeGrid.innerHTML = getVisibleRoutes().map(card).join("");

  const compareTable = byId("compareTable");
  if (compareTable) {
    compareTable.innerHTML = getVisibleRoutes()
      .map(
        (route) => `
          <tr>
            <td><strong>${route.region}</strong>${route.festival}</td>
            <td>${route.period}<br />${route.place}</td>
            <td>${route.route}</td>
            <td>${route.distance}km</td>
            <td>${route.difficulty}/5<br />${difficultyLabel(route.difficulty)}</td>
            <td>${route.access}/5</td>
            <td>${route.truck}/5</td>
            <td><span class="rank">${route.score}</span></td>
          </tr>
        `
      )
      .join("");
  }
}

function renderJeonbukPage() {
  const jeonbukGrid = byId("jeonbukGrid");
  if (jeonbukGrid) jeonbukGrid.innerHTML = routes.filter((route) => route.tags.includes("jeonbuk")).sort((a, b) => b.score - a.score).map(card).join("");

  const clusterGrid = byId("clusterGrid");
  if (clusterGrid) {
    clusterGrid.innerHTML = clusters.map((cluster) => `<article class="cluster-card"><strong>${cluster.title}</strong><p>${cluster.body}</p></article>`).join("");
  }
}

function renderTransportPage() {
  const methodGrid = byId("methodGrid");
  if (methodGrid) {
    methodGrid.innerHTML = methods
      .map((method, index) => `<article><span class="method-num">${index + 1}</span><strong>${method.title}</strong><p>${method.body}</p><p><b>추천:</b> ${method.best}</p></article>`)
      .join("");
  }

  const parkingTable = byId("parkingTable");
  if (parkingTable) {
    parkingTable.innerHTML = routes
      .filter((route) => route.tags.includes("jeonbuk"))
      .map(
        (route) => `
          <tr>
            <td><strong>${route.region}</strong>${route.festival}</td>
            <td>${route.truckBase}</td>
            <td>${route.lodgeBase}</td>
            <td>${route.quietBase}</td>
            <td>${route.caution}</td>
          </tr>
        `
      )
      .join("");
  }
}

function renderPlans() {
  const planGrid = byId("planGrid");
  if (!planGrid) return;
  planGrid.innerHTML = plans
    .map(
      (plan) => `
        <article class="plan-card">
          <h3>${plan.title}</h3>
          <ul class="timeline">
            ${plan.items.map(([time, text]) => `<li><time>${time}</time><p>${text}</p></li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderSources() {
  const sourceList = byId("sourceList");
  if (!sourceList) return;
  sourceList.innerHTML = routes
    .map(
      (route) => `
        <a href="${route.sourceUrl}" target="_blank" rel="noreferrer">
          <strong>${route.sourceTitle}</strong>
          <span>${route.region} · ${route.festival}</span>
        </a>
      `
    )
    .join("");
}

function getMapRoutes() {
  return [...teamMapRoutes, ...routes.filter((route) => routeMaps[route.id])];
}

function routeMapLabel(route) {
  return `${route.region} · ${route.festival}`;
}

function kakaoPointSegment(stop) {
  return `${encodeURIComponent(stop.title)},${stop.lat},${stop.lng}`;
}

function kakaoBikeRouteUrl(mapData) {
  const points = (mapData.bicycleStops || mapData.stops).slice(0, 7);
  return `https://map.kakao.com/link/by/bicycle/${points.map(kakaoPointSegment).join("/")}`;
}

function pointDistanceKm(a, b) {
  const radius = 6371;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const value = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * radius * Math.asin(Math.sqrt(value));
}

function nearestPointIndex(points, target) {
  return points.reduce(
    (best, point, index) => {
      const distance = pointDistanceKm(point, target);
      return distance < best.distance ? { index, distance } : best;
    },
    { index: 0, distance: Infinity }
  ).index;
}

async function loadGpxBikePath(mapData) {
  if (!mapData.gpxFile) return null;
  try {
    const response = await fetch(encodeURI(mapData.gpxFile));
    if (!response.ok) throw new Error("GPX 파일을 불러오지 못했습니다.");
    const gpxText = await response.text();
    const documentXml = new DOMParser().parseFromString(gpxText, "application/xml");
    if (documentXml.querySelector("parsererror")) throw new Error("GPX 파싱 오류");

    const points = [...documentXml.getElementsByTagName("trkpt")].map((point) => ({
      lat: Number(point.getAttribute("lat")),
      lng: Number(point.getAttribute("lon"))
    }));
    if (points.length < 2) throw new Error("GPX 트랙 포인트가 부족합니다.");

    const waypoints = [...documentXml.getElementsByTagName("wpt")].map((point) => ({
      title: point.getElementsByTagName("name")[0]?.textContent?.trim() || "",
      lat: Number(point.getAttribute("lat")),
      lng: Number(point.getAttribute("lon"))
    }));

    const findWaypoint = (name) => waypoints.find((point) => point.title.includes(name));
    let startIndex = 0;
    let endIndex = points.length - 1;
    const startWaypoint = mapData.gpxStartName ? findWaypoint(mapData.gpxStartName) : null;
    const endWaypoint = mapData.gpxEndName ? findWaypoint(mapData.gpxEndName) : null;
    if (startWaypoint) startIndex = nearestPointIndex(points, startWaypoint);
    if (endWaypoint) endIndex = nearestPointIndex(points, endWaypoint);
    if (endIndex < startIndex) [startIndex, endIndex] = [endIndex, startIndex];

    const slicedPoints = points.slice(startIndex, endIndex + 1);
    const distance = slicedPoints.slice(1).reduce((sum, point, index) => sum + pointDistanceKm(slicedPoints[index], point), 0);
    return {
      points: slicedPoints,
      distance,
      pointCount: slicedPoints.length,
      source: mapData.gpxFile
    };
  } catch {
    return null;
  }
}

function guidedBikePath(mapData) {
  if (mapData.bikePath) return mapData.bikePath;
  const path = [];
  mapData.stops.forEach((stop, index) => {
    if (index === 0) {
      path.push({ lat: stop.lat, lng: stop.lng });
      return;
    }
    const previous = mapData.stops[index - 1];
    const midLat = (previous.lat + stop.lat) / 2;
    const midLng = (previous.lng + stop.lng) / 2;
    const offset = Math.min(0.012, Math.max(0.003, Math.abs(previous.lat - stop.lat) + Math.abs(previous.lng - stop.lng)) / 8);
    path.push({ lat: midLat, lng: previous.lng + offset });
    path.push({ lat: midLat, lng: stop.lng - offset });
    path.push({ lat: stop.lat, lng: stop.lng });
  });
  return path;
}

function renderMapStops(route, mapData) {
  const stopBox = byId("mapStops");
  const openLink = byId("mapOpenLink");
  if (openLink) openLink.href = kakaoBikeRouteUrl(mapData);
  if (!stopBox) return;
  stopBox.innerHTML = `
    <article>
      <strong>${routeMapLabel(route)}</strong>
      <p>${route.route}<br />카카오맵 버튼은 자전거 길찾기 모드로 열립니다.${mapData.gpxFile ? `<br />GPX 트랙: ${mapData.gpxFile}` : ""}</p>
    </article>
    ${mapData.stops
      .map(
        (stop, index) => `
          <article>
            <span>${index + 1}</span>
            <strong>${stop.title}</strong>
            <p>${stop.lat.toFixed(4)}, ${stop.lng.toFixed(4)}</p>
          </article>
        `
      )
      .join("")}
  `;
}

function mapPathToLatLng(path) {
  return path.map((stop) => new kakao.maps.LatLng(stop.lat, stop.lng));
}

function showMapPlaceholder(message) {
  const mapCanvas = byId("mapCanvas");
  const status = byId("mapStatus");
  if (status) status.textContent = message;
  if (!mapCanvas) return;
  mapCanvas.innerHTML = `
    <div class="map-placeholder">
      <strong>카카오맵을 표시하지 못했습니다</strong>
      <span>${message}</span>
    </div>
  `;
}

function loadKakaoMapSdk(appKey) {
  if (window.kakao?.maps?.Map) return Promise.resolve();
  if (window.__kakaoMapPromise) return window.__kakaoMapPromise;

  window.__kakaoMapPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector("script[data-kakao-map-sdk]");
    const finish = () => {
      if (window.kakao?.maps?.load) {
        window.kakao.maps.load(resolve);
      } else if (window.kakao?.maps?.Map) {
        resolve();
      } else {
        reject(new Error("Kakao Maps SDK를 불러오지 못했습니다."));
      }
    };

    if (existingScript) {
      existingScript.addEventListener("load", finish, { once: true });
      existingScript.addEventListener("error", () => reject(new Error("Kakao Maps SDK 로드 오류")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.dataset.kakaoMapSdk = "true";
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(appKey)}&autoload=false`;
    script.onload = finish;
    script.onerror = () => reject(new Error("Kakao Maps SDK 로드 오류"));
    document.head.appendChild(script);
  });

  return window.__kakaoMapPromise;
}

async function drawKakaoRouteMap(route, mapData, appKey) {
  const mapCanvas = byId("mapCanvas");
  const status = byId("mapStatus");
  if (!mapCanvas) return;

  try {
    if (status) status.textContent = "카카오맵을 불러오는 중입니다.";
    await loadKakaoMapSdk(appKey);
    mapCanvas.innerHTML = "";

    const centerStop = mapData.stops[Math.floor(mapData.stops.length / 2)];
    const map = new kakao.maps.Map(mapCanvas, {
      center: new kakao.maps.LatLng(centerStop.lat, centerStop.lng),
      level: mapData.level || 8
    });

    const gpxTrack = await loadGpxBikePath(mapData);
    const bikePath = gpxTrack?.points || guidedBikePath(mapData);
    const path = mapPathToLatLng(bikePath);
    const bounds = new kakao.maps.LatLngBounds();
    path.forEach((point) => bounds.extend(point));
    const truckPath = mapData.truckPath ? mapPathToLatLng(mapData.truckPath) : [];
    truckPath.forEach((point) => bounds.extend(point));

    const polyline = new kakao.maps.Polyline({
      path,
      strokeWeight: 7,
      strokeColor: "#d95f4a",
      strokeOpacity: 0.9,
      strokeStyle: "shortdash"
    });
    polyline.setMap(map);

    if (truckPath.length > 1) {
      const truckLine = new kakao.maps.Polyline({
        path: truckPath,
        strokeWeight: 5,
        strokeColor: "#1d6f96",
        strokeOpacity: 0.82,
        strokeStyle: "dash"
      });
      truckLine.setMap(map);
    }

    mapData.stops.forEach((stop, index) => {
      const position = new kakao.maps.LatLng(stop.lat, stop.lng);
      const marker = new kakao.maps.Marker({ position, title: stop.title });
      marker.setMap(map);

      const info = new kakao.maps.InfoWindow({
        content: `<div class="map-info">${index + 1}. ${stop.title}</div>`
      });
      if (index === 0 || index === mapData.stops.length - 1) info.open(map, marker);
    });

    map.setBounds(bounds);
    if (status) {
      if (gpxTrack) {
        status.textContent = `${routeMapLabel(route)}: GPX 트랙 ${gpxTrack.pointCount}개 지점, 약 ${gpxTrack.distance.toFixed(1)}km 구간을 표시했습니다.`;
      } else if (mapData.truckPath) {
        status.textContent = `${routeMapLabel(route)}: 전북월드컵경기장 집결, 트럭 이동, ${route.distance}km 자전거 코스를 표시했습니다.`;
      } else {
        status.textContent = `${routeMapLabel(route)} 자전거 경유 코스를 표시했습니다.`;
      }
    }
  } catch (error) {
    showMapPlaceholder("지도 로드에 실패했습니다. GitHub Pages 도메인이 Kakao Developers 플랫폼에 등록되어 있는지 확인해 주세요.");
  }
}

function drawSelectedMapRoute(routeId) {
  const route = getMapRoutes().find((item) => item.id === routeId) || getMapRoutes()[0];
  if (!route) return;
  const mapData = routeMaps[route.id];
  renderMapStops(route, mapData);
  drawKakaoRouteMap(route, mapData, KAKAO_MAP_APP_KEY);
}

function renderMapRouteList(selectedId) {
  const list = byId("mapRouteList");
  if (!list) return;
  list.innerHTML = getMapRoutes()
    .map(
      (route) => `
        <button class="${route.id === selectedId ? "active" : ""}" type="button" data-route-id="${route.id}">
          <strong>${route.festival}</strong>
          <span>${route.region} · ${route.distance}km · ${difficultyLabel(route.difficulty)}</span>
        </button>
      `
    )
    .join("");

  list.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const select = byId("routeMapSelect");
      const routeId = button.dataset.routeId;
      if (select) select.value = routeId;
      renderMapRouteList(routeId);
      drawSelectedMapRoute(routeId);
    });
  });
}

function renderMapsPage() {
  const select = byId("routeMapSelect");
  if (!select) return;
  const mapRoutes = getMapRoutes();
  const params = new URLSearchParams(window.location.search);
  const initialId = params.get("route") && routeMaps[params.get("route")] ? params.get("route") : mapRoutes[0]?.id;

  select.innerHTML = mapRoutes.map((route) => `<option value="${route.id}">${routeMapLabel(route)}</option>`).join("");
  select.value = initialId;
  renderMapRouteList(initialId);
  drawSelectedMapRoute(initialId);

  select.addEventListener("change", () => {
    renderMapRouteList(select.value);
    drawSelectedMapRoute(select.value);
  });
}

function init() {
  const sortSelect = byId("sortSelect");
  if (sortSelect) sortSelect.addEventListener("change", renderFestivalPage);
  renderFestivalPage();
  renderJeonbukPage();
  renderTransportPage();
  renderPlans();
  renderSources();
  renderMapsPage();
}

init();
