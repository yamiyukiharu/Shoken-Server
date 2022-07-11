const http = require('http');
const port = process.env.PORT || 3000

const mongoose = require('mongoose')
const uri = require('./mongori')

mongoose.connect(uri)

const GymModel = require('./gyms.schema')

const testDb = async () => {
  const gym = await GymModel.create({
    createdBy: 'HY',
    name: 'Hao Ye',
    images: []
  })
  
  await gym.save()
}

testDb()

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port,() => {
//   console.log(`Server running at port `+port);
// });