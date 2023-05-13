import asyncio

import speedtest

st = speedtest.Speedtest()


async def get_download():
    download_speed = int(await asyncio.to_thread(st.download) / 1000000)
    return download_speed


async def get_upload():
    upload_speed = int(await asyncio.to_thread(st.upload) / 1000000)
    return upload_speed


async def get_ping():
    server = await asyncio.to_thread(st.get_best_server)
    ping = int(server["latency"])
    return ping
