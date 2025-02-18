function inverterString (string) {

    let stringArray = string.split('');
    let newString = [];

    for(let i=stringArray.length-1;i>=0;i--) {
        newString.push(stringArray[i]);
    }
    console.log(newString.join(''))
}

inverterString('Caio Nóbile')

