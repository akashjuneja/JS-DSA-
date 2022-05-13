let s1="hello";
let s2="eollh";

const palindrome=()=>{
    let i=0;
    let j=s2.length-1;

    let abc =true;

    while(i<0 && j>0){
        if(s1.length==s2.length){
        if(s1.charAt(i)===s2.charAt(j)){
           
        }else if(s1.charAt(i)!=s2.charAt(j)){
            abc=false;

        return abc;        
    }
     i++;
     j--;
    return true;
    }else{
        abc=false;
        return abc;
    }
    }
}

console.log(palindrome())