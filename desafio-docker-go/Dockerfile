FROM golang:latest AS fisrtStage

WORKDIR /usr/src/app
COPY ./ .
RUN go build -o start start.go

FROM scratch
WORKDIR /usr/src/app
COPY --from=fisrtStage /usr/src/app/start .

CMD ["./start"]