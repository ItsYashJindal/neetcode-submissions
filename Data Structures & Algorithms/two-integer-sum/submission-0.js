class Solution {
    twoSum(nums, target) {
        let obj = {}; 
        let length = nums.length;
        for(let i=0; i< length; i++){
            let val = target - nums[i];
            if(obj[val] != undefined ) return [obj[val], i]
            else obj[nums[i]] = i;
        }
    }
}
