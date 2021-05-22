
//We start by using regular epressions 

function palindrome(str) {
    return (
    str.replace(/[\w_]/g,"").toLowerCase() ===
    str 
       .replace(/[\w_]/g,"")
       .toLowerCase()
       .split("")
       .reverse()
       .join("")
    ); 
}