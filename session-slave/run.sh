#!/usr/bin/env bash
. ./config.sh
echo "docker run -p 8080:8080 evsikovandrey/$service_name"
docker run -p 8080:8080 evsikovandrey/$service_name