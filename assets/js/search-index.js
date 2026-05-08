/* ========================================================================
   search-index.js — 사이트 전체 페이지 인덱스
   ------------------------------------------------------------------------
   각 항목 형식:
     { title, url, category, summary, keywords }

   - url 은 사이트 루트 기준 상대 경로 (예: "java/java-basics.html").
     실제 사용 시 search.js 가 현재 페이지 깊이에 맞는 prefix("" | "../")
     를 붙여 준다.
   - keywords 는 공백 구분 (한국어 + 영문). 검색 매칭에만 쓰이고
     화면에는 노출되지 않는다.
   ======================================================================== */
window.SEARCH_INDEX = [
  /* =================== 카테고리 인덱스 =================== */
  { title: "자료구조", url: "data-structure/index.html", category: "카테고리", summary: "배열·연결 리스트·트리·해시 등 데이터를 다루는 기본 구조", keywords: "data structure 자료구조" },
  { title: "알고리즘", url: "algorithm/index.html", category: "카테고리", summary: "정렬·탐색·DP·그리디 등 문제 해결 도구", keywords: "algorithm 알고리즘" },
  { title: "컴퓨터구조", url: "computer-architecture/index.html", category: "카테고리", summary: "CPU·캐시·가상 메모리·인터럽트", keywords: "computer architecture 컴퓨터구조" },
  { title: "운영체제", url: "operating-system/index.html", category: "카테고리", summary: "프로세스·스레드·스케줄링·동기화", keywords: "os operating system 운영체제" },
  { title: "네트워크", url: "network/index.html", category: "카테고리", summary: "OSI·TCP/IP·HTTP·DNS·CORS", keywords: "network 네트워크" },
  { title: "데이터베이스", url: "database/index.html", category: "카테고리", summary: "정규화·인덱스·트랜잭션·격리·락·MVCC", keywords: "database db 데이터베이스" },
  { title: "소프트웨어공학", url: "software-engineering/index.html", category: "카테고리", summary: "SDLC·OOP·SOLID·디자인 패턴·테스트·CI/CD", keywords: "software engineering 소프트웨어공학" },
  { title: "데이터통신", url: "data-communication/index.html", category: "카테고리", summary: "변조·다중화·오류 검출·매체 접근 제어", keywords: "data communication 데이터통신" },
  { title: "Java", url: "java/index.html", category: "카테고리", summary: "JVM·문법·컬렉션·제네릭·람다·Stream·멀티스레딩", keywords: "java jvm" },
  { title: "Web", url: "web/index.html", category: "카테고리", summary: "HTML·CSS·JavaScript·DOM·렌더링·HTTP API·웹 보안", keywords: "web html css javascript browser" },

  /* =================== 자료구조 =================== */
  { title: "배열(Array)", url: "data-structure/array.html", category: "자료구조", summary: "연속된 메모리, 인덱스 O(1), 캐시 친화적 자료의 기본", keywords: "array 배열 random access cache locality" },
  { title: "연결 리스트(Linked List)", url: "data-structure/linked-list.html", category: "자료구조", summary: "노드와 포인터로 이어진 구조 — 단/이중/원형", keywords: "linked list 연결 리스트 node pointer" },
  { title: "스택(Stack)", url: "data-structure/stack.html", category: "자료구조", summary: "LIFO 후입선출, 호출 스택과 식 평가", keywords: "stack 스택 lifo push pop" },
  { title: "큐(Queue)", url: "data-structure/queue.html", category: "자료구조", summary: "FIFO 선입선출, 원형 큐와 BFS의 토대", keywords: "queue 큐 fifo enqueue dequeue" },
  { title: "덱(Deque)", url: "data-structure/deque.html", category: "자료구조", summary: "양쪽 끝 모두 삽입·삭제, ArrayDeque", keywords: "deque 덱 double ended" },
  { title: "해시 테이블(Hash Table)", url: "data-structure/hash-table.html", category: "자료구조", summary: "해시 함수·충돌 해결·load factor·재해싱", keywords: "hash table 해시 테이블 chaining open addressing collision" },
  { title: "이진 트리(Binary Tree)", url: "data-structure/binary-tree.html", category: "자료구조", summary: "최대 두 자식, 순회(전/중/후/레벨)", keywords: "binary tree 이진 트리 traversal" },
  { title: "이진 탐색 트리(BST)", url: "data-structure/binary-search-tree.html", category: "자료구조", summary: "왼쪽<루트<오른쪽, 평균 O(log n)", keywords: "bst binary search tree 이진 탐색 트리" },
  { title: "힙(Heap) / 우선순위 큐", url: "data-structure/heap.html", category: "자료구조", summary: "완전 이진 트리, 부모-자식 우선순위 관계", keywords: "heap 힙 priority queue 우선순위 큐 max min" },
  { title: "AVL & Red-Black Tree", url: "data-structure/avl-rb-tree.html", category: "자료구조", summary: "자가 균형 BST, rotation, 색칠 규칙", keywords: "avl red black tree 균형 트리 rotation" },
  { title: "B-Tree & B+Tree", url: "data-structure/b-tree.html", category: "자료구조", summary: "디스크 친화적 다분기 트리, DB 인덱스의 토대", keywords: "btree b-tree b+tree disk index 인덱스" },
  { title: "트라이(Trie)", url: "data-structure/trie.html", category: "자료구조", summary: "문자열 prefix 트리, 자동완성·사전", keywords: "trie 트라이 prefix tree 문자열" },
  { title: "그래프(Graph)", url: "data-structure/graph.html", category: "자료구조", summary: "정점·간선, 인접 행렬 vs 리스트, 방향/가중치", keywords: "graph 그래프 vertex edge adjacency" },

  /* =================== 알고리즘 =================== */
  { title: "이진 탐색(Binary Search)", url: "algorithm/binary-search.html", category: "알고리즘", summary: "정렬된 배열에서 O(log n) 탐색, lower/upper bound", keywords: "binary search 이진 탐색 lower upper bound" },
  { title: "정렬 알고리즘 입문", url: "algorithm/sorting.html", category: "알고리즘", summary: "버블·삽입·선택·병합·퀵·힙 — 시각적 비교와 시간복잡도", keywords: "sort sorting 정렬 bubble insertion merge quick heap" },
  { title: "BFS / DFS", url: "algorithm/bfs-dfs.html", category: "알고리즘", summary: "그래프 탐색 두 축, 큐와 스택", keywords: "bfs dfs 너비 우선 깊이 우선 탐색 graph traversal" },
  { title: "다익스트라(Dijkstra)", url: "algorithm/dijkstra.html", category: "알고리즘", summary: "양의 가중치 단일 출발 최단 경로, 우선순위 큐 사용", keywords: "dijkstra 다익스트라 shortest path 최단 경로" },
  { title: "벨만-포드 / 플로이드-워셜", url: "algorithm/shortest-paths.html", category: "알고리즘", summary: "음의 가중치, 모든 쌍 최단 경로", keywords: "bellman ford floyd warshall shortest path 최단 경로" },
  { title: "유니온-파인드(Union-Find / DSU)", url: "algorithm/union-find.html", category: "알고리즘", summary: "분리 집합, 경로 압축·랭크 기반 합치기", keywords: "union find dsu disjoint set 유니온 파인드" },
  { title: "위상 정렬(Topological Sort)", url: "algorithm/topological-sort.html", category: "알고리즘", summary: "DAG의 선행 관계 정렬, Kahn / DFS", keywords: "topological sort 위상 정렬 dag" },
  { title: "최소 신장 트리(MST)", url: "algorithm/minimum-spanning-tree.html", category: "알고리즘", summary: "Kruskal·Prim, 모든 정점 연결 최소 비용", keywords: "mst minimum spanning tree kruskal prim 최소 신장 트리" },
  { title: "동적 계획법(DP)", url: "algorithm/dynamic-programming.html", category: "알고리즘", summary: "최적 부분구조 + 중복 부분문제, 메모이제이션 vs 타뷸레이션", keywords: "dp dynamic programming 동적 계획법 memoization tabulation" },
  { title: "그리디(Greedy)", url: "algorithm/greedy.html", category: "알고리즘", summary: "각 단계 최적 선택, 최적성 증명이 핵심", keywords: "greedy 그리디" },
  { title: "분할정복(Divide & Conquer)", url: "algorithm/divide-and-conquer.html", category: "알고리즘", summary: "쪼개고 풀고 합친다, master theorem", keywords: "divide conquer 분할정복 master theorem" },
  { title: "백트래킹(Backtracking)", url: "algorithm/backtracking.html", category: "알고리즘", summary: "DFS + 가지치기, N-Queens·순열·조합", keywords: "backtracking 백트래킹 pruning n-queens" },

  /* =================== 컴퓨터구조 =================== */
  { title: "CPU 구성 요소", url: "computer-architecture/cpu-components.html", category: "컴퓨터구조", summary: "ALU·레지스터·CU·버스의 역할", keywords: "cpu alu register control unit 레지스터" },
  { title: "명령어 사이클", url: "computer-architecture/instruction-cycle.html", category: "컴퓨터구조", summary: "Fetch → Decode → Execute → Writeback", keywords: "instruction cycle fetch decode execute 명령어 사이클" },
  { title: "캐시 메모리", url: "computer-architecture/cache-memory.html", category: "컴퓨터구조", summary: "L1/L2/L3, 지역성, 매핑 방식", keywords: "cache memory 캐시 l1 l2 l3 locality" },
  { title: "파이프라이닝", url: "computer-architecture/pipelining.html", category: "컴퓨터구조", summary: "명령어 단계 중첩, hazard와 forwarding", keywords: "pipelining 파이프라이닝 hazard forwarding" },
  { title: "가상 메모리 / MMU", url: "computer-architecture/virtual-memory.html", category: "컴퓨터구조", summary: "가상 주소 → 물리 주소 변환, 페이지 테이블", keywords: "virtual memory mmu 가상 메모리 page table" },
  { title: "인터럽트", url: "computer-architecture/interrupt.html", category: "컴퓨터구조", summary: "비동기 신호, ISR, 우선순위", keywords: "interrupt 인터럽트 isr" },
  { title: "TLB(Translation Lookaside Buffer)", url: "computer-architecture/tlb.html", category: "컴퓨터구조", summary: "주소 변환 캐시, hit/miss 비용", keywords: "tlb translation lookaside buffer 주소 변환" },
  { title: "CPU 분기 예측", url: "computer-architecture/branch-prediction.html", category: "컴퓨터구조", summary: "투기 실행, 정적·동적 예측, BTB", keywords: "branch prediction 분기 예측 speculative" },
  { title: "캐시 일관성(MESI)", url: "computer-architecture/cache-coherence.html", category: "컴퓨터구조", summary: "Modified·Exclusive·Shared·Invalid 상태 머신", keywords: "cache coherence mesi 캐시 일관성" },

  /* =================== 운영체제 =================== */
  { title: "프로세스 vs 스레드", url: "operating-system/process-thread.html", category: "운영체제", summary: "독립 메모리 vs 공유 메모리, 컨텍스트 비용 차이", keywords: "process thread 프로세스 스레드" },
  { title: "컨텍스트 스위칭", url: "operating-system/context-switching.html", category: "운영체제", summary: "PCB 저장·복원, TLB flush, 캐시 영향", keywords: "context switching 컨텍스트 스위칭 pcb" },
  { title: "CPU 스케줄링", url: "operating-system/cpu-scheduling.html", category: "운영체제", summary: "FCFS·SJF·RR·MLFQ, 처리량 vs 응답성", keywords: "cpu scheduling 스케줄링 fcfs sjf round robin" },
  { title: "동기화 — 뮤텍스/세마포어/모니터", url: "operating-system/synchronization.html", category: "운영체제", summary: "임계 영역, 락의 종류, 조건 변수", keywords: "synchronization mutex semaphore monitor 동기화" },
  { title: "데드락", url: "operating-system/deadlock.html", category: "운영체제", summary: "4가지 조건, 예방·회피·탐지·회복", keywords: "deadlock 데드락 banker's algorithm" },
  { title: "페이징 / 세그먼테이션", url: "operating-system/paging-segmentation.html", category: "운영체제", summary: "메모리 분할 방식, 페이지 폴트, 보호", keywords: "paging segmentation 페이징 세그먼테이션 page fault" },
  { title: "파일 시스템", url: "operating-system/file-system.html", category: "운영체제", summary: "아이노드, 디렉터리, 저널링", keywords: "file system 파일 시스템 inode journaling" },
  { title: "페이지 교체 알고리즘", url: "operating-system/page-replacement.html", category: "운영체제", summary: "FIFO·LRU·Clock·LFU의 trade-off", keywords: "page replacement 페이지 교체 fifo lru clock lfu" },

  /* =================== 네트워크 =================== */
  { title: "OSI 7계층 / TCP/IP 4계층", url: "network/osi-tcp-ip.html", category: "네트워크", summary: "계층 모델 비교, 캡슐화 흐름", keywords: "osi tcp ip layer 계층" },
  { title: "TCP vs UDP", url: "network/tcp-udp.html", category: "네트워크", summary: "신뢰성 vs 속도, 헤더와 사용 사례", keywords: "tcp udp 전송 계층" },
  { title: "3-way / 4-way handshake", url: "network/handshake.html", category: "네트워크", summary: "TCP 연결 수립과 종료, FIN과 RST", keywords: "tcp handshake 3-way 4-way syn fin" },
  { title: "TCP 흐름 제어", url: "network/tcp-flow-control.html", category: "네트워크", summary: "슬라이딩 윈도우, rwnd, Zero Window, Nagle", keywords: "tcp flow control 흐름 제어 sliding window rwnd nagle delayed ack" },
  { title: "TCP 혼잡 제어", url: "network/tcp-congestion-control.html", category: "네트워크", summary: "Slow Start, AIMD, Reno/Cubic/BBR, ECN", keywords: "tcp congestion control 혼잡 제어 slow start aimd reno cubic bbr" },
  { title: "HTTP / HTTPS", url: "network/http-https.html", category: "네트워크", summary: "메시지 구조, 메서드, 상태 코드, TLS 개요", keywords: "http https tls 메서드 상태 코드" },
  { title: "HTTP/1.1 vs 2 vs 3", url: "network/http-versions.html", category: "네트워크", summary: "멀티플렉싱, HOL blocking, QUIC", keywords: "http2 http3 quic multiplexing hol" },
  { title: "DNS", url: "network/dns.html", category: "네트워크", summary: "도메인 계층, 재귀/반복 질의, 레코드, DoH", keywords: "dns domain name resolver record ttl" },
  { title: "CORS", url: "network/cors.html", category: "네트워크", summary: "Same-Origin, simple vs preflight, credentials", keywords: "cors same origin preflight access control" },
  { title: "쿠키 / 세션 / JWT", url: "network/cookies-session-jwt.html", category: "네트워크", summary: "상태 유지 비교, SameSite·HttpOnly, refresh token", keywords: "cookie session jwt samesite httponly secure refresh token" },
  { title: "IP 주소 / 서브넷 / CIDR", url: "network/ip-cidr.html", category: "네트워크", summary: "IPv4/IPv6, 서브넷 계산, 사설 IP", keywords: "ip ipv4 ipv6 subnet cidr 서브넷" },
  { title: "라우팅 / NAT", url: "network/routing-nat.html", category: "네트워크", summary: "라우팅 테이블, NAT 종류, 포트포워딩", keywords: "routing nat 라우팅 port forwarding" },

  /* =================== 데이터베이스 =================== */
  { title: "정규화", url: "database/normalization.html", category: "데이터베이스", summary: "함수 종속, 1NF~BCNF, 비정규화의 정당화", keywords: "normalization 정규화 1nf 2nf 3nf bcnf 함수 종속" },
  { title: "인덱스(Index)", url: "database/indexing.html", category: "데이터베이스", summary: "B+Tree, 클러스터·논클러스터·커버링·복합", keywords: "index indexing 인덱스 b+tree clustering covering composite" },
  { title: "트랜잭션과 ACID", url: "database/transaction-acid.html", category: "데이터베이스", summary: "원자성·일관성·격리·지속성, WAL, 언두 로그", keywords: "transaction acid 트랜잭션 wal undo" },
  { title: "격리 수준", url: "database/isolation-level.html", category: "데이터베이스", summary: "4단계와 5가지 현상, MySQL/PG 기본값", keywords: "isolation level 격리 수준 read uncommitted committed repeatable serializable phantom" },
  { title: "락(Lock)", url: "database/lock.html", category: "데이터베이스", summary: "공유/배타, 인텐션, 갭/넥스트키, 데드락", keywords: "lock 락 shared exclusive intention gap next-key deadlock" },
  { title: "MVCC", url: "database/mvcc.html", category: "데이터베이스", summary: "버전 관리 동시성, 가시성, VACUUM", keywords: "mvcc multiversion 가시성 vacuum undo" },
  { title: "조인 알고리즘", url: "database/join-algorithm.html", category: "데이터베이스", summary: "Nested Loop / Hash / Sort-Merge", keywords: "join algorithm nested loop hash sort merge 조인" },
  { title: "실행 계획(EXPLAIN)", url: "database/execution-plan.html", category: "데이터베이스", summary: "cost·rows·actual time, 진단 체크리스트", keywords: "execution plan explain 실행 계획 cost rows" },

  /* =================== 소프트웨어공학 =================== */
  { title: "SDLC", url: "software-engineering/sdlc.html", category: "소프트웨어공학", summary: "워터폴·V·애자일·스크럼·DevOps", keywords: "sdlc waterfall agile scrum devops" },
  { title: "OOP", url: "software-engineering/oop.html", category: "소프트웨어공학", summary: "캡슐화·상속·다형성·추상화, is-a vs has-a", keywords: "oop encapsulation inheritance polymorphism abstraction 객체지향" },
  { title: "SOLID 원칙", url: "software-engineering/solid.html", category: "소프트웨어공학", summary: "SRP·OCP·LSP·ISP·DIP, 위반 vs 준수 코드", keywords: "solid srp ocp lsp isp dip" },
  { title: "디자인 패턴 입문", url: "software-engineering/design-patterns.html", category: "소프트웨어공학", summary: "GoF 23개, 생성·구조·행위", keywords: "design pattern gof creational structural behavioral 디자인 패턴" },
  { title: "테스트 전략", url: "software-engineering/testing-strategy.html", category: "소프트웨어공학", summary: "피라미드, 단위·통합·E2E, 테스트 더블, TDD", keywords: "testing strategy pyramid unit integration e2e tdd mock stub" },
  { title: "CI / CD 파이프라인", url: "software-engineering/ci-cd.html", category: "소프트웨어공학", summary: "Blue-Green / Canary / Rolling, Feature Flag", keywords: "ci cd pipeline blue green canary rolling feature flag" },

  /* =================== 데이터통신 =================== */
  { title: "변조(Modulation)", url: "data-communication/modulation.html", category: "데이터통신", summary: "AM/FM/PM, ASK/FSK/PSK/QAM, 성상도", keywords: "modulation 변조 am fm pm ask fsk psk qam constellation" },
  { title: "다중화(Multiplexing)", url: "data-communication/multiplexing.html", category: "데이터통신", summary: "TDM·FDM·WDM·CDM 비교", keywords: "multiplexing 다중화 tdm fdm wdm cdm" },
  { title: "오류 검출/정정", url: "data-communication/error-detection-correction.html", category: "데이터통신", summary: "패리티·체크섬·CRC·해밍, ARQ vs FEC", keywords: "error detection correction parity checksum crc hamming arq fec" },
  { title: "매체 접근 제어", url: "data-communication/medium-access-control.html", category: "데이터통신", summary: "CSMA/CD, CSMA/CA, hidden node, RTS/CTS", keywords: "mac csma cd ca hidden node rts cts" },
  { title: "신호 인코딩", url: "data-communication/signal-encoding.html", category: "데이터통신", summary: "NRZ·Manchester·4B/5B·8B/10B", keywords: "signal encoding nrz manchester 4b5b 8b10b" },

  /* =================== Java =================== */
  { title: "Java 언어 기본", url: "java/java-basics.html", category: "Java", summary: "JVM·JDK·JRE, 컴파일/실행, 클래스 로딩, JIT", keywords: "java jvm jdk jre javac bytecode jit class loading" },
  { title: "객체지향과 Java 문법", url: "java/oop-syntax.html", category: "Java", summary: "class·interface·abstract·record·enum, 접근 제어자", keywords: "java oop class interface abstract record enum sealed override overload" },
  { title: "예외 처리", url: "java/exception-handling.html", category: "Java", summary: "checked vs unchecked, try-with-resources, 스택 트레이스", keywords: "java exception checked unchecked try-with-resources autocloseable stack trace" },
  { title: "컬렉션 프레임워크", url: "java/collections.html", category: "Java", summary: "List·Set·Map·Queue, HashMap 충돌·resize·treeify", keywords: "java collections arraylist linkedlist hashmap treemap linkedhashmap concurrenthashmap iterator fail-fast" },
  { title: "제네릭(Generic)", url: "java/generics.html", category: "Java", summary: "타입 소거, bounded wildcard, PECS, raw type 위험", keywords: "java generics type erasure wildcard pecs raw type bounded" },
  { title: "람다와 Stream API", url: "java/lambda-stream.html", category: "Java", summary: "함수형 인터페이스, lazy evaluation, 병렬 스트림", keywords: "java lambda stream functional interface method reference optional parallel collectors" },
  { title: "JVM 메모리 구조", url: "java/jvm-memory.html", category: "Java", summary: "heap·stack·metaspace, generational GC, 참조 4단계", keywords: "java jvm memory heap stack metaspace gc young old generational reference soft weak phantom oom" },
  { title: "멀티스레딩 기초", url: "java/multithreading.html", category: "Java", summary: "Thread·ExecutorService, synchronized·volatile, CompletableFuture", keywords: "java thread runnable executor synchronized volatile atomic completablefuture threadlocal interrupt deadlock race" },

  /* =================== Web =================== */
  { title: "Web 동작 큰 그림", url: "web/how-web-works.html", category: "Web", summary: "주소 입력부터 화면까지: DNS/TCP/TLS/HTTP/HTML/CSS/JS", keywords: "web 동작 dns tcp tls http html css javascript browser url" },
  { title: "HTML 핵심", url: "web/html-basics.html", category: "Web", summary: "시맨틱 태그, form, 접근성, SEO 기초", keywords: "html semantic form accessibility a11y seo aria" },
  { title: "CSS 핵심", url: "web/css-basics.html", category: "Web", summary: "박스 모델, cascade·specificity, flex·grid", keywords: "css box model cascade specificity flexbox grid responsive media query" },
  { title: "JavaScript 핵심", url: "web/javascript-basics.html", category: "Web", summary: "실행 컨텍스트, scope, closure, prototype, module", keywords: "javascript js execution context scope closure prototype module hoisting this" },
  { title: "DOM과 이벤트", url: "web/dom-events.html", category: "Web", summary: "DOM tree, 버블링·캡처링, delegation", keywords: "dom event bubbling capturing delegation listener" },
  { title: "브라우저 렌더링 파이프라인", url: "web/rendering-pipeline.html", category: "Web", summary: "HTML parsing, CSSOM, render tree, layout, paint, composite", keywords: "browser rendering pipeline parse cssom render tree layout reflow paint composite repaint" },
  { title: "HTTP와 Web API", url: "web/http-web-api.html", category: "Web", summary: "fetch, REST, JSON, CORS, 쿠키·스토리지", keywords: "http web api fetch rest json cors cookie localstorage sessionstorage" },
  { title: "웹 보안 기본", url: "web/web-security.html", category: "Web", summary: "XSS, CSRF, CSP, SameSite·HttpOnly·Secure", keywords: "web security xss csrf cors csp samesite httponly secure clickjacking" }
];
