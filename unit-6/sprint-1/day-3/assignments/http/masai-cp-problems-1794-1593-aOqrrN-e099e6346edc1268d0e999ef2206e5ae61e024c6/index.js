const http = require("http");
const fs = require("fs");
const PORT = 7700;


  const server = http.createServer((req,res)=>{
 
    if(req.url === "/"){

        // for html 
        res.setHeader("Content-type","text/html")
        const file = "<ul> <a href='/public'> public </a></ul>"
{/* <ul><a>git</a><a>git</a><a>git</a></ul> */}
        res.end(file)
    }
    else if(req.url === "/public"){
        // const data = fs.readFileSync('/db.json','utf-8')
        // const books = JSON.parse(data)
        res.setHeader("Content-type","text/html")

        // res.end(JSON.stringify(books.books))
        res.end("<li> <a href='/public/others'>others</a> </li>")
    }
    else if(req.url === "/public/others"){
        res.setHeader("Content-type","text/html")
        res.end("<li> <a href='/public/others/test.txt'>test.txt</a> </li>")

    }
    else if(req.url === "/public/others/test.txt"){
        res.end("hello this is test.txt")
    }
    else{
        res.end("404 Not Found")
    }

    
})

module.exports =server



server.listen(PORT,()=>{
    console.log(`listing on port ${PORT}`);
})