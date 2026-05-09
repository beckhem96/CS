# 작성 대기 / 추가 아이디어 목록

새 개념 페이지를 만들 때 이 목록을 참고합니다. 작성 완료된 항목은 줄 긋고 두지 말고 그냥 지우거나 "✅ 완료" 표시.

> **작성 원칙**: CLAUDE.md의 "개념 깊이 가이드"를 따라 **깊이 우선**으로 작성합니다.
> 분량을 줄이려고 메커니즘을 생략하지 말 것. 하위 메커니즘이 크면 별도 페이지로 분리합니다.

> **카테고리 구조**: 모든 카테고리는 다음 두 그룹으로 나눕니다.
> - **🧩 핵심 페이지** — 처음 배우거나 면접 직전에 한 번 훑기 좋은 우선순위 개념
> - **🔬 심화 / 상세** — 핵심 페이지에서 분리한 깊은 메커니즘. 핵심 페이지에서 한 문단 + 링크로 안내
>
> 카테고리 인덱스 페이지(`{category}/index.html`)에도 이 두 그룹이 시각적으로 구분되어야 합니다.

---

## 🔴 누락 핵심 개념 보강 라운드 (다음 라운드 — 우선순위 최상)

기존 카테고리에서 "있어야 하는데 단독 페이지로 빠진" 핵심 개념들. 각 카테고리 인덱스에는 이미 `작성 예정`으로 추가됨.
페이지 작성은 다음 라운드에서 진행 — 작성 시 `CLAUDE.md`의 깊이 가이드를 따른다.

### 운영체제 ✅ 보강 완료
- [x] ~~**PCB / TCB**~~ → ✅ `operating-system/pcb-tcb.html`
- [x] ~~**프로세스 메모리 레이아웃**~~ → ✅ `operating-system/memory-layout.html`
- [x] ~~**시스템 콜 / 유저 vs 커널 모드**~~ → ✅ `operating-system/system-call.html`
- [x] ~~**IPC (프로세스 간 통신)**~~ → ✅ `operating-system/ipc.html`

### 데이터베이스 ✅ 보강 완료
- [x] ~~**SQL 기본 (DDL / DML / DCL / TCL)**~~ → ✅ `database/sql-basics.html`
- [x] ~~**ER 모델링과 DB 설계**~~ → ✅ `database/er-modeling.html`
- [x] ~~**복제 (Replication)**~~ → ✅ `database/replication.html`

### 네트워크 ✅ 보강 완료
- [x] ~~**HTTP 메서드와 상태 코드**~~ → ✅ `network/http-methods-status.html`
- [x] ~~**이더넷 / MAC / ARP**~~ → ✅ `network/ethernet-arp.html`

### 컴퓨터구조
- [ ] **DMA / I/O 시스템 / 버스** (`computer-architecture/dma-io.html`) — Programmed I/O vs Interrupt-driven vs DMA, 메모리 버스/시스템 버스/PCIe, MMIO와 포트 I/O

### 소프트웨어공학
- [ ] **클린 코드 / 리팩터링 / 코드 리뷰** (`software-engineering/clean-code.html`) — 의도가 드러나는 이름, 작은 함수, 코드 스멜, 안전한 리팩터링 절차, 효과적 코드 리뷰
- [ ] **모놀리식 vs MSA / 아키텍처 스타일** (`software-engineering/architecture-styles.html`) — 단일 배포 vs 분산, 레이어드/헥사고날/이벤트 드리븐, 분리 기준과 trade-off

### 알고리즘 ✅ 보강 완료
- [x] ~~**비트 조작 / 비트마스킹**~~ → ✅ `algorithm/bit-manipulation.html`

---

## 🔴 깊이 점검 / 보강 라운드 (우선순위 높음)

깊이 가이드 도입 이전에 작성되어 핵심 메커니즘이 빠진 페이지들. 별도 페이지 분리 또는 본 페이지 보강.

- [x] ~~TCP 흐름 제어 분리~~ → ✅ `network/tcp-flow-control.html`
- [x] ~~TCP 혼잡 제어 분리~~ → ✅ `network/tcp-congestion-control.html`
- [ ] **TCP vs UDP** (`network/tcp-udp.html`) — 흐름/혼잡 제어가 분리됐으니, 본 페이지의 "신뢰성 메커니즘"은 짧은 안내 + 새 심화 페이지로 링크하도록 다이어트. 비교·선택 기준 중심으로 재정렬
- [ ] **3-way / 4-way handshake** (`network/handshake.html`) — TCP 상태 머신 전체 다이어그램, ISN 생성 알고리즘, 동시 종료 케이스 추가 (또는 별도 페이지 "TCP 상태 머신"으로 분리)
- [ ] **해시 테이블** — 일관 해싱 / 부하율 / 재해싱 / 동시성(ConcurrentHashMap 세그먼트) 보강 또는 별도 심화 페이지로 분리
- [ ] **캐시 메모리** — 캐시 매핑(직접/세트 어소시에이티브/완전 어소시에이티브), 라인 크기 trade-off, write-through vs write-back 보강
- [ ] **정렬 알고리즘 입문** — 6개를 한 페이지로 다뤄 깊이가 얕음. 퀵·병합·힙은 단독 페이지로 분리 권장
- [ ] **파일 시스템** — ext4 / XFS / Btrfs / ZFS 차이, FUSE, CoW 스냅샷 보강
- [ ] **배열** — 다차원 배열 메모리 배치(row-major vs column-major) SVG 추가
- [ ] **연결 리스트** — 이중 / 원형 연결 리스트 SVG 추가

