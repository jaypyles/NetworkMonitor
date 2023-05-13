# PDM
from flask import Blueprint

# LOCAL
from utils.system import docker_ps

system_bp = Blueprint("system_routes", __name__)


@system_bp.route("/docker_ps", methods=["GET"])
def call_docker_ps():
    output = docker_ps()
    response = {"running": output}
    return response
