# nextra-template

Nextra 4 기반 문서 사이트 템플릿. Pretendard 폰트와 노션 스타일 타이포그래피가 적용되어 있습니다.

## 새 프로젝트 시작하기

GitHub에서 **"Use this template"** 버튼을 클릭하세요.

또는 degit으로:
```bash
npx degit makerjun/nextra-template my-new-docs
cd my-new-docs
npm install
npm run dev
```

## 커스텀 체크리스트

새 저장소 생성 후 아래 3곳만 수정하면 됩니다.

**`app/layout.tsx`**
- `metadata.title.default` — 사이트 제목
- `metadata.description` — 사이트 설명
- `logo` — 로고 텍스트/이미지
- `docsRepositoryBase` — GitHub 저장소 URL
- `footer` — 저작권 정보

**`content/_meta.ts`**
- 최상위 섹션 구조 정의

**`content/index.mdx`**
- 홈페이지 Hero, CardGrid 내용

## 포함된 컴포넌트

MDX에서 바로 사용 가능합니다.

| 컴포넌트 | 설명 | 예시 |
|---|---|---|
| `<Hero>` | 랜딩 헤더 | `<Hero title="제목" subtitle="부제" />` |
| `<Card>` | 링크 카드 | `<Card title="섹션" icon="📌" href="/path">설명</Card>` |
| `<CardGrid>` | 카드 그리드 래퍼 | `<CardGrid columns={3}>...</CardGrid>` |
| `<Callout>` | 강조 박스 | `<Callout type="tip">내용</Callout>` |
| `<Toggle>` | 접기/펼치기 | `<Toggle title="제목">내용</Toggle>` |
| `<Timeline>` | 타임라인 | `<Timeline><TimelineItem date="..." title="..." /></Timeline>` |
| `<Placeholder>` | 작성 예정 표시 | `<Placeholder>곧 추가됩니다</Placeholder>` |
| `<AssetCard>` | 자산 카드 | `<AssetCard id="ec-001" title="..." category="ec" />` |

## GitHub Pages 배포

`next.config.mjs`에서 아래 주석 해제:
```js
output: 'export',
images: { unoptimized: true },
```

## 스크립트

```bash
npm run check:md   # 한글 bold 깨짐 패턴 검사
```