---

## 자료구조 ✅ 카테고리 핵심 완성

### 🧩 핵심 페이지 — 작성 완료
- ✅ 배열 / 연결 리스트 / 스택 / 큐 / 덱
- ✅ 해시 테이블
- ✅ 이진 트리 / BST / 힙
- ✅ AVL & 레드-블랙 트리 / B-Tree & B+Tree / 트라이
- ✅ 그래프

### 🔬 심화 / 상세 — 작성 예정
- [ ] **다차원 배열과 메모리 레이아웃** — row-major vs column-major, cache locality 영향
- [ ] **이중 / 원형 연결 리스트 단독** — 단방향과의 차이, 활용 사례(LRU 캐시 등)
- [ ] **일관 해싱(Consistent Hashing)** — 가상 노드, 분산 캐시·샤딩 적용
- [ ] **동시성 자료구조** — ConcurrentHashMap 세그먼트, lock-free queue, CAS 기반 자료구조
- [ ] **스킵 리스트(Skip List)** — Redis sorted set 내부 구조
- [ ] **블룸 필터(Bloom Filter)** — 확률적 멤버십, 변형(Counting/Cuckoo)
- [ ] **LSM-Tree** — 쓰기 최적화, SSTable, 컴팩션 (LevelDB/RocksDB 기반)

---

## 알고리즘 ✅ 카테고리 핵심 완성

### 🧩 핵심 페이지 — 작성 완료
- ✅ 카테고리 페이지 (`algorithm/index.html`)
- ✅ 이진 탐색(Binary Search)
- ✅ 정렬 알고리즘 입문 (6가지 비교 + 삽입/병합/퀵 시각화)
- ✅ BFS / DFS
- ✅ 다익스트라(Dijkstra)
- ✅ 벨만-포드 / 플로이드-워셜
- ✅ 유니온-파인드(Union-Find / DSU)
- ✅ 위상 정렬(Topological Sort)
- ✅ 최소 신장 트리(MST)
- ✅ 동적 계획법(DP)
- ✅ 그리디(Greedy)
- ✅ 분할정복(Divide & Conquer)
- ✅ 백트래킹(Backtracking)

### 🔬 심화 / 상세 — 작성 예정
- [ ] **퀵 정렬 단독** — 피벗 선택, 파티션 방식(Lomuto/Hoare), 3-way partition, introsort
- [ ] **병합 정렬 단독** — 외부 병합(디스크 정렬), TimSort 변형
- [ ] **힙 정렬 단독** — 힙 구성 단계별 시각화 (자료구조 힙에서 옮겨오기)
- [ ] **비비교 정렬** — 계수 / 기수 / 버킷 정렬
- [ ] **문자열 알고리즘** — KMP, Rabin-Karp, Z 알고리즘, 접미사 배열
- [ ] **세그먼트 트리 / 펜윅 트리(BIT)** — 구간 합·최솟값 쿼리, lazy propagation
- [ ] **네트워크 플로우** — 포드-풀커슨, 에드몬드-카프, 디닉
- [ ] **LCA / 희소 테이블** — 트리에서 두 노드의 최소 공통 조상

---

## 컴퓨터구조 ✅ 카테고리 핵심 완성

### 🧩 핵심 페이지 — 작성 완료
- ✅ 카테고리 페이지 (`computer-architecture/index.html`)
- ✅ CPU 구성 요소
- ✅ 명령어 사이클
- ✅ 캐시 메모리
- ✅ 파이프라이닝
- ✅ 가상 메모리 / MMU
- ✅ 인터럽트

### 🔬 심화 / 상세 — 작성 완료
- ✅ TLB(Translation Lookaside Buffer)
- ✅ CPU 분기 예측
- ✅ 캐시 일관성(MESI)

### 🔬 심화 / 상세 — 작성 예정
- [ ] **메모리 일관성 모델** — happens-before, acquire/release, sequential consistency, Java Memory Model
- [ ] **NUMA 구조** — 소켓 간 메모리 접근 비용, 서버 성능 영향, 노드 어피니티
- [ ] **명령어 수준 병렬성(ILP)** — Out-of-Order 실행, 슈퍼스칼라, 명령어 재배치
- [ ] **SIMD / 벡터 명령어** — SSE/AVX, 자동 벡터화, 데이터 병렬

