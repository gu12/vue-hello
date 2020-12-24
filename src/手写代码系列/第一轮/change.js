let array = [1,2,3,4]
function change(index1,index2){
    [array[index1],array[index2]] = [array[index2],array[index1]]

}

change(1,2)
console.log(array)