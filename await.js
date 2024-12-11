console.log('Kaj korteche')

function loadUser()
{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data=>console.log(data))
}

async function loadUserAsync(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users');  
  const data =await res.json();
  console.log(data);
}

const loadUserArrow= async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');  
  const data =await res.json();
  console.log(data);
}

const loadUsercatch=async()=>
{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');  
        const data =await res.json();
        console.log(data);
    }
    catch(err){
console.log(`error:`,err);
    }
}