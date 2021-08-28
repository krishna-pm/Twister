let words=
[
    {
        jumbled:"papel",
        correct:"apple"
    },
    {
        jumbled:"mputcoer",
        correct:"computer"
    },
    {
        jumbled:"boilem",
        correct:"mobile"
    },
    {
        jumbled:"letobt",
        correct:"bottle"
    },
    {
        jumbled:"arphenoe",
        correct:"earphone"
    },
    {
        jumbled:"obko",
        correct:"book"
    },
    {
        jumbled:"eovt",
        correct:"vote"
    },
    {
        jumbled:"ilhil",
        correct:"hill"
    },
    {
        jumbled:"ocwdr",
        correct:"crowd"
    },
    {
        jumbled:"nnrugni",
        correct:"running"
    }

]

let currentWord=0;
let score=0;

function displayWord()
{
    document.querySelector("#j-word").innerText = 
    words[currentWord].jumbled;

    document.querySelector("#score").innerText=score;
}


displayWord();


function checkAnswer()
{
    
            let answer=document.querySelector("#inp").value;

            if(answer.toLowerCase()===words[currentWord].correct.toLowerCase()){

                score++;

            }

            if(currentWord==words.length-1){

                let msg="";

                if(score===10){
                    msg="Amazing game, score:"+score;
                }
                else if(score===8){
                    msg="Good Game, score:"+score
                }
                else if(score<8){
                    msg="Good Try, score:"+score
                }

                alert(msg);

                location.reload();
            }
            else{
                currentWord++;
                displayWord();
                document.querySelector("#inp").value="";
            }

            

    
}















