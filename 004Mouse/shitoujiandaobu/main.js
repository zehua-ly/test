var r;
function shitou() {
    r = 3 * Math.random();
    document.getElementById("myChoice").innerHTML="<img src='images/shitou.jpg'>";
    var computerResult = computerChoice();
    judge("shitou",computerResult);
}
function jiandao() {
    r = 3 * Math.random();
    document.getElementById("myChoice").innerHTML="<img src='images/jiandao.jpg'>";
    var computerResult = computerChoice();
    judge("jiandao",computerResult);
}
function bu() {
    r = 3 * Math.random();
    document.getElementById("myChoice").innerHTML="<img src='images/bu.jpg'>";
    var computerResult = computerChoice();
    judge("bu",computerResult);
}
function judge(myChoice, computerResult) {
    if (myChoice == "shitou") {
        if (computerResult=="shitou") {
            document.getElementById("result").innerHTML="Not Bad";
        }
        if (computerResult=="jiandao") {
            document.getElementById("result").innerHTML="Win";
        }
        if (computerResult=="bu") {
            document.getElementById("result").innerHTML="Lose";
        }

    }else if (myChoice == "jiandao") {
        if (computerResult=="shitou") {
            document.getElementById("result").innerHTML="Lose";
        }
        if (computerResult=="jiandao") {
            document.getElementById("result").innerHTML="Not Bad";
        }
        if (computerResult=="bu") {
            document.getElementById("result").innerHTML="Win";
        }

    }else{
        if (computerResult=="shitou") {
            document.getElementById("result").innerHTML="Win";
        }
        if (computerResult=="jiandao") {
            document.getElementById("result").innerHTML="Lose";
        }
        if (computerResult=="bu") {
            document.getElementById("result").innerHTML="Not Bad";
        }

    }
}

function go() {
}
function computerChoice() {
    if (r < 1) {
        document.getElementById("computerChoice").innerHTML = "<img src='images/shitou.jpg' alt='石头'>";
        return "shitou";
    } else if (r < 2) {
        document.getElementById("computerChoice").innerHTML = "<img src='images/jiandao.jpg' alt='剪刀'>";
        return "jiandao";
    } else {
        document.getElementById("computerChoice").innerHTML = "<img src='images/bu.jpg' alt='布'>";
        return "bu";
    }

}
