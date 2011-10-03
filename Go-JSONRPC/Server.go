package main
 
import ( 
  "rpc/jsonrpc" 
  "rpc" 
  "os" 
  "net" 
  "log" 
) 

type RPCFunc uint8

func (*RPCFunc) Echo(arg *string, result *string) os.Error { 
  log.Print("Arg passed: " + *arg)
  *result = ">" + *arg + "<"
  return nil 
} 

func main() {
  log.Print("Starting Server...")
  l, err := net.Listen("tcp", "localhost:1234")
  defer l.Close()
  if err != nil {
    log.Fatal(err)
  } 
  log.Print("listening on: ", l.Addr())
  rpc.Register(new (RPCFunc))
  for {
    log.Print("waiting for connections ...")
    conn, err := l.Accept() 
    if err != nil {
      log.Printf("accept error: %s", conn)
      continue
    }
    log.Printf("connection started: %v", conn.RemoteAddr())
    go jsonrpc.ServeConn(conn)
  } 
} 