---

## 운영체제 ✅ 카테고리 핵심 완성

### 🧩 핵심 페이지 — 작성 완료
- ✅ 카테고리 페이지 (`operating-system/index.html`)
- ✅ 프로세스 vs 스레드
- ✅ 컨텍스트 스위칭
- ✅ CPU 스케줄링
- ✅ 동기화 — 뮤텍스 / 세마포어 / 모니터
- ✅ 데드락 — 4가지 조건, 4가지 대처 전략
- ✅ 페이징 / 세그먼테이션
- ✅ 파일 시스템 — 아이노드, 디렉터리, 저널링

### 🔬 심화 / 상세 — 작성 완료
- ✅ 페이지 교체 알고리즘 — FIFO, LRU, Clock, LFU

### 🔬 심화 / 상세 — 작성 예정
- [ ] **IPC(Inter-Process Communication)** — 파이프, 메시지 큐, 공유 메모리, 시그널, 도메인 소켓
- [ ] **시스템 콜과 커널 모드/사용자 모드** — 진입 메커니즘(syscall, int 0x80, sysenter), 컨텍스트 비용
- [ ] **I/O 모델** — 블로킹/논블로킹/비동기, select·poll·epoll·kqueue·io_uring
- [ ] **부트 프로세스** — BIOS/UEFI → 부트로더 → 커널 → init 시스템
- [ ] **컨테이너 격리 메커니즘** — 네임스페이스(PID/NET/MNT), cgroup, capabilities

---

## 네트워크 ✅ 카테고리 핵심 완성

### 🧩 핵심 페이지 — 작성 완료
- ✅ 카테고리 페이지 (`network/index.html`) — 핵심/심화 분리 구조
- ✅ OSI 7계층 / TCP/IP 4계층
- ✅ TCP vs UDP (개요 — 신뢰성 메커니즘은 심화로 분리됨)
- ✅ 3-way / 4-way handshake
- ✅ HTTP / HTTPS — 메시지 구조, 메서드, 상태 코드, 캐시, TLS 개요
- ✅ HTTP/1.1 vs 2 vs 3 — 멀티플렉싱, HOL blocking, QUIC
- ✅ DNS — 도메인 계층, 재귀/반복 질의, 레코드, TTL/캐시, DoH/DoT
- ✅ CORS — Same-Origin Policy, simple vs preflight, Access-Control-* 헤더, credentials
- ✅ 쿠키 / 세션 / JWT — 상태 유지 방식 비교, SameSite/HttpOnly/Secure, refresh token
- ✅ IP 주소 / 서브넷 / CIDR — IPv4/IPv6, 서브넷 계산, 사설 IP 대역
- ✅ 라우팅 / NAT — 라우팅 테이블, NAT 종류, 포트포워딩, NAT traversal

### 🔬 심화 / 상세 — 작성 완료
- ✅ TCP 흐름 제어 (슬라이딩 윈도우, rwnd, Zero Window, Window Scale, Nagle, Delayed ACK, Silly Window)
- ✅ TCP 혼잡 제어 (Slow Start, AIMD, Fast Retransmit/Recovery, Tahoe/Reno/NewReno/Cubic/BBR, ECN, RTO)

### 🔬 심화 / 상세 — 작성 예정
**TCP 심화**
- [ ] **TCP 재전송과 RTT** — RTT 측정 상세, RTO 계산(Jacobson/Karels, Karn), 중복 ACK 누적 동작, SACK 블록 표기, F-RTO
- [ ] **TCP 상태 머신** — 11개 상태 전이도, 동시 열기 / 동시 닫기, half-close, RST의 역할
- [ ] **TCP 헤더 필드 심층** — 플래그(SYN/ACK/FIN/RST/PSH/URG/CWR/ECE), Options(MSS/SACK/Window Scale/Timestamp/MD5)
- [ ] **TCP Keep-Alive와 연결 풀** — 응용 레벨 vs 커널 레벨, HTTP keep-alive와의 차이
- [ ] **BBR 단독 페이지** — 대역폭/RTT 모델링, 페이싱, ProbeBW/ProbeRTT, BBRv2 변경점
- [ ] **UDP 위 신뢰성 구현** — QUIC가 어떻게 UDP를 쓰는지

**TLS / 보안 심화**
- [ ] **TLS 핸드셰이크 상세** — TLS 1.2 vs 1.3 단계 비교, 인증서 체인 / CA / OCSP / SCT, 키 교환(ECDHE), 0-RTT 보안 trade-off

