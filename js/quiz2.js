for (let index = 1; index <= 20; index++) {
    console.log(index);
}

for (let index = 1; index <= 20; index++) {
    if( index % 2 == 0 ){
        console.log(index)
    }
}

let temp1 = [-1,2,3,56,6,-93,0,4].map(el => el * 2 )
console.log(temp1)

let temp2 = [10,13,44,55,89,0,12,1].filter(el => el%2== 0)
console.log(temp2)