// 1000 kata kosakata bahasa Korea paling umum untuk TOPIK pemula-menengah
// format tuple: [Hangeul, Romanisasi, Arti Inggris, Level(1-4), Kategori(benda/pekerjaan/kerja/sifat/lain)]
const RAW = [
// === LEVEL 1 ===
// Pronouns & question words
["저","jeo","I (humble)",1,"lain"],["나","na","I",1,"lain"],["너","neo","you",1,"lain"],["당신","dangsin","you (polite)",1,"lain"],["우리","uri","we",1,"lain"],
["그","geu","he",1,"lain"],["그녀","geunyeo","she",1,"lain"],["그들","geudeul","they",1,"lain"],["이것","igeot","this",1,"lain"],["저것","jeogeot","that (far)",1,"lain"],
["그것","geugeot","that",1,"lain"],["여기","yeogi","here",1,"lain"],["저기","jeogi","over there",1,"lain"],["거기","geogi","there",1,"lain"],["무엇","mueot","what",1,"lain"],
["누구","nugu","who",1,"lain"],["언제","eonje","when",1,"lain"],["어디","eodi","where",1,"lain"],["왜","wae","why",1,"lain"],["어떻게","eotteoke","how",1,"lain"],
["얼마나","eolmana","how much",1,"lain"],["몇","myeot","how many",1,"lain"],["어느","eoneu","which",1,"lain"],["무슨","museun","what kind of",1,"lain"],["다","da","all",1,"lain"],
// Numbers - native Korean
["하나","hana","one",1,"lain"],["둘","dul","two",1,"lain"],["셋","set","three",1,"lain"],["넷","net","four",1,"lain"],["다섯","daseot","five",1,"lain"],
["여섯","yeoseot","six",1,"lain"],["일곱","ilgop","seven",1,"lain"],["여덟","yeodeol","eight",1,"lain"],["아홉","ahop","nine",1,"lain"],["열","yeol","ten",1,"lain"],
["스물","seumul","twenty",1,"lain"],["서른","seoreun","thirty",1,"lain"],["마흔","maheun","forty",1,"lain"],["쉰","swin","fifty",1,"lain"],["예순","yesun","sixty",1,"lain"],
["일흔","ilheun","seventy",1,"lain"],["여든","yeodeun","eighty",1,"lain"],["아흔","aheun","ninety",1,"lain"],["한 개","han gae","one item",1,"lain"],["두 개","du gae","two items",1,"lain"],
["세 개","se gae","three items",1,"lain"],["첫째","cheotjjae","first",1,"lain"],["둘째","duljjae","second",1,"lain"],["셋째","setjjae","third",1,"lain"],["마지막","majimak","last",1,"lain"],
// Numbers - sino-Korean & counters
["일","il","one (sino)",1,"lain"],["이","i","two (sino)",1,"lain"],["삼","sam","three (sino)",1,"lain"],["사","sa","four (sino)",1,"lain"],["오","o","five (sino)",1,"lain"],
["육","yuk","six (sino)",1,"lain"],["칠","chil","seven (sino)",1,"lain"],["팔","pal","eight (sino)",1,"lain"],["구","gu","nine (sino)",1,"lain"],["십","sip","ten (sino)",1,"lain"],
["백","baek","hundred",1,"lain"],["천","cheon","thousand",1,"lain"],["만","man","ten thousand",1,"lain"],["원","won","won (currency)",1,"lain"],["년","nyeon","year (counter)",1,"lain"],
["월","wol","month (counter)",1,"lain"],["층","cheung","floor",1,"lain"],["번","beon","number/times",1,"lain"],["개","gae","item (counter)",1,"lain"],["명","myeong","people (counter)",1,"lain"],
["살","sal","age (counter)",1,"lain"],["시","si","o'clock",1,"lain"],["분","bun","minute",1,"lain"],["초","cho","second",1,"lain"],["퍼센트","peosenteu","percent",1,"lain"],
// Days/months/time basic
["월요일","woryoil","Monday",1,"benda"],["화요일","hwayoil","Tuesday",1,"benda"],["수요일","suyoil","Wednesday",1,"benda"],["목요일","mogyoil","Thursday",1,"benda"],["금요일","geumyoil","Friday",1,"benda"],
["토요일","toyoil","Saturday",1,"benda"],["일요일","iryoil","Sunday",1,"benda"],["오늘","oneul","today",1,"benda"],["내일","naeil","tomorrow",1,"benda"],["어제","eoje","yesterday",1,"benda"],
["모레","more","day after tomorrow",1,"benda"],["그저께","geujeokke","day before yesterday",1,"benda"],["지금","jigeum","now",1,"benda"],["아침","achim","morning",1,"benda"],["점심","jeomsim","noon/lunch",1,"benda"],
["저녁","jeonyeok","evening",1,"benda"],["밤","bam","night",1,"benda"],["새벽","saebyeok","dawn",1,"benda"],["주말","jumal","weekend",1,"benda"],["평일","pyeongil","weekday",1,"benda"],
["매일","maeil","every day",1,"benda"],["요즘","yojeum","these days",1,"benda"],["나중에","najunge","later",1,"benda"],["아까","akka","a while ago",1,"benda"],["다음","daeum","next",1,"benda"],
// Family members
["아버지","abeoji","father",1,"benda"],["어머니","eomeoni","mother",1,"benda"],["아빠","appa","dad",1,"benda"],["엄마","eomma","mom",1,"benda"],["형","hyeong","older brother (of male)",1,"benda"],
["오빠","oppa","older brother (of female)",1,"benda"],["누나","nuna","older sister (of male)",1,"benda"],["언니","eonni","older sister (of female)",1,"benda"],["동생","dongsaeng","younger sibling",1,"benda"],["남동생","namdongsaeng","younger brother",1,"benda"],
["여동생","yeodongsaeng","younger sister",1,"benda"],["아들","adeul","son",1,"benda"],["딸","ttal","daughter",1,"benda"],["남편","nampyeon","husband",1,"benda"],["아내","anae","wife",1,"benda"],
["할아버지","harabeoji","grandfather",1,"benda"],["할머니","halmeoni","grandmother",1,"benda"],["삼촌","samchon","uncle",1,"benda"],["이모","imo","aunt (maternal)",1,"benda"],["고모","gomo","aunt (paternal)",1,"benda"],
["사촌","sachon","cousin",1,"benda"],["부모님","bumonim","parents",1,"benda"],["자녀","janyeo","children (offspring)",1,"benda"],["아기","agi","baby",1,"benda"],["가족","gajok","family",1,"benda"],
// Colors & shapes
["빨간색","ppalgansaek","red",1,"benda"],["파란색","paransaek","blue",1,"benda"],["노란색","noransaek","yellow",1,"benda"],["초록색","choroksaek","green",1,"benda"],["검은색","geomeunsaek","black",1,"benda"],
["흰색","huinsaek","white",1,"benda"],["주황색","juhwangsaek","orange",1,"benda"],["보라색","borasaek","purple",1,"benda"],["분홍색","bunhongsaek","pink",1,"benda"],["갈색","galsaek","brown",1,"benda"],
["회색","hoesaek","gray",1,"benda"],["색깔","saekkkal","color",1,"benda"],["동그라미","donggeurami","circle",1,"benda"],["네모","nemo","square",1,"benda"],["세모","semo","triangle",1,"benda"],
["별","byeol","star (shape)",1,"benda"],["하트","hateu","heart (shape)",1,"benda"],["크기","keugi","size",1,"benda"],["모양","moyang","shape",1,"benda"],["줄무늬","julmunui","stripe",1,"benda"],
["점","jeom","dot",1,"benda"],["밝다","bakda","bright",1,"sifat"],["어둡다","eodupda","dark",1,"sifat"],["무늬","munui","pattern",1,"benda"],["진하다","jinhada","dark/deep (color)",1,"sifat"],
// Body parts
["머리","meori","head",1,"benda"],["얼굴","eolgul","face",1,"benda"],["눈","nun","eye",1,"benda"],["코","ko","nose",1,"benda"],["입","ip","mouth",1,"benda"],
["귀","gwi","ear",1,"benda"],["이","i","tooth",1,"benda"],["혀","hyeo","tongue",1,"benda"],["목","mok","neck",1,"benda"],["어깨","eokkae","shoulder",1,"benda"],
["팔","pal","arm",1,"benda"],["손","son","hand",1,"benda"],["손가락","songarak","finger",1,"benda"],["다리","dari","leg",1,"benda"],["발","bal","foot",1,"benda"],
["발가락","balgarak","toe",1,"benda"],["배","bae","stomach",1,"benda"],["등","deung","back",1,"benda"],["허리","heori","waist",1,"benda"],["무릎","mureup","knee",1,"benda"],
["가슴","gaseum","chest",1,"benda"],["머리카락","meorikarak","hair",1,"benda"],["피부","pibu","skin",1,"benda"],["목소리","moksori","voice",1,"benda"],["심장","simjang","heart (organ)",1,"benda"],
// Food & drink basics
["밥","bap","rice/meal",1,"benda"],["물","mul","water",1,"benda"],["빵","ppang","bread",1,"benda"],["우유","uyu","milk",1,"benda"],["차","cha","tea",1,"benda"],
["커피","keopi","coffee",1,"benda"],["주스","juseu","juice",1,"benda"],["고기","gogi","meat",1,"benda"],["생선","saengseon","fish (food)",1,"benda"],["야채","yachae","vegetable",1,"benda"],
["과일","gwail","fruit",1,"benda"],["계란","gyeran","egg",1,"benda"],["김치","gimchi","kimchi",1,"benda"],["국","guk","soup",1,"benda"],["라면","ramyeon","ramen",1,"benda"],
["국수","guksu","noodles",1,"benda"],["떡","tteok","rice cake",1,"benda"],["설탕","seoltang","sugar",1,"benda"],["소금","sogeum","salt",1,"benda"],["간장","ganjang","soy sauce",1,"benda"],
["맛","mat","taste",1,"benda"],["아침밥","achimbap","breakfast",1,"benda"],["점심밥","jeomsimbap","lunch",1,"benda"],["저녁밥","jeonyeokbap","dinner",1,"benda"],["간식","gansik","snack",1,"benda"],
// Household objects & school supplies
["집","jip","house",1,"benda"],["방","bang","room",1,"benda"],["문","mun","door",1,"benda"],["창문","changmun","window",1,"benda"],["침대","chimdae","bed",1,"benda"],
["의자","uija","chair",1,"benda"],["책상","chaeksang","desk",1,"benda"],["책","chaek","book",1,"benda"],["공책","gongchaek","notebook",1,"benda"],["연필","yeonpil","pencil",1,"benda"],
["볼펜","bolpen","pen",1,"benda"],["지우개","jiugae","eraser",1,"benda"],["가방","gabang","bag",1,"benda"],["종이","jongi","paper",1,"benda"],["시계","sigye","clock",1,"benda"],
["컵","keop","cup",1,"benda"],["접시","jeopsi","plate",1,"benda"],["숟가락","sutgarak","spoon",1,"benda"],["젓가락","jeotgarak","chopsticks",1,"benda"],["칼","kal","knife",1,"benda"],
["옷장","otjang","closet",1,"benda"],["냉장고","naengjanggo","refrigerator",1,"benda"],["텔레비전","tellebijeon","television",1,"benda"],["전화기","jeonhwagi","telephone",1,"benda"],["컴퓨터","keompyuteo","computer",1,"benda"],
// Basic verbs
["가다","gada","to go",1,"kerja"],["오다","oda","to come",1,"kerja"],["먹다","meokda","to eat",1,"kerja"],["마시다","masida","to drink",1,"kerja"],["보다","boda","to see/watch",1,"kerja"],
["듣다","deutda","to listen",1,"kerja"],["하다","hada","to do",1,"kerja"],["있다","itda","to have/exist",1,"kerja"],["없다","eopda","to not have",1,"kerja"],["주다","juda","to give",1,"kerja"],
["받다","batda","to receive",1,"kerja"],["사다","sada","to buy",1,"kerja"],["팔다","palda","to sell",1,"kerja"],["살다","salda","to live",1,"kerja"],["자다","jada","to sleep",1,"kerja"],
["일어나다","ireonada","to wake up",1,"kerja"],["씻다","ssitda","to wash",1,"kerja"],["공부하다","gongbuhada","to study",1,"kerja"],["가르치다","gareuchida","to teach",1,"kerja"],["읽다","ikda","to read",1,"kerja"],
["쓰다","sseuda","to write",1,"kerja"],["말하다","malhada","to speak",1,"kerja"],["알다","alda","to know",1,"kerja"],["좋아하다","joahada","to like",1,"kerja"],["원하다","wonhada","to want",1,"kerja"],

// === LEVEL 2 ===
// Basic adjectives
["크다","keuda","big",2,"sifat"],["작다","jakda","small",2,"sifat"],["좋다","jota","good",2,"sifat"],["나쁘다","nappeuda","bad",2,"sifat"],["예쁘다","yeppeuda","pretty",2,"sifat"],
["못생기다","motsaenggida","ugly",2,"sifat"],["새롭다","saeropda","new",2,"sifat"],["오래되다","oraedoeda","old (thing)",2,"sifat"],["많다","manta","many",2,"sifat"],["적다","jeokda","few",2,"sifat"],
["길다","gilda","long",2,"sifat"],["짧다","jjalda","short",2,"sifat"],["높다","nopda","high/tall",2,"sifat"],["낮다","natda","low",2,"sifat"],["덥다","deopda","hot (weather)",2,"sifat"],
["춥다","chupda","cold (weather)",2,"sifat"],["쉽다","swipda","easy",2,"sifat"],["어렵다","eoryeopda","difficult",2,"sifat"],["빠르다","ppareuda","fast",2,"sifat"],["느리다","neurida","slow",2,"sifat"],
["행복하다","haengbokhada","happy",2,"sifat"],["슬프다","seulpeuda","sad",2,"sifat"],["무겁다","mugeopda","heavy",2,"sifat"],["가볍다","gabyeopda","light (weight)",2,"sifat"],["조용하다","joyonghada","quiet",2,"sifat"],
// Greetings & common expressions
["안녕하세요","annyeonghaseyo","hello",2,"lain"],["안녕히 가세요","annyeonghi gaseyo","goodbye (to one leaving)",2,"lain"],["안녕히 계세요","annyeonghi gyeseyo","goodbye (to one staying)",2,"lain"],["감사합니다","gamsahamnida","thank you",2,"lain"],["죄송합니다","joesonghamnida","I'm sorry (formal)",2,"lain"],
["미안해요","mianhaeyo","sorry",2,"lain"],["실례합니다","sillyehamnida","excuse me",2,"lain"],["괜찮아요","gwaenchanayo","it's okay",2,"lain"],["반갑습니다","bangapseumnida","nice to meet you",2,"lain"],["축하합니다","chukhahamnida","congratulations",2,"lain"],
["환영합니다","hwanyeonghamnida","welcome",2,"lain"],["잘 지내요","jal jinaeyo","doing well",2,"lain"],["다시 만나요","dasi mannayo","see you again",2,"lain"],["조심하세요","josimhaseyo","be careful",2,"lain"],["화이팅","hwaiting","fighting (good luck)",2,"lain"],
["부탁합니다","butakhamnida","please (request)",2,"lain"],["네","ne","yes",2,"lain"],["아니요","aniyo","no",2,"lain"],["맞아요","majayo","that's right",2,"lain"],["물론이죠","mullonijyo","of course",2,"lain"],
["천만에요","cheonmaneyo","you're welcome",2,"lain"],["여보세요","yeoboseyo","hello (on phone)",2,"lain"],["처음 뵙겠습니다","cheoeum boepgetseumnida","nice to meet you (formal)",2,"lain"],["수고하세요","sugohaseyo","good work",2,"lain"],["알겠습니다","algetseumnida","understood",2,"lain"],
// Clothing & accessories
["옷","ot","clothes",2,"benda"],["셔츠","syeocheu","shirt",2,"benda"],["바지","baji","pants",2,"benda"],["치마","chima","skirt",2,"benda"],["원피스","wonpiseu","dress",2,"benda"],
["재킷","jaekit","jacket",2,"benda"],["코트","koteu","coat",2,"benda"],["신발","sinbal","shoes",2,"benda"],["양말","yangmal","socks",2,"benda"],["모자","moja","hat",2,"benda"],
["장갑","janggap","gloves",2,"benda"],["목도리","mokdori","scarf",2,"benda"],["안경","angyeong","glasses",2,"benda"],["손목시계","sonmoksigye","wristwatch",2,"benda"],["반지","banji","ring",2,"benda"],
["목걸이","mokgeori","necklace",2,"benda"],["귀걸이","gwigeori","earrings",2,"benda"],["지갑","jigap","wallet",2,"benda"],["벨트","belteu","belt",2,"benda"],["넥타이","nektai","necktie",2,"benda"],
["청바지","cheongbaji","jeans",2,"benda"],["잠옷","jamot","pajamas",2,"benda"],["속옷","sogot","underwear",2,"benda"],["우산","usan","umbrella",2,"benda"],["티셔츠","tisyeocheu","t-shirt",2,"benda"],
// Places in town
["학교","hakgyo","school",2,"benda"],["병원","byeongwon","hospital",2,"benda"],["은행","eunhaeng","bank",2,"benda"],["우체국","ucheguk","post office",2,"benda"],["경찰서","gyeongchalseo","police station",2,"benda"],
["시장","sijang","market",2,"benda"],["편의점","pyeonuijeom","convenience store",2,"benda"],["백화점","baekhwajeom","department store",2,"benda"],["식당","sikdang","restaurant",2,"benda"],["카페","kape","cafe",2,"benda"],
["공원","gongwon","park",2,"benda"],["도서관","doseogwan","library",2,"benda"],["박물관","bangmulgwan","museum",2,"benda"],["극장","geukjang","theater",2,"benda"],["공항","gonghang","airport",2,"benda"],
["역","yeok","station",2,"benda"],["정류장","jeongnyujang","bus stop",2,"benda"],["교회","gyohoe","church",2,"benda"],["절","jeol","temple",2,"benda"],["회사","hoesa","company",2,"benda"],
["대사관","daesagwan","embassy",2,"benda"],["미용실","miyongsil","hair salon",2,"benda"],["약국","yakguk","pharmacy",2,"benda"],["주유소","juyuso","gas station",2,"benda"],["체육관","cheyukgwan","gym",2,"benda"],
// Transportation
["자동차","jadongcha","car",2,"benda"],["버스","beoseu","bus",2,"benda"],["지하철","jihacheol","subway",2,"benda"],["기차","gicha","train",2,"benda"],["비행기","bihaenggi","airplane",2,"benda"],
["배","bae","ship",2,"benda"],["자전거","jajeongeo","bicycle",2,"benda"],["오토바이","otobai","motorcycle",2,"benda"],["택시","taeksi","taxi",2,"benda"],["표","pyo","ticket",2,"benda"],
["요금","yogeum","fare",2,"benda"],["길","gil","road",2,"benda"],["다리","dari","bridge",2,"benda"],["신호등","sinhodeung","traffic light",2,"benda"],["횡단보도","hoengdanbodo","crosswalk",2,"benda"],
["주차장","juchajang","parking lot",2,"benda"],["터미널","teomineol","terminal",2,"benda"],["고속도로","gosokdoro","highway",2,"benda"],["교통","gyotong","traffic",2,"benda"],["운전하다","unjeonhada","to drive",2,"kerja"],
["타다","tada","to ride",2,"kerja"],["내리다","naerida","to get off",2,"kerja"],["갈아타다","garatada","to transfer (transport)",2,"kerja"],["편도","pyeondo","one-way",2,"benda"],["왕복","wangbok","round-trip",2,"benda"],
// Weather & seasons
["날씨","nalssi","weather",2,"benda"],["봄","bom","spring",2,"benda"],["여름","yeoreum","summer",2,"benda"],["가을","gaeul","fall",2,"benda"],["겨울","gyeoul","winter",2,"benda"],
["비","bi","rain",2,"benda"],["눈","nun","snow",2,"benda"],["바람","baram","wind",2,"benda"],["구름","gureum","cloud",2,"benda"],["하늘","haneul","sky",2,"benda"],
["해","hae","sun",2,"benda"],["태양","taeyang","sun (formal)",2,"benda"],["안개","angae","fog",2,"benda"],["태풍","taepung","typhoon",2,"benda"],["천둥","cheondung","thunder",2,"benda"],
["번개","beongae","lightning",2,"benda"],["온도","ondo","temperature",2,"benda"],["습도","seupdo","humidity",2,"benda"],["맑다","makda","clear (weather)",2,"sifat"],["흐리다","heurida","cloudy",2,"sifat"],
["시원하다","siwonhada","cool/refreshing",2,"sifat"],["따뜻하다","ttatteuthada","warm",2,"sifat"],["무덥다","mudeopda","muggy",2,"sifat"],["계절","gyejeol","season",2,"benda"],["장마","jangma","monsoon",2,"benda"],
// Hobbies & leisure
["취미","chwimi","hobby",2,"benda"],["운동","undong","exercise",2,"benda"],["축구","chukgu","soccer",2,"benda"],["야구","yagu","baseball",2,"benda"],["농구","nonggu","basketball",2,"benda"],
["수영","suyeong","swimming",2,"benda"],["등산","deungsan","hiking",2,"benda"],["여행","yeohaeng","travel",2,"benda"],["독서","dokseo","reading",2,"benda"],["음악","eumak","music",2,"benda"],
["노래","norae","song",2,"benda"],["춤","chum","dance",2,"benda"],["그림","geurim","painting/drawing",2,"benda"],["사진","sajin","photo",2,"benda"],["영화","yeonghwa","movie",2,"benda"],
["드라마","deurama","drama",2,"benda"],["게임","geim","game",2,"benda"],["요리","yori","cooking",2,"benda"],["낚시","nakssi","fishing",2,"benda"],["캠핑","kaemping","camping",2,"benda"],
["쇼핑","syoping","shopping",2,"benda"],["악기","akgi","musical instrument",2,"benda"],["피아노","piano","piano",2,"benda"],["기타","gita","guitar",2,"benda"],["콘서트","konseoteu","concert",2,"benda"],
// More verbs - daily activities
["청소하다","cheongsohada","to clean",2,"kerja"],["빨래하다","ppallaehada","to do laundry",2,"kerja"],["요리하다","yorihada","to cook",2,"kerja"],["운동하다","undonghada","to exercise",2,"kerja"],["산책하다","sanchaekhada","to take a walk",2,"kerja"],
["쉬다","swida","to rest",2,"kerja"],["놀다","nolda","to play",2,"kerja"],["웃다","utda","to laugh",2,"kerja"],["울다","ulda","to cry",2,"kerja"],["만나다","mannada","to meet",2,"kerja"],
["기다리다","gidarida","to wait",2,"kerja"],["찾다","chatda","to find/look for",2,"kerja"],["잃어버리다","ireobeorida","to lose (something)",2,"kerja"],["잊어버리다","ijeobeorida","to forget",2,"kerja"],["기억하다","gieokhada","to remember",2,"kerja"],
["도와주다","dowajuda","to help",2,"kerja"],["준비하다","junbihada","to prepare",2,"kerja"],["시작하다","sijakhada","to start",2,"kerja"],["끝나다","kkeutnada","to end/finish",2,"kerja"],["계속하다","gyesokhada","to continue",2,"kerja"],
["바꾸다","bakkuda","to change",2,"kerja"],["고치다","gochida","to fix",2,"kerja"],["열다","yeolda","to open",2,"kerja"],["닫다","datda","to close",2,"kerja"],["켜다","kyeoda","to turn on",2,"kerja"],
// Shopping & money
["돈","don","money",2,"benda"],["가격","gagyeok","price",2,"benda"],["값","gap","cost/price",2,"benda"],["싸다","ssada","cheap",2,"sifat"],["비싸다","bissada","expensive",2,"sifat"],
["세일","seil","sale",2,"benda"],["할인","halin","discount",2,"benda"],["영수증","yeongsujeung","receipt",2,"benda"],["신용카드","sinyongkadeu","credit card",2,"benda"],["현금","hyeongeum","cash",2,"benda"],
["지폐","jipye","bill/banknote",2,"benda"],["동전","dongjeon","coin",2,"benda"],["계산하다","gyesanhada","to pay/calculate",2,"kerja"],["환불하다","hwanbulhada","to refund",2,"kerja"],["교환하다","gyohwanhada","to exchange",2,"kerja"],
["포장하다","pojanghada","to wrap/pack",2,"kerja"],["배달","baedal","delivery",2,"benda"],["주문하다","jumunhada","to order",2,"kerja"],["손님","sonnim","customer",2,"benda"],["점원","jeomwon","store clerk",2,"pekerjaan"],
["계산대","gyesandae","checkout counter",2,"benda"],["영업시간","yeongeopsigan","business hours",2,"benda"],["무료","muryo","free (no cost)",2,"benda"],["유료","yuryo","paid",2,"benda"],["저렴하다","jeoryeomhada","inexpensive",2,"sifat"],
// School & study
["학생","haksaeng","student",2,"pekerjaan"],["선생님","seonsaengnim","teacher",2,"pekerjaan"],["교수","gyosu","professor",2,"pekerjaan"],["수업","sueop","class",2,"benda"],["숙제","sukje","homework",2,"benda"],
["시험","siheom","exam",2,"benda"],["성적","seongjeok","grade",2,"benda"],["졸업","joreop","graduation",2,"benda"],["입학","iphak","enrollment",2,"benda"],["전공","jeongong","major (study)",2,"benda"],
["교실","gyosil","classroom",2,"benda"],["칠판","chilpan","blackboard",2,"benda"],["문제","munje","problem/question",2,"benda"],["정답","jeongdap","correct answer",2,"benda"],["질문","jilmun","question",2,"benda"],
["대답","daedap","answer",2,"benda"],["발표","balpyo","presentation",2,"benda"],["노트","noteu","notes",2,"benda"],["단어","daneo","word/vocabulary",2,"benda"],["문법","munbeop","grammar",2,"benda"],
["발음","bareum","pronunciation",2,"benda"],["연습","yeonseup","practice",2,"benda"],["복습","bokseup","review",2,"benda"],["예습","yeseup","preview (study)",2,"benda"],["장학금","janghakgeum","scholarship",2,"benda"],

// === LEVEL 3 ===
// Work & jobs/occupations
["회사원","hoesawon","office worker",3,"pekerjaan"],["직업","jigeop","occupation",3,"benda"],["사장","sajang","boss/CEO",3,"pekerjaan"],["직원","jigwon","employee",3,"pekerjaan"],["동료","dongnyo","colleague",3,"benda"],
["회의","hoeui","meeting",3,"benda"],["프로젝트","peurojekteu","project",3,"benda"],["계약","gyeyak","contract",3,"benda"],["월급","wolgeup","monthly salary",3,"benda"],["면접","myeonjeop","interview",3,"benda"],
["이력서","iryeokseo","resume",3,"benda"],["부서","buseo","department",3,"benda"],["사무실","samusil","office",3,"benda"],["출근하다","chulgeunhada","to go to work",3,"kerja"],["퇴근하다","toegeunhada","to leave work",3,"kerja"],
["야근하다","yageunhada","to work overtime",3,"kerja"],["승진하다","seungjinhada","to be promoted",3,"kerja"],["은퇴하다","euntoehada","to retire",3,"kerja"],["경력","gyeongnyeok","career/experience",3,"benda"],["자격증","jagyeokjeung","certificate/license",3,"benda"],
["의사","uisa","doctor",3,"pekerjaan"],["간호사","ganhosa","nurse",3,"pekerjaan"],["변호사","byeonhosa","lawyer",3,"pekerjaan"],["요리사","yorisa","chef",3,"pekerjaan"],["경찰관","gyeongchalgwan","police officer",3,"pekerjaan"],
// Health & body advanced
["건강","geongang","health",3,"benda"],["아프다","apeuda","to be sick/hurt",3,"kerja"],["병","byeong","disease",3,"benda"],["감기","gamgi","cold (illness)",3,"benda"],["열","yeol2","fever",3,"benda"],
["두통","dutong","headache",3,"benda"],["배탈","baetal","stomachache",3,"benda"],["기침","gichim","cough",3,"benda"],["상처","sangcheo","wound",3,"benda"],["약","yak","medicine",3,"benda"],
["처방전","cheobangjeon","prescription",3,"benda"],["치료","chiryo","treatment",3,"benda"],["수술","susul","surgery",3,"benda"],["진찰","jinchal","medical examination",3,"benda"],["예방","yebang","prevention",3,"benda"],
["백신","baeksin","vaccine",3,"benda"],["다치다","dachida","to get hurt",3,"kerja"],["낫다","natda2","to recover",3,"kerja"],["회복하다","hoebokhada","to recover",3,"kerja"],["스트레스","seuteureseu","stress",3,"benda"],
["피곤하다","pigonhada","tired",3,"sifat"],["알레르기","allereugi","allergy",3,"benda"],["체온","cheon2","body temperature",3,"benda"],["운동선수","undongseonsu","athlete",3,"pekerjaan"],["건강검진","geongang geomjin","health checkup",3,"benda"],
// Emotions & feelings
["기쁘다","gippeuda","glad",3,"sifat"],["화나다","hwanada","to be angry",3,"kerja"],["놀라다","nollada","to be surprised",3,"kerja"],["무섭다","museopda","scared",3,"sifat"],["긴장하다","ginjanghada","nervous",3,"sifat"],
["신나다","sinnada","excited",3,"sifat"],["지루하다","jiruhada","bored",3,"sifat"],["편하다","pyeonhada","comfortable",3,"sifat"],["불편하다","bulpyeonhada","uncomfortable",3,"sifat"],["답답하다","dapdaphada","frustrated/stuffy",3,"sifat"],
["부럽다","bureopda","envious",3,"sifat"],["자랑스럽다","jarangseureopda","proud",3,"sifat"],["걱정하다","geokjeonghada","to worry",3,"kerja"],["그립다","geuripda","to miss/long for",3,"kerja"],["외롭다","oeropda","lonely",3,"sifat"],
["실망하다","silmanghada","disappointed",3,"sifat"],["만족하다","manjokhada","satisfied",3,"sifat"],["후회하다","huhoehada","to regret",3,"kerja"],["감동하다","gamdonghada","touched/moved",3,"sifat"],["짜증나다","jjajeungnada","annoyed",3,"sifat"],
["부끄럽다","bukkeureopda","embarrassed",3,"sifat"],["편안하다","pyeonanhada","at ease",3,"sifat"],["든든하다","deundeunhada","reassured",3,"sifat"],["아쉽다","aswipda","regrettable",3,"sifat"],["반갑다","bangapda","glad (to see someone)",3,"sifat"],
// Abstract adjectives
["중요하다","jungyohada","important",3,"sifat"],["필요하다","piryohada","necessary",3,"sifat"],["가능하다","ganeunghada","possible",3,"sifat"],["불가능하다","bulganeunghada","impossible",3,"sifat"],["간단하다","gandanhada","simple",3,"sifat"],
["복잡하다","bokjaphada","complicated",3,"sifat"],["정확하다","jeonghwakhada","accurate",3,"sifat"],["확실하다","hwaksilhada","certain",3,"sifat"],["특별하다","teukbyeolhada","special",3,"sifat"],["일반적이다","ilbanjeogida","general",3,"sifat"],
["적당하다","jeokdanghada","appropriate",3,"sifat"],["충분하다","chungbunhada","sufficient",3,"sifat"],["부족하다","bujokhada","insufficient",3,"sifat"],["정직하다","jeongjikhada","honest",3,"sifat"],["성실하다","seongsilhada","diligent",3,"sifat"],
["게으르다","geeureuda","lazy",3,"sifat"],["친절하다","chinjeolhada","kind",3,"sifat"],["예의바르다","yeuibareuda","polite",3,"sifat"],["조심스럽다","josimseureopda","cautious",3,"sifat"],["자유롭다","jayuropda","free",3,"sifat"],
["안전하다","anjeonhada","safe",3,"sifat"],["위험하다","wiheomhada","dangerous",3,"sifat"],["유용하다","yuyonghada","useful",3,"sifat"],["유명하다","yumyeonghada","famous",3,"sifat"],["독특하다","dokteukhada","unique",3,"sifat"],
// Nature & animals
["동물","dongmul","animal",3,"benda"],["개","gae2","dog",3,"benda"],["고양이","goyangi","cat",3,"benda"],["새","sae","bird",3,"benda"],["물고기","mulgogi","fish (animal)",3,"benda"],
["소","so","cow",3,"benda"],["돼지","dwaeji","pig",3,"benda"],["말","mal","horse",3,"benda"],["닭","dak","chicken",3,"benda"],["호랑이","horangi","tiger",3,"benda"],
["사자","saja","lion",3,"benda"],["코끼리","kokkiri","elephant",3,"benda"],["토끼","tokki","rabbit",3,"benda"],["곰","gom","bear",3,"benda"],["뱀","baem","snake",3,"benda"],
["나무","namu","tree",3,"benda"],["꽃","kkot","flower",3,"benda"],["풀","pul","grass",3,"benda"],["잎","ip2","leaf",3,"benda"],["숲","sup","forest",3,"benda"],
["산","san","mountain",3,"benda"],["바다","bada","sea",3,"benda"],["강","gang","river",3,"benda"],["호수","hosu","lake",3,"benda"],["섬","seom","island",3,"benda"],
// Travel & directions
["여행하다","yeohaenghada","to travel",3,"kerja"],["관광","gwangwang","sightseeing",3,"benda"],["관광지","gwangwangji","tourist spot",3,"benda"],["지도","jido","map",3,"benda"],["방향","banghyang","direction",3,"benda"],
["동쪽","dongjjok","east",3,"benda"],["서쪽","seojjok","west",3,"benda"],["남쪽","namjjok","south",3,"benda"],["북쪽","bukjjok","north",3,"benda"],["오른쪽","oreunjjok","right side",3,"benda"],
["왼쪽","oenjjok","left side",3,"benda"],["앞","ap","front",3,"benda"],["뒤","dwi","back (behind)",3,"benda"],["옆","yeop","side",3,"benda"],["위","wi","above",3,"benda"],
["아래","arae","below",3,"benda"],["안","an","inside",3,"benda"],["밖","bakk","outside",3,"benda"],["근처","geuncheo","nearby",3,"benda"],["거리","geori","distance/street",3,"benda"],
["목적지","mokjeokji","destination",3,"benda"],["예약하다","yeyakhada","to reserve",3,"kerja"],["짐","jim","luggage",3,"benda"],["여권","yeogwon","passport",3,"benda"],["국경","gukgyeong","border",3,"benda"],
// Advanced verbs
["발전하다","baljeonhada","to develop",3,"kerja"],["성장하다","seongjanghada","to grow",3,"kerja"],["성공하다","seonggonghada","to succeed",3,"kerja"],["실패하다","silpaehada","to fail",3,"kerja"],["노력하다","noryeokhada","to make effort",3,"kerja"],
["도전하다","dojeonhada","to challenge",3,"kerja"],["극복하다","geukbokhada","to overcome",3,"kerja"],["해결하다","haegyeolhada","to solve",3,"kerja"],["발견하다","balgyeonhada","to discover",3,"kerja"],["발명하다","balmyeonghada","to invent",3,"kerja"],
["연구하다","yeonguhada","to research",3,"kerja"],["조사하다","josahada","to investigate",3,"kerja"],["분석하다","bunseokhada","to analyze",3,"kerja"],["판단하다","pandanhada","to judge",3,"kerja"],["결정하다","gyeoljeonghada","to decide",3,"kerja"],
["선택하다","seontaekhada","to choose",3,"kerja"],["제안하다","jeanhada","to suggest",3,"kerja"],["주장하다","juganghada","to assert/claim",3,"kerja"],["설명하다","seolmyeonghada","to explain",3,"kerja"],["표현하다","pyohyeonhada","to express",3,"kerja"],
["강조하다","gangjohada","to emphasize",3,"kerja"],["비교하다","bigyohada","to compare",3,"kerja"],["참고하다","chamgohada","to reference",3,"kerja"],["포함하다","pohamhada","to include",3,"kerja"],["제외하다","jeoehada","to exclude",3,"kerja"],
// House & living
["아파트","apateu","apartment",3,"benda"],["주택","jutaek","house (formal)",3,"benda"],["원룸","wollum","studio apartment",3,"benda"],["월세","wolse","monthly rent",3,"benda"],["전세","jeonse","key-money lease",3,"benda"],
["보증금","bojeunggeum","deposit",3,"benda"],["이사하다","isahada","to move house",3,"kerja"],["가구","gagu","furniture",3,"benda"],["인테리어","interieo","interior design",3,"benda"],["베란다","beranda","balcony",3,"benda"],
["부엌","bueok","kitchen",3,"benda"],["거실","geosil","living room",3,"benda"],["화장실","hwajangsil","bathroom",3,"benda"],["욕실","yoksil","bathroom (bath)",3,"benda"],["마당","madang","yard",3,"benda"],
["지붕","jibung","roof",3,"benda"],["계단","gyedan","stairs",3,"benda"],["엘리베이터","ellibeiteo","elevator",3,"benda"],["경비실","gyeongbisil","security office",3,"benda"],["관리비","gwallibi","maintenance fee",3,"benda"],
["세탁기","setakgi","washing machine",3,"benda"],["에어컨","eeokeon","air conditioner",3,"benda"],["난방","nanbang","heating",3,"benda"],["청소기","cheongsogi","vacuum cleaner",3,"benda"],["전등","jeondeung","light/lamp",3,"benda"],
// Time expressions advanced
["동안","dongan","during/for",3,"lain"],["사이","sai","between",3,"lain"],["순간","sungan","moment",3,"benda"],["기간","gigan","period",3,"benda"],["시기","sigi","timing/period",3,"benda"],
["과거","gwageo","past",3,"benda"],["현재","hyeonjae","present",3,"benda"],["미래","mirae","future",3,"benda"],["예전","yejeon","formerly",3,"lain"],["최근","choegeun","recently",3,"lain"],
["당분간","dangbugan","for the time being",3,"lain"],["마침내","machimnae","finally",3,"lain"],["드디어","deudieo","at last",3,"lain"],["갑자기","gapjagi","suddenly",3,"lain"],["우연히","uyeonhi","by chance",3,"lain"],
["자주","jaju","often",3,"lain"],["가끔","gakkeum","sometimes",3,"lain"],["거의","geoui","almost",3,"lain"],["전혀","jeonhyeo","not at all",3,"lain"],["아직","ajik","yet/still",3,"lain"],
["벌써","beolsseo","already",3,"lain"],["이미","imi","already",3,"lain"],["계속","gyesok","continuously",3,"lain"],["잠깐","jamkkan","for a moment",3,"lain"],["오랫동안","oraetdongan","for a long time",3,"lain"],
// Communication & technology basic
["전화","jeonhwa","phone call",3,"benda"],["문자","munja","text message",3,"benda"],["이메일","imeil","email",3,"benda"],["인터넷","inteonet","internet",3,"benda"],["휴대폰","hyudaepon","cellphone",3,"benda"],
["스마트폰","seumateupon","smartphone",3,"benda"],["태블릿","taebeullit","tablet",3,"benda"],["노트북","noteubuk","laptop",3,"benda"],["화면","hwamyeon","screen",3,"benda"],["비밀번호","bimilbeonho","password",3,"benda"],
["아이디","aidi","ID/username",3,"benda"],["다운로드","daunrodeu","download",3,"benda"],["업로드","eomnodeu","upload",3,"benda"],["검색하다","geomsaekhada","to search",3,"kerja"],["클릭하다","keullikhada","to click",3,"kerja"],
["저장하다","jeojanghada","to save",3,"kerja"],["삭제하다","sakjehada","to delete",3,"kerja"],["접속하다","jeopsokhada","to connect/log in",3,"kerja"],["인터넷쇼핑","inteonet syoping","online shopping",3,"benda"],["와이파이","waipai","wifi",3,"benda"],
["배터리","baeteori","battery",3,"benda"],["충전하다","chungjeonhada","to charge",3,"kerja"],["애플리케이션","aepeullikeisyeon","application",3,"benda"],["소셜미디어","syosyeol midieo","social media",3,"benda"],["홈페이지","hompeiji","homepage",3,"benda"],

// === LEVEL 4 ===
// Society & culture
["사회","sahoe","society",4,"benda"],["문화","munhwa","culture",4,"benda"],["전통","jeontong","tradition",4,"benda"],["풍습","pungseup","custom",4,"benda"],["세대","sedae","generation",4,"benda"],
["예절","yejeol","etiquette",4,"benda"],["가치관","gachigwan","values",4,"benda"],["정체성","jeongcheseong","identity",4,"benda"],["다문화","damunhwa","multiculturalism",4,"benda"],["공동체","gongdongche","community",4,"benda"],
["시민","simin","citizen",4,"benda"],["계층","gyecheung","social class",4,"benda"],["평등","pyeongdeung","equality",4,"benda"],["차별","chabyeol","discrimination",4,"benda"],["다양성","dayangseong","diversity",4,"benda"],
["소수자","sosuja","minority",4,"benda"],["인권","ingwon","human rights",4,"benda"],["복지","bokji","welfare",4,"benda"],["봉사활동","bongsahwaldong","volunteer work",4,"benda"],["기부","gibu","donation",4,"benda"],
["예술","yesul","art",4,"benda"],["문학","munhak","literature",4,"benda"],["역사","yeoksa","history",4,"benda"],["유산","yusan","heritage",4,"benda"],["축제","chukje","festival",4,"benda"],
// Economy & business
["경제","gyeongje","economy",4,"benda"],["기업","gieop","corporation",4,"benda"],["산업","saneop","industry",4,"benda"],["무역","muyeok","trade",4,"benda"],["수출","suchul","export",4,"benda"],
["수입","suip","import",4,"benda"],["투자","tuja","investment",4,"benda"],["이익","iik","profit",4,"benda"],["손실","sonsil","loss",4,"benda"],["세금","segeum","tax",4,"benda"],
["물가","mulga","prices/cost of living",4,"benda"],["인플레이션","inpeulleisyeon","inflation",4,"benda"],["경쟁","gyeongjaeng","competition",4,"benda"],["소비자","sobija","consumer",4,"benda"],["생산","saengsan","production",4,"benda"],
["공급","gonggeup","supply",4,"benda"],["수요","suyo","demand",4,"benda"],["주식","jusik","stock",4,"benda"],["상업","sangeop","commerce",4,"benda"],["대출","daechul","loan",4,"benda"],
["이자","ija","interest (finance)",4,"benda"],["예산","yesan","budget",4,"benda"],["자원","jawon","resources",4,"benda"],["노동","nodong","labor",4,"benda"],["예금","yegeum","savings deposit",4,"benda"],
// Politics & law
["정치","jeongchi","politics",4,"benda"],["정부","jeongbu","government",4,"benda"],["대통령","daetongnyeong","president",4,"benda"],["국회","gukhoe","National Assembly",4,"benda"],["선거","seongeo","election",4,"benda"],
["투표","tupyo","vote",4,"benda"],["정책","jeongchaek","policy",4,"benda"],["법","beop","law",4,"benda"],["법률","beomnyul","legislation",4,"benda"],["권리","gwolli","right",4,"benda"],
["의무","uimu","duty",4,"benda"],["책임","chaegim","responsibility",4,"benda"],["규칙","gyuchik","rule",4,"benda"],["위반","wiban","violation",4,"benda"],["처벌","cheobeol","punishment",4,"benda"],
["재판","jaepan","trial",4,"benda"],["판사","pansa","judge",4,"pekerjaan"],["검사","geomsa","prosecutor",4,"pekerjaan"],["헌법","heonbeop","constitution",4,"benda"],["외교","oegyo","diplomacy",4,"benda"],
["국제","gukje","international",4,"benda"],["조약","joyak","treaty",4,"benda"],["협상","hyeopsang","negotiation",4,"benda"],["시위","siwi","protest",4,"benda"],["여론","yeoron","public opinion",4,"benda"],
// Environment
["환경","hwangyeong","environment",4,"benda"],["오염","oyeom","pollution",4,"benda"],["공해","gonghae","pollution (industrial)",4,"benda"],["지구온난화","jigu onnanhwa","global warming",4,"benda"],["기후변화","gihu byeonhwa","climate change",4,"benda"],
["재활용","jaehwallyong","recycling",4,"benda"],["쓰레기","sseuregi","trash",4,"benda"],["에너지","eneoji","energy",4,"benda"],["태양열","taeyangnyeol","solar energy",4,"benda"],["온실가스","onsilgaseu","greenhouse gas",4,"benda"],
["생태계","saengtaegye","ecosystem",4,"benda"],["멸종","myeoljong","extinction",4,"benda"],["보호하다","bohohada","to protect",4,"kerja"],["절약하다","jeoryakhada","to conserve/save",4,"kerja"],["미세먼지","misemeonji","fine dust",4,"benda"],
["대기오염","daegi oyeom","air pollution",4,"benda"],["수질오염","sujil oyeom","water pollution",4,"benda"],["친환경","chinhwangyeong","eco-friendly",4,"benda"],["지속가능성","jisokganeungseong","sustainability",4,"benda"],["탄소","tanso","carbon",4,"benda"],
["배출","baechul","emission",4,"benda"],["산림","sallim","forest (formal)",4,"benda"],["사막화","samakhwa","desertification",4,"benda"],["자연재해","jayeon jaehae","natural disaster",4,"benda"],["폐기물","pyegimul","waste material",4,"benda"],
// Media & internet
["언론","eollon","press/media",4,"benda"],["뉴스","nyuseu","news",4,"benda"],["기사","gisa","article",4,"benda"],["신문","sinmun","newspaper",4,"benda"],["방송","bangsong","broadcast",4,"benda"],
["방송국","bangsongguk","broadcasting station",4,"benda"],["채널","chaeneol","channel",4,"benda"],["광고","gwanggo","advertisement",4,"benda"],["홍보","hongbo","promotion/PR",4,"benda"],["여론조사","yeoronjosa","public opinion poll",4,"benda"],
["댓글","daetgeul","comment (online)",4,"benda"],["게시물","gesimul","post (online)",4,"benda"],["블로그","beullogeu","blog",4,"benda"],["영상","yeongsang","video",4,"benda"],["콘텐츠","kontencheu","content",4,"benda"],
["구독하다","gudokhada","to subscribe",4,"kerja"],["공유하다","gongyuhada","to share",4,"kerja"],["실시간","silsigan","real-time",4,"benda"],["가짜뉴스","gajja nyuseu","fake news",4,"benda"],["저작권","jeojakgwon","copyright",4,"benda"],
["개인정보","gaein jeongbo","personal information",4,"benda"],["사생활","sasaenghwal","privacy",4,"benda"],["익명","ingmyeong","anonymity",4,"benda"],["알고리즘","algorijeum","algorithm",4,"benda"],["댓글을 달다","daetgeureul dalda","to leave a comment",4,"kerja"],
// Education system
["교육","gyoyuk","education",4,"benda"],["초등학교","chodeunghakgyo","elementary school",4,"benda"],["중학교","junghakgyo","middle school",4,"benda"],["고등학교","godeunghakgyo","high school",4,"benda"],["대학교","daehakgyo","university",4,"benda"],
["대학원","daehagwon","graduate school",4,"benda"],["입시","ipsi","entrance exam",4,"benda"],["수능","suneung","CSAT exam",4,"benda"],["학점","hakjeom","academic credit",4,"benda"],["학위","hagwi","degree",4,"benda"],
["논문","nonmun","thesis",4,"benda"],["강의","gangui","lecture",4,"benda"],["커리큘럼","keorikyulleom","curriculum",4,"benda"],["교재","gyojae","textbook",4,"benda"],["교육과정","gyoyuk gwajeong","curriculum (formal)",4,"benda"],
["사교육","sagyoyuk","private education",4,"benda"],["공교육","gonggyoyuk","public education",4,"benda"],["유학","yuhak","studying abroad",4,"benda"],["장학생","janghaksaeng","scholarship student",4,"benda"],["학비","hakbi","tuition",4,"benda"],
["등록금","deungnokgeum","tuition fee",4,"benda"],["자퇴하다","jatoehada","to drop out",4,"kerja"],["편입하다","pyeonipada","to transfer (school)",4,"kerja"],["재수하다","jaesuhada","to retake an exam",4,"kerja"],["조기교육","jogi gyoyuk","early education",4,"benda"],
// Relationships & social issues
["관계","gwangye","relationship",4,"benda"],["우정","ujeong","friendship",4,"benda"],["사랑","sarang","love",4,"benda"],["연애","yeonae","dating",4,"benda"],["결혼","gyeolhon","marriage",4,"benda"],
["이혼","ihon","divorce",4,"benda"],["육아","yuga","childcare",4,"benda"],["저출산","jeochulsan","low birthrate",4,"benda"],["고령화","goryeonghwa","aging population",4,"benda"],["갈등","galdeung","conflict",4,"benda"],
["오해","ohae","misunderstanding",4,"benda"],["배려","baeryeo","consideration",4,"benda"],["신뢰","sinloe","trust",4,"benda"],["소통","sotong","communication",4,"benda"],["편견","pyeongyeon","prejudice",4,"benda"],
["성별","seongbyeol","gender",4,"benda"],["세대차이","sedae chai","generation gap",4,"benda"],["왕따","wangtta","ostracism/bullying",4,"benda"],["폭력","pongnyeok","violence",4,"benda"],["학대","hakdae","abuse",4,"benda"],
["이웃","iut","neighbor",4,"benda"],["공감","gonggam","empathy",4,"benda"],["존중","jonjung","respect",4,"benda"],["1인가구","il-in gagu","single-person household",4,"benda"],["양육","yangyuk","upbringing/parenting",4,"benda"],
// Science & research
["과학","gwahak","science",4,"benda"],["실험","silheom","experiment",4,"benda"],["이론","iron","theory",4,"benda"],["가설","gaseol","hypothesis",4,"benda"],["데이터","deiteo","data",4,"benda"],
["통계","tonggye","statistics",4,"benda"],["결과","gyeolgwa","result",4,"benda"],["원인","wonin","cause",4,"benda"],["영향","yeonghyang","influence",4,"benda"],["기술","gisul","technology",4,"benda"],
["발명품","balmyeongpum","invention",4,"benda"],["인공지능","inggong jineung","artificial intelligence",4,"benda"],["로봇","robot","robot",4,"benda"],["우주","uju","space/universe",4,"benda"],["지구","jigu","earth",4,"benda"],
["세포","sepo","cell (biology)",4,"benda"],["유전자","yujeonja","gene",4,"benda"],["진화","jinhwa","evolution",4,"benda"],["물질","muljil","matter/substance",4,"benda"],["화학","hwahak","chemistry",4,"benda"],
["물리학","mullihak","physics",4,"benda"],["생물학","saengmulhak","biology",4,"benda"],["실험실","silheomsil","laboratory",4,"benda"],["연구원","yeonguwon","researcher",4,"pekerjaan"],["논리적","nollijeok","logical",4,"benda"],
// Advanced adjectives/adverbs
["효과적이다","hyogwajeogida","effective",4,"sifat"],["구체적이다","guchejeogida","specific/concrete",4,"sifat"],["추상적이다","chusangjeogida","abstract",4,"sifat"],["긍정적이다","geungjeongjeogida","positive",4,"sifat"],["부정적이다","bujeongjeogida","negative",4,"sifat"],
["객관적이다","gaekgwanjeogida","objective",4,"sifat"],["주관적이다","jugwanjeogida","subjective",4,"sifat"],["상대적이다","sangdaejeogida","relative",4,"sifat"],["절대적이다","jeoldaejeogida","absolute",4,"sifat"],["필수적이다","pilsujeogida","essential",4,"sifat"],
["근본적이다","geunbonjeogida","fundamental",4,"sifat"],["지속적이다","jisokjeogida","continuous",4,"sifat"],["일시적이다","ilsijeogida","temporary",4,"sifat"],["상당히","sangdanghi","considerably",4,"lain"],["대체로","daecheiro","generally",4,"lain"],
["오히려","ohiryeo","rather/instead",4,"lain"],["반드시","bandeusi","certainly/without fail",4,"lain"],["결국","gyeolguk","eventually",4,"lain"],["특히","teukhi","especially",4,"lain"],["심지어","simjieo","even",4,"lain"],
["게다가","gedaga","moreover",4,"lain"],["따라서","ttaraseo","therefore",4,"lain"],["그러므로","geureomeuro","therefore (formal)",4,"lain"],["반면에","banmyeone","on the other hand",4,"lain"],["아무래도","amuraedo","no matter how you look at it",4,"lain"],
// Idiomatic/formal expressions
["그런데","geureonde","by the way/but",4,"lain"],["그러나","geureona","however",4,"lain"],["하지만","hajiman","but",4,"lain"],["그래서","geuraeseo","so",4,"lain"],["그리고","geurigo","and",4,"lain"],
["왜냐하면","waenyahamyeon","because",4,"lain"],["만약","manyak","if",4,"lain"],["아무리","amuri","no matter how",4,"lain"],["비록","birok","although",4,"lain"],["마치","machi","as if",4,"lain"],
["예를 들어","yereul deureo","for example",4,"lain"],["즉","jeuk","namely/that is",4,"lain"],["다시 말해","dasi malhae","in other words",4,"lain"],["결론적으로","gyeollonjeogeuro","in conclusion",4,"lain"],["요약하면","yoyakhamyeon","to summarize",4,"kerja"],
["사실은","sasireun","in fact",4,"lain"],["알고 보니","algo boni","it turns out",4,"lain"],["어쨌든","eojjaetdeun","anyway",4,"lain"],["아무튼","amuteun","anyway",4,"lain"],["하여튼","hayeoteun","anyway",4,"lain"],
["어차피","eochapi","anyway/inevitably",4,"lain"],["그나저나","geunajeona","by the way",4,"lain"],["한마디로","hanmadiro","in a word",4,"lain"],["다행히","dahaenghi","fortunately",4,"lain"],["안타깝게도","antakkapgedo","unfortunately",4,"lain"],
];

export const WORDS = RAW.map(([ko, rr, en, lv, cat], i) => ({ id: i, ko, rr, en, lv, cat }));
