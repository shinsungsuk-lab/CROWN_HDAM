#!/bin/bash
# 
# Area Manager Training System - 자동 배포 스크립트
# 
# 사용법: ./deploy.sh "커밋 메시지"
# 예시: ./deploy.sh "교육 내용 업데이트"
#

set -e  # 에러 발생 시 중단

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 Area Manager Training System - 자동 배포"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 커밋 메시지 확인
if [ -z "$1" ]; then
    echo -e "${RED}❌ 에러: 커밋 메시지가 필요합니다${NC}"
    echo "사용법: ./deploy.sh \"커밋 메시지\""
    echo "예시: ./deploy.sh \"교육 내용 업데이트\""
    exit 1
fi

COMMIT_MSG="$1"

# 현재 브랜치 저장
ORIGINAL_BRANCH=$(git branch --show-current)
echo -e "${YELLOW}📍 현재 브랜치: $ORIGINAL_BRANCH${NC}"
echo ""

# 1단계: main 브랜치에서 작업
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1️⃣  main 브랜치 업데이트 중..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ "$ORIGINAL_BRANCH" != "main" ]; then
    git checkout main
fi

# 변경사항 확인
if [[ -n $(git status -s) ]]; then
    echo -e "${GREEN}✓${NC} 변경된 파일 감지"
    git status -s
    echo ""
    
    git add .
    git commit -m "$COMMIT_MSG"
    echo -e "${GREEN}✓${NC} main 브랜치 커밋 완료"
else
    echo -e "${YELLOW}⚠${NC}  변경사항 없음"
fi

echo ""
echo "🔄 main 브랜치 push 중..."
git push origin main
echo -e "${GREEN}✓${NC} main 브랜치 push 완료"
echo ""

# 2단계: gh-pages에 병합
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "2️⃣  gh-pages 브랜치 업데이트 중..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

git checkout gh-pages
echo -e "${GREEN}✓${NC} gh-pages 브랜치로 전환"

echo ""
echo "🔄 main 브랜치 병합 중..."
git merge main --no-edit
echo -e "${GREEN}✓${NC} main 브랜치 병합 완료"

echo ""
echo "🔄 gh-pages 브랜치 push 중..."
git push origin gh-pages
echo -e "${GREEN}✓${NC} gh-pages 브랜치 push 완료"

# 원래 브랜치로 복귀
echo ""
git checkout $ORIGINAL_BRANCH
echo -e "${GREEN}✓${NC} $ORIGINAL_BRANCH 브랜치로 복귀"

# 완료 메시지
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}🎉 배포 완료!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "⏱️  1-3분 후 웹사이트가 자동으로 업데이트됩니다."
echo ""
echo "🔗 웹사이트: https://shinsungsuk-lab.github.io/CROWN_HDAM/"
echo "📊 배포 상태: https://github.com/shinsungsuk-lab/CROWN_HDAM/actions"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
