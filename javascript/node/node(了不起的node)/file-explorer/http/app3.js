require('http').createServer(function ( req , res) {

    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(
            `<form method = 'POST' action='/url'>
                <h1>My form</h1>
                <fieldset>
                    <label>Personal information</label>
                    <p>What is your name?</p>
                    <input type = 'text' name ='name'/>
                </fieldset>
            </form>`
        )        
    } else if( req.url == '/url') {

        res.writeHead(200 , {'Content-Type':'text/html'})

        res.end(`You sent a <em> ${req.method}</em> rquest`)

    }


}).listen(3500)