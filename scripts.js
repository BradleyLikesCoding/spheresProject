try {
c = document.getElementById("goatdisplay");
ctx = c.getContext("2d");
ctx.font = "200px Arial";
ctx.strokeText("Loading.", 50, 400);

var goatX = 600;
var goatY = 320;
var goatYV = 0;
var sodaX = null;
var sodaY = null;
var done3 = 0;
var done4 = true;
var done = false;
var done2 = false;
var firstTime = 0;
var firstTime2 = false;
var totallyDone = false;

var beach = new Image();
var cliff = new Image();
var goat = new Image();
var soda = new Image();
var goatScream = new Audio();
var goatFall = new Audio();
var goatDrink = new Audio();

beach.src = "https://spheres.w3spaces.com/beach.png";
cliff.src = "https://spheres.w3spaces.com/cliff.png";
goat.src = "https://spheres.w3spaces.com/goat.png";
soda.src = "https://spheres.w3spaces.com/soda.png";
goatScream.src = "https://spheres.w3spaces.com/screaminggoat.mp3";
goatFall.src = "https://spheres.w3spaces.com/falling.mp3";
goatDrink.src = "https://spheres.w3spaces.com/drinking.mp3";

var loaded = 0;
beach.onload = function() {
  loaded++;
  run();
}
cliff.onload = function() {
  loaded++;
  run();
}
goat.onload = function() {
  loaded++;
  run();
}
soda.onload = function() {
  loaded++;
  run();
}
goatScream.addEventListener("canplaythrough", function() {
  loaded++;
  run();
});
goatFall.addEventListener("canplaythrough", function() {
  loaded++;
  run();
});
goatDrink.addEventListener("canplaythrough", function() {
  loaded++;
  run();
});

var ready = false;

} catch(err) {
  alert(err.message);
}

function run() {
  if(loaded !== 7) {
    return;
  }
  ready = true;
  ctx.clearRect(0, 0, 800, 800);
  ctx.drawImage(cliff, 0, 0);
  ctx.drawImage(goat, goatX, goatY);
}
function moveGoatLeftCliff() {
  if(done) {
    if(done2) {
      beachScene();
    } else {
      makeGoatFly();
    }
  } else {
    goatX--;
    ctx.clearRect(0, 0, 800, 800);
    ctx.drawImage(cliff, 0, 0);
    ctx.drawImage(goat, goatX, goatY);
    if(goatX <= 300) {
      done = true;
    } else if(goatX === 500) {
      alert("This goat is walking on a cliff. It is interacting with the geosphere.");
    }
  }
}
function makeGoatFly() {
  if(firstTime === 0) {
    goatScream.play();
  }
  firstTime++;
  if(firstTime > 500) {
    goatY += goatYV;
    if(goatYV < 2) {
      goatYV += 0.005;
      if(goatYV >= 2) {
        alert("This goat has reached its terminal velocity. It is interacting with the atmosphere.");
        goatFall.play();
      }
    }
    ctx.clearRect(0, 0, 800, 800);
    ctx.drawImage(cliff, 0, 0);
    ctx.drawImage(goat, goatX, goatY);
    if(goatY >= 800) {
      done2 = true;
      goatY = 0;
    }
  }
}

function next() {
  if(ready) {
    setInterval(moveGoatLeftCliff, 1);
    document.getElementById("msg").innerText = "";
  } else {
    alert("I'm still loading! Gimme a sec...");
  }
}

function beachScene() {
  if(goatY > 460) {
    if(firstTime) {
      alert("This goats ankles just interacted with the geosphere. Poor thing.")
      firstTime = false;
      alert("This goat found a sparkling water on the way down! This is a healing sparkling water! It will heal the goat back to full health.");
      setTimeout(startGoatDrown, 2100);
      firstTime2 = true;
      goatDrink.play();
    }

  } else {
    firstTime = true;
   goatX = 600
   goatY += goatYV;
     if(goatYV < 2) {
       goatYV += 0.005;
       if(goatYV >= 2) {
          alert("This goat has reached its terminal velocity. It is interacting with the atmosphere.");
        }
   }
    ctx.clearRect(0, 0, 800, 800);
    ctx.drawImage(beach, 0, 0);
    ctx.drawImage(goat, goatX, goatY);
    ctx.drawImage(soda, goatX + 123, goatY + 30);
   }
  }

  function startGoatDrown() {
    if(firstTime2) {
      firstTime2 = false;
      sodaX = goatX + 123;
      sodaY = goatY + 30;
      alert("This goat just interacted with the hydrosphere and bubbles by drinking sparkling water.");
    }
    setInterval(moveGoatTowardsWater, 1);
  }

  function moveGoatTowardsWater() {
    try {
      if(done4) {
    done3 = 0;
    if(goatX > 150) {
      goatX -= 0.5;
      ctx.clearRect(0, 0, 800, 800);
      ctx.drawImage(beach, 0, 0);
      ctx.drawImage(goat, goatX, goatY);
     ctx.drawImage(soda, sodaX, sodaY);
    } else {
      done3++;
    }
    if(goatY < 630) {
      goatY += 0.25;
      ctx.clearRect(0, 0, 800, 800);
      ctx.drawImage(beach, 0, 0);
      ctx.drawImage(goat, goatX, goatY);
      ctx.drawImage(soda, sodaX, sodaY);
    } else {
    if(done3 === 1) {
      alert("The goat is going interacting with the hydrosphere (swimming)! At least I hope it is...   <------ FORESHADOWING");
      setTimeout(beginSpammingGoatScream, 1500);
      clearInterval(moveGoatTowardsWater);
      done4 = false;
    }
    }
      }
    } catch(err) {
      alert(err.message);
    }
  }

function beginSpammingGoatScream() {
  makeGoatScream();
  setInterval(makeGoatScream, 1400);
  setInterval(makeGoatDrown, 1);
}

function makeGoatScream() {
  if(!totallyDone) {
  goatScream.play();
  }
}

function makeGoatDrown() {
  if(!totallyDone) {
  goatY += 0.2;
  ctx.clearRect(0, 0, 800, 800);
  ctx.drawImage(beach, 0, 0);
  ctx.drawImage(goat, goatX, goatY);
  ctx.drawImage(soda, sodaX, sodaY);
  if(goatY > 900) {
    clearInterval(makeGoatScream);
    clearInterval(makeGoatDrown);
    alert("Sadly, this poor goat is no longer part of the biosphere.");
    document.getElementsByTagName("body")[0].innerHTML = "<h1>Thank you for watching Season 1, Episode 1 of A Goat Interacting With Spheres!</h1>";
    totallyDone = true;
  }
  }
}