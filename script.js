// Add an event listener to the fetch data button
document.getElementById('fetchData').addEventListener('click', async function() {
    try {
        // Fetch user data from the serverless function API
        const response = await fetch('https://your-vercel-url/api'); // Replace with your actual API URL
        
        // Check if the response is OK (status code 200)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON data from the response
        const data = await response.json();
        const userDataDiv = document.getElementById('userData'); // Get the div to display user data
        userDataDiv.innerHTML = ''; // Clear any existing data

        // Loop through each user and create HTML elements to display their data
        data.forEach(user => {
            const userDiv = document.createElement('div'); // Create a new div for each user
            userDiv.innerHTML = `
                <p>Account Name: ${user.accountName}</p>
                <p>Account Number: ${user.accountNumber}</p>
                <p>Transaction Reference: ${user.transactionReference}</p>
                <p>Timestamp: ${user.timestamp}</p>
                <hr> <!-- Horizontal line to separate user entries -->
            `;
            userDataDiv.appendChild(userDiv); // Append the user div to the main display div
        });
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Error fetching user data:', error);
        alert('Failed to fetch user data. Please try again later.'); // Notify the user of the error
    }
});
