# PDM
from flask import Flask, render_template

# LOCAL
from NetworkMonitor.routes.system_api import system_bp
from NetworkMonitor.routes.network_speed_api import network_speed_bp

app = Flask(__name__)
app.register_blueprint(network_speed_bp, url_prefix="/routes")
app.register_blueprint(system_bp, url_prefix="/routes")


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run()
