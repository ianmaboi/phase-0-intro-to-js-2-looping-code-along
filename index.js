function writeCards( names, event){
    const ThankYouMessages =[];
    for(let i=0;i<names.length;i++){
        const message =`Thank you,${names[i]},for the wonderful ${event} gift!`;
        ThankYouMessages.push(message);
    }
    return ThankYouMessages;
}

const names =["Guadalupe","Ollie","Aki"];
const event ="birthday";
const messages =writeCards(names,Event);
console.log(messages);

function countdown(number){
    let i =number;
    while (i>=0){
        console.log(i);
        i--;
    }
}
    countdown(10);