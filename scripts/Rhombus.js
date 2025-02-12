function Rhombus(){
    const RhombusInput = document.getElementById('RhombusF')
    const RhombusInputValue = RhombusInput.value;
    const ching = parseFloat(RhombusInputValue)
    console.log(ching)

    const RhombuseInput2 = document.getElementById('RhombusC')
    const RhombuseInput2Value = RhombuseInput2.value;
    const ching2 = parseFloat(RhombuseInput2Value)
    console.log(ching2)

    // dd 2 man 
    const adddd = ching * ching2;
    console.log(adddd)

    // display 
    const us = document.getElementById('us')
    us.innerText = adddd
}