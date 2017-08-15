# ChatAppNode.js
Simple chat app using Node, Express and Sockets 
Express is a lightweight framework for Node.js, socket.io enables real time connection between server and client. 
Packages Used:
"express": "^4.15.4",
"socket.io": "^2.0.3"

1. Git clone the project.

2. Insall all dependencies in the package.json file  
`npm install`

3. Fire up the node server by running app.js
`node app.js`

4. Open browser on http://localhost:8080, enter an username which will open up a chat window. Open up another chat window(s) and enter username. (If a same username is entered, it will alert with an error).
Send a message and it appears with the username in the chat window of both users broswer windows. Other users can reply to the chat. 
Users list is shows underneath the chat window. If a user leaves/closes the browser, the socket connection is disconnected and their name is deleted.
