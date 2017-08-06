FROM nginx:1.13-alpine

ENV APP_PATH /app
ENV PATH $APP_PATH/node_modules/@angular/cli/bin/:$PATH

RUN apk add --update --no-cache nodejs && mkdir $APP_PATH && rm -rf /etc/nginx/conf.d/*
WORKDIR $APP_PATH

COPY . .

CMD [
  "sed -i -e \"s/API_HOST/$API_SERVICE_SERVICE_HOST/g\" nginx/default.conf"
]

CMD [
  "sed -i -e \"s/API_POST/$API_SERVICE_SERVICE_POST/g\" nginx/default.conf"
]

COPY nginx/default.conf /etc/nginx/conf.d/

RUN npm install \
  && ng build --aot --prod \
  && rm -rf /usr/share/nginx/html/* \
  && mv ./dist/* /usr/share/nginx/html/ \
  && npm cache clean \
  && apk del nodejs libstdc++ libgcc libuv http-parser ca-certificates \
  && rm -rf ./*

CMD ["nginx", "-g", "daemon off;"]