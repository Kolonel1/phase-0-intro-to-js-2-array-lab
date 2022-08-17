// Write your solution here!
const cats=["Milo","Otis","Garfield"];




function destructivelyAppendCat(name){
    return cats.push('Ralph')
}

function destructivelyPrependCat(name){
    return cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    let newCats
    return newCats=[...cats,name];
}

function prependCat(name){
    let newCats
    return newCats=[name,...cats]
}

function removeFirstCat(){
    let newCats
return newCats= [...cats.slice(1)]

}
function removeLastCat(){
    let newCats;
    return newCats=[...cats.slice(0,2)]
}
console.log(removeFirstCat());
console.log(removeLastCat());



