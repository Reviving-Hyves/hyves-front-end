#!/bin/sh

# Create runtime environment variables file
cat <<EOF > /usr/share/nginx/html/env-config.js
window.REACT_APP_API_URL="${REACT_APP_API_URL}";
EOF

# Start nginx
exec "$@"