**응용 계층 심화**
- [ ] **HTTP 메서드와 상태 코드 심층** — 자주 혼동되는 코드(301/302/307/308, 401/403, 502/504) 케이스 정리
- [ ] **QUIC 심화** — UDP 위 멀티스트림, 0-RTT 재연결, 연결 마이그레이션, QPACK 상세
- [ ] **WebSocket** — HTTP 업그레이드, 프레이밍, ping/pong, SSE와의 차이
- [ ] **DNS 보안과 캐시 포이즈닝** — DNSSEC, 캐시 포이즈닝 공격과 방어

**네트워크 / 인프라 심화**
- [ ] **ARP와 링크 내 통신** — ARP 캐시, gratuitous ARP, 브로드캐스트 도메인
- [ ] **방화벽 / iptables / 리눅스 네트워크 스택** — netfilter, 패킷 흐름
- [ ] **DDoS와 방어** — SYN flood, Slowloris, amplification 공격, Anycast로 흡수
- [ ] **로드밸런싱** — L4 vs L7, 알고리즘(라운드로빈/least-conn/IP 해시), 헬스체크

---

## 데이터베이스 ✅ 카테고리 핵심 완성

### 🧩 핵심 페이지 — 작성 완료
- ✅ 카테고리 페이지 (`database/index.html`) — 핵심/심화 분리 구조
- ✅ 정규화 — 함수 종속, 1NF~BCNF 단계별 예시, 비정규화의 정당화
- ✅ 인덱스 — B+Tree, 클러스터 vs 논클러스터, 커버링/복합, 인덱스를 못 쓰는 패턴
- ✅ 트랜잭션과 ACID — 언두 로그, WAL+fsync, 락/MVCC와의 관계
- ✅ 격리 수준 — 4단계 + 5가지 현상 매트릭스, MySQL/PG 기본값 차이
- ✅ 락 — 공유/배타, 인텐션, 갭/넥스트키, 데드락, 비관적/낙관적
- ✅ MVCC — PostgreSQL(튜플 버전) vs Oracle/InnoDB(Undo), 가시성, VACUUM
- ✅ 조인 알고리즘 — Nested Loop / Hash / Sort-Merge 단계별 시각화
- ✅ 실행 계획(EXPLAIN) — cost·rows·actual time, 진단 체크리스트

### 🔬 심화 / 상세 — 작성 예정
- [ ] **WAL과 체크포인트** — Write-Ahead Logging의 동작과 복구
- [ ] **B+Tree 내부 구조 심층** — 페이지 분할/병합, fill factor, 인덱스 단편화
- [ ] **인덱스 심화** — 함수 인덱스, 부분 인덱스, GiST/GIN, 멀티컬럼 정렬 영향
- [ ] **샤딩과 파티셔닝** — 수평/수직, 라우팅 키 선택, 리밸런싱
- [ ] **레플리케이션** — 동기/비동기, 마스터-슬레이브, multi-master, 일관성 수준
- [ ] **NoSQL 데이터 모델** — Document / Key-Value / Wide-Column / Graph 비교
- [ ] **CAP / PACELC 정리** — 분산 시스템의 트레이드오프와 사례 매핑
- [ ] **분산 트랜잭션** — 2PC, 3PC, Saga, Outbox 패턴

---

## 소프트웨어공학 ✅ 카테고리 핵심 완성

### 🧩 핵심 페이지 — 작성 완료
- ✅ 카테고리 페이지 (`software-engineering/index.html`) — 핵심/심화 분리 구조
- ✅ SDLC — 워터폴, V-모델, 애자일, 스크럼/칸반/XP, DevOps
- ✅ OOP — 캡슐화/상속/다형성/추상화, 클래스/객체, 메시지, is-a vs has-a
- ✅ SOLID 원칙 — 5가지 원칙 위반/준수 코드 예시
- ✅ 디자인 패턴 입문 — 23 GoF 카테고리(생성/구조/행위)와 대표 패턴
- ✅ 테스트 전략 — 피라미드, 단위/통합/E2E, 테스트 더블 5종, TDD, BDD
- ✅ CI / CD 파이프라인 — 단계, Blue-Green/Canary/Rolling, Feature Flag

### 🔬 심화 / 상세 — 작성 예정
- [ ] **생성 패턴** — Singleton / Factory / Builder / Prototype
- [ ] **구조 패턴** — Adapter / Decorator / Proxy / Facade / Composite / Bridge
- [ ] **행위 패턴** — Strategy / Observer / Command / Template Method / State / Iterator / Chain of Responsibility
- [ ] **엔터프라이즈 / 동시성 패턴** — Repository, Unit of Work, CQRS, Event Sourcing
- [ ] **코드 리뷰 / 페어 프로그래밍** — 효과적인 리뷰 체크리스트
- [ ] **클린 아키텍처 / 헥사고날** — 의존성 방향, 포트와 어댑터, 테스트 용이성
- [ ] **DDD 핵심 개념** — 엔티티 / 값 객체 / 애그리거트 / 바운디드 컨텍스트
- [ ] **12 Factor App** — 구성, 백킹 서비스, 빌드/릴리스/실행 분리 등
- [ ] **마이크로서비스 분리 기준** — 서비스 경계, DB-per-service, 데이터 일관성

