function ready() {
    var problemPicker = Math.floor(Math.random() * 6)
    var problemPicked
    var colorPicker = Math.floor(Math.random() * 6)

    switch (problemPicker) {
        case 0:
            problemPicked = "RED"
            break
        case 1:
            problemPicked = "BLUE"
            break
        case 2:
            problemPicked = "GREEN"
            break
        case 3:
            problemPicked = "YELLOW"
            break
        case 4:
            problemPicked = "VIOLET"
            break
        case 5:
            problemPicked = "ORANGE"
            break
    }

    switch (colorPicker) {
        case 0://red
            document.getElementById("problem").style.color = "rgb(255,0,0)"
            break
        case 1://blue
            document.getElementById("problem").style.color = "rgb(47,89,223)"
            break
        case 2://yellow
            document.getElementById("problem").style.color = "rgb(255,255,0)"
            break
        case 3://green
            document.getElementById("problem").style.color = "rgb(25,162,58)"
            break
        case 4://violet
            document.getElementById("problem").style.color = "rgb(128,0,128)"
            break
        case 5://orange
            document.getElementById("problem").style.color = "#ff8c00"
            break
    }
    document.getElementById("problem").innerHTML = problemPicked

    var problemContColor = document.getElementById("problemCont").style.backgroundPosition
    
    if (problemContColor == "left center")
        document.getElementById("problemCont").style.backgroundPosition = "right"
    else
        document.getElementById("problemCont").style.backgroundPosition = "left"
    
    hardFactor()
}

var hardPicker
function hardFactor() {
    var word = document.getElementById("word")
    var color = document.getElementById("color")
    hardPicker = Math.floor(Math.random() * 2)

    switch(hardPicker) {
        case 0:
            word.style.opacity = "1"
            word.style.backgroundPosition = "left"

            color.style.opacity = ".3"
            color.style.backgroundPosition = "right"
            break;
        case 1:
            color.style.opacity = "1"
            color.style.backgroundPosition = "left"

            word.style.opacity = ".3"
            word.style.backgroundPosition = "right"
            break;
    }
}

function chosenBox(value, id) {
    var problemColor = document.getElementById("problem").style.color
    var problemWord = document.getElementById("problem").innerHTML
    var hardPicked = hardPicker
    var WORDorCOLOR
    var probWORDorCOLOR
    var doubleTime = 1

    if(hardPicked == 0) {
        WORDorCOLOR = id
        probWORDorCOLOR = problemWord.toLowerCase()
    } else if (hardPicked == 1) {
        WORDorCOLOR = value
        probWORDorCOLOR = problemColor
    }

    if(document.getElementById("countdown").value <= 10)
        doubleTime = 2

    if(probWORDorCOLOR == WORDorCOLOR){
       if(document.getElementById("score").value >= 150)
            document.getElementById("score").value-= (-4 * doubleTime)
        else if(document.getElementById("score").value >= 120)
            document.getElementById("score").value-= (-3 * doubleTime)
        else if(document.getElementById("score").value >= 105)
            document.getElementById("score").value-= (-2 * doubleTime)
        else
            document.getElementById("score").value-= (-1 * doubleTime)

       document.getElementById("score").style.backgroundColor = "#32cd32"
       document.getElementById("score").style.borderColor = "#32cd32"
    } else {
        if(document.getElementById("score").value >= 150)
            document.getElementById("score").value-= (+4 * doubleTime)
        else if(document.getElementById("score").value >= 120)
            document.getElementById("score").value-= (+3 * doubleTime)
        else if(document.getElementById("score").value >= 105)
            document.getElementById("score").value-= (+2 * doubleTime)
        else
            document.getElementById("score").value-= (+1 * doubleTime)

        document.getElementById("score").style.backgroundColor = "#ff1818"
        document.getElementById("score").style.borderColor = "#ff1818"
    }

    document.getElementById("score").style.color = "white"
    ready()
}

var time = 30
let interval = setInterval(countdown, 1000);
function countdown() {
    time -= +1
    document.getElementById("countdown").value = time
    
    if(time % 2 == 0)
        document.getElementById("countdown").style.backgroundColor = "#ff1818"
    else
        document.getElementById("countdown").style.backgroundColor = "#ffcccb"
    

    if(time <= 10) {
        document.getElementById("highRisk").style.backgroundPosition = "left"
        document.getElementById("highRisk").style.color = "black"
    }

    if(time == 0) {
        clearInterval(interval)
        var totalScore = document.getElementById("score").value
        document.getElementsByClassName('choices').disabled = true
        document.getElementById('gameOver').style.display = 'block'
        document.getElementById('finalScore').innerHTML = totalScore
    }
}

var time2 = 30
let interval2 = setInterval (fastReaction, 100) 
function fastReaction() {
    if(document.getElementById("score").value >= 105) {
        document.getElementById("plusTwoScore").style.backgroundPosition = "left"
        document.getElementById("plusTwoScore").style.color = "black"
    } else {
        document.getElementById("plusTwoScore").style.backgroundPosition = "right"
        document.getElementById("plusTwoScore").style.color = "white"
    }

    if(document.getElementById("score").value >= 120) {
        document.getElementById("plusThreeScore").style.backgroundPosition = "left"
        document.getElementById("plusThreeScore").style.color = "black"
    } else {
        document.getElementById("plusThreeScore").style.backgroundPosition = "right"
        document.getElementById("plusThreeScore").style.color = "white"
    }

    if(document.getElementById("score").value >= 150) {
        document.getElementById("plusFourScore").style.backgroundPosition = "left"
        document.getElementById("plusFourScore").style.color = "black"
    } else {
        document.getElementById("plusFourScore").style.backgroundPosition = "right"
        document.getElementById("plusFourScore").style.color = "white"
    }
}

function playAgain() {
    document.getElementById('gameOver').style.display = 'none'
    ready()
    document.getElementsByClassName('choices').disabled = false
    interval = setInterval(countdown, 1000)
    time = 30
    document.getElementById("highRisk").style.backgroundPosition = "right"
    document.getElementById("highRisk").style.color = "white"
    document.getElementById('countdown').value = '30'
    document.getElementById('score').value = '100'
}