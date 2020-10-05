let array = ['a','b','c']
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);   
}

console.log(array);

while (array.length > 0) {
    console.log(array.pop());    
}

console.log(array);

do {
    array.push(array.length + 1);
} while (array.length < 10);

console.log(array);

var letra = 'A'
switch (letra) {
    case 'A': console.log('Vogal A'); break
    case 'B': console.log('Vogal B'); break
    case 'C': console.log('Vogal C'); break
    default: console.log('Não é vogal');
}