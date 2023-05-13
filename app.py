from flask import Flask, render_template

from routes.network_speed_api import network_speed_bp

app = Flask(__name__)
app.register_blueprint(network_speed_bp, url_prefix="/routes")


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run()
