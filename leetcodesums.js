// ===========QSt1 two sums==============

 function add(nums, target) {
    for(let i= 0; i<nums.length;i++){
        for(let j= i+1; j<nums.length;j++){
            if(nums[i]+nums[j] == target){
                return [i,j]
            }
        }
    }
};
console.log(add([1,2,3,6], 5))