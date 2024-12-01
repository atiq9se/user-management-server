const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

 app.use(cors());
 app.use(express.json())

const users = [
    {id:1, name:'sabana', email: 'sabana@gmail.com'},
    {id:2, name:'purnina', email: 'sabana@gmail.com'},
    {id:3, name:'sabila nur', email: 'sabana@gmail.com'},
    {id:4, name:'sahara', email: 'sabana@gmail.com'}
]

app.get('/', (req, res)=>{
    res.send('Users management server is running')
})
app.get('/users', (req, res)=>{
    res.send(users)
})
app.post('/users', (req, res)=>{
   console.log("post api hiting")
   console.log(req.body);
   const newUser = req.body;
   newUser.id = users.length + 1;
   users.push(newUser);
   res.send(newUser);
})

app.listen(port, ()=>{
    console.log(`Server is running on PORT:${port}`)
})
