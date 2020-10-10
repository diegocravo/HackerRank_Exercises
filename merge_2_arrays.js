
// merge and sort 2 arrays

function mergeArrays(a, b){
    var c = a.concat(b);
    c.sort(function(a, b){return a-b});
    return c;
}

console.log(mergeArrays([100,10001,3,4,5,6], [4,5,6]));

