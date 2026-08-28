# Methodos Basic — 공식 다운로드 사이트

Clerk · Vercel · Supabase 스택의 Next.js 15 마케팅·다운로드 사이트입니다.  
대상 프로그램: **MethodosBasic-LT_V4-Le1** (`MethodosBasic-LT-7-6개월`).

## 로컬 실행

```bash
cp .env.example .env.local
npm install
npm run dev
```

브라우저: http://localhost:3000

## 미리보기가 안 될 때

Next.js는 **HTML 파일 더블클릭**으로는 열리지 않습니다. 반드시 개발 서버를 켠 뒤 브라우저로 접속하세요.

**가장 쉬운 방법 (Windows)**  
`methodos-basic-사이트 구축` 폴더에서 **`미리보기.bat`** 을 더블클릭 → 자동으로 http://localhost:3000 이 열립니다.

**터미널**

```bash
cd methodos-basic-site
npm install
npm run dev
```

그다음 브라우저에서 **http://localhost:3000** (포트 **3010이 아님**).

Cursor에서 워크스페이스 루트가 `v16`만 열려 있으면 사이트 폴더가 안 보일 수 있습니다.  
**파일 → 폴더 열기** → `통계 개발\methodos-basic-사이트 구축` 을 연 뒤 미리보기하세요.

## 검증

```bash
npm run verify
```

`verify`는 `typecheck` → `build` → 주요 페이지 HTTP 200을 확인합니다.

## Vercel 배포

1. GitHub에 `methodos-basic-site` 푸시
2. Vercel Import → Framework: Next.js
3. Environment Variables: `.env.example` 참고
4. Root Directory: `methodos-basic-site` (모노레포인 경우)

## Supabase — exe 호스팅

1. Storage 버킷 `releases` (public)
2. exe/dmg 업로드
3. `NEXT_PUBLIC_SUPABASE_URL` + bucket/path 또는 `NEXT_PUBLIC_DOWNLOAD_*_URL` 설정

## 로컬 exe 다운로드 테스트

`.env.local`에 `LOCAL_RELEASES_DIR`를 LT 폴더로 두면 (개발 모드만) `/api/download/win-setup` 등이 실제 파일을 스트리밍합니다.

## UI 레퍼런스

- 상단 메뉴: [jamovi.org](https://www.jamovi.org/) 스타일 (짧은 영문 라벨 + Download CTA)
- 섹션·카드 톤: `methodos--s24-lv-renew-18` 랜딩
