# PDM
from flask import Blueprint

# LOCAL
from utils.system import get_ip, docker_ps, get_hostname

system_bp = Blueprint("system_routes", __name__)


@system_bp.route("/docker_ps", methods=["GET"])
def call_docker_ps():
    output = docker_ps()
    response = {"running": output}
    return response


@system_bp.route("/system_info", methods=["GET"])
def call_system_info():
    response = {"hostname": get_hostname(), "ip": get_ip()}
    return response
