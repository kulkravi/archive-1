#!/bin/bash
docker run -p 4317:4317 -p 4318:4318 -p 8888:8888  -d -v $(pwd)/collector-config.yaml:/etc/otelcol/config.yaml otel/opentelemetry-collector
