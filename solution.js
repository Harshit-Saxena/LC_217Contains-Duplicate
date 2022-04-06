/*
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let setNums = new Set(nums);
    return (new Set(nums).size !== nums.length);
};