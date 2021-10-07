#!/bin/bash

docker run -e RULES_FILE=redirections.json \
  --network host \
  -p 80:80 \
  -v $(pwd)/redirections.json:/redirections.json hamal
