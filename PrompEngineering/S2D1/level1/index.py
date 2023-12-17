from flask import Flask, request, render_template

app = Flask(__name__)

# Create an empty dictionary to store data
data = {}



@app.route('/create', methods=['GET', 'POST'])
def create():
    if request.method == 'POST':
        key = request.form['key']
        value = request.form['value']
        data[key] = value
    return render_template('html/create.html')

@app.route('/read')
def read():
    return render_template('html/read.html', data=data)


@app.route('/update', methods=['GET', 'POST'])
def update():
    if request.method == 'POST':
        key = request.form['key']
        value = request.form['value']
        if key in data:
            data[key] = value
    return render_template('html/update.html')

@app.route('/delete', methods=['GET', 'POST'])
def delete():
    if request.method == 'POST':
        key = request.form['key']
        if key in data:
            del data[key]
    return render_template('html/delete.html')

if __name__ == '__main__':
    app.run(debug=True)
