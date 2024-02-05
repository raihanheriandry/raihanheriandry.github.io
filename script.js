function genNum(){return Math.floor(Math.random() * 100);}
let soal1 = genNum(), soal2 = genNum();
let soal = document.getElementById("soal").innerHTML = `${soal1} x ${soal2} =`;
let ans = soal1*soal2;
let answer = document.getElementById("ans");
let cnt = document.getElementById("skor");

function submit(){
    if(answer.value == ans) {alert("benar!!\nttp ilm padi"); cnt++;}
    else alert("salah tapi ngga kocak kok,\nyg bener = " +ans);
    clearTimeout(mTo);
    location.reload();
}

function time(){
    alert("waktu habis");
     location.reload();
}

const mTo = setTimeout(time, 20000);

answer.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});
