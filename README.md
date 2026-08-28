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
3. macOS ZIP 등은 Supabase Storage `releases` 버킷 또는 `NEXT_PUBLIC_DOWNLOAD_*_URL` 설정

## Windows 다운로드

기본값: Google Drive (`/api/download/win-portable` → 302 리다이렉트).  
Vercel에서 `NEXT_PUBLIC_DOWNLOAD_WIN_PORTABLE_URL` 로 다른 URL 지정 가능.

## 주의

- `.env.local`은 Git에 올리지 마세요.
- `node_modules`, `.next`는 `.gitignore` 처리됨.
