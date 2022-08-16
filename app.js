const express = require('express')
const mongoose = require('mongoose');
const Todo = require('./models/todo')

const app = express();

const dbUrl = 'mongodb+srv://chidi:1234@cluster0.nnvw5ho.mongodb.net/todo-app?retryWrites=true&w=majority';
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{app.listen(3006, ()=>{console.log('connected to port 3006')});}).catch((err)=>{console.log(err)})

app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));

// todo routes 
app.get('/', (req, res) => {
    res.render('second')
});

app.get('/todo', (req, res)=>{
   
    Todo.find().then((result)=>{
       res.render('index', {todos: result});
    })
   })

//post
app.post('/todo', (req, res)=>{
 const todo = new Todo(req.body)

 todo.save().then((result)=>{
   res.redirect('/todo');
 })
})

 
    
     