//create counter to number our dives
let counter = 0;


// this function adds a div to our dive container
function addDiv(){
    // increment the counter for each one
    counter++;
    //grab the container and assign it to a variable
    const divContainer = document.getElementById('div-container');

    // created a new div and assigned it to a variable
    let newDiv = document.createElement('div');
    //add our div class style to the new div
    newDiv.classList.add('square-div');
    // set the new div's inner text to the current value of counter
    newDiv.innerText = counter;
    //add our new div to the inside of our div container
    divContainer.appendChild(newDiv);

};

window.addEventListener('DOMContentLoaded', () =>{
    for (let i = 0; i < 10; i++) {
        setTimeout(addDiv, (i * 1000));
    }
    // setInterval(addDiv, 1000);
});
