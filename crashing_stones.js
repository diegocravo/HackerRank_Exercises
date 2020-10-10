function lastStoneWeight(weights) {
    // Write your code here
    weights.sort(function(a, b){return a-b});
    if (weights.length <= 1){
        if (weights.length == 1){
            return weights[0]
        }else{
            return 0;
        }
        
    }else{
        var len = weights.length;
        var res = weights[len-1] - weights[len -2];
        weights.pop();
        weights.pop();
        if (res != 0){
            weights.push(res);
        }
        weights.sort(function(a, b){return a-b});
        return lastStoneWeight(weights);
    }
}

console.log(lastStoneWeight([1,1]));