console.log(window.innerWidth)
console.log(window.innerHeight) 

const imageNames = ["stad1.jpg", "stad2.jpg", "stad3.jpg", "stad4.jpg", "stad5.jpg", "stad6.jpg"]
const tumbs = document.getElementById('tumbs');
const display = document.getElementById('display');
let current = 0;

selectImage(Math.floor(Math.random() * imageNames.length));


for (let i = 0, max = imageNames.length; i < max; i++) {
    let tumb = new Image();
    tumb.src = "foontoons/small/" + imageNames[i];
    tumb.id = i;
    tumbs.appendChild(tumb);
    tumb.addEventListener("click", function (e) {
        selectImage(e.target.id);
    });
}

function selectImage(id) {
    display.src = "foontoons/big/" + imageNames[id];
}

function cycle(direction){
    if (direction) {
        current--;
        if (current < 0) {
            current = imageNames.length - 1;
        }
        selectImage(current);
    } else {
        current++;
        if (current >= imageNames.length) {
            current = 0;
        }
        selectImage(current);
    }
}
