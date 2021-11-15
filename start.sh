#!/bin/bash

docker run -e RULES_FILE=redirections.yml \
  -p 80:80 \
  -v $(pwd)/redirections.yml:/redirections.yml hamal
