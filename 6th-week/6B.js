<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Output Methods</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        button {
            padding: 10px;
            margin: 5px;
            background-color: #007BFF;
            color: white;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <h1>JavaScript Output Methods</h1>

    <button onclick="showAlert()">Show Alert</button>
    <button onclick="writeToDocument()">Write to Document</button>
    <button onclick="logToConsole()">Log to Console</button>
    <button onclick="updateInnerHTML()">Update Inner HTML</button>

    <p id="output">Output will appear here.</p>

    <script>
        function showAlert() {
            alert("This is an alert!");
        }

        function writeToDocument() {
            document.write("This text replaces the entire document.");
        }
        
        
        
        function updateInnerHTML() {
            document.getElementById("output").innerHTML = "Inner HTML updated!";
        }
    </script>

</body>
</html>
