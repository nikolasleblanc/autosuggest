#!/bin/bash

sed -i -e "s/API_HOST/$API_SERVICE_SERVICE_HOST/g" nginx/default.conf
sed -i -e "s/API_PORT/$API_SERVICE_SERVICE_PORT/g" nginx/default.conf