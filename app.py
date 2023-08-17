from flask import Flask, render_template, request, jsonify

app = Flask(__name__, template_folder='templates')


def pounds_to_kg(pounds):
    return pounds * 0.45359237


def kg_to_pounds(kg):
    return kg * 2.20462262


def inches_to_cm(inches):
    return inches * 2.54


def cm_to_inches(cm):
    return cm / 2.54


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/convert', methods=['POST'])
def convert():
    data = request.json
    choice = data['choice']
    value = float(data['value'])
    result = None

    if choice == 'pounds_to_kg':
        result = pounds_to_kg(value)
    elif choice == 'kg_to_pounds':
        result = kg_to_pounds(value)
    elif choice == 'inches_to_cm':
        result = inches_to_cm(value)
    elif choice == 'cm_to_inches':
        result = cm_to_inches(value)

    return jsonify({'result': result})


if __name__ == '__main__':
    app.run(debug=True)
