const btn = document.getElementById("button");

const randomColor = () => {
    let val = "0123456789ABCDEF";
    let cons = "#";
    for (let index = 0; index < 6; index++) {
        cons = cons + val[Math.floor(Math.random() * 16)]

    }
    return cons;
};

console.log(randomColor());

function changeRandomColor() {

    document.body.style.backgroundColor = randomColor();

}


btn.addEventListener("click", changeRandomColor);