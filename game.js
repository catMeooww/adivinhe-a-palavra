questionTurn = "player1";
answerTurn = "player2";
function loadPlayers() {
    player1Name = localStorage.getItem("player1");
    player2Name = localStorage.getItem("player2");

    console.log("players: " + player1Name + " | " + player2Name);

    player1Score = 0;
    player2Score = 0;

    document.getElementById("name1").innerText = player1Name + " : ";
    document.getElementById("name2").innerText = player2Name + " : ";

    document.getElementById("score1").innerText = player1Score;
    document.getElementById("score2").innerText = player2Score;

    document.getElementById("playerQ").innerText = "Turno de Pergunta - " + player1Name;
    document.getElementById("playerA").innerText = "Turno de Resposta - " + player2Name;
}
function send() {
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log(getWord + "|" + word);

    charAt1 = word.charAt(Math.random(word.lenght));
    console.log(charAt1);

    lenghtDivide2 = Math.floor(word.length / 2);
    charAt2 = word.charAt(lenghtDivide2);
    console.log(lenghtDivide2 + "|" + charAt2);

    lenghtMinus1 = word.length - 1;
    charAt3 = word.charAt(lenghtMinus1);
    console.log(charAt3);

    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = word.replace(charAt2, "_");
    removeCharAt3 = word.replace(charAt3, "_");
    console.log(removeCharAt3);

    question_word = "<h4 id='wordDisplay'> Palavra: " + word.replace(charAt1, "_").replace(charAt2, "_").replace(charAt3, "_") + "</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_word + inputBox + checkButton;

    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}
function check() {
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();
    console.log(getAnswer + "|" + answer);
    if (answer == word) {
        if (answerTurn == "player1") {
            player1Score++;
            document.getElementById("score1").innerHTML = player1Score;
        } else {
            player2Score++;
            document.getElementById("score2").innerHTML = player2Score;
        }
        if (questionTurn == "player1") {
            questionTurn = "player2";
            document.getElementById("playerQ").innerHTML = "Turno de Pergunta - " + player2Name;
        }else{
            questionTurn = "player1";
            document.getElementById("playerQ").innerHTML = "Turno de Pergunta - " + player1Name;
        }
        if(answerTurn == "player1"){
            answerTurn = "player2";
            document.getElementById("playerA").innerHTML = "Turno de Resposta - " + player2Name;
        }else{
            answerTurn = "player1";
            document.getElementById("playerA").innerHTML = "Turno de Resposta - " + player1Name;
        }
        document.getElementById("output").innerHTML = "";
    }
}