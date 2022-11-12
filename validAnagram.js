'use strict';

`A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.`

const isPalindrome = s => {
    s = s.replace(/[^a-z0-9]/gi, '');
    
    let leftIndex = 0;
    let rightIndex = s.length - 1;
    while (leftIndex < rightIndex) {
        if (s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()) return false;
        leftIndex++;
        rightIndex--;
    }
    return true;
};

