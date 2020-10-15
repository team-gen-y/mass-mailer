<h3>A few things that must be configured before using this</h2>
<h3>1. user's credentials must be set as env variables</h3>
<h3>2. two factor authentication must be turned off </h3>
<h3>3. less secure apps option must be turned <a href="https://myaccount.google.com/lesssecureapps">on</a>
<h3>4.you must install node.js, vs code and postman to use this API</h3>
<h3>5.type <code>npm install </code> in the directory that you are cloning, and then type <code>nodemon server</code> (you should install nodemon as global dependency)</h3>
<h3>6. set the API to <code>localhost:3000/send_mail</code></h3>
<h3>use postman to hit the API's and set this <br><code>{
    "to":"receiver's mail ids",<br>
    "subject":"geny recruitments", <br>
    "matter":"Testing this API in postman, user will add `to` and `subject` from postman, and enter the matter and hit the POST request
    to send the mail" 
    
}</code></h3>
