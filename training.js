document.querySelector(".overlay span").onclick = function(){

    let yourname = prompt("Enter Your Name");

    let name = document.getElementById("name");

    if(yourname == null || yourname == ""){

        name.innerHTML = "Unknown"
    }
    else{
        name.innerHTML =  `Hello : ${yourname}`;
    }

    document.querySelector(".overlay").remove();
};


/////////////////////////////////////

let duration = 1000;

let meomery = document.querySelector(".memorey");

let cotainer = document.querySelector(".container");

let imgBlock = Array.from(document.querySelectorAll(".game-block"));


let orderrange = [...Array(imgBlock.length).keys()];

shufle(orderrange)

////////////////////////////////////////////

imgBlock.forEach((block , index) => {

    block.style.order = orderrange[index];

    block.addEventListener("click" , function(){

        flipped(block);
    })
});



//////   A 7 A   ///////////////




function flipped (elemtn){
    elemtn.classList.add("is-fliped");

    let allflippedblocks = imgBlock.filter(imgg => imgg.classList.contains("is-fliped"));

    if(allflippedblocks.length == 2){
        noclicking();
        
        match(allflippedblocks[0] , allflippedblocks[1]);
        
    }

}
function noclicking(){

    meomery.classList.add("no-clicking")

    setTimeout(() => {
        
        meomery.classList.remove("no-clicking")

    }, duration);
}

function match(frist , second){
    let tries = document.querySelector(".tries ");


    if(frist.dataset.technology === second.dataset.technology){

        frist.classList.remove("is-fliped");
        second.classList.remove("is-fliped");


        frist.classList.add("is-mach")
        second.classList.add("is-mach")

    }else{
        tries.innerHTML = ` ${parseInt(tries.innerHTML) + 1}`;


        setTimeout(() => {
            
            frist.classList.remove("is-fliped");
        second.classList.remove("is-fliped");
        }, duration);
    }
}

/////////////////////////////////////

function shufle(array){

    let current = array.length;

    while(current > 0){
        
        let random = Math.floor(Math.random() * current);

        current --;

        temp = array[current];

        array[current] = array[random];

        array[random] = temp
    }
    return array;
}







