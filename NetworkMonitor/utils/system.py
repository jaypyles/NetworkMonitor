# STL
import socket
import subprocess

# PDM
import psutil


def docker_ps():
    """Get output of the `docker ps -a` command"""
    command = ["docker", "ps", "-a"]
    result = subprocess.run(command, capture_output=True, text=True)
    return result.stdout


def get_hostname():
    """Get machine's hostname"""
    return socket.gethostname()


def get_ip():
    """Get machine's ip"""
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        sock.connect(("8.8.8.8", 80))
        ip_address = sock.getsockname()[0]
        sock.close()
        return ip_address
    except socket.error:
        return "Unknown"


def get_cpu_percentage():
    """Get machine's CPU usage"""
    return psutil.cpu_percent()


def get_ram_percentage():
    """Get machine's RAM usage"""
    return psutil.virtual_memory().percent
