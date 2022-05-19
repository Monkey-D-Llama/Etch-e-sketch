const bod = document.querySelector("body");
const gridcont = document.querySelector('#gridgang');
const button = document.createElement('button');
button.addEventListener('click', () => {
    let sides = parseInt(prompt('How many squares per side?'));
    removeGrid(gridcont);
    if(sides<90){
        makeGrid(gridcont, sides);
    }
    else{
        alert('too many!')
    }
} );
button.innerHTML = "Make the grid";
bod.appendChild(button);

//clear grid space
function removeGrid(div){
    div.innerHTML = "";
}
function rgbRand(){

}

function makeGrid(div, sides = 16){
    for(let i = 0; i<sides; i++){
        let row = document.createElement('div');
        row.className = 'grid-row';
        for(let j = 0; j <sides; j++){
            let cell = document.createElement('div');
            cell.className = 'grid-cell';
            
            cell.addEventListener('mouseover', () => {
                let currentOpacity = parseFloat(window.getComputedStyle(cell).opacity);
                console.log(currentOpacity + .1);
                cell.style.opacity = currentOpacity + .1;
            });
            // d2.addEventListener('mouseleave', () =>{
            //     // d2.style.backgroundColor = "white";
            // })
            row.appendChild(cell);
        }
        div.appendChild(row);
    }
}
