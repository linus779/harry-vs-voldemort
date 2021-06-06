score = 0;
cross = true;

audio = new Audio('music\\back_music.mp3');
audiogo = new Audio('music\\gameOver.mp3');
setTimeout(() => {
    audio.play()
})

document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        harry = document.querySelector('.harry');
        harry.classList.add('animateHarry');
        setTimeout(() => {
            harry.classList.remove('animateHarry')
        }, 700);
    }
    else if (e.keyCode == 39) {
        harry = document.querySelector('.harry');
        harryX = parseInt(window.getComputedStyle(harry, null).getPropertyValue('left'));
        harry.style.left = harryX + 112 + "px";
    }
    else if (e.keyCode == 37) {
        harry = document.querySelector('.harry');
        harryX = parseInt(window.getComputedStyle(harry, null).getPropertyValue('left'));
        harry.style.left = harryX - 112 + "px";
    }
}


setInterval(() => {
    harry = document.querySelector('.harry');
    gameOver = document.querySelector('.gameOver');
    voldemort = document.querySelector('.voldemort');

    hx = parseInt(window.getComputedStyle(harry, null).getPropertyValue('left'));
    hy = parseInt(window.getComputedStyle(harry, null).getPropertyValue('top'));

    vx = parseInt(window.getComputedStyle(voldemort, null).getPropertyValue('left'));
    vy = parseInt(window.getComputedStyle(voldemort, null).getPropertyValue('top'));

    offsetX = Math.abs(hx - vx);
    offsetY = Math.abs(hy - vy);
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload to play again";
        voldemort.classList.remove('animateVoldemort');
        audiogo.play();
        setTimeout(() => {
            audio.pause();
        })
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(voldemort, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            console.log('New animation duration', newDur)
            voldemort.style.animationDuration = newDur + 's';
        }, 500);

    }
}, 10)

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}