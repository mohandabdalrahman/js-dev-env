import express from 'express'
import open from 'open'
import path from 'path'
import webpack from 'webpack'
import config from '../webpack.config.dev'
const app = new express();
const port = process.env.PORT || 3000
const compiler = webpack(config)


app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true
}))

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, function (err) {
	if (err) console.log(err)
	open('http://localhost:' + port)
})
