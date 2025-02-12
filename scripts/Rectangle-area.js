function calculateRectangleArea(){
    // get length of the Rectangle  > আয়তক্ষেত্রের দৈর্ঘ্য বের করো
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText)
    console.log(length)

    // get Width of the rectangle
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText)
    console.log(width)

    // calculate rectangle
    const area = length * width;
    console.log('area of the rectangle >', area)


    // display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area')
    rectangleAreaSpan.innerText = area;

}