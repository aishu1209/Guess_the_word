player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");
player_1_score = 0;
player_2_score = 0;

document.getElementById("player_1_name").innerHTML = player_1_name + ":";
document.getElementById("player_2_name").innerHTML = player_2_name + ":";
document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;
document.getElementById("player_question").innerHTML = "Question Turn -" + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn -" + player_2_name;

function send(){
    getWord = document.getElementById("word").value ;
    word = getWord.toLowerCase();

    charAt1 = word.charAt(1);
    
    length_d2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_d2);

    length_m1 = word.length - 1;
    charAt3 = word.charAt(length_m1);

    remove_charAt1 = word.replace(charAt1,"_");
    remove_charAt2 = remove_charAt1.replace(charAt2,"_");
    remove_charAt3 = remove_charAt2.replace(charAt3,"_");

    question_word = "<h4 id='word_display'>Q." + remove_charAt3 + "</h4>";
    input_box = "<br> Answer:<input type='text'id='input_check_box'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";


}

question_turn = "player1";
answer_turn = "player2";

function check(){
    getAnswer = document.getElementById("input_check_box").value;
    answer = getAnswer.toLowerCase();
    if(answer == word){
        if(answer_turn == "player1"){
            player_1_score = player_1_score + 1;
            document.getElementById("player_1_score").innerHTML = player_1_score;

        }

        else{
            player_2_score = player_2_score + 1;
            document.getElementById("player_2_score").innerHTML = player_2_score;
        }
    }

    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn -" + player_2_name;
    }

    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn -" + player_1_name;
    }

    if(answer_turn == "player1"){
       answer_turn = "player2";
       document.getElementById("player_answer").innerHTML = "Answer Turn -" + player_2_name;
    }

    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player_1_name;
    }

    document.getElementById("output").innerHTML = "";
}