---

## 🧰 기술 / 실무 스택 트랙 (CS 이론과 분리)

CS 핵심 이론 카테고리와 별도로, 실제 개발에서 바로 쓰는 언어·프레임워크·웹·SQL 기술을 정리합니다.
각 기술도 동일하게 **🧩 핵심 페이지**와 **🔬 심화 / 상세**로 분리합니다.

### 작성 방향
- 기술 페이지도 한국어 설명 + Java/Python/SQL 등 해당 기술의 실제 코드 예시를 포함합니다.
- "문법 나열"보다 **왜 그렇게 동작하는지**, **실무에서 어디서 실수하는지**, **면접에서 어떻게 묻는지**를 중심으로 작성합니다.
- 언어/프레임워크는 버전별 차이가 있으므로, 페이지 상단에 기준 버전을 명시합니다. 예: Java 21, Python 3.12, Spring Boot 3.x.
- 기술 트랙 카테고리 인덱스도 기존 카테고리처럼 `🧩 핵심 개념` / `🔬 심화 / 상세`를 시각적으로 분리합니다.

---

## Java (기술 트랙) ✅ 카테고리 핵심 완성

### 🧩 핵심 페이지 — 작성 완료
- ✅ 카테고리 페이지 (`java/index.html`) — 핵심/심화 분리 구조
- ✅ Java 언어 기본 — JVM·JDK·JRE, 컴파일/실행 흐름, 클래스 로딩 단계, JIT
- ✅ 객체지향과 Java 문법 — class/interface/abstract/record/enum, 접근 제어자, 오버로딩 vs 오버라이딩, sealed
- ✅ 예외 처리 — Throwable 계층, checked vs unchecked, try-with-resources, 스택 트레이스 읽기
- ✅ 컬렉션 프레임워크 — List/Set/Map/Queue, ArrayList vs LinkedList, HashMap 충돌·resize·treeify, fail-fast
- ✅ 제네릭(Generic) — 타입 소거, bounded wildcard, PECS, raw type 위험, 불공변
- ✅ 람다와 Stream API — 함수형 인터페이스, method reference, lazy evaluation, 병렬 스트림 함정, Optional
- ✅ JVM 메모리 구조 — heap(Young/Old)·stack·metaspace, GC 개요(Mark/Sweep/Compact), 참조 4단계, OOM 진단
- ✅ 멀티스레딩 기초 — Thread/ExecutorService, synchronized·volatile·Atomic*, CompletableFuture, Interrupt

### 🔬 심화 / 상세 — 작성 예정
- [ ] **JVM 내부 구조 심층** — class loader, bytecode, JIT, tiered compilation, escape analysis
- [ ] **GC 알고리즘 심층** — Serial/Parallel/G1/ZGC/Shenandoah, generational hypothesis, pause time tuning
- [ ] **Java Memory Model(JMM)** — happens-before, visibility, atomicity, reordering, volatile/synchronized 의미
- [ ] **동시성 유틸리티** — Lock/ReentrantLock, Semaphore, CountDownLatch, CyclicBarrier, Phaser, BlockingQueue
- [ ] **ConcurrentHashMap 내부** — CAS, bin locking, tree bin, resize 동작
- [ ] **CompletableFuture 심층** — 비동기 체이닝, 예외 처리, executor 선택, thread pool 고갈
- [ ] **Reflection / Annotation / Proxy** — Spring AOP와 DI의 기반, dynamic proxy vs CGLIB
- [ ] **NIO / Netty 입문** — blocking I/O vs non-blocking I/O, Selector, ByteBuffer, event loop
- [ ] **Java 성능 튜닝** — JFR/JMC, heap dump, thread dump, allocation profiling

---

## Python (기술 트랙) ✅ 카테고리 핵심 완성

### 🧩 핵심 페이지 — 작성 완료
- ✅ 카테고리 페이지 (`python/index.html`) — 핵심/심화 분리 구조
- ✅ Python 언어 기본 — 인터프리터 실행 모델, 동적 타이핑, 들여쓰기, 모듈/패키지
- ✅ 자료형과 컬렉션 — list/tuple/dict/set, slicing, comprehension, mutability
- ✅ 함수와 스코프 — first-class function, closure, LEGB rule, default argument 함정
- ✅ 객체지향 Python — class, instance, `self`, dunder method, dataclass
- ✅ 예외와 컨텍스트 매니저 — try/except/finally, custom exception, `with`, `__enter__/__exit__`
- ✅ 이터레이터 / 제너레이터 — iterator protocol, `yield`, generator expression, lazy evaluation
- ✅ 파일 / 표준 라이브러리 — pathlib, json, datetime, collections, itertools
- ✅ 가상환경과 패키징 — venv, pip, requirements, pyproject.toml, uv/poetry 개요

