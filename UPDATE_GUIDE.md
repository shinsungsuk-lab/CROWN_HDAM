# 🚀 웹사이트 업데이트 가이드

## 📝 간단 요약

**질문**: Deploy 후에 내가 웹사이트 컨텐츠를 업데이트하면 자동으로 돼는거야?

**답변**: **네, 자동으로 됩니다!** 하지만 **gh-pages 브랜치**에 push해야 합니다.

---

## 🎯 가장 쉬운 방법: 자동 배포 스크립트 사용

프로젝트에 `deploy.sh` 스크립트가 포함되어 있습니다. 이것을 사용하면 한 번에 자동으로 배포됩니다!

### 사용법:

```bash
./deploy.sh "업데이트 내용 설명"
```

### 예시:

```bash
# 교육 모듈 내용을 수정한 경우
./deploy.sh "Module 2: Blackjack 내용 업데이트"

# 퀴즈 문제를 추가한 경우
./deploy.sh "Quiz: 10개 문제 추가"

# 버그를 수정한 경우
./deploy.sh "Fix: 진행률 표시 오류 수정"
```

### 스크립트가 자동으로 하는 일:

1. ✅ main 브랜치에 변경사항 커밋
2. ✅ main 브랜치 push
3. ✅ gh-pages 브랜치로 전환
4. ✅ main 내용을 gh-pages에 병합
5. ✅ gh-pages 브랜치 push
6. ✅ 원래 브랜치로 복귀

**결과**: 1-3분 후 웹사이트 자동 업데이트! 🎉

---

## 📚 수동 업데이트 방법 (고급)

스크립트를 사용하지 않고 직접 하고 싶다면:

### 방법 1: gh-pages에서 직접 작업

```bash
# 1. gh-pages 브랜치로 전환
git checkout gh-pages

# 2. 파일 수정 (예: data.js, index.html 등)
nano data.js
# 또는 에디터로 수정

# 3. 커밋 & 푸시
git add .
git commit -m "Update: 내용 설명"
git push origin gh-pages

# 4. 1-3분 후 웹사이트 자동 업데이트! ✅
```

### 방법 2: main에서 작업 후 병합 (권장)

```bash
# 1. main 브랜치에서 작업
git checkout main

# 2. 파일 수정
nano data.js

# 3. main에 커밋 & 푸시
git add .
git commit -m "Update: 내용 설명"
git push origin main

# 4. gh-pages에 병합
git checkout gh-pages
git merge main
git push origin gh-pages

# 5. main으로 돌아가기
git checkout main

# 6. 1-3분 후 웹사이트 자동 업데이트! ✅
```

---

## ⏱️ 업데이트 타이밍

```
파일 수정 → Commit → Push (gh-pages) → GitHub 자동 배포 → 웹사이트 업데이트
                                         ↑
                                      1-3분 소요
```

---

## ❌ 주의사항

### 🚫 이것만은 피하세요!

**❌ main 브랜치만 push**
```bash
git push origin main  # ← 이것만 하면 웹사이트 업데이트 안 됨!
```

**✅ gh-pages에도 반드시 push**
```bash
git push origin main      # main 업데이트
git checkout gh-pages     # gh-pages로 전환
git merge main            # main 내용 가져오기
git push origin gh-pages  # ← 이것이 웹사이트 업데이트!
```

### 💡 왜 gh-pages인가?

GitHub Pages 설정에서 **Source를 gh-pages 브랜치로 설정**했기 때문입니다.
GitHub는 **gh-pages 브랜치의 변경사항만 모니터링**하여 웹사이트를 업데이트합니다.

---

## 🔍 배포 상태 확인

### 1. GitHub Actions 확인
```
https://github.com/shinsungsuk-lab/CROWN_HDAM/actions
```

- 🟡 **노란색 점**: 배포 진행 중
- ✅ **초록색 체크**: 배포 완료
- ❌ **빨간색 X**: 배포 실패 (로그 확인 필요)

