async function callAPI() {
    const apiURL = "https://portal-nodejs-d9f7h6gcccf6ghbe.centralus-01.azurewebsites.net/enhance"

    const response = await fetch(apiURL);
                const data = await response.json();
                document.getElementById("result").textContent = JSON.stringify(data, null, 2);





}