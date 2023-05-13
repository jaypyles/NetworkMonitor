import subprocess


def docker_ps():
    command = ["docker", "ps", "-a"]
    result = subprocess.run(command, capture_output=True, text=True)
    return result.stdout
