let choices = ["tas", "kagit", "makas"];
let choice = Math.floor(Math.random()*choices.length);
let pcChoice = choices[choice];
console.log(pcChoice);
let yazi = document.querySelector(".text");
let rock = document.querySelector(".choiceRock");
let scissor = document.querySelector(".choiceScissor");
let paper = document.querySelector(".choicePaper");

function tas() {
    if (pcChoice=="makas") {
        yazi.style.color = "yellowgreen";
        yazi.innerHTML = `Kazandın! Taş makası kırar!`;
        scissor.style.display = "block";
        setTimeout(() => {
            location.reload();
        }, 3000);
    } 
    else if(pcChoice=="kagit"){
        yazi.innerHTML = `Kaybettin! Kağıt taşı kaplar!`;
        yazi.style.color = "red";
        paper.style.display = "block";
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    else{
        yazi.innerHTML = `Berabere! yeni hamle yap!`;
        rock.style.display = "block";
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
}
function makas() {
    if (pcChoice=="makas") {
        yazi.innerHTML = `Berabere! yeni hamle yap!`;
        scissor.style.display = "block";
        setTimeout(() => {
            location.reload();
        }, 3000);
    } 
    else if(pcChoice=="kagit"){
        yazi.innerHTML = `Kazandın! Makas kağıdı keser!` ;
        yazi.style.color = "yellowgreen";
        paper.style.display = "block";
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    else{
        yazi.innerHTML = `Kaybettin! Taş makası kırar!`;
        rock.style.display = "block";
        yazi.style.color = "red";
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
}
function kagit() {
    if (pcChoice=="makas") {
        yazi.innerHTML = `Kaybettin! Makas kağıdı keser!`;
        scissor.style.display = "block";
        yazi.style.color = "red";
        setTimeout(() => {
            location.reload();
        }, 3000);
    } 
    else if(pcChoice=="kagit"){
        yazi.innerHTML = `Berabere! yeni hamle yap!`;
        paper.style.display = "block";
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    else{
        yazi.innerHTML = `Kazandın! Kağıt taşı kaplar!`;
        yazi.style.color = "yellowgreen";
        rock.style.display = "block";
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
}
