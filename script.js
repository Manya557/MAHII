/* ================================================= */
/* 🚀 PAGE NAVIGATION (SMOOTH + SAFE) */
/* ================================================= */

function next(page){
  document.body.style.transition = "opacity 0.3s ease";
  document.body.style.opacity = "0";

  setTimeout(()=>{
    window.location.href = page;
  }, 300);
}


/* ================================================= */
/* ✨ PAGE LOAD FADE-IN (FIXED) */
/* ================================================= */

window.addEventListener("load", ()=>{
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.4s ease";

  requestAnimationFrame(()=>{
    document.body.style.opacity = "1";
  });
});


/* ================================================= */
/* 📸 RANDOM POLAROID TILT */
/* ================================================= */

document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelectorAll('.polaroid').forEach(card=>{
    const rotate = Math.random()*6 - 3;
    card.style.transform = `rotate(${rotate}deg)`;
  });
});


/* ================================================= */
/* 🎵 AUTO PLAY AUDIO (PAGE14 FIX) */
/* ================================================= */

window.addEventListener("DOMContentLoaded", ()=>{
  const song = document.getElementById("song");

  if(song){
    song.play().catch(()=>{
      // fallback: play on first click
      document.addEventListener("click", ()=>{
        song.play();
      }, { once:true });
    });
  }
});


/* ================================================= */
/* 🌸 OPTIONAL: FLOATING PETALS (LIGHT EFFECT) */
/* ================================================= */

function spawnPetal(){
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.innerHTML = "🌸";

  petal.style.left = Math.random()*100 + "vw";
  petal.style.top = "-20px";
  petal.style.fontSize = (12 + Math.random()*16) + "px";
  petal.style.animationDuration = (6 + Math.random()*5) + "s";

  document.body.appendChild(petal);

  setTimeout(()=>petal.remove(), 11000);
}

/* only run on story pages (not heavy pages like cake) */
if(!window.location.pathname.includes("cake")){
  setInterval(spawnPetal, 1200);
}