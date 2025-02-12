function parallelogram(){
    // base input
    const parallelogramInput = document.getElementById('base')
    const parallelogramInputValue = parallelogramInput.value;
    const ching = parseFloat(parallelogramInputValue) 
    console.log(ching)

    // height input
    const parallelogramheight = document.getElementById('height');
    const parallelogramheightValue = parallelogramheight.value;
    const height = parseFloat(parallelogramheightValue)
    console.log(height)

    // add kor bo 2 man 
    const addd = ching * height;
    console.log(addd)

    // display dechabo >
    const display = document.getElementById('display-sho')
    display.innerText = addd;
}