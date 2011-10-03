import jsonrpc

rpc = jsonrpc.ServerProxy(jsonrpc.JsonRpc10(), 
                  jsonrpc.TransportTcpIp(addr=("127.0.0.1", 1234)))

for i in range(10):
    print(rpc.RPCFunc.Echo("hello " + str(i)))

