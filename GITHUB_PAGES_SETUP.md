# 🔧 GitHub Pages 수동 활성화 가이드

## ✅ 완료된 작업

1. ✅ **Repository를 Public으로 변경 완료**
   - Private → Public 전환 완료
   - GitHub Pages는 무료 계정에서 Public 저장소에서만 작동합니다

2. ✅ **gh-pages 브랜치 준비 완료**
   - 모든 파일이 gh-pages 브랜치에 있습니다
   - index.html, styles.css, data.js, quiz.js, app.js 모두 포함

## 📋 GitHub Pages 수동 활성화 방법

GitHub API 권한 문제로 인해 자동 활성화가 불가능하므로, 아래 단계를 따라 수동으로 활성화해주세요:

### 1단계: GitHub 저장소로 이동
```
https://github.com/shinsungsuk-lab/CROWN_HDAM
```

### 2단계: Settings 메뉴 접근
- 저장소 상단의 **"Settings"** 탭 클릭

### 3단계: Pages 설정으로 이동
- 왼쪽 사이드바에서 **"Pages"** 메뉴 클릭

### 4단계: Source 설정
- **"Build and deployment"** 섹션에서:
  - **Source**: "Deploy from a branch" 선택
  - **Branch**: 
    - 첫 번째 드롭다운: **`gh-pages`** 선택
    - 두 번째 드롭다운: **`/ (root)`** 선택
  - **"Save"** 버튼 클릭

### 5단계: 배포 대기
- GitHub가 자동으로 사이트를 빌드하고 배포합니다
- 보통 1-3분 정도 소요됩니다
- 페이지 상단에 초록색 박스로 배포 완료 메시지가 표시됩니다:
  ```
  Your site is live at https://shinsungsuk-lab.github.io/CROWN_HDAM/
  ```

## 🎯 예상 결과

설정 완료 후 다음 URL에서 애플리케이션에 접근할 수 있습니다:

**🔗 https://shinsungsuk-lab.github.io/CROWN_HDAM/**

## 🔍 문제 해결

### Pages 메뉴가 보이지 않는 경우
- Repository가 Public인지 확인 (완료됨 ✅)
- 브라우저 새로고침

### "Branch" 드롭다운에 gh-pages가 없는 경우
```bash
# gh-pages 브랜치가 있는지 확인
git branch -r | grep gh-pages
# 출력: origin/gh-pages (이미 존재함 ✅)
```

### 배포 후에도 404 에러가 나는 경우
1. Actions 탭에서 배포 상태 확인
2. 캐시 삭제 후 새로고침 (Ctrl+Shift+R 또는 Cmd+Shift+R)
3. 몇 분 더 대기 (GitHub Pages 전파 시간)

## 📱 현재 작동 중인 테스트 서버

GitHub Pages 설정이 완료될 때까지 이 URL을 사용할 수 있습니다:

**🧪 테스트 서버**: https://8080-io4vq0xwxr97bynyai3eu-2b54fc91.sandbox.novita.ai

(참고: 테스트 서버는 임시이며 세션이 종료되면 작동하지 않을 수 있습니다)

## ✨ 확인 사항

다음 항목들이 모두 준비되었습니다:

- ✅ Repository가 Public
- ✅ gh-pages 브랜치 존재
- ✅ 모든 파일이 gh-pages에 커밋됨 (index.html, styles.css, data.js, quiz.js, app.js)
- ✅ quiz.js 누락 문제 수정 완료
- ⏳ **남은 작업**: GitHub.com에서 Pages 수동 활성화

## 📞 추가 도움

설정 후에도 문제가 있으면:
1. GitHub Actions 탭에서 배포 로그 확인
2. 브라우저 콘솔(F12)에서 에러 확인
3. Repository Settings > Pages 화면 캡처 공유

---

**다음 단계**: 위의 "GitHub Pages 수동 활성화 방법"을 따라 설정을 완료해주세요!
