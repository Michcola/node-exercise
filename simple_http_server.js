// https://baidu.com
// https://www.taobao.com/markets/nanzhuang/2017new?spm=a21bo.2017.201867-main.2.110211d9hSOIxk
// Uniform Resource Locator
// Schema://host:port/path?query#hash

// port: 22 ssh, 80:http 443:https 27017:mongodb
const url = `adress://pudong.shanghai.china/jinkeroad/1111`

const http = require('http')
const server = http.createServer()
server.listen(8808)

let count = 0
server.on('request', (req, res) => {
  
  const url = req.url

  console.log(url)

  let resStr 
  if(url === '/hello'){
    resStr = 'hi'
  }else if( url === '/bye'){
    resStr = ' see next time'
  }else{
    resStr = 'i cant understand'
  }

  res.statusCode = 200
  res.end(resStr)
});