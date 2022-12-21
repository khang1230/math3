var name1 = localStorage.getItem("name1")
var name2 = localStorage.getItem("name2")

var player1Score = 0
var player2Score = 0

var answer

document.getElementById("player1Name").innerHTML = name1 + " : "
document.getElementById("player2Name").innerHTML = name2 + " : "
document.getElementById("player1Score").innerHTML = player1Score
document.getElementById("player2Score").innerHTML = player2Score


function applynumber()
{
    number1 = document.getElementById("num1").value
    number2 = document.getElementById("num2").value

    answer = parseInt(number1) * parseInt(number2)

    var question_number = "<h4>" + number1 + " X " + number2 + "</h4>"
    var input_box = "<br>Answer : <input type = 'text' id = 'input'>"
    var check_button = "<br> <button class = 'btn btn-info' onclick = 'check()'>Check</button>"
    var row = question_number + input_box + check_button

    document.getElementById("output").innerHTML=row
    document.getElementById("number1").value=""
    document.getElementById("number2").value=""
}