### 2. 웹사이트 확인
```
https://shinsungsuk-lab.github.io/CROWN_HDAM/
```

**Tip**: 캐시 때문에 업데이트가 안 보이면 **강력 새로고침** (Ctrl+Shift+R 또는 Cmd+Shift+R)

---

## 📝 자주 수정하는 파일들

### 교육 내용 수정
```bash
data.js           # 모듈 내용, 시나리오 내용
quiz.js           # 퀴즈 문제
```

### 디자인 수정
```bash
styles.css        # 스타일, 색상, 레이아웃
```

### 기능 수정
```bash
app.js            # 애플리케이션 로직
index.html        # 페이지 구조
```

---

## 🛠️ 일반적인 업데이트 워크플로우

### 시나리오 1: 교육 모듈 내용 추가

```bash
# 1. data.js 파일 수정
nano data.js
# 새로운 모듈 섹션 추가

# 2. 자동 배포
./deploy.sh "Module 3: 새로운 Baccarat 규칙 추가"

# 3. 1-3분 후 확인
# https://shinsungsuk-lab.github.io/CROWN_HDAM/
```

### 시나리오 2: 퀴즈 문제 추가

```bash
# 1. quiz.js 파일 수정
nano quiz.js
# moduleQuiz 배열에 새 문제 추가

# 2. 자동 배포
./deploy.sh "Quiz: Module 5 관련 5개 문제 추가"

# 3. 확인
```

### 시나리오 3: 버그 수정

```bash
# 1. 해당 파일 수정
nano app.js
# 버그 수정

# 2. 자동 배포
./deploy.sh "Fix: 진행률 계산 오류 수정"

# 3. 확인
```

---

## 🎓 팁과 베스트 프랙티스

### ✅ 좋은 커밋 메시지 예시

```bash
./deploy.sh "Add: Module 6 체크리스트 내용 보강"
./deploy.sh "Update: Scenario 2 해결 절차 명확화"
./deploy.sh "Fix: 퀴즈 채점 로직 오류 수정"
./deploy.sh "Style: 모바일 반응형 개선"
```

### ❌ 나쁜 커밋 메시지 예시

```bash
./deploy.sh "수정"           # ← 무엇을 수정했는지 불명확
./deploy.sh "aaa"            # ← 의미 없음
./deploy.sh "."              # ← 설명 없음
```

### 📋 체크리스트

업데이트 전:
- [ ] 로컬에서 테스트 완료
- [ ] 변경사항 확인
- [ ] 커밋 메시지 준비

배포 후:
- [ ] GitHub Actions에서 배포 성공 확인
- [ ] 웹사이트에서 변경사항 확인
- [ ] 브라우저 캐시 새로고침 (Ctrl+Shift+R)

---

## 🆘 문제 해결

### Q: 웹사이트가 업데이트되지 않아요

**해결책**:
1. gh-pages 브랜치에 push했는지 확인
2. GitHub Actions 상태 확인 (에러 있는지)
3. 브라우저 캐시 강력 새로고침
4. 3-5분 더 기다려보기

### Q: deploy.sh 실행이 안 돼요

**해결책**:
```bash
# 실행 권한 추가
chmod +x deploy.sh

# 다시 실행
./deploy.sh "테스트"
```

### Q: git push가 실패해요

**해결책**:
```bash
# 원격 저장소 최신 버전 가져오기
git pull origin gh-pages

# 충돌 해결 후 다시 push
git push origin gh-pages
```

---

## 📞 추가 도움이 필요하신가요?

1. **GitHub Issues**: 버그나 개선사항 제안
2. **Documentation**: README.md, DEPLOYMENT.md 참고
3. **Git Logs**: `git log` 명령으로 히스토리 확인

---

**Happy Deploying! 🚀**

모든 변경사항은 자동으로 배포되어 1-3분 내에 웹사이트에 반영됩니다!
