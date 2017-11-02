here="$(dirname "$BASH_SOURCE")"
cd $here
docker-compose up -d
#open API Console
open http://localhost:8080
#open API ReDoc
open http://localhost:8888

