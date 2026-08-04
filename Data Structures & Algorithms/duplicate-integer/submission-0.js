class Solution {
    hasDuplicate(nums) {
        let obj = {}; 
        let length = nums.length;
        for(let i=0; i< length; i++){
            if(obj[nums[i]] != undefined ) return true;
            else obj[nums[i]] = i;
        }
        
        return false;
    }
}