### 🔬 심화 / 상세 — 작성 예정
- [ ] **CPython 실행 모델** — bytecode, frame object, reference counting, garbage collection
- [ ] **GIL(Global Interpreter Lock)** — 왜 필요한지, CPU-bound vs I/O-bound, multiprocessing/asyncio 대안
- [ ] **asyncio 심층** — event loop, coroutine, task, await, cancellation, backpressure
- [ ] **타입 힌트 심층** — mypy/pyright, Protocol, Generic, TypedDict, Pydantic과 런타임 검증
- [ ] **데코레이터와 메타프로그래밍** — function/class decorator, descriptor, metaclass
- [ ] **성능 최적화** — profiling(cProfile/py-spy), vectorization, C extension, PyPy
- [ ] **테스트와 품질 도구** — pytest fixture, monkeypatch, coverage, ruff, black
- [ ] **데이터 처리 기본** — pandas/numpy 핵심 구조, 벡터화, 메모리 주의점

---

## Web (기술 트랙) ✅ 카테고리 핵심 완성

### 🧩 핵심 페이지 — 작성 완료
- ✅ 카테고리 페이지 (`web/index.html`) — 핵심/심화 분리 구조
- ✅ Web 동작 큰 그림 — 브라우저 주소 입력부터 화면 렌더링까지: DNS/TCP/TLS/HTTP/HTML/CSS/JS
- ✅ HTML 핵심 — 시맨틱 태그, form, 접근성 기본, SEO 기초
- ✅ CSS 핵심 — 박스 모델, cascade/specificity, flex/grid, responsive layout
- ✅ JavaScript 핵심 — 실행 컨텍스트, scope, closure, prototype, module
- ✅ DOM과 이벤트 — DOM tree, event bubbling/capturing, delegation, rendering cost
- ✅ 브라우저 렌더링 파이프라인 — HTML parsing, CSSOM, render tree, layout, paint, composite
- ✅ HTTP와 Web API — fetch, REST, JSON, CORS, 쿠키/스토리지
- ✅ 웹 보안 기본 — XSS, CSRF, CORS 오해, CSP, SameSite/HttpOnly/Secure

### 🔬 심화 / 상세 — 작성 예정
- [ ] **JavaScript 이벤트 루프 심층** — call stack, task queue, microtask, rendering frame, async/await
- [ ] **브라우저 저장소** — Cookie / localStorage / sessionStorage / IndexedDB / Cache Storage 비교
- [ ] **웹 성능 최적화** — Core Web Vitals, LCP/INP/CLS, lazy loading, code splitting, caching
- [ ] **Service Worker / PWA** — offline cache, push notification, background sync
- [ ] **WebSocket / SSE / WebRTC** — 실시간 통신 선택 기준
- [ ] **OAuth/OIDC 웹 로그인 흐름** — Authorization Code + PKCE, token storage 위험
- [ ] **프론트엔드 아키텍처** — SPA/MPA/SSR/SSG/ISR, hydration, island architecture
- [ ] **TypeScript 입문** — structural typing, union/intersection, generic, type narrowing

---

## Spring (기술 트랙)

### 🧩 핵심 페이지 — 작성 예정
- [ ] **Spring 큰 그림** — IoC Container, Bean, DI, AOP, Spring Boot 자동 설정
- [ ] **Bean과 의존성 주입** — Bean lifecycle, scope, constructor injection, circular dependency
- [ ] **Spring MVC** — DispatcherServlet, HandlerMapping, Controller, ArgumentResolver, ViewResolver
- [ ] **요청/응답 처리** — DTO, validation, exception handler, message converter, content negotiation
- [ ] **Spring Data JPA 기초** — Entity, Repository, 영속성 컨텍스트, dirty checking, transaction boundary
- [ ] **트랜잭션 관리** — `@Transactional`, propagation, isolation, rollback rule, proxy self-invocation 문제
- [ ] **Spring Security 기초** — filter chain, authentication/authorization, session vs JWT
- [ ] **Spring Boot 운영 기본** — Actuator, profile, configuration properties, logging

### 🔬 심화 / 상세 — 작성 예정
- [ ] **Spring Bean lifecycle 심층** — BeanDefinition, post processor, initialization order
- [ ] **AOP / Proxy 심층** — JDK dynamic proxy vs CGLIB, pointcut, advice, self-invocation
- [ ] **Spring MVC 내부 구조** — DispatcherServlet 전체 흐름, HandlerAdapter, Interceptor, Filter 차이
- [ ] **JPA 성능 문제** — N+1, fetch join, batch size, entity graph, pagination 함정
- [ ] **Hibernate 영속성 컨텍스트 심층** — 1차 캐시, flush, detach/merge, write-behind
- [ ] **트랜잭션 전파 심층** — REQUIRED/REQUIRES_NEW/NESTED, savepoint, unexpected rollback
- [ ] **Spring Security 심층** — SecurityContext, CSRF, OAuth2 Login, Resource Server, method security
- [ ] **Spring WebFlux** — Reactor, Mono/Flux, backpressure, MVC와 선택 기준
- [ ] **테스트 전략** — slice test, `@SpringBootTest`, Testcontainers, MockMvc, WebTestClient
- [ ] **관측성 / 운영** — Micrometer, tracing, metrics, health check, graceful shutdown

