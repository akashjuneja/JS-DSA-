let arr=[2,3,0,-2,-2];

arr.sort();

//Time Complexity in on2

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==0){
            console.log(arr[i],arr[j]);
        }
    }
}
