#!/usr/bin/env bash
. ./config.sh
echo "docker run -p 80:3000 evsikovandrey/$service_name"
docker run -p 80:3000 evsikovandrey/$service_name