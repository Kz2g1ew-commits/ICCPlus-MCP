# ICCPlus MCP

[English](README.md) | [한국어](README.ko.md)

[ICC Plus](https://github.com/wahaha303/ICCPlus) 프로젝트를 생성하고,
조회하고, 편집하고, 검증하고, 패키징하는 스키마 인식형
[Model Context Protocol](https://modelcontextprotocol.io/) 서버입니다.

> 이 프로젝트는 AI 코딩 에이전트와 함께 바이브코딩으로 제작했습니다.

서버는 ICC Plus 원본 소스에서 직접 생성하고 인덱싱한 전체 프로젝트
모델을 AI 에이전트에 제공합니다.

- 프로젝트 스키마와 현재 기본값을 ICC Plus 소스에서 생성합니다.
- 선언된 모델 타입 59개와 고유 필드 888개를 모두 탐색할 수 있습니다.
- 제작기와 독립 실행형 뷰어의 소스·빌드·설정·패치 파일 227개와 이름이
  있는 함수 및 메서드 1,406개를 정확한 소스, SHA-256 근거, 시그니처,
  모델 필드 사용 정보, 줄 범위와 함께 인덱싱합니다.
- 배포 저장소의 파일 75개와 공식 뷰어 아카이브 내부 파일 34개의
  바이트 수와 SHA-256 매니페스트를 제공합니다.
- 상위 수준 도구가 ID, 순서, 부모 링크, 상호 멤버십을 보존합니다.
- 범용 RFC 6902 패치로 새 필드와 사용 빈도가 낮은 필드에도 접근할 수
  있습니다.
- 구조 및 의미 검증으로 저장 전에 끊어진 참조를 발견합니다.
- 원본 기반 Custom CSS 도구로 공식 뷰어 클래스와 프로젝트별 셀렉터를
  찾고 저장 전에 문법·캐스케이드 위험을 진단합니다.
- 제작기 UI를 열지 않고 공식 웹·로컬 뷰어 아카이브를 빌드할 수 있습니다.

현재 호환성 기준은 ICC Plus `v2.9.29`, 소스 커밋
`df33b5d554bda38adfa820395d794315afd6775c`입니다.

## 소개

ICCPlus MCP는 ICC Plus 프로젝트 JSON을 다루는 저작 및 빌드
어댑터입니다. 브라우저 뷰어 자체를 다시 구현하지는 않습니다. 선택 효과,
오디오 재생, 대화상자, 렌더링 등 상호작용 동작은 공식 뷰어에서 실행됩니다.
서버는 이러한 동작을 제어하는 설정을 이해하고 검증하며, 제공된 상태를
기준으로 요구사항 트리를 평가하고 공식 뷰어 템플릿에 결과를 패키징합니다.

설계는 두 계층으로 구성됩니다.

```text
에이전트
  ├─ 탐색: capabilities, schema, resources, prompts
  ├─ 저작: 엔티티 생성/수정/이동/복제/가져오기
  ├─ 전체 필드 접근: 모든 스키마 필드에 대한 원자적 JSON Patch
  └─ 검증: 정규화, 검증, 평가, 저장, 뷰어 빌드
                           │
                           ▼
                 리비전 기반 메모리 프로젝트 세션
                           │
                           ▼
                    ICC Plus JSON / 뷰어 ZIP
```

## 요구사항

- Node.js 20 이상
- ICC Plus 프로젝트 작업공간
- 뷰어 빌드 시
  [ICC Plus 배포 저장소](https://github.com/wahaha303/ICCPlus)의
  `web_viewer.zip` 또는 `local_viewer.zip`

## 설치 및 빌드

```bash
git clone https://github.com/Kz2g1ew-commits/ICCPlus-MCP.git
cd ICCPlus-MCP
npm ci
npm run build
```

실행 파일은 `dist/index.js`이며 stdio로 통신합니다. 프로토콜 출력은
stdout, 진단 메시지는 stderr를 사용합니다.

## 에이전트에 연결

`ICCPLUS_WORKSPACE`에는 서버가 읽고 쓸 수 있는 유일한 디렉터리를
지정합니다. 프로젝트, 에셋, 템플릿, 출력의 상대 경로는 모두 이 디렉터리
안에서 해석됩니다. 기존 심볼릭 링크는 실제 경로로 확인하며 작업공간
밖으로 나갈 수 없습니다.

### Codex

```bash
codex mcp add iccplus \
  --env ICCPLUS_WORKSPACE=/absolute/path/to/iccplus-workspace \
  -- node /absolute/path/to/ICCPlus-MCP/dist/index.js
```

`codex mcp list`로 확인하고, 클라이언트가 열려 있었다면 다시 시작합니다.
동일한 사용자 또는 신뢰된 프로젝트용 `config.toml` 설정은 다음과 같습니다.

```toml
[mcp_servers.iccplus]
command = "node"
args = ["/absolute/path/to/ICCPlus-MCP/dist/index.js"]
env = { ICCPLUS_WORKSPACE = "/absolute/path/to/iccplus-workspace" }
startup_timeout_sec = 10
tool_timeout_sec = 60
enabled = true
```

Codex CLI, IDE 확장 프로그램, ChatGPT 데스크톱의 Codex 화면은 이 설정을
공유합니다. 프로젝트 범위 설정은 `.codex/config.toml`에 둘 수 있으며
신뢰된 프로젝트에서만 불러옵니다.

### 다른 stdio MCP 클라이언트

클라이언트의 로컬 서버 설정에 다음 명령을 사용합니다.

```json
{
  "command": "node",
  "args": ["/absolute/path/to/ICCPlus-MCP/dist/index.js"],
  "env": {
    "ICCPLUS_WORKSPACE": "/absolute/path/to/iccplus-workspace"
  }
}
```

선택 환경 변수:

- `ICCPLUS_WORKSPACE`: 파일시스템 경계입니다. 기본값은 서버 프로세스의
  현재 작업 디렉터리입니다.
- `ICCPLUS_MAX_ASSET_BYTES`: 로컬 에셋의 최대 크기입니다. 기본값은
  26,214,400바이트(25 MiB)입니다.

## 권장 에이전트 작업 흐름

1. 관련 기능군이나 필드에 대해 `iccplus_capabilities`를 호출합니다.
2. 프로젝트를 생성하거나 열고 `project_id`와 `revision`을 유지합니다.
3. 먼저 참조 대상인 포인트, 변수, 단어, 그룹, 디자인, 전역 요구사항을
   생성합니다.
4. 행을 생성하고, 선택지를 생성한 다음 점수·애드온·요구사항을 생성합니다.
5. 변경 도구에 `expected_revision`을 전달합니다. 넓은 범위의 변경은
   `dry_run`으로 먼저 확인합니다.
6. 고급 스타일은 `iccplus_css_catalog`로 정확한 셀렉터를 찾고,
   `iccplus_css_analyze`로 후보 CSS를 분석한 다음 `iccplus_css_set`으로
   적용합니다.
7. `iccplus_validate`를 호출하고 필요한 경우
   `iccplus_evaluate_requirements`도 호출합니다.
8. 명시적으로 저장하거나 공식 뷰어 아카이브를 빌드합니다.

에이전트는 함께 제공되는 `author-iccplus-project` 또는
`audit-iccplus-project` 프롬프트를 요청할 수도 있습니다.

사용자 요청 예시:

> 시작 크레딧 10점, 상호 배타적인 출신 선택지 세 개, 출신을 선택하면
> 열리는 무기 행이 있는 CYOA를 만들어 줘. 검증하고
> `projects/origins.json`으로 저장한 다음
> `templates/web_viewer.zip`으로 웹 뷰어를 빌드해 줘.

## 도구

| 도구 | 용도 |
| --- | --- |
| `iccplus_capabilities` | 기능군 19개, 타입·필드, 정확한 함수 본문, 소스 파일 인덱스, 배포 아티팩트를 탐색합니다. |
| `iccplus_css_catalog` | 소스 근거가 있는 공식 뷰어 클래스와 정확한 프로젝트 ID 셀렉터를 나열합니다. |
| `iccplus_css_analyze` | 저장된 CSS나 후보 CSS의 문법, 명시도, 대상 해석, 캐스케이드 충돌, 외부 에셋을 분석합니다. |
| `iccplus_css_set` | 리비전·드라이런·검증 보호와 함께 Custom CSS를 교체·뒤에 추가·앞에 추가·초기화합니다. |
| `iccplus_schema` | 스키마 요약, 개별 정의 또는 전체 생성 스키마를 읽습니다. |
| `iccplus_create_project` | 현재 원본의 정확한 기본값으로 프로젝트를 시작합니다. |
| `iccplus_open_project` | 프로젝트 JSON을 격리된 세션으로 엽니다. |
| `iccplus_list_projects` | 세션, 리비전, 변경 상태, 개수를 나열합니다. |
| `iccplus_project_status` | 검증 결과, 크기, 콘텐츠 개수와 선택적 JSON을 조회합니다. |
| `iccplus_query` | 타입, ID 또는 텍스트로 모델 엔티티 전체를 검색합니다. |
| `iccplus_create_entity` | 기본값과 새 ID를 사용해 엔티티를 만들고 부모 관계를 복구합니다. |
| `iccplus_update_entity` | 필드를 깊은 병합 또는 제거하고 선택적으로 ID 참조를 다시 씁니다. |
| `iccplus_duplicate_entity` | 엔티티 트리를 새 ID로 복제하고 선택적으로 내부 참조를 재매핑합니다. |
| `iccplus_move_entity` | 엔티티 순서를 바꾸고 위치 인덱스를 복구합니다. |
| `iccplus_delete_entity` | 기본적으로 새로 끊어지는 참조가 있으면 삭제를 거부합니다. |
| `iccplus_patch` | 프로젝트의 모든 필드에 RFC 6902 작업을 원자적으로 적용합니다. |
| `iccplus_normalize` | 레거시 형식을 마이그레이션하고 ID, 인덱스, 부모, 멤버십을 복구합니다. |
| `iccplus_validate` | 생성 스키마와 의미·참조 검증을 실행합니다. |
| `iccplus_evaluate_requirements` | 제공된 선택, 포인트, 변수, 단어 상태를 기준으로 요구사항을 평가합니다. |
| `iccplus_export_fragment` | 재사용 가능한 엔티티 하위 트리를 내보냅니다. |
| `iccplus_import_fragment` | 안전한 ID 재생성 및 재매핑으로 하위 트리를 가져옵니다. |
| `iccplus_set_asset` | 작업공간 파일, URL 또는 데이터 URL로 문자열 필드를 설정합니다. |
| `iccplus_save_project` | 검증된 JSON을 작업공간 안에 원자적으로 저장합니다. |
| `iccplus_build_viewer` | 공식 웹·로컬 뷰어 ZIP을 빌드하고 선택적으로 이미지를 분리합니다. |
| `iccplus_history` | 세션 변경을 실행 취소하거나 다시 실행합니다. |
| `iccplus_close_project` | 저장되지 않은 변경을 보호하면서 세션을 닫습니다. |

엔티티 도구가 지원하는 종류는 `row`, `backpack_row`, `choice`, `addon`,
`selectable_addon`, `score`, `requirement`, `point`, `variable`, `word`,
`group`, `row_design_group`, `choice_design_group`, `global_requirement`,
`sound_effect`, `category`입니다.

## 리소스와 프롬프트

| URI/이름 | 내용 |
| --- | --- |
| `iccplus://css/catalog` | 소스 근거가 포함된 공식 Custom CSS 셀렉터 카탈로그 |
| `iccplus://schema/project` | 전체 생성 프로젝트 JSON 스키마 |
| `iccplus://features` | 소스 기반 기능 카탈로그와 커버리지 개수 |
| `iccplus://deployment` | 모든 배포 파일과 공식 뷰어 ZIP 항목의 SHA-256 매니페스트 |
| `iccplus://licenses` | 원본 서드파티 패키지 209개의 UTF-8 정규화 메타데이터 |
| `iccplus://project/{projectId}/css` | 저장 CSS, 정적 분석, 프로젝트별 정확한 셀렉터 |
| `iccplus://project/{projectId}/summary` | 현재 리비전, 검증 결과, 엔티티 개수 |
| `author-iccplus-project` | 안전한 생성 순서와 검증 작업 흐름 |
| `audit-iccplus-project` | 전체 프로젝트 완성도 및 패키징 감사 |

## 안전성과 데이터 무결성

- 변경은 복제된 데이터에 적용한 뒤 원자적으로 커밋합니다.
- `expected_revision`으로 낙관적 동시성 제어를 제공합니다.
- `dry_run`은 세션을 바꾸지 않고 예상 검증 보고서를 반환합니다.
- 기본 변경 정책 `no_new_errors`는 새 검증 오류를 거부합니다.
  `strict`는 결과 전체가 유효해야 하며, 단계적 복구에는 `none`을 사용할
  수 있습니다.
- JSON Patch는 프로토타입 오염 포인터 세그먼트를 차단합니다.
- 저장 시 임시 파일과 이름 변경을 사용합니다.
- `overwrite=true`가 아니면 기존 파일을 교체하지 않습니다.
- 일반 조회 결과에서는 에셋 값을 가리고 미디어 유형과 대략적인 바이트
  크기만 보고합니다.
- 알 수 없는 필드도 불러오기, 편집, 정규화, 저장 과정에서 보존해 향후
  호환성을 유지합니다.

## 검증 범위

검증기는 생성된 `App` 스키마와 다음 검사를 결합합니다.

- 중복·누락 ID와 위치 인덱스 불일치
- 애드온 부모 링크
- 모델에 포함된 모든 행, 선택지, 포인트, 그룹, 변수, 단어, 디자인,
  사운드, 전역 요구사항 참조
- 점수-포인트 및 포인트 활성화 참조
- 중첩 요구사항, 임계값, 전역 요구사항 순환
- 그룹과 디자인 그룹의 상호 멤버십
- 호환되지 않는 뷰어 내보내기 모드
- Custom CSS 문법, 위험한 레거시 구문, 해석되지 않는 ICC Plus ID
  셀렉터, 전역 범위, 외부 에셋, 인라인 스타일 충돌 가능성
- 포인트 정수·실수 및 초기화 불변 조건

요구사항 평가기는 `id`(`/ON#N` 포함), `points`, `pointCompare`, `or`,
`selFromGroups`, `selFromRows`, `selFromWhole`, `gid`, `word`, 부정,
연산자, 중첩 선행 조건을 구현합니다. 불리언 값만 반환하지 않고 설명
가능한 추적 결과를 함께 제공합니다.

## 고급 Custom CSS

ICC Plus는 최상위 `customCSS` 필드에 CSS를 저장하고 공식 제작기와
뷰어에서 `textContent`를 사용해 `style#customCSS`로 삽입합니다. MCP는
고정된 독립 실행형 뷰어 마크업에서 `row-{id}`, `row-{id}-bg`,
`row-{id}-header`, `choice-{id}`, 선택 상태 클래스, `addon`,
선택 가능한 `addon-{id}` 등의 카탈로그를 추출합니다.

`iccplus_css_catalog`는 열린 프로젝트의 모든 행·선택지·선택 가능 애드온
ID를 CSS 이스케이프한 정확한 셀렉터로 반환합니다.
`iccplus_css_analyze`는 중첩 규칙을 분석하고 명시도와 일치 엔티티를
보고하며, 선언이 ICC Plus 인라인 스타일에 밀릴 가능성도 경고합니다.
`iccplus_css_set`은 다른 프로젝트 변경과 같은 리비전 트랜잭션 및 검증
정책으로 결과를 저장합니다.

이 기능은 의도적으로 정적 분석까지만 수행합니다. 계산된 스타일,
반응형 레이아웃, 상호작용 상태의 실제 렌더링은 공식 뷰어가 담당하며,
별도 브라우저 자동화 런타임이나 범용 웹 탐색 도구는 포함하지 않습니다.

## 뷰어 빌드

`iccplus_build_viewer`는 작업공간 안의 공식 템플릿 ZIP을 받습니다.

- 웹 모드는 `project.json`을 작성합니다.
- 로컬 모드는 프로젝트를 `js/app.js`에 삽입합니다.
- 로딩 제목, 텍스트, 색상, 파비콘, 배경, 글꼴과 프로젝트 Custom CSS를
  패키징된 프로젝트에 보존합니다.
- 선택적 이미지 분리는 전역 스타일, 행, 배낭 행, 디자인 그룹, 뷰어
  설정의 데이터 URL을 추출하며 같은 에셋은 하나로 합칩니다.

템플릿의 뷰어 JavaScript가 런타임 동작의 기준입니다.

## 원본 동기화

프로젝트 모델은 원본 소스에서 직접 생성됩니다.
[ICC-Plus-Svelte](https://github.com/wahaha303/ICC-Plus-Svelte) 체크아웃을
대상으로 분석기를 다시 실행할 수 있습니다.

```bash
npm run analyze:upstream -- --source ../ICC-Plus-Svelte --deployment ../ICCPlus
npm test
npm run check
npm run build
```

분석기는 TypeScript AST를 사용해 다음 파일을 다시 생성합니다.

- `src/generated/iccplus.schema.json`
- `src/generated/default-project.json`
- `src/generated/source-analysis.json`
- `src/generated/deployment-manifest.json`
- `src/generated/third-party-licenses.json`
- `analysis/CODEBASE_INVENTORY.md`

새로 선언된 원본 모델 타입이 기능군에 배정되지 않으면 테스트가
실패합니다. `source-analysis.json`에는 선언, import, SHA-256 주소가
지정된 전체 소스 파일, 컴포넌트 라벨, 이름이 있는 모든 소스 함수·메서드,
정확한 함수 본문, 소스 등장 위치도 기록됩니다. 배포 매니페스트는
`wahaha303/ICCPlus`의 모든 파일과 공식 뷰어 아카이브의 모든 항목을
포함합니다.

에이전트는 `iccplus_capabilities`를 통해 `field:<name>`,
`type:<name>`, `function:<name>`, `source:<relative-path>`를 조회할 수
있고 `deployment:<relative-path>`로 배포 근거를 받을 수 있습니다.
함수 조회는 `file`, `offset`, `limit`을 지원해 같은 이름의 로컬 함수도
관리할 수 있으며 `include_source=false`는 간결한 메타데이터를
반환합니다.

## 개발

```bash
npm test
npm run test:stdio
npm run verify:upstream -- --source ../ICC-Plus-Svelte --deployment ../ICCPlus
npm run check
npm run build
npm run inspect
npm pack --dry-run
```

테스트 스위트는 생성 모델 커버리지, 모델 그래프 변경, 정규화, 참조
재작성, 모든 요구사항 계열, RFC 6902 원자성, 뷰어 패키징, 메모리 내 MCP
클라이언트·서버 통신을 다룹니다.

전체 의미 기반 기능 지도는
[`analysis/FEATURE_ANALYSIS.md`](analysis/FEATURE_ANALYSIS.md), 생성된
필드·함수·컴포넌트 근거는
[`analysis/CODEBASE_INVENTORY.md`](analysis/CODEBASE_INVENTORY.md),
요구사항별 검증 기록은
[`analysis/COMPLETION_AUDIT.md`](analysis/COMPLETION_AUDIT.md)를
참고하세요.

## 저작권 및 출처

ICC Plus는 [`wahaha303`](https://github.com/wahaha303)가 개발했습니다.
이 MCP 서버는 독립적인 연동 프로젝트이며 공식 제작기나 뷰어를 대체하거나
수정하지 않습니다. 두 프로젝트는 MIT 라이선스로 배포됩니다.
`LICENSE`를 참고하세요.

원본 및 포함된 의존성 고지는
[`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md)와
`iccplus://licenses` 리소스에 보존되어 있습니다.
