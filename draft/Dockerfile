FROM node:6.11.5-alpine

RUN mkdir -p /opt/draft
COPY . /opt/draft

WORKDIR /opt/draft

RUN npm install -g swagger && npm install
ENV PORT 1111

EXPOSE 1111
ENTRYPOINT ["swagger","project"]
CMD ["start","-m"]


