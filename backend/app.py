from app import app
import sys

if "--dev" in sys.argv:
    app.run(debug=True, host="127.0.0.1", port=8000)