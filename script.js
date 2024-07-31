//Problem 1
//Array Intersection of two sets

// function intersec(s1,s2){
//     const ans=new Set();
//     for(let i of s2)
//     {
//         if(s1.has(i))
//         {
//             ans.add(i);
//         }
//     }
//     return ans;
// }
// const s1=new Set([1,2,4,6,9]);
// const s2=new Set([2,4,7,6]);
// console.log(s1);
// console.log(s2);
// console.log(intersec(s1,s2));



//Problem 2
//Array manipulation with slice()

// let arr=['red','blue','orange','yellow','green'];
// console.log(arr);
// console.log(arr.slice(1,4));



//Problem 3
//Create array of array

// let arr=new Array(10);
// let c=0;
// for(let i=0;i<arr.length;i++)
// {
//     arr[i]=new Array(3);
//     for(let j=0;j<arr[i].length;j++)
//     {
//         c=c+1;
//         arr[i][j]=c;
//     }
// }
// console.log(arr);



//Problem 4
//Array Rotation

// let arr=[1,2,3,4,5,6];
// let r=4;
// console.log(arr);
// for(let i=1;i<=r;i++)
// {
//     let c=arr.pop();
//     arr.unshift(c);
// }
// console.log(arr);



//Problem 5
//Comparing two array of equality

// let a=[1,2,3,4,5];
// let b=[1,2,3,4,5];
// function isequal(a,b){
//     if(a.length!=b.length)
//     {
//         return false;
//     }
//     else
//     {
//         for(let i=0;i<a.length;i++)
//         {
//             if(a[i]!=b[i])
//             {
//                 return false;
//             }
//         }
//         return true;
//     }
// }
// console.log(a);
// console.log(b);
// console.log(isequal(a,b));
