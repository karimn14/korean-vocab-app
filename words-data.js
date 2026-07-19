// 1000 kata kosakata bahasa Korea paling umum untuk TOPIK pemula-menengah
// format tuple: [Hangeul, Romanisasi, Arti Inggris, Level(1-4)]
const RAW = [
// === LEVEL 1 ===
// Pronouns & question words
["저","jeo","I (humble)",1],["나","na","I",1],["너","neo","you",1],["당신","dangsin","you (polite)",1],["우리","uri","we",1],
["그","geu","he",1],["그녀","geunyeo","she",1],["그들","geudeul","they",1],["이것","igeot","this",1],["저것","jeogeot","that (far)",1],
["그것","geugeot","that",1],["여기","yeogi","here",1],["저기","jeogi","over there",1],["거기","geogi","there",1],["무엇","mueot","what",1],
["누구","nugu","who",1],["언제","eonje","when",1],["어디","eodi","where",1],["왜","wae","why",1],["어떻게","eotteoke","how",1],
["얼마나","eolmana","how much",1],["몇","myeot","how many",1],["어느","eoneu","which",1],["무슨","museun","what kind of",1],["다","da","all",1],
// Numbers - native Korean
["하나","hana","one",1],["둘","dul","two",1],["셋","set","three",1],["넷","net","four",1],["다섯","daseot","five",1],
["여섯","yeoseot","six",1],["일곱","ilgop","seven",1],["여덟","yeodeol","eight",1],["아홉","ahop","nine",1],["열","yeol","ten",1],
["스물","seumul","twenty",1],["서른","seoreun","thirty",1],["마흔","maheun","forty",1],["쉰","swin","fifty",1],["예순","yesun","sixty",1],
["일흔","ilheun","seventy",1],["여든","yeodeun","eighty",1],["아흔","aheun","ninety",1],["한 개","han gae","one item",1],["두 개","du gae","two items",1],
["세 개","se gae","three items",1],["첫째","cheotjjae","first",1],["둘째","duljjae","second",1],["셋째","setjjae","third",1],["마지막","majimak","last",1],
// Numbers - sino-Korean & counters
["일","il","one (sino)",1],["이","i","two (sino)",1],["삼","sam","three (sino)",1],["사","sa","four (sino)",1],["오","o","five (sino)",1],
["육","yuk","six (sino)",1],["칠","chil","seven (sino)",1],["팔","pal","eight (sino)",1],["구","gu","nine (sino)",1],["십","sip","ten (sino)",1],
["백","baek","hundred",1],["천","cheon","thousand",1],["만","man","ten thousand",1],["원","won","won (currency)",1],["년","nyeon","year (counter)",1],
["월","wol","month (counter)",1],["층","cheung","floor",1],["번","beon","number/times",1],["개","gae","item (counter)",1],["명","myeong","people (counter)",1],
["살","sal","age (counter)",1],["시","si","o'clock",1],["분","bun","minute",1],["초","cho","second",1],["퍼센트","peosenteu","percent",1],
// Days/months/time basic
["월요일","woryoil","Monday",1],["화요일","hwayoil","Tuesday",1],["수요일","suyoil","Wednesday",1],["목요일","mogyoil","Thursday",1],["금요일","geumyoil","Friday",1],
["토요일","toyoil","Saturday",1],["일요일","iryoil","Sunday",1],["오늘","oneul","today",1],["내일","naeil","tomorrow",1],["어제","eoje","yesterday",1],
["모레","more","day after tomorrow",1],["그저께","geujeokke","day before yesterday",1],["지금","jigeum","now",1],["아침","achim","morning",1],["점심","jeomsim","noon/lunch",1],
["저녁","jeonyeok","evening",1],["밤","bam","night",1],["새벽","saebyeok","dawn",1],["주말","jumal","weekend",1],["평일","pyeongil","weekday",1],
["매일","maeil","every day",1],["요즘","yojeum","these days",1],["나중에","najunge","later",1],["아까","akka","a while ago",1],["다음","daeum","next",1],
// Family members
["아버지","abeoji","father",1],["어머니","eomeoni","mother",1],["아빠","appa","dad",1],["엄마","eomma","mom",1],["형","hyeong","older brother (of male)",1],
["오빠","oppa","older brother (of female)",1],["누나","nuna","older sister (of male)",1],["언니","eonni","older sister (of female)",1],["동생","dongsaeng","younger sibling",1],["남동생","namdongsaeng","younger brother",1],
["여동생","yeodongsaeng","younger sister",1],["아들","adeul","son",1],["딸","ttal","daughter",1],["남편","nampyeon","husband",1],["아내","anae","wife",1],
["할아버지","harabeoji","grandfather",1],["할머니","halmeoni","grandmother",1],["삼촌","samchon","uncle",1],["이모","imo","aunt (maternal)",1],["고모","gomo","aunt (paternal)",1],
["사촌","sachon","cousin",1],["부모님","bumonim","parents",1],["자녀","janyeo","children (offspring)",1],["아기","agi","baby",1],["가족","gajok","family",1],
// Colors & shapes
["빨간색","ppalgansaek","red",1],["파란색","paransaek","blue",1],["노란색","noransaek","yellow",1],["초록색","choroksaek","green",1],["검은색","geomeunsaek","black",1],
["흰색","huinsaek","white",1],["주황색","juhwangsaek","orange",1],["보라색","borasaek","purple",1],["분홍색","bunhongsaek","pink",1],["갈색","galsaek","brown",1],
["회색","hoesaek","gray",1],["색깔","saekkkal","color",1],["동그라미","donggeurami","circle",1],["네모","nemo","square",1],["세모","semo","triangle",1],
["별","byeol","star (shape)",1],["하트","hateu","heart (shape)",1],["크기","keugi","size",1],["모양","moyang","shape",1],["줄무늬","julmunui","stripe",1],
["점","jeom","dot",1],["밝다","bakda","bright",1],["어둡다","eodupda","dark",1],["무늬","munui","pattern",1],["진하다","jinhada","dark/deep (color)",1],
// Body parts
["머리","meori","head",1],["얼굴","eolgul","face",1],["눈","nun","eye",1],["코","ko","nose",1],["입","ip","mouth",1],
["귀","gwi","ear",1],["이","i","tooth",1],["혀","hyeo","tongue",1],["목","mok","neck",1],["어깨","eokkae","shoulder",1],
["팔","pal","arm",1],["손","son","hand",1],["손가락","songarak","finger",1],["다리","dari","leg",1],["발","bal","foot",1],
["발가락","balgarak","toe",1],["배","bae","stomach",1],["등","deung","back",1],["허리","heori","waist",1],["무릎","mureup","knee",1],
["가슴","gaseum","chest",1],["머리카락","meorikarak","hair",1],["피부","pibu","skin",1],["목소리","moksori","voice",1],["심장","simjang","heart (organ)",1],
// Food & drink basics
["밥","bap","rice/meal",1],["물","mul","water",1],["빵","ppang","bread",1],["우유","uyu","milk",1],["차","cha","tea",1],
["커피","keopi","coffee",1],["주스","juseu","juice",1],["고기","gogi","meat",1],["생선","saengseon","fish (food)",1],["야채","yachae","vegetable",1],
["과일","gwail","fruit",1],["계란","gyeran","egg",1],["김치","gimchi","kimchi",1],["국","guk","soup",1],["라면","ramyeon","ramen",1],
["국수","guksu","noodles",1],["떡","tteok","rice cake",1],["설탕","seoltang","sugar",1],["소금","sogeum","salt",1],["간장","ganjang","soy sauce",1],
["맛","mat","taste",1],["아침밥","achimbap","breakfast",1],["점심밥","jeomsimbap","lunch",1],["저녁밥","jeonyeokbap","dinner",1],["간식","gansik","snack",1],
// Household objects & school supplies
["집","jip","house",1],["방","bang","room",1],["문","mun","door",1],["창문","changmun","window",1],["침대","chimdae","bed",1],
["의자","uija","chair",1],["책상","chaeksang","desk",1],["책","chaek","book",1],["공책","gongchaek","notebook",1],["연필","yeonpil","pencil",1],
["볼펜","bolpen","pen",1],["지우개","jiugae","eraser",1],["가방","gabang","bag",1],["종이","jongi","paper",1],["시계","sigye","clock",1],
["컵","keop","cup",1],["접시","jeopsi","plate",1],["숟가락","sutgarak","spoon",1],["젓가락","jeotgarak","chopsticks",1],["칼","kal","knife",1],
["옷장","otjang","closet",1],["냉장고","naengjanggo","refrigerator",1],["텔레비전","tellebijeon","television",1],["전화기","jeonhwagi","telephone",1],["컴퓨터","keompyuteo","computer",1],
// Basic verbs
["가다","gada","to go",1],["오다","oda","to come",1],["먹다","meokda","to eat",1],["마시다","masida","to drink",1],["보다","boda","to see/watch",1],
["듣다","deutda","to listen",1],["하다","hada","to do",1],["있다","itda","to have/exist",1],["없다","eopda","to not have",1],["주다","juda","to give",1],
["받다","batda","to receive",1],["사다","sada","to buy",1],["팔다","palda","to sell",1],["살다","salda","to live",1],["자다","jada","to sleep",1],
["일어나다","ireonada","to wake up",1],["씻다","ssitda","to wash",1],["공부하다","gongbuhada","to study",1],["가르치다","gareuchida","to teach",1],["읽다","ikda","to read",1],
["쓰다","sseuda","to write",1],["말하다","malhada","to speak",1],["알다","alda","to know",1],["좋아하다","joahada","to like",1],["원하다","wonhada","to want",1],

// === LEVEL 2 ===
// Basic adjectives
["크다","keuda","big",2],["작다","jakda","small",2],["좋다","jota","good",2],["나쁘다","nappeuda","bad",2],["예쁘다","yeppeuda","pretty",2],
["못생기다","motsaenggida","ugly",2],["새롭다","saeropda","new",2],["오래되다","oraedoeda","old (thing)",2],["많다","manta","many",2],["적다","jeokda","few",2],
["길다","gilda","long",2],["짧다","jjalda","short",2],["높다","nopda","high/tall",2],["낮다","natda","low",2],["덥다","deopda","hot (weather)",2],
["춥다","chupda","cold (weather)",2],["쉽다","swipda","easy",2],["어렵다","eoryeopda","difficult",2],["빠르다","ppareuda","fast",2],["느리다","neurida","slow",2],
["행복하다","haengbokhada","happy",2],["슬프다","seulpeuda","sad",2],["무겁다","mugeopda","heavy",2],["가볍다","gabyeopda","light (weight)",2],["조용하다","joyonghada","quiet",2],
// Greetings & common expressions
["안녕하세요","annyeonghaseyo","hello",2],["안녕히 가세요","annyeonghi gaseyo","goodbye (to one leaving)",2],["안녕히 계세요","annyeonghi gyeseyo","goodbye (to one staying)",2],["감사합니다","gamsahamnida","thank you",2],["죄송합니다","joesonghamnida","I'm sorry (formal)",2],
["미안해요","mianhaeyo","sorry",2],["실례합니다","sillyehamnida","excuse me",2],["괜찮아요","gwaenchanayo","it's okay",2],["반갑습니다","bangapseumnida","nice to meet you",2],["축하합니다","chukhahamnida","congratulations",2],
["환영합니다","hwanyeonghamnida","welcome",2],["잘 지내요","jal jinaeyo","doing well",2],["다시 만나요","dasi mannayo","see you again",2],["조심하세요","josimhaseyo","be careful",2],["화이팅","hwaiting","fighting (good luck)",2],
["부탁합니다","butakhamnida","please (request)",2],["네","ne","yes",2],["아니요","aniyo","no",2],["맞아요","majayo","that's right",2],["물론이죠","mullonijyo","of course",2],
["천만에요","cheonmaneyo","you're welcome",2],["여보세요","yeoboseyo","hello (on phone)",2],["처음 뵙겠습니다","cheoeum boepgetseumnida","nice to meet you (formal)",2],["수고하세요","sugohaseyo","good work",2],["알겠습니다","algetseumnida","understood",2],
// Clothing & accessories
["옷","ot","clothes",2],["셔츠","syeocheu","shirt",2],["바지","baji","pants",2],["치마","chima","skirt",2],["원피스","wonpiseu","dress",2],
["재킷","jaekit","jacket",2],["코트","koteu","coat",2],["신발","sinbal","shoes",2],["양말","yangmal","socks",2],["모자","moja","hat",2],
["장갑","janggap","gloves",2],["목도리","mokdori","scarf",2],["안경","angyeong","glasses",2],["손목시계","sonmoksigye","wristwatch",2],["반지","banji","ring",2],
["목걸이","mokgeori","necklace",2],["귀걸이","gwigeori","earrings",2],["지갑","jigap","wallet",2],["벨트","belteu","belt",2],["넥타이","nektai","necktie",2],
["청바지","cheongbaji","jeans",2],["잠옷","jamot","pajamas",2],["속옷","sogot","underwear",2],["우산","usan","umbrella",2],["티셔츠","tisyeocheu","t-shirt",2],
// Places in town
["학교","hakgyo","school",2],["병원","byeongwon","hospital",2],["은행","eunhaeng","bank",2],["우체국","ucheguk","post office",2],["경찰서","gyeongchalseo","police station",2],
["시장","sijang","market",2],["편의점","pyeonuijeom","convenience store",2],["백화점","baekhwajeom","department store",2],["식당","sikdang","restaurant",2],["카페","kape","cafe",2],
["공원","gongwon","park",2],["도서관","doseogwan","library",2],["박물관","bangmulgwan","museum",2],["극장","geukjang","theater",2],["공항","gonghang","airport",2],
["역","yeok","station",2],["정류장","jeongnyujang","bus stop",2],["교회","gyohoe","church",2],["절","jeol","temple",2],["회사","hoesa","company",2],
["대사관","daesagwan","embassy",2],["미용실","miyongsil","hair salon",2],["약국","yakguk","pharmacy",2],["주유소","juyuso","gas station",2],["체육관","cheyukgwan","gym",2],
// Transportation
["자동차","jadongcha","car",2],["버스","beoseu","bus",2],["지하철","jihacheol","subway",2],["기차","gicha","train",2],["비행기","bihaenggi","airplane",2],
["배","bae","ship",2],["자전거","jajeongeo","bicycle",2],["오토바이","otobai","motorcycle",2],["택시","taeksi","taxi",2],["표","pyo","ticket",2],
["요금","yogeum","fare",2],["길","gil","road",2],["다리","dari","bridge",2],["신호등","sinhodeung","traffic light",2],["횡단보도","hoengdanbodo","crosswalk",2],
["주차장","juchajang","parking lot",2],["터미널","teomineol","terminal",2],["고속도로","gosokdoro","highway",2],["교통","gyotong","traffic",2],["운전하다","unjeonhada","to drive",2],
["타다","tada","to ride",2],["내리다","naerida","to get off",2],["갈아타다","garatada","to transfer (transport)",2],["편도","pyeondo","one-way",2],["왕복","wangbok","round-trip",2],
// Weather & seasons
["날씨","nalssi","weather",2],["봄","bom","spring",2],["여름","yeoreum","summer",2],["가을","gaeul","fall",2],["겨울","gyeoul","winter",2],
["비","bi","rain",2],["눈","nun","snow",2],["바람","baram","wind",2],["구름","gureum","cloud",2],["하늘","haneul","sky",2],
["해","hae","sun",2],["태양","taeyang","sun (formal)",2],["안개","angae","fog",2],["태풍","taepung","typhoon",2],["천둥","cheondung","thunder",2],
["번개","beongae","lightning",2],["온도","ondo","temperature",2],["습도","seupdo","humidity",2],["맑다","makda","clear (weather)",2],["흐리다","heurida","cloudy",2],
["시원하다","siwonhada","cool/refreshing",2],["따뜻하다","ttatteuthada","warm",2],["무덥다","mudeopda","muggy",2],["계절","gyejeol","season",2],["장마","jangma","monsoon",2],
// Hobbies & leisure
["취미","chwimi","hobby",2],["운동","undong","exercise",2],["축구","chukgu","soccer",2],["야구","yagu","baseball",2],["농구","nonggu","basketball",2],
["수영","suyeong","swimming",2],["등산","deungsan","hiking",2],["여행","yeohaeng","travel",2],["독서","dokseo","reading",2],["음악","eumak","music",2],
["노래","norae","song",2],["춤","chum","dance",2],["그림","geurim","painting/drawing",2],["사진","sajin","photo",2],["영화","yeonghwa","movie",2],
["드라마","deurama","drama",2],["게임","geim","game",2],["요리","yori","cooking",2],["낚시","nakssi","fishing",2],["캠핑","kaemping","camping",2],
["쇼핑","syoping","shopping",2],["악기","akgi","musical instrument",2],["피아노","piano","piano",2],["기타","gita","guitar",2],["콘서트","konseoteu","concert",2],
// More verbs - daily activities
["청소하다","cheongsohada","to clean",2],["빨래하다","ppallaehada","to do laundry",2],["요리하다","yorihada","to cook",2],["운동하다","undonghada","to exercise",2],["산책하다","sanchaekhada","to take a walk",2],
["쉬다","swida","to rest",2],["놀다","nolda","to play",2],["웃다","utda","to laugh",2],["울다","ulda","to cry",2],["만나다","mannada","to meet",2],
["기다리다","gidarida","to wait",2],["찾다","chatda","to find/look for",2],["잃어버리다","ireobeorida","to lose (something)",2],["잊어버리다","ijeobeorida","to forget",2],["기억하다","gieokhada","to remember",2],
["도와주다","dowajuda","to help",2],["준비하다","junbihada","to prepare",2],["시작하다","sijakhada","to start",2],["끝나다","kkeutnada","to end/finish",2],["계속하다","gyesokhada","to continue",2],
["바꾸다","bakkuda","to change",2],["고치다","gochida","to fix",2],["열다","yeolda","to open",2],["닫다","datda","to close",2],["켜다","kyeoda","to turn on",2],
// Shopping & money
["돈","don","money",2],["가격","gagyeok","price",2],["값","gap","cost/price",2],["싸다","ssada","cheap",2],["비싸다","bissada","expensive",2],
["세일","seil","sale",2],["할인","halin","discount",2],["영수증","yeongsujeung","receipt",2],["신용카드","sinyongkadeu","credit card",2],["현금","hyeongeum","cash",2],
["지폐","jipye","bill/banknote",2],["동전","dongjeon","coin",2],["계산하다","gyesanhada","to pay/calculate",2],["환불하다","hwanbulhada","to refund",2],["교환하다","gyohwanhada","to exchange",2],
["포장하다","pojanghada","to wrap/pack",2],["배달","baedal","delivery",2],["주문하다","jumunhada","to order",2],["손님","sonnim","customer",2],["점원","jeomwon","store clerk",2],
["계산대","gyesandae","checkout counter",2],["영업시간","yeongeopsigan","business hours",2],["무료","muryo","free (no cost)",2],["유료","yuryo","paid",2],["저렴하다","jeoryeomhada","inexpensive",2],
// School & study
["학생","haksaeng","student",2],["선생님","seonsaengnim","teacher",2],["교수","gyosu","professor",2],["수업","sueop","class",2],["숙제","sukje","homework",2],
["시험","siheom","exam",2],["성적","seongjeok","grade",2],["졸업","joreop","graduation",2],["입학","iphak","enrollment",2],["전공","jeongong","major (study)",2],
["교실","gyosil","classroom",2],["칠판","chilpan","blackboard",2],["문제","munje","problem/question",2],["정답","jeongdap","correct answer",2],["질문","jilmun","question",2],
["대답","daedap","answer",2],["발표","balpyo","presentation",2],["노트","noteu","notes",2],["단어","daneo","word/vocabulary",2],["문법","munbeop","grammar",2],
["발음","bareum","pronunciation",2],["연습","yeonseup","practice",2],["복습","bokseup","review",2],["예습","yeseup","preview (study)",2],["장학금","janghakgeum","scholarship",2],

// === LEVEL 3 ===
// Work & jobs/occupations
["회사원","hoesawon","office worker",3],["직업","jigeop","occupation",3],["사장","sajang","boss/CEO",3],["직원","jigwon","employee",3],["동료","dongnyo","colleague",3],
["회의","hoeui","meeting",3],["프로젝트","peurojekteu","project",3],["계약","gyeyak","contract",3],["월급","wolgeup","monthly salary",3],["면접","myeonjeop","interview",3],
["이력서","iryeokseo","resume",3],["부서","buseo","department",3],["사무실","samusil","office",3],["출근하다","chulgeunhada","to go to work",3],["퇴근하다","toegeunhada","to leave work",3],
["야근하다","yageunhada","to work overtime",3],["승진하다","seungjinhada","to be promoted",3],["은퇴하다","euntoehada","to retire",3],["경력","gyeongnyeok","career/experience",3],["자격증","jagyeokjeung","certificate/license",3],
["의사","uisa","doctor",3],["간호사","ganhosa","nurse",3],["변호사","byeonhosa","lawyer",3],["요리사","yorisa","chef",3],["경찰관","gyeongchalgwan","police officer",3],
// Health & body advanced
["건강","geongang","health",3],["아프다","apeuda","to be sick/hurt",3],["병","byeong","disease",3],["감기","gamgi","cold (illness)",3],["열","yeol2","fever",3],
["두통","dutong","headache",3],["배탈","baetal","stomachache",3],["기침","gichim","cough",3],["상처","sangcheo","wound",3],["약","yak","medicine",3],
["처방전","cheobangjeon","prescription",3],["치료","chiryo","treatment",3],["수술","susul","surgery",3],["진찰","jinchal","medical examination",3],["예방","yebang","prevention",3],
["백신","baeksin","vaccine",3],["다치다","dachida","to get hurt",3],["낫다","natda2","to recover",3],["회복하다","hoebokhada","to recover",3],["스트레스","seuteureseu","stress",3],
["피곤하다","pigonhada","tired",3],["알레르기","allereugi","allergy",3],["체온","cheon2","body temperature",3],["운동선수","undongseonsu","athlete",3],["건강검진","geongang geomjin","health checkup",3],
// Emotions & feelings
["기쁘다","gippeuda","glad",3],["화나다","hwanada","to be angry",3],["놀라다","nollada","to be surprised",3],["무섭다","museopda","scared",3],["긴장하다","ginjanghada","nervous",3],
["신나다","sinnada","excited",3],["지루하다","jiruhada","bored",3],["편하다","pyeonhada","comfortable",3],["불편하다","bulpyeonhada","uncomfortable",3],["답답하다","dapdaphada","frustrated/stuffy",3],
["부럽다","bureopda","envious",3],["자랑스럽다","jarangseureopda","proud",3],["걱정하다","geokjeonghada","to worry",3],["그립다","geuripda","to miss/long for",3],["외롭다","oeropda","lonely",3],
["실망하다","silmanghada","disappointed",3],["만족하다","manjokhada","satisfied",3],["후회하다","huhoehada","to regret",3],["감동하다","gamdonghada","touched/moved",3],["짜증나다","jjajeungnada","annoyed",3],
["부끄럽다","bukkeureopda","embarrassed",3],["편안하다","pyeonanhada","at ease",3],["든든하다","deundeunhada","reassured",3],["아쉽다","aswipda","regrettable",3],["반갑다","bangapda","glad (to see someone)",3],
// Abstract adjectives
["중요하다","jungyohada","important",3],["필요하다","piryohada","necessary",3],["가능하다","ganeunghada","possible",3],["불가능하다","bulganeunghada","impossible",3],["간단하다","gandanhada","simple",3],
["복잡하다","bokjaphada","complicated",3],["정확하다","jeonghwakhada","accurate",3],["확실하다","hwaksilhada","certain",3],["특별하다","teukbyeolhada","special",3],["일반적이다","ilbanjeogida","general",3],
["적당하다","jeokdanghada","appropriate",3],["충분하다","chungbunhada","sufficient",3],["부족하다","bujokhada","insufficient",3],["정직하다","jeongjikhada","honest",3],["성실하다","seongsilhada","diligent",3],
["게으르다","geeureuda","lazy",3],["친절하다","chinjeolhada","kind",3],["예의바르다","yeuibareuda","polite",3],["조심스럽다","josimseureopda","cautious",3],["자유롭다","jayuropda","free",3],
["안전하다","anjeonhada","safe",3],["위험하다","wiheomhada","dangerous",3],["유용하다","yuyonghada","useful",3],["유명하다","yumyeonghada","famous",3],["독특하다","dokteukhada","unique",3],
// Nature & animals
["동물","dongmul","animal",3],["개","gae2","dog",3],["고양이","goyangi","cat",3],["새","sae","bird",3],["물고기","mulgogi","fish (animal)",3],
["소","so","cow",3],["돼지","dwaeji","pig",3],["말","mal","horse",3],["닭","dak","chicken",3],["호랑이","horangi","tiger",3],
["사자","saja","lion",3],["코끼리","kokkiri","elephant",3],["토끼","tokki","rabbit",3],["곰","gom","bear",3],["뱀","baem","snake",3],
["나무","namu","tree",3],["꽃","kkot","flower",3],["풀","pul","grass",3],["잎","ip2","leaf",3],["숲","sup","forest",3],
["산","san","mountain",3],["바다","bada","sea",3],["강","gang","river",3],["호수","hosu","lake",3],["섬","seom","island",3],
// Travel & directions
["여행하다","yeohaenghada","to travel",3],["관광","gwangwang","sightseeing",3],["관광지","gwangwangji","tourist spot",3],["지도","jido","map",3],["방향","banghyang","direction",3],
["동쪽","dongjjok","east",3],["서쪽","seojjok","west",3],["남쪽","namjjok","south",3],["북쪽","bukjjok","north",3],["오른쪽","oreunjjok","right side",3],
["왼쪽","oenjjok","left side",3],["앞","ap","front",3],["뒤","dwi","back (behind)",3],["옆","yeop","side",3],["위","wi","above",3],
["아래","arae","below",3],["안","an","inside",3],["밖","bakk","outside",3],["근처","geuncheo","nearby",3],["거리","geori","distance/street",3],
["목적지","mokjeokji","destination",3],["예약하다","yeyakhada","to reserve",3],["짐","jim","luggage",3],["여권","yeogwon","passport",3],["국경","gukgyeong","border",3],
// Advanced verbs
["발전하다","baljeonhada","to develop",3],["성장하다","seongjanghada","to grow",3],["성공하다","seonggonghada","to succeed",3],["실패하다","silpaehada","to fail",3],["노력하다","noryeokhada","to make effort",3],
["도전하다","dojeonhada","to challenge",3],["극복하다","geukbokhada","to overcome",3],["해결하다","haegyeolhada","to solve",3],["발견하다","balgyeonhada","to discover",3],["발명하다","balmyeonghada","to invent",3],
["연구하다","yeonguhada","to research",3],["조사하다","josahada","to investigate",3],["분석하다","bunseokhada","to analyze",3],["판단하다","pandanhada","to judge",3],["결정하다","gyeoljeonghada","to decide",3],
["선택하다","seontaekhada","to choose",3],["제안하다","jeanhada","to suggest",3],["주장하다","juganghada","to assert/claim",3],["설명하다","seolmyeonghada","to explain",3],["표현하다","pyohyeonhada","to express",3],
["강조하다","gangjohada","to emphasize",3],["비교하다","bigyohada","to compare",3],["참고하다","chamgohada","to reference",3],["포함하다","pohamhada","to include",3],["제외하다","jeoehada","to exclude",3],
// House & living
["아파트","apateu","apartment",3],["주택","jutaek","house (formal)",3],["원룸","wollum","studio apartment",3],["월세","wolse","monthly rent",3],["전세","jeonse","key-money lease",3],
["보증금","bojeunggeum","deposit",3],["이사하다","isahada","to move house",3],["가구","gagu","furniture",3],["인테리어","interieo","interior design",3],["베란다","beranda","balcony",3],
["부엌","bueok","kitchen",3],["거실","geosil","living room",3],["화장실","hwajangsil","bathroom",3],["욕실","yoksil","bathroom (bath)",3],["마당","madang","yard",3],
["지붕","jibung","roof",3],["계단","gyedan","stairs",3],["엘리베이터","ellibeiteo","elevator",3],["경비실","gyeongbisil","security office",3],["관리비","gwallibi","maintenance fee",3],
["세탁기","setakgi","washing machine",3],["에어컨","eeokeon","air conditioner",3],["난방","nanbang","heating",3],["청소기","cheongsogi","vacuum cleaner",3],["전등","jeondeung","light/lamp",3],
// Time expressions advanced
["동안","dongan","during/for",3],["사이","sai","between",3],["순간","sungan","moment",3],["기간","gigan","period",3],["시기","sigi","timing/period",3],
["과거","gwageo","past",3],["현재","hyeonjae","present",3],["미래","mirae","future",3],["예전","yejeon","formerly",3],["최근","choegeun","recently",3],
["당분간","dangbugan","for the time being",3],["마침내","machimnae","finally",3],["드디어","deudieo","at last",3],["갑자기","gapjagi","suddenly",3],["우연히","uyeonhi","by chance",3],
["자주","jaju","often",3],["가끔","gakkeum","sometimes",3],["거의","geoui","almost",3],["전혀","jeonhyeo","not at all",3],["아직","ajik","yet/still",3],
["벌써","beolsseo","already",3],["이미","imi","already",3],["계속","gyesok","continuously",3],["잠깐","jamkkan","for a moment",3],["오랫동안","oraetdongan","for a long time",3],
// Communication & technology basic
["전화","jeonhwa","phone call",3],["문자","munja","text message",3],["이메일","imeil","email",3],["인터넷","inteonet","internet",3],["휴대폰","hyudaepon","cellphone",3],
["스마트폰","seumateupon","smartphone",3],["태블릿","taebeullit","tablet",3],["노트북","noteubuk","laptop",3],["화면","hwamyeon","screen",3],["비밀번호","bimilbeonho","password",3],
["아이디","aidi","ID/username",3],["다운로드","daunrodeu","download",3],["업로드","eomnodeu","upload",3],["검색하다","geomsaekhada","to search",3],["클릭하다","keullikhada","to click",3],
["저장하다","jeojanghada","to save",3],["삭제하다","sakjehada","to delete",3],["접속하다","jeopsokhada","to connect/log in",3],["인터넷쇼핑","inteonet syoping","online shopping",3],["와이파이","waipai","wifi",3],
["배터리","baeteori","battery",3],["충전하다","chungjeonhada","to charge",3],["애플리케이션","aepeullikeisyeon","application",3],["소셜미디어","syosyeol midieo","social media",3],["홈페이지","hompeiji","homepage",3],

// === LEVEL 4 ===
// Society & culture
["사회","sahoe","society",4],["문화","munhwa","culture",4],["전통","jeontong","tradition",4],["풍습","pungseup","custom",4],["세대","sedae","generation",4],
["예절","yejeol","etiquette",4],["가치관","gachigwan","values",4],["정체성","jeongcheseong","identity",4],["다문화","damunhwa","multiculturalism",4],["공동체","gongdongche","community",4],
["시민","simin","citizen",4],["계층","gyecheung","social class",4],["평등","pyeongdeung","equality",4],["차별","chabyeol","discrimination",4],["다양성","dayangseong","diversity",4],
["소수자","sosuja","minority",4],["인권","ingwon","human rights",4],["복지","bokji","welfare",4],["봉사활동","bongsahwaldong","volunteer work",4],["기부","gibu","donation",4],
["예술","yesul","art",4],["문학","munhak","literature",4],["역사","yeoksa","history",4],["유산","yusan","heritage",4],["축제","chukje","festival",4],
// Economy & business
["경제","gyeongje","economy",4],["기업","gieop","corporation",4],["산업","saneop","industry",4],["무역","muyeok","trade",4],["수출","suchul","export",4],
["수입","suip","import",4],["투자","tuja","investment",4],["이익","iik","profit",4],["손실","sonsil","loss",4],["세금","segeum","tax",4],
["물가","mulga","prices/cost of living",4],["인플레이션","inpeulleisyeon","inflation",4],["경쟁","gyeongjaeng","competition",4],["소비자","sobija","consumer",4],["생산","saengsan","production",4],
["공급","gonggeup","supply",4],["수요","suyo","demand",4],["주식","jusik","stock",4],["상업","sangeop","commerce",4],["대출","daechul","loan",4],
["이자","ija","interest (finance)",4],["예산","yesan","budget",4],["자원","jawon","resources",4],["노동","nodong","labor",4],["예금","yegeum","savings deposit",4],
// Politics & law
["정치","jeongchi","politics",4],["정부","jeongbu","government",4],["대통령","daetongnyeong","president",4],["국회","gukhoe","National Assembly",4],["선거","seongeo","election",4],
["투표","tupyo","vote",4],["정책","jeongchaek","policy",4],["법","beop","law",4],["법률","beomnyul","legislation",4],["권리","gwolli","right",4],
["의무","uimu","duty",4],["책임","chaegim","responsibility",4],["규칙","gyuchik","rule",4],["위반","wiban","violation",4],["처벌","cheobeol","punishment",4],
["재판","jaepan","trial",4],["판사","pansa","judge",4],["검사","geomsa","prosecutor",4],["헌법","heonbeop","constitution",4],["외교","oegyo","diplomacy",4],
["국제","gukje","international",4],["조약","joyak","treaty",4],["협상","hyeopsang","negotiation",4],["시위","siwi","protest",4],["여론","yeoron","public opinion",4],
// Environment
["환경","hwangyeong","environment",4],["오염","oyeom","pollution",4],["공해","gonghae","pollution (industrial)",4],["지구온난화","jigu onnanhwa","global warming",4],["기후변화","gihu byeonhwa","climate change",4],
["재활용","jaehwallyong","recycling",4],["쓰레기","sseuregi","trash",4],["에너지","eneoji","energy",4],["태양열","taeyangnyeol","solar energy",4],["온실가스","onsilgaseu","greenhouse gas",4],
["생태계","saengtaegye","ecosystem",4],["멸종","myeoljong","extinction",4],["보호하다","bohohada","to protect",4],["절약하다","jeoryakhada","to conserve/save",4],["미세먼지","misemeonji","fine dust",4],
["대기오염","daegi oyeom","air pollution",4],["수질오염","sujil oyeom","water pollution",4],["친환경","chinhwangyeong","eco-friendly",4],["지속가능성","jisokganeungseong","sustainability",4],["탄소","tanso","carbon",4],
["배출","baechul","emission",4],["산림","sallim","forest (formal)",4],["사막화","samakhwa","desertification",4],["자연재해","jayeon jaehae","natural disaster",4],["폐기물","pyegimul","waste material",4],
// Media & internet
["언론","eollon","press/media",4],["뉴스","nyuseu","news",4],["기사","gisa","article",4],["신문","sinmun","newspaper",4],["방송","bangsong","broadcast",4],
["방송국","bangsongguk","broadcasting station",4],["채널","chaeneol","channel",4],["광고","gwanggo","advertisement",4],["홍보","hongbo","promotion/PR",4],["여론조사","yeoronjosa","public opinion poll",4],
["댓글","daetgeul","comment (online)",4],["게시물","gesimul","post (online)",4],["블로그","beullogeu","blog",4],["영상","yeongsang","video",4],["콘텐츠","kontencheu","content",4],
["구독하다","gudokhada","to subscribe",4],["공유하다","gongyuhada","to share",4],["실시간","silsigan","real-time",4],["가짜뉴스","gajja nyuseu","fake news",4],["저작권","jeojakgwon","copyright",4],
["개인정보","gaein jeongbo","personal information",4],["사생활","sasaenghwal","privacy",4],["익명","ingmyeong","anonymity",4],["알고리즘","algorijeum","algorithm",4],["댓글을 달다","daetgeureul dalda","to leave a comment",4],
// Education system
["교육","gyoyuk","education",4],["초등학교","chodeunghakgyo","elementary school",4],["중학교","junghakgyo","middle school",4],["고등학교","godeunghakgyo","high school",4],["대학교","daehakgyo","university",4],
["대학원","daehagwon","graduate school",4],["입시","ipsi","entrance exam",4],["수능","suneung","CSAT exam",4],["학점","hakjeom","academic credit",4],["학위","hagwi","degree",4],
["논문","nonmun","thesis",4],["강의","gangui","lecture",4],["커리큘럼","keorikyulleom","curriculum",4],["교재","gyojae","textbook",4],["교육과정","gyoyuk gwajeong","curriculum (formal)",4],
["사교육","sagyoyuk","private education",4],["공교육","gonggyoyuk","public education",4],["유학","yuhak","studying abroad",4],["장학생","janghaksaeng","scholarship student",4],["학비","hakbi","tuition",4],
["등록금","deungnokgeum","tuition fee",4],["자퇴하다","jatoehada","to drop out",4],["편입하다","pyeonipada","to transfer (school)",4],["재수하다","jaesuhada","to retake an exam",4],["조기교육","jogi gyoyuk","early education",4],
// Relationships & social issues
["관계","gwangye","relationship",4],["우정","ujeong","friendship",4],["사랑","sarang","love",4],["연애","yeonae","dating",4],["결혼","gyeolhon","marriage",4],
["이혼","ihon","divorce",4],["육아","yuga","childcare",4],["저출산","jeochulsan","low birthrate",4],["고령화","goryeonghwa","aging population",4],["갈등","galdeung","conflict",4],
["오해","ohae","misunderstanding",4],["배려","baeryeo","consideration",4],["신뢰","sinloe","trust",4],["소통","sotong","communication",4],["편견","pyeongyeon","prejudice",4],
["성별","seongbyeol","gender",4],["세대차이","sedae chai","generation gap",4],["왕따","wangtta","ostracism/bullying",4],["폭력","pongnyeok","violence",4],["학대","hakdae","abuse",4],
["이웃","iut","neighbor",4],["공감","gonggam","empathy",4],["존중","jonjung","respect",4],["1인가구","il-in gagu","single-person household",4],["양육","yangyuk","upbringing/parenting",4],
// Science & research
["과학","gwahak","science",4],["실험","silheom","experiment",4],["이론","iron","theory",4],["가설","gaseol","hypothesis",4],["데이터","deiteo","data",4],
["통계","tonggye","statistics",4],["결과","gyeolgwa","result",4],["원인","wonin","cause",4],["영향","yeonghyang","influence",4],["기술","gisul","technology",4],
["발명품","balmyeongpum","invention",4],["인공지능","inggong jineung","artificial intelligence",4],["로봇","robot","robot",4],["우주","uju","space/universe",4],["지구","jigu","earth",4],
["세포","sepo","cell (biology)",4],["유전자","yujeonja","gene",4],["진화","jinhwa","evolution",4],["물질","muljil","matter/substance",4],["화학","hwahak","chemistry",4],
["물리학","mullihak","physics",4],["생물학","saengmulhak","biology",4],["실험실","silheomsil","laboratory",4],["연구원","yeonguwon","researcher",4],["논리적","nollijeok","logical",4],
// Advanced adjectives/adverbs
["효과적이다","hyogwajeogida","effective",4],["구체적이다","guchejeogida","specific/concrete",4],["추상적이다","chusangjeogida","abstract",4],["긍정적이다","geungjeongjeogida","positive",4],["부정적이다","bujeongjeogida","negative",4],
["객관적이다","gaekgwanjeogida","objective",4],["주관적이다","jugwanjeogida","subjective",4],["상대적이다","sangdaejeogida","relative",4],["절대적이다","jeoldaejeogida","absolute",4],["필수적이다","pilsujeogida","essential",4],
["근본적이다","geunbonjeogida","fundamental",4],["지속적이다","jisokjeogida","continuous",4],["일시적이다","ilsijeogida","temporary",4],["상당히","sangdanghi","considerably",4],["대체로","daecheiro","generally",4],
["오히려","ohiryeo","rather/instead",4],["반드시","bandeusi","certainly/without fail",4],["결국","gyeolguk","eventually",4],["특히","teukhi","especially",4],["심지어","simjieo","even",4],
["게다가","gedaga","moreover",4],["따라서","ttaraseo","therefore",4],["그러므로","geureomeuro","therefore (formal)",4],["반면에","banmyeone","on the other hand",4],["아무래도","amuraedo","no matter how you look at it",4],
// Idiomatic/formal expressions
["그런데","geureonde","by the way/but",4],["그러나","geureona","however",4],["하지만","hajiman","but",4],["그래서","geuraeseo","so",4],["그리고","geurigo","and",4],
["왜냐하면","waenyahamyeon","because",4],["만약","manyak","if",4],["아무리","amuri","no matter how",4],["비록","birok","although",4],["마치","machi","as if",4],
["예를 들어","yereul deureo","for example",4],["즉","jeuk","namely/that is",4],["다시 말해","dasi malhae","in other words",4],["결론적으로","gyeollonjeogeuro","in conclusion",4],["요약하면","yoyakhamyeon","to summarize",4],
["사실은","sasireun","in fact",4],["알고 보니","algo boni","it turns out",4],["어쨌든","eojjaetdeun","anyway",4],["아무튼","amuteun","anyway",4],["하여튼","hayeoteun","anyway",4],
["어차피","eochapi","anyway/inevitably",4],["그나저나","geunajeona","by the way",4],["한마디로","hanmadiro","in a word",4],["다행히","dahaenghi","fortunately",4],["안타깝게도","antakkapgedo","unfortunately",4],
];

export const WORDS = RAW.map(([ko, rr, en, lv], i) => ({ id: i, ko, rr, en, lv }));
