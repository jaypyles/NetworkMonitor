# STL
import asyncio

# PDM
from flask import Blueprint

# LOCAL
from NetworkMonitor.utils.network_speed import get_ping, get_upload, get_download

network_speed_bp = Blueprint("network_speed_routes", __name__)


@network_speed_bp.route("/download_speed", methods=["GET"])
async def get_downloads():
    download_task = asyncio.create_task(get_download())
    await asyncio.gather(download_task)
    download_result = download_task.result()
    response = {"download": download_result}
    return response


@network_speed_bp.route("/upload_speed", methods=["GET"])
async def get_uploads():
    upload_task = asyncio.create_task(get_upload())
    await asyncio.gather(upload_task)
    upload_result = upload_task.result()
    response = {"upload": upload_result}
    return response


@network_speed_bp.route("/ping", methods=["GET"])
async def get_ping_route():
    ping_task = asyncio.create_task(get_ping())
    await asyncio.gather(ping_task)
    ping_result = ping_task.result()
    response = {"ping": ping_result}
    return response
