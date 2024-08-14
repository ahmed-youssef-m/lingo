export async function logHome() {
  const Content = `<!DOCTYPE html>
  <html>
    <head>
      <title>Bilad</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          font-size: 15px;
          text-align:center;
          margin-top:150px;
        }
        .h{
          margin-top:40px;
        }
      </style>
    </head>
    <body>
      <h1>Welcome to Bilad Platform.</h1>
      <h2 class="h">Powered by Node.js (LingoXpress V2.0.0)</h2>
    </body>
  </html>
`
    ;
  return Content;
}