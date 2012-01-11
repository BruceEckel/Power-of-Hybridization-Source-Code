import tornado.ioloop, tornado.web, tornado.websocket, os.path

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("CountClient.html")

class ClientSocket(tornado.websocket.WebSocketHandler):
    def counter(self):
        self.write_message(str(self.count))
        self.count += 1
    def open(self):
        print "Opened: " + str(self)
        self.count = 0
        self.timer = tornado.ioloop.PeriodicCallback(self.counter, 1000)
        self.timer.start()
    def on_close(self):
        print "Closed: " + str(self)
        self.timer.stop()

settings = {
    "static_path": os.path.join(os.path.dirname(__file__), "static"),
}

application = tornado.web.Application([
    (r"/", MainHandler),
    (r"/socket", ClientSocket),
], **settings)

if __name__ == "__main__":
    application.listen(8888)
    tornado.ioloop.IOLoop.instance().start()
