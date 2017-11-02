FROM alpine:3.6

RUN apk add --update curl && \
	rm -rf /var/cache/apk/* && \
	curl https://raw.githubusercontent.com/stoplightio/prism/master/install.sh | sh

ENTRYPOINT ["/usr/local/bin/prism"]
CMD ["validate","--spec","/opt/draft/api/swagger/swagger.yaml"]


