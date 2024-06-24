// document.addEventListener('DOMContentLoaded', function() {
//     axios.get('https://jsonplaceholder.typicode.com/posts/1')
//         .then(function (response) {
//             // Handle success
//             console.log(response);
//             document.getElementById('response').innerHTML = `
//                 <h2>Response Data:</h2>
//                 <pre>${JSON.stringify(response.data, null, 2)}</pre>
//             `;
//         })
//         .catch(function (error) {
//             // Handle error
//             console.error(error);
//             document.getElementById('response').innerHTML = `
//                 <h2>Error:</h2>
//                 <pre>${error}</pre>
//             `;
//         });
// });
document.getElementById("userPreferencesForm").addEventListener("submit", function(event) {
event.preventDefault(); 

// create json with new data
const data = document.getElementById("userPreferencesForm");
const formData = new FormData(data);

let jsonData = {};
locations = formData.getAll("location");
jsonData["email"] = formData.get("email");
jsonData["emailFrequency"] = formData.get("emailFrequency");
jsonData["weeklyUpdate"] = formData.get("weeklyOverview") === null? false: true; 
jsonData["location"] = locations.includes("All")? ["All"]: locations;

console.log(jsonData);

url = "http://localhost:8080/api/v1/users";

axios.post(url, jsonData)
  .then(function (response) {
    console.log(response);
    if (response.status === 201) {
      const relativePath = "./user_created.html"; 
      window.location.href = relativePath;

    }

  })
  .catch(function (error) {
    console.error('Error in request:', error);
  });







});
