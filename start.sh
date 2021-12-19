#!/bin/bash


# delete existing hamal container
docker rm -f $(docker container ls | grep hamal | cut -d' ' -f1)

docker build -t hamal .
docker run -d -e RULES_FILE=redirections.yml -p 80:80 -v $(pwd)/redirections.yml:/redirections.yml:rw hamal
#docker run -e RULES_FILE=redirections.yml -p 80:80 -v $(pwd)/redirections.yml:/redirections.yml hamal
