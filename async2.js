// async function loadData() {
//     const res = await fetch('');
//     const data = await res.json();
//     console.log(data);
// }

// loadData();

async function loadData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Replace with a valid API URL
       
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

loadData();
