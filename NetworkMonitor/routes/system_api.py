# PDM
from flask import Blueprint

# LOCAL
from NetworkMonitor.utils.system import (
    get_ip,
    docker_ps,
    get_hostname,
    get_cpu_percentage,
    get_ram_percentage,
)

system_bp = Blueprint("system_routes", __name__)


@system_bp.route("/docker_ps", methods=["GET"])
def call_docker_ps():
    containers = docker_ps()
    return {"containers": containers}


@system_bp.route("/system_info", methods=["GET"])
def call_system_info():
    response = {
        "hostname": get_hostname(),
        "ip": get_ip(),
        "ram": get_ram_percentage(),
        "cpu": get_cpu_percentage(),
    }
    return response
