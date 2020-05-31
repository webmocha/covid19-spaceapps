# Data stuff

## load data

create db
```sh
docker run -dt --name mongo-space -p 27034:27017 mongo
```

```sh
tar -xvjf gosat-raw.tar.bz2
cd csv-to-mongo
python3 import.py
```

## Run api server

```sh
docker run -d \
  --name sc-gateway \
  -p 4122:4122 \
  -p 4126:4126 \
  --link mongo-space \
  -e DEV=true \
  spaceuptech/gateway:latest
```

open http://localhost:4122/mission-control

create project: `spaceapps`

connect to db: `mongo-space:27017` _yes 27107, not 27034_
db name: `gosat`
alias: `gosat`

create schema: Database Overview, find table: `entries`, [track] it

```graphql
type entries{
  _id: ID! @primary
  time : String
  gain : String
  city : String
  date : DateTime
  latitude : Float
  longitude : Float
  distance : Float
  XCO2 : Float
  XCH4 : Float
  AOT0 : Float
  AOT1 : Float
  AOT2 : Float
}
```

## Sample queries

```sh
curl http://localhost:4122/v1/api/spaceapps/graphql -d
  '{ "query": "{ entries(where: {city: \"LosAngeles\"} ) @gosat { city\n date\n latitude\n longitude\n XCO2 } }" }'
```

## Mission Control

create an ssh tunnel `ssh -NL 4122:localhost:4122 covid19-spaceapps`

open http://localhost:4122/mission-control
