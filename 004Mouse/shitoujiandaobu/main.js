var r, score = 0, grade = 4, lastHumanChoice;
var lastWinner = "noone", lastComputerChoice = "shitou";

function shitou() {
    document.getElementById("myChoice").innerHTML = "<img src='images/shitou.jpg'>";
    judge("shitou");
    lastHumanChoice = "shitou";
}

function jiandao() {
    document.getElementById("myChoice").innerHTML = "<img src='images/jiandao.jpg'>";
    judge("jiandao");
    lastHumanChoice = "jiandao";
}

function bu() {
    document.getElementById("myChoice").innerHTML = "<img src='images/bu.jpg'>";
    judge("bu");
    lastHumanChoice = "bu";
}

function judge(myChoice) {
    r = 3 * Math.random();
    var computerResult;
    if (grade == 1) {
        computerResult = onlyShiTou();
    } else if (grade == 2) {
        computerResult = learnFromHuman();
    } else if (grade == 3) {
        computerResult = winnerAgain();
        lastComputerChoice = computerResult;
    } else if (grade == 4) {
        computerResult = loseChange();
        lastComputerChoice = computerResult;
    } else {
        computerResult = computerChoice();
    }
    if (myChoice == "shitou") {
        if (computerResult == "shitou") {
            lastWinner = "noone";
        }
        if (computerResult == "jiandao") {
            lastWinner = "human";
            score += 1;
        }
        if (computerResult == "bu") {
            lastWinner = "com";
            score -= 1;
        }

    } else if (myChoice == "jiandao") {
        if (computerResult == "shitou") {
            lastWinner = "com";
            score -= 1
        }
        if (computerResult == "jiandao") {
            lastWinner = "noone";

        }
        if (computerResult == "bu") {
            lastWinner = "human";
            score += 1
        }

    } else {
        if (computerResult == "shitou") {
            lastWinner = "human";
            score += 1
        }
        if (computerResult == "jiandao") {
            lastWinner = "com";
            score -= 1
        }
        if (computerResult == "bu") {
            lastWinner = "noone";

        }
    }
    if (score > 5) {
        score = 0;
        grade += 1;
    }
    document.getElementById("result").innerHTML = "第" + grade + "关，积分：" + score;
    if (grade >= 10) {
        document.getElementById("result").innerHTML = "NB,通关了！";
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

function onlyShiTou() {
    document.getElementById("computerName").innerHTML = "电脑雷神";
    document.getElementById("computerChoice").innerHTML = "<img src='images/shitou.jpg' alt='石头'>";
    return "shitou";
}

function learnFromHuman() {
    document.getElementById("computerName").innerHTML = "电脑洛基";
    document.getElementById("computerChoice").innerHTML = "<img src='images/" + lastHumanChoice + ".jpg'>";
    return lastHumanChoice;
}

function winnerAgain() {
    document.getElementById("computerName").innerHTML = "赢了还出";
    if (lastWinner == "com") {
        document.getElementById("computerChoice").innerHTML = "<img src='images/" + lastComputerChoice + ".jpg'>";
        return lastComputerChoice;
    }
    var temp = computerChoice();
    document.getElementById("computerChoice").innerHTML = "<img src='images/" + temp + ".jpg' alt='石头'>";
    return temp;
}

function loseChange() {
    document.getElementById("computerName").innerHTML = "输了就换";
    if (lastWinner == "human") {
        var temp = getResultExclude(lastComputerChoice);
        document.getElementById("computerChoice").innerHTML = "<img src='images/" + temp + ".jpg'>";
        return temp;
    }
    temp = computerChoice();
    document.getElementById("computerChoice").innerHTML = "<img src='images/" + temp + ".jpg'>";
    return temp;
}

function getResultExclude(exclusion) {
    var temp = computerChoice();
    if (temp == exclusion) {
        return getResultExclude(exclusion);
    } else {
        return temp;
    }
}
