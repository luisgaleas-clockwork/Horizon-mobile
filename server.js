require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
var enforce = require('express-sslify');

app.use(enforce.HTTPS({ trustProtoHeader: true }))


//routes
const usersRoutes = require('./routes/index')
const productRouter = require('./routes/product');

const app = express()

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/auth'
const PORT = process.env.PORT || 4000

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	uri = process.env.ATLAS_URI  // connection string for Atlas here  
} else {
	uri = process.env.ATLAS_URI   // connection string for localhost mongo here  
}

// connection to database
mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}
);

mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
	console.log(err || `Connected to MongoDB.`)
})


app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
	res.json({ message: "API root" })
})

app.use('/api/users', usersRoutes)
app.use('/product', productRouter);

app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})
