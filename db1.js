// 1. Create a "database" holding specific info for each user
const database = {
    "Ashish": {
        sales: 24500,
        salesTrend: "+12%",
        users: 1204,
        usersTrend: "+5%",
        bounce: 42.3,
        bounceTrend: "-2%"
    },
    "Priya": {
        sales: 89000,
        salesTrend: "+34%",
        users: 5600,
        usersTrend: "+18%",
        bounce: 21.5,
        bounceTrend: "-15%"
    },
    "Rahul": {
        sales: 8500,
        salesTrend: "-4%",
        users: 450,
        usersTrend: "-1%",
        bounce: 65.8,
        bounceTrend: "+10%"
    }
};

// 2. Create the function that updates the page based on who is selected
function loadUserData() {
    // Find out which user is currently selected in the dropdown
    let selectedUser = document.getElementById("user-selector").value;
    
    // Grab that specific user's data from our database
    let userData = database[selectedUser];

    // 3. Push the specific data to the HTML
    // Using .toLocaleString() to keep the nice commas for thousands
    document.getElementById("sales-val").innerText = "$" + userData.sales.toLocaleString();
    document.getElementById("sales-trend").innerText = userData.salesTrend;

    document.getElementById("users-val").innerText = userData.users.toLocaleString();
    document.getElementById("users-trend").innerText = userData.usersTrend;

    document.getElementById("bounce-val").innerText = userData.bounce + "%";
    document.getElementById("bounce-trend").innerText = userData.bounceTrend;
}

// 4. Run the function immediately when the page loads so Ashish's data shows up right away
loadUserData();