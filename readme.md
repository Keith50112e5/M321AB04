## M321AB04 - Aufgabe 1

#### Starten

node module installieren
`npm i`

docker compose / rabbitMQ starten
`docker compose up -d`

#### Pub / Sub testen

amqp senden
`npm run send`

_neues Terminal öffnen_

amqp empfangen
`npm run receive`
