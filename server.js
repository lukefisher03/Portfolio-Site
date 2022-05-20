const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

/**
 * This method of defining routes for the server is slightly cumbersome. This is why frameworks such as
 * Express are used instead. However, for testing purposes, I am using this method. I'd like to get familiar
 * with the vanilla method before moving onto Express.
 */
const server = http.createServer((req, res) => {
    let url = req.url.split('.');
    //Here we define our routes to different files in our system.
    if(req.url == '/'){
        res.statusCode = 200;
        fs.readFile('./index.html', (err, data) => {
            if(err){
                res.statusCode = 404;//The not found error code
                res.end('Error');
            }
            res.write(data);
            res.end();
        });
    //hold assets in a public folder
    }else if(req.url === '/public/style.css') {
        fs.readFile('./style.css', (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        });
    }else if(req.url === '/public/helper.css') {
        fs.readFile('./helper.css', (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        });
    }else if(req.url === '/public/script.js') {
        fs.readFile('./script.js', (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        });
    }
})

server.listen(port, hostname, () => {
    //Define the callback method to run when the server is started.
    console.log(`Server running at http://${hostname}:${port}/`);
});