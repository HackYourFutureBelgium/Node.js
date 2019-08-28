function sendIndexPage(response) {
  response.setHeader('Content-Type', 'text/html');
  response.write(`
    <!html>
    <html>
      <head>
        <title> HYF - Node.js - Week1</title>
        <link href="styles.css" type="text/css" rel="stylesheet"/>
      </head>
      <body>
         <h1> Homework 1 , Node js! </h1>
         This aplication return a JSON object with  a value of status <br>
         You can use urls like:
         <ul>
         <li> /state      </li>
         <li> /add        </li>
         <li> /substract  </li>
         <li> /reset      </li>
         </ul>
      </body>
    </html>
  `);
}
module.exports = sendIndexPage;
