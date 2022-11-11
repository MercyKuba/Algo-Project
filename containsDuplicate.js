'use strict';

`Given an integer array nums, return true if any value appears 
at least twice in the array, and return false if every element is distinct.`

let containsDuplicate = nums => {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return true
        }
        map.set(nums[i]);
    }
    return []
};