let startbutton = document.getElementById("start");
let title = document.getElementById("hi");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let questiontext = document.getElementById("questiontext");
let questionbox = document.getElementById("questionbox");

let questions = ["Do you follow trends you see online?:", "Choose the worst event in your opinion:", "Are you addicted to your phone?:", "What do you look for in a partner?:", "Which color would you choose?:",  "What’s the biggest red flag?:", "What is your role in a group project?:", "Which superpower would you choose?:", "What job would you choose?:", "How do you react when you fail?:", "Which vee is your least favorite?:"];

let AC1 = ["All the time. I keep up with the latest popular things.", "When people don’t listen to me.", "Yes.", "Funny.", "Blue.", "Manipulation.", "Control freak.", "Invulnerable from harm or sickness.", "Doctor", "Completely break down.", "Vox"];
let AC2 = ["No, and I see no point in doing so.", "Things not going my way.", "Yes, and other forms of techonology.", "Attractive.", "Red.", "Chopped", "Presentor", "The ability to make people do what I want them to do.", "Model.", "Who cares? Just try again.", "Valentino."];
let AC3 = ["I set the trends.", "Embarassing myself infront of others.", "No.", "Successful.", "Purple.", "No time for you.", "Strategist", "Teleportation", "Educator", "Do everything in my power to succeed next time.", "Velvette."];
let AC4 = ["none", "When I don't get something I really wanted.", "none", "Freaky.", "Black.", "Treats you poorly.", "Making the presentation look cool.", "The ability to fly.", "Movie director/Actor.", "Blame others.", "none"];
let AC5 = ["none", "Being ignored by others.", "none", "none", "White.", "Treats others poorly.", "Letting others do the work.", "Ability to seduce/attract anyone.", "Engineer.", "none", "none"];

let buttons = [b1, b2, b3, b4, b5];
let answerchoices = [AC1, AC2, AC3, AC4, AC5];

let vox = 0;
let vel = 0;
let val = 0;

question = 0;

startbutton.onclick = function(){
    title.style.display = "none";
    b1.style.display = "flex";
    b2.style.display = "flex";
    b3.style.display = "flex";
    b4.style.display = "flex";
    b5.style.display = "flex";
    questiontext.style.display = "flex";
    questionbox.style.display = "flex";
    gamestart();
}


function gamestart(){
    show();
}


function show(){

    if(question != 11){
        questiontext.textContent = "Question " + (question + 1) + ".\n" + questions[question]; 
        questionbox.style.width = "fit-content";
        questionbox.style.paddingLeft = "3px";
        questionbox.style.paddingRight = "3px";
        for(let i = 0; i < 5; i++){
            buttons[i].textContent = answerchoices[i][question];
            buttons[i].style.width = "fit-content";
            buttons[i].style.display = "flex";
            if(buttons[i].textContent === "none"){
                buttons[i].style.display = "none";
            }
        }
    }
    else{
        for(let i = 0; i < 5; i++){
            buttons[i].style.display = "none";
            questionbox.style.display = "none";
        }
        determinewinner();
    }

}

