# STL
import socket
import subprocess


def docker_ps():
    command = ["docker", "ps", "-a"]
    result = subprocess.run(command, capture_output=True, text=True)
    return result.stdout


def get_hostname():
    return socket.gethostname()


def get_ip():
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        sock.connect(("8.8.8.8", 80))
        ip_address = sock.getsockname()[0]
        sock.close()
        return ip_address
    except socket.error:
        return "Unknown"
