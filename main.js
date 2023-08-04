// const monParagraph = document.getElementById('para')

// monParagraph.addEventListener('click', ()=> {
//     if(monParagraph.style.color !== "red"){
//         monParagraph.style.color = "red";
//         monParagraph.style.fontFamily = "Borel"
//     }else {
//         monParagraph.style.color = "black";
//         monParagraph.style.fontFamily = "Arial"
//     }
// })
const button =  document.getElementById('button');
const paragraph = document.getElementsByTagName('p')[0];

function rand255() {
    return Math.floor(Math.random() * 100000)%256;
}

function rgbGenerator(){
    let rgb, red, blue, green;
    red = rand255();
    blue = rand255();
    green = rand255();

    rgb = `rgb(${red}, ${green}, ${blue})`;
    return rgb;
}

function changeElementBgColor(e){
    e.style.backgroundColor = rgbGenerator();
}

button.addEventListener('click', (e)=>{
    changeElementBgColor(paragraph);
})
paragraph.addEventListener('click', (e)=>{
    changeElementBgColor(button);
})