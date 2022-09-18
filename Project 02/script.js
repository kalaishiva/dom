let count = 0;

let value = document.getElementById("value");

let btns = document.querySelectorAll(".btn");
// console.log(btns);

btns.forEach(function(item) {
    item.addEventListener("click", function(val) {
        // check what is there in val(answer===you will get the name of the class list )
        // console.log("val  " + val);
        let style = val.currentTarget.classList;

        console.log(style);
        if (style.contains("plus")) { //['btn', 'plus', value: 'btn plus']

            count++;
        } else if (style.contains("minus")) {
            count--;
        } else if (style.contains("reset")) {
            count == 0;
        }

        if (count > 0) {
            value.style.color = "Green";
        } else {
            value.style.color = "Red";
        }



        value.textContent = count;


    });
});