# Node.js 기반의 프로젝트를 빌드해야 하므로 Node 18 버전을 alpine 이미지로 사용합니다.
# alpine 이미지: 엔진 구동에 필요한 최소한의 패키지만 모아 놓은 형태의 이미지로, 빌드 속도를 최적화하기 위해 사용합니다.
FROM node:18-alpine AS builder

# 작업 디렉토리를 Root 경로로 설정합니다.
WORKDIR /

# 로컬 파일의 현재 폴더 기준 (.) 에서 Docker 컨테이너 런타임의 현재 폴더 기준 (.) 으로 복사합니다.
# 로컬 파일을 도커 컨테이너로 복사해야 해당 파일들을 도커 컨테이너에서 빌드 할 수 있습니다.
COPY . .

# 로컬에서 복사한 프로젝트 파일 내의 `package.json` 파일을 기준으로 `yarn install` 을 실행합니다.
# `--immutable --immutable-cache --check-cache`:
#   package.json 의 라이브러리를 일일이 다운받는 것이 아니라,
#   yarn.lock 에 미리 작성되어 있는 의존성 정의를 기반으로 모듈을 빠르게 설치합니다.
#   주로 개발 환경보다는 빌드 환경에서 사용하는 옵션입니다.
RUN yarn install --immutable --immutable-cache --check-cache

# 로컬의 `yarn build` 명령어와 동일합니다.
RUN yarn build

# 위에서 빌드한 파일을 새로운 node:16 기반 이미지에 복사합니다.
FROM node:16-alpine
WORKDIR /
COPY --from=builder / ./

# 도커 외부 3000 포트로 서비스를 노출합니다. (Docker 공식 문서 참조)
EXPOSE 3000

# `yarn start` 커맨드를 최종적으로 실행하여 애플리케이션의 정상 동작 여부를 확인합니다.
CMD ["yarn", "start"]
