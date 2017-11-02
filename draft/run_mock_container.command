here="$(dirname "$BASH_SOURCE")"
cd $here
docker run -it --rm -p 1111:1111 -v `pwd`/api:/opt/draft/api my/service-management-api-draft
