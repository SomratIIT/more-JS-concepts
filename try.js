// try {
//     // এখানে error হওয়ার সম্ভাবনা রয়েছে
//     let num = 10;
//     console.log(num.toUpperCase()); // এটা error দেবে, কারণ `num` একটি number
// } catch (error) {
//     console.log("Error ধরা পড়েছে:", error);
// }
// try {
//     let user = JSON.parse("Invalid JSON"); // ভুল JSON parse করার চেষ্টা
// } catch (err) {
//     console.log("Error:", err.message); // Error handle হচ্ছে
// }

try{
let age=-20;
if(age>0){
console.log('Human being');
}
else if(age<0)
{
    throw(`Age ${age} cant be negative`);
}
}
catch(err)
{
console.log('Laga error:',err);
}
