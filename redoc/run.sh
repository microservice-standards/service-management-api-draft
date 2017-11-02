#! /bin/sh
set -e

INDEX_FILE=/usr/share/nginx/html/index.html
exec nginx -g 'daemon off;'
