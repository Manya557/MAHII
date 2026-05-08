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

/* ================================================= */
/* 💌 LETTERS */
/* ================================================= */

const letters = {

1: `
Dear best friend,

Thank you for accepting me exactly the way I am.

Thank you for putting up with all my crap.

Thank you for always being there for me,
making sure I’m okay,
and never leaving my side.

You genuinely became my safe place 💖
`,

2: `
Sometimes I wonder
if I’m doing my job as a best friend
as well as you do.

Because honestly...
you’re wonderful.

You make me laugh,
you cheer me up,
and you make life feel lighter.

I genuinely don’t know
what I’d do without you 🌙
`,

3: `
I know I’ve hurt you before.

And I’m truly sorry for every single time.

The thought of losing our friendship
genuinely scares me.

Because no matter what happens,
I never want us to drift apart.

Our friendship might bend...
but it will never break 💖
`,

4: `
I love you.

I don’t say it enough,
but I really do.

Thank you for staying in my life.

Thank you for growing with me.

Thank you for becoming
my home away from home.

And no matter where life takes us...

I’ll always choose you 🌸
`
};


/* 💌 OPEN LETTER */
function openLetter(num){

  const popup = document.getElementById("letterPopup");
  const content = document.getElementById("letterContent");

  popup.style.display = "flex";

  content.innerHTML = "";

  typeWriter(letters[num], content);

  /* 🎂 LAST LETTER BUTTON */
  if(num === 4){

    setTimeout(()=>{

      const btn = document.createElement("button");

      btn.className = "btn";

      btn.innerHTML = "Open Your Surprise 🎂";

      btn.onclick = ()=>{
        window.location.href = "page18.html";
      };

      content.appendChild(document.createElement("br"));
      content.appendChild(btn);

    },7000);

  }

}


/* ❌ CLOSE */
function closeLetter(){
  document.getElementById("letterPopup").style.display = "none";
}


/* ⌨️ TYPEWRITER */
function typeWriter(text, element){

  let i = 0;

  function typing(){

    if(i < text.length){

      element.innerHTML += text.charAt(i);

      i++;

      setTimeout(typing,25);
    }

  }

  typing();
}
