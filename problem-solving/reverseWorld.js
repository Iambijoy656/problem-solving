function reverseWordIII(s) {
    //return s.split("").reverse().join("").split(" ").reverse().join(" ");
    // OR
    let a = s.split("");
    for (let i = 0; i < a.length / 2; i++) {
        const temp = a[i];
        a[i] = a[a.length - 1 - i];
        a[a.length - 1 - i] = temp;
    }
    a = a.join("");
    a = a.split(" ");
    for (let i = 0; i < a.length / 2; i++) {
        const temp = a[i];
        a[i] = a[a.length - 1 - i];
        a[a.length - 1 - i] = temp;
    }
    return a.join(" ");
}
console.log(reverseWordIII("Let's take LeetCode contest"));


//   leetcode: 557, Big O(4n+2m)