function score(button){
    if(question === 0){
        switch(true){
            case(button===1):
                vel++;
                break;
            case(button===2):
                val++;
                break;
            case(button===3):
                vel++;
                vox++;
                break;
        }
    }
    else if(question === 1){
        switch(true){
            case(button===1):
                val++;
                break;
            case(button===2):
                vox++;
                val++;
                break;
            case(button===3):
                vox++;
                vel++;
                break;
            case(button===4):
                val++;
                break;
            case(button===5):
                vox++;
                vel++;
                break;
        }

    }
    else if(question === 2){
        switch(true){
            case(button===1):
                vel++;
                break;
            case(button===2):
                vox++;
                break;
            case(button===3):
                val++;
                break;
        }
    }
    else if(question === 3){
         switch(true){
            case(button===1):
                vel++;
                vox++;
                break;
            case(button===2):
                vel++;
                val++;
                break;
            case(button===3):
                vox++;
                break;
            case(button===4):
                val++;
        }  
    }
    else if(question === 4){
        switch(true){
            case(button===1):
                vox++;
                break;
            case(button===2):
                vel++;
                val++;
                break;
            case(button===3):
                val++;
                break;
            case(button===4):
                vel++;
                break;
            case(button===5):
                val++;
                break;
        }
        
    }
    else if(question === 5){
        switch(true){
            case(button===1):
                val++;
                break;
            case(button===2):
                vox++;
                val++;
                break;
            case(button===3):
                val++;
                vel++;
                break;
            case(button===4):
                vel++;
                break;
        }
        
    }
    else if(question === 6){
        switch(true){
            case(button===1):
                val++;
                vel++;
                break;
            case(button===2):
                vox++;
                break;
            case(button===3):
                vel++;
                vox++;
                break;
            case(button===4):
                vel++;
                break;
            case(button===5):
                val++;
                break;
        }
    }
    else if(question === 7){
        switch(true){
            case(button===1):
                vox++;
                break;
            case(button===2):
                vox++;
                val++;
                break;
            case(button===3):
                vox++;
                break;
            case(button===4):
                val++;
                break;
            case(button===5):
                vel++;
                break;
        }
        
    }
    else if(question === 8){
        switch(true){
            case(button===1):
                vel++;
                break;
            case(button===2):
                vel++;
                val++;
                break;
            case(button===3):
                vox++;
                break;
            case(button===4):
                val++;
                break;
            case(button===5):
                vel++;
                break;
        }
        
    }
    else if(question === 9){
        switch(true){
            case(button===1):
                vox++;
                break;
            case(button===2):
                vel++;
                break;
            case(button===3):
                val++;
                vox++;
                break;
            case(button===4):
                val++;
                break;
        }
        
    }
    else if(question === 10 ){
        switch(true){
            case(button===1):
                vel++;
                val++;
                break;
            case(button===2):
                vel++;
                vox++;
                break;
            case(button===3):
                val++;
                vox++;
                break;
        }
        
    }

}

b1.onclick = function(){
    score(1);
    question++;
    show();
}

b2.onclick = function(){
    score(2);
    question++;
    show();
}

b3.onclick = function(){
    score(3);
    question++;
    show();
}

b4.onclick = function(){
    score(4);
    question++;
    show();
}

b5.onclick = function(){
    score(5);
    question++;
    show();
}
//todo- make the score checker



function determinewinner(){
    let options = [vox, val, vel];
    let textvalues = ["vox", "val", "vel"];
    
    let winners = [];
    let numbers = [];

    let truewin = "";
    let max = 0;
    for(let i = 0; i < 3; i++){
        if(options[i] > max){
            max = options[i];
        }
    }
    for(let k = 0; k < 3; k++){
        if(options[k] == max){
            winners.push(textvalues[k]);
            numbers.push(k);
        }
    }
    if(winners.length > 1){
        truewin = winners[Math.floor(Math.random() * winners.length)];
    }
    else{
        truewin = winners[0];   
    }
    console.log(truewin);
    results(truewin);
}

function results(x){
    pic = document.getElementById(x);
    pic.style.display = "flex";
    questionbox.style.display = "flex";
    questionbox.style.width = "370px";
    questiontext.style.display = "flex";
    if(x == "vox"){
        questiontext.textContent = "VOX: You value control, influence, and being heard, especially in fast-moving or high-pressure situations. You’re highly aware of trends, information, and how power flows through systems and people. When things don’t go your way, it’s usually because you feel ignored rather than incapable. This suggests you’re analytical, strategic, and driven by recognition and relevance."
    } 
    else if(x == "vel"){
        questiontext.textContent = "VELVETTE: You’re confident in your identity and don’t wait for permission to stand out or set trends. You thrive on self-expression, ambition, and proving your worth through success rather than approval. Embarrassment or failure doesn’t stop you — it motivates you to come back stronger. This points to someone bold, creative, and highly self-driven."
       
    }
    else{
        questiontext.textContent = "VALENTINO: You’re emotionally intense and deeply affected by how others treat or perceive you. You crave connection, validation, and control over your environment to protect yourself from being overlooked. When things fall apart, your reactions come from strong feelings rather than logic. This suggests you’re passionate, dramatic, and motivated by relationships and emotional power."
    }
}