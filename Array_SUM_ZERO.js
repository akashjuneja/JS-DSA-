let arr=[2,3,0,-2,5];

arr.sort();

//Time Complexity in o(n^2)

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==0){
            console.log(arr[i],arr[j]);
        }
    }
}


//Time Complexity in o(n)

const sumzero=()=>{
    let i=0;
    let j =arr.length-1;

    while(i<j){
        if(arr[i]+arr[j]===0){
            return [arr[i],arr[j]];
        }else if(arr[i]+arr[j]>0){
            j--;
        }else{
            i++;
        }
    }
}

console.log(sumzero())
