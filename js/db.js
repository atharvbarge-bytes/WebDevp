function updateStats() {
    // 1. Generate Total Sales (Random number between 10,000 and 60,000)
    let sales = Math.floor(Math.random() * 50000) + 10000;
    
    // 2. Generate Active Users (Random number between 500 and 3,500)
    let users = Math.floor(Math.random() * 3000) + 500;
    
    // 3. Generate Bounce Rate (Random decimal between 20.0 and 60.0)
    let bounce = (Math.random() * 40 + 20).toFixed(1); 

    // Now push these numbers to your HTML elements
    // .toLocaleString() automatically adds the commas (e.g., turns 24500 into 24,500)
    document.getElementById("sales-val").innerText = "$" + sales.toLocaleString();
    document.getElementById("users-val").innerText = users.toLocaleString();
    document.getElementById("bounce-val").innerText = bounce + "%";