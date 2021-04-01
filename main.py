from flask import Flask, render_template, url_for, request, redirect, session,g

app = Flask(__name__)

args = []

@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        pass
    else:
        return render_template('index.html', args=args)

if __name__ == "__main__":
    app.run(debug=True)
    #app.run(port='80', host='192.168.178.29')