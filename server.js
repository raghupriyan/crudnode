console.log('May node be with you')
const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
var app = express();

var db;
var mongourl = 'mongodb://curduser:curdpassword@ds259089.mlab.com:59089/firstcurd';
app.set('view engine', 'ejs')


/*app.listen(3000, function() {
	console.log('listening in 3000')
})

//app.get('/', (request, response)=>{
//response.send('HelloWorld')
//})



app.use(bodyParser.urlencoded({extended: true}))

//app.post('/quotes',(req, res) => {
	//res.send(req.body)
//})*/
/*app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})*/

MongoClient.connect(mongourl, (err, client) => {
	if(err) return console.log(err)
	db = client.db('firstcurd')
<<<<<<< HEAD
	app.listen(80, () => {
=======
	app.listen(8081, () => {
>>>>>>> 112e1039de83c7b634170e178a42e90619d8b2e8
		
		console.log('listening on 8081')
		
	})
	
	app.use(bodyParser.urlencoded({extended: true}))
	
	app.post('/quotes', (req, res) => {
		db.collection('quotes').save(req.body, (err, result) =>{
			if(err) return console.log(err)
			
		console.log('saved to database')
		res.redirect('/')
		})
		
	})
	
	app.get('/', (req, res) => {
		//res.sendFile(__dirname + '/index.html')
			db.collection('quotes').find().toArray((err,results) => {
				if(err) return console.log(err)
					
			 res.render('index.ejs', {quotes: results})
			//console.log(results)
		})
	})
})