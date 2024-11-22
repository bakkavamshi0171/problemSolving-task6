// eliminate repeated elements
arr =[1,2,4,5,4,1,6];
arr2=[]
for(i=0;i<arr.length;i++){
    c=0;
    for(j=0;j<arr.length;j++){
        if(arr[i]==arr[j]){
            c++
        }
    }
    if(c==1){
        arr2.push(arr[i])
    }
}
console.log(arr2)


// another way using methods
let arr = [1, 2, -1, 1, 3, 1];
let frequency = arr.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
let arr2 = arr.filter(num => frequency[num] === 1);
console.log(arr2); 