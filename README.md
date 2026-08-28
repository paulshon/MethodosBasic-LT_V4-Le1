# MethodosBasic-LT_V4-Le1

Research statistical analysis — **Methodos Basic** 공식 다운로드·소개 사이트 (Next.js).

Clerk · Vercel · Supabase. 데스크톱 배포: **MethodosBasic-LT_V4-Le1** (Windows 포터블 · macOS ZIP).

## 로컬 실행

```bash
cp .env.example .env.local
npm install
npm run dev
```

브라우저: http://localhost:3000

## 검증

```bash
npm run verify
```

## Vercel 배포

1. 이 저장소를 Vercel에 Import (Framework: Next.js, Root: 저장소 루트)
2. Environment Variables: `.env.example` 참고
3. exe는 Supabase Storage `releases` 버킷에 업로드 후 URL 설정

## Supabase (다운로드 파일)

- `MethodosBasic-LT_V4-Le1.exe`
- `MethodosBasic-LT_V4-Le1-mac.zip` (빌드 후)

`.env.example`의 `NEXT_PUBLIC_SUPABASE_URL`, `STORAGE_PATH_*` 또는 `NEXT_PUBLIC_DOWNLOAD_*_URL` 사용.

## 주의

- `.env.local`은 Git에 올리지 마세요.
- `node_modules`, `.next`는 `.gitignore` 처리됨.
