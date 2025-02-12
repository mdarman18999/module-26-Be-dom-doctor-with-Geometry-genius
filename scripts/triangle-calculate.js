/**
 * objective: get base, height of a triangle. Calculate the area by using the provided formula. and then display the area.
 * step -1: get base value of the triangle
 * step -2: added an id in the base input field
 * step -3: use getElementById to access the input field
 * step -4: get value from the input field. (value is string now)
 * step -5: convert the value to a number. use parseFloat
 */




function calculateTriangleArea(){
    // get Triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    console.log( base) 
    // console.log(base)


    //get triangle height value
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeight.value;
    const height = parseFloat(triangleHeightText)
    console.log(height)


    // calculate triangle area 
    const area = 0.5 * base * height;
    console.log('area of the triangle is:', area)

    //display triangle area
    const triangleAreaSpan  = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}









//  এটা হইসে বাট ‍আন্নপিসটায় করব

// function REctangleCalculate(){
//     //get Rectangel < mane W
//     const Rectanglee = document.getElementById('Rectangle');
//     const RectangleValue = Rectanglee.value;
//     const jyga = parseFloat(RectangleValue);
//     console.log(jyga)

//     // get Rectangle < mane i

//     const RectangelI = document.getElementById('RectangelI');
//     const RectangelIValue = RectangelI.value
//     const Ibase = parseFloat(RectangelIValue);
//     console.log(Ibase)
    
//     // console.log(jyga + Ibase)

//     const width = 5 * jyga * Ibase;
//     console.log(width)


//     // agolor mane Rak mo 

//     const rakmo = document.getElementById('amar-sonar-bangla')
//     rakmo.innerText = width;

// }

