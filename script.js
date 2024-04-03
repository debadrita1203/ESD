document.getElementById('detectButton').addEventListener('click', function () {
    var emailText = document.getElementById('emailText').value;
    //var textInput = document.getElementById("textInput").value;
    var errorMessage = document.getElementById("errorMessage");

    if (emailText.trim() === "") {
        errorMessage.textContent = "Text input cannot be empty";
    } else {
        errorMessage.textContent = "";
        // Perform other actions if the text input is not empty
        var isSpam = detectSpam(emailText);
        var resultRow = document.createElement('tr');
        resultRow.innerHTML = '<td>' + emailText + '</td><td>' + (isSpam ? 'Yes' : 'No') + '</td>';
        
        document.getElementById('resultsBody').appendChild(resultRow);
        function detectSpam(emailText) {
            // Implement your spam detection logic here
            // For simplicity, let's assume it's random for demonstration
            return Math.random() < 0.5; // 50% chance of being spam
        }
    }
    /*document.addEventListener("DOMContentLoaded", function(){
        var tabDiv= document.querySelector('.scroll');
        tabDiv.scrollTop = tabDiv.scrollHeight;
    });*/
});

