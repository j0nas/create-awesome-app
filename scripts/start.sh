#!/bin/sh

echo "ENV: $NODE_ENV"
if [ "$NODE_ENV" = "production" ]; then
  npm run build && npm run start
else
  npm run dev
fi
