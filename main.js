let player1 = prompt(('Iltimos raqamlardan birini tanlang.  \n0)qogoz \n1)qaychi \n2)quduq'));
let player2 = Math.floor(Math.random() * 3);

if (player2 === 0) {
    alert("kompyuter qogozni tanladi ");
} else if (player2 === 1) {
    alert("kampyuter qaychini tanladi");
} else {
    alert("kompyuter quduqni tanladi")
} 

if (player1 === player2) {
    alert("Durrang");
} else if (player1 === 0 && player2 === 1) {
    alert("Kompyuter g'alaba qozondi");
} else if (player1 === 0 && player2 === 2) {
    alert("Siz g'alaba qozondingiz");
} else if (player1 === 1 && player2 === 0) {
    alert("Siz g'alaba qozondingiz");
} else if (player1 === 1 && player2 === 2) {
    alert("Kompyuter g'alaba qozondi");
} else if (player2 === 0 && player1 === 1) {
    alert("Siz g'alaba qozondingiz");
}else if (player2 === 0 && player1 === 2) {
    alert("Kompyuter g'alaba qozondi");
} else if (player2 === 1 && player1 === 0) {
    alert("Kompyuter g'alaba qozondi");
} else if (player2 === 1 && player1 === 2) {
    alert("Siz g'alaba qozondingiz");
}else{
    alert("afsus")
}