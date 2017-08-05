FROM nginx
COPY nginx/default.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html
