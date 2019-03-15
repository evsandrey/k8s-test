#!/usr/bin/env bash
. ./config.sh
echo "docker build -t evsikovandrey/$service_name ."
docker build -t evsikovandrey/$service_name .