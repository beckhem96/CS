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

## 소프트웨어공학 (전체 미작성)

### 🧩 핵심 페이지 — 작성 예정
- [ ] **SDLC** — 워터폴, V-모델, 애자일, 스크럼/칸반 비교
- [ ] **SOLID 원칙** — 5가지 원칙 각각에 위반/준수 코드 예시
- [ ] **테스트 전략** — 테스트 피라미드, 유닛/통합/E2E, 테스트 더블(Mock/Stub/Spy/Fake), TDD
- [ ] **CI/CD 파이프라인** — 단계, 트리거, 배포 전략(Blue-Green, Canary, Rolling)
- [ ] **디자인 패턴 입문** — 23 GoF 개요, 카테고리 구분, 언제 어떤 패턴을 쓸지

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

## 데이터통신 (전체 미작성)

### 🧩 핵심 페이지 — 작성 예정
- [ ] **변조** — AM / FM / PM의 파형 차이 SVG, 디지털 변조(ASK/FSK/PSK/QAM)와 심볼 다이어그램
- [ ] **다중화** — TDM / FDM / WDM / CDM 비교, 시간/주파수 슬롯 시각화
- [ ] **오류 검출/정정** — 패리티 / CRC 다항식 나눗셈 단계, 해밍 코드 비트 위치
- [ ] **매체 접근 제어** — CSMA/CD(이더넷), CSMA/CA(Wi-Fi), 충돌 회피 메커니즘
- [ ] **신호 인코딩** — NRZ / Manchester / 4B/5B / 8B/10B, 자기 동기화

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
- [ ] 카테고리 인덱스 페이지에 핵심/심화 시각적 구분 일관 적용 — 현재 네트워크만 적용됨, 다른 카테고리도 동일 패턴으로 리팩터링 권장
