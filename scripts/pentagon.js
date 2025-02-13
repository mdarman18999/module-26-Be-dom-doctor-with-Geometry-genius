function pantagon(){
    // p
    const man = document.getElementById('p')
    const manValue = man.value;
    const numbers = parseFloat(manValue)
    console.log(numbers)

    // b
    const man1 = document.getElementById('b')
    const man1Value = man1.value;
    const numbers1 = parseFloat(man1Value)
    console.log(numbers1)

    // adddd man >
    const adddd = numbers * numbers1;
    console.log(adddd)

    // display >
    const gonfoll = document.getElementById('gon');
    gonfoll.innerText = adddd;
}