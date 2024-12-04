#!/bin/sh

# Create runtime environment variables file
cat <<EOF > /usr/share/nginx/html/env-config.js
window.REACT_APP_API_URL="${REACT_APP_API_URL}";
window.REACT_APP_SENTRY_DSN="${REACT_APP_SENTRY_DSN}";
window.REACT_APP_SENTRY_AUTH_TOKEN="${REACT_APP_SENTRY_AUTH_TOKEN}";
EOF

# Start nginx
exec "$@"
