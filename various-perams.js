function evenSizedString(str){
    const size= str.length;
    console.log(str, size);
    if( size % 2===0){
        console.log('even size')
    
    }
    else{
        console.log('odd size');
    }

}
// evenSizedString('shimanto');
// evenSizedString('shommelon');

function doDubleOrTriple(number, doDouble){
    if (doDouble=== true){
        const result = number*2;
        return result;
    }
    else{
        const result= number*3;
        return result;
    }
}
console.log(doDubleOrTriple(5, true));
console.log(doDubleOrTriple(5, False));