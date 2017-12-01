here="$(dirname "$BASH_SOURCE")"
cd $here
docker rmi my/service-management-api-redoc
docker rmi my/service-management-api-draft
