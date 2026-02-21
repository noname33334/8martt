function createHeart(){
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.bottom = "0";
    heart.style.fontSize = "20px";
    heart.style.animation = "float 4s linear";
    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },4000);
}

setInterval(createHeart, 800);

const style = document.createElement('style');
style.innerHTML = `
@keyframes float{
    0%{transform:translateY(0); opacity:1;}
    100%{transform:translateY(-100vh); opacity:0;}
}`;
document.head.appendChild(style);