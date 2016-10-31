//共享參考
var arr1 = [1, 2, 3];
var arr2 = arr1;
arr2.push(4);
console.log(arr1); //預期 [1,2,3]   實際 [1,2,3,4]
console.log(arr2); //預期 [1,2,3,4] 實際 [1,2,3,4]

//避免共享參考
var arr1 = [1, 2, 3];
var arr2 = arr1.slice(); //slice會產生一個新的陣列
arr2.push(4);
console.log(arr1); //[1,2,3]
console.log(arr2); //[1,2,3,4]