---

## SQL (기술 트랙)

### 🧩 핵심 페이지 — 작성 예정
- [ ] **SQL 기본 문법** — SELECT/FROM/WHERE/GROUP BY/HAVING/ORDER BY/LIMIT 실행 순서
- [ ] **JOIN 실전** — INNER/LEFT/RIGHT/FULL/CROSS, anti join, semi join, NULL 처리
- [ ] **집계와 그룹화** — aggregate function, GROUP BY, HAVING, grouping sets 개요
- [ ] **서브쿼리와 CTE** — scalar/table/correlated subquery, WITH, materialization 차이
- [ ] **윈도우 함수** — OVER/PARTITION BY/ORDER BY, rank/lag/lead/running total
- [ ] **데이터 변경 SQL** — INSERT/UPDATE/DELETE/MERGE, upsert, returning
- [ ] **인덱스를 고려한 SQL 작성** — sargable predicate, covering query, pagination
- [ ] **NULL과 3값 논리** — TRUE/FALSE/UNKNOWN, NOT IN 함정, COALESCE/NULLIF

### 🔬 심화 / 상세 — 작성 예정
- [ ] **SQL 실행 순서 심층** — 논리적 처리 순서 vs 물리 실행 계획 차이
- [ ] **쿼리 튜닝 패턴** — keyset pagination, OR 분해, exists vs in, count 최적화
- [ ] **고급 윈도우 함수** — frame clause, rows/range/groups, percentile, gap-and-island
- [ ] **Recursive CTE** — 계층형 데이터, 그래프 탐색, cycle 방지
- [ ] **JSON SQL** — PostgreSQL JSONB / MySQL JSON 함수, 인덱싱
- [ ] **DB별 SQL 차이** — PostgreSQL/MySQL/Oracle의 dialect, limit/offset, upsert, lock syntax
- [ ] **락을 의식한 SQL** — `SELECT FOR UPDATE`, SKIP LOCKED, NOWAIT, deadlock 줄이는 쿼리 순서
- [ ] **분석 SQL 패턴** — retention, funnel, cohort, sessionization

---

## 서버 / 인프라 / 운영 (기술 트랙)

서버 개발자가 애플리케이션 코드 밖에서 반드시 이해해야 하는 배포·운영·인프라 개념을 정리합니다.
Spring/SQL 같은 개발 기술과 연결되지만, 여기서는 **서버가 실제로 실행되고 운영되는 환경**을 중심으로 다룹니다.

### 🧩 핵심 페이지 — 작성 예정
- [ ] **Docker 기본** — image/container/layer, Dockerfile, registry, volume/network, build context
- [ ] **Docker Compose** — multi-container 로컬 환경, service/network/volume, `.env`, healthcheck
- [ ] **Kubernetes 기본** — Pod/ReplicaSet/Deployment/Service/Ingress, 선언형 배포, desired state
- [ ] **Kubernetes 설정과 배포** — ConfigMap/Secret, rolling update, readiness/liveness probe, resource request/limit
- [ ] **리버스 프록시와 웹 서버** — Nginx/Apache, reverse proxy, static serving, TLS termination, gzip/brotli
- [ ] **로드밸런싱 기본** — L4 vs L7, round-robin/least-connection/IP hash, health check, sticky session
- [ ] **서버 프로세스와 systemd** — process/service/daemon, unit file, restart policy, journalctl 로그 확인
- [ ] **환경 설정과 시크릿 관리** — env var, config file, secret rotation, 민감정보를 코드에 넣으면 안 되는 이유
- [ ] **관측성 기본** — log/metric/trace, structured logging, Prometheus/Grafana, alert 기본
- [ ] **배포 전략** — rolling/blue-green/canary, rollback, feature flag, zero-downtime 배포

