import web, json, webbrowser, multiprocessing

urls = ( # URLs mapped to handler classes
    '/', 'home',
)

# Where the templates live:
render = web.template.render('templates/')

class home:
    def GET(self): # Show displaydata.html
        return render.displaydata()

    def POST(self):
        input = web.input()
        web.header('Content-Type', 'application/json')
        return json.dumps({ # Do trivial operations:
            'txt' : input.mod.lower(),
            'dat' : "%.3f" % float(input.num)
            })

if __name__ == '__main__':
    app = web.application(urls, globals())
    multiprocessing.Process(target=app.run).start()
    webbrowser.open_new_tab("http://0.0.0.0:8080/")