### 🔬 심화 / 상세 — 작성 예정
- [ ] **Docker 이미지 최적화** — multi-stage build, layer cache, distroless, 이미지 크기·보안 스캔
- [ ] **컨테이너 네트워크 심층** — bridge/host/overlay network, port mapping, DNS, iptables와 NAT
- [ ] **컨테이너 보안** — rootless, capability, seccomp/AppArmor, image signing, secret mount
- [ ] **Kubernetes 스케줄링** — node selector, affinity/anti-affinity, taint/toleration, HPA/VPA
- [ ] **Kubernetes 네트워크** — CNI, ClusterIP/NodePort/LoadBalancer, Ingress Controller, NetworkPolicy
- [ ] **Kubernetes 스토리지** — PV/PVC/StorageClass, StatefulSet, 데이터베이스를 K8s에 올릴 때의 trade-off
- [ ] **Helm / Kustomize** — chart, values, overlay, 환경별 배포 템플릿 관리
- [ ] **서비스 메시** — sidecar proxy, mTLS, traffic shifting, Istio/Linkerd 개요
- [ ] **메시지 큐 / 이벤트 브로커** — Kafka/RabbitMQ/SQS, at-least-once, idempotency, DLQ
- [ ] **캐시 서버 운영** — Redis/Memcached, TTL, eviction policy, cache stampede, 분산 락 주의점
- [ ] **API Gateway / BFF** — routing, authentication offloading, rate limit, aggregation, gateway 병목
- [ ] **CI/CD 운영 파이프라인** — build artifact, promotion, approval gate, deployment automation
- [ ] **클라우드 인프라 기본** — VPC/subnet/security group/IAM, managed DB/cache/queue 선택 기준
- [ ] **장애 대응과 SRE 기초** — SLI/SLO, incident response, postmortem, error budget

---

## Git / Linux / Tooling (기술 트랙)

### 🧩 핵심 페이지 — 작성 예정
- [ ] **Git 기본** — working tree/index/repository, add/commit/status/diff/log
- [ ] **브랜치와 머지** — branch, merge, rebase 개념, conflict 해결
- [ ] **Git 협업 흐름** — PR, code review, trunk-based vs git-flow
- [ ] **Linux CLI 기본** — file/process/permission, pipe/redirection, systemctl/logs
- [ ] **Shell scripting 기본** — bash 변수, 조건문, 반복문, exit code, 안전한 quoting
- [ ] **개발자 로컬 도구** — curl/httpie, jq, ripgrep, make, pre-commit, dotenv

### 🔬 심화 / 상세 — 작성 예정
- [ ] **Git 내부 구조** — object/blob/tree/commit, ref, reflog, packfile
- [ ] **rebase / cherry-pick 심층** — conflict 재현, interactive rebase, commit 정리 전략
- [ ] **Linux 네트워크 디버깅** — ss, lsof, tcpdump, dig, curl, iptables 기초
- [ ] **Linux 성능 디버깅** — top/htop, iostat, vmstat, strace, perf, flame graph
- [ ] **Shell scripting 심화** — strict mode, trap, xargs, process substitution, 안전한 임시 파일
- [ ] **Observability 도구** — log/metric/trace, Prometheus/Grafana, OpenTelemetry

---

## 데이터통신 ✅ 카테고리 핵심 완성

### 🧩 핵심 페이지 — 작성 완료
- ✅ 카테고리 페이지 (`data-communication/index.html`) — 핵심/심화 분리 구조
- ✅ 변조 — AM/FM/PM, 디지털 변조(ASK/FSK/PSK/QAM), 성상도와 SNR trade-off
- ✅ 다중화 — TDM/FDM/WDM/CDM 비교, MUX/DEMUX, 슬롯/주파수 대역 시각화
- ✅ 오류 검출/정정 — 패리티/체크섬/CRC/해밍 코드, ARQ vs FEC
- ✅ 매체 접근 제어 — CSMA/CD, CSMA/CA, hidden node, RTS/CTS
- ✅ 신호 인코딩 — NRZ/Manchester/4B/5B/8B/10B, DC 균형과 자기 동기화

### 🔬 심화 / 상세 — 작성 예정
- [ ] **샤논 한계와 채널 용량** — Shannon-Hartley, 잡음과 대역폭의 관계
- [ ] **OFDM** — Wi-Fi/LTE/5G의 핵심 변조 방식, 부반송파, 가드 인터벌
- [ ] **MIMO / 빔포밍** — 다중 안테나 기법, 공간 다중화
- [ ] **5G 핵심 기술** — mmWave, Network Slicing, URLLC

---

## 공통 / UX 개선 아이디어
- [ ] 홈 페이지에 "최근 작성된 페이지" 또는 "추천 학습 순서" 섹션
- [ ] 카테고리별 진행률 표시 (작성된 페이지 수 / 전체)
- [ ] 페이지 내 목차(TOC) 사이드바 — 긴 개념 페이지에서 유용
- [ ] 코드 블록 하나에 Java / Python 토글 (지금은 Java만 또는 Python만)
- [ ] 검색 기능 — 단순 클라이언트 사이드 검색 (JS 인덱스 파일 하나)
- [ ] 다이어그램이 많은 페이지에 대해 prefers-reduced-motion 대응 (지금은 정적이라 OK)
- [x] ~~카테고리 인덱스 페이지에 핵심/심화 시각적 구분 일관 적용~~ → ✅ 자료구조/알고리즘/컴퓨터구조/운영체제/네트워크/데이터베이스/소프트웨어공학 적용 완료 (데이터통신은 카테고리 작성 시 동일 패턴 사용)
