const express = require('express')
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://shaun:test123@gql.fwnwp.mongodb.net/gql?retryWrites=true&w=majority');
mongoose.connection.once('open', ()=>{
  console.log('connected to database');
})
.on('error',(error)=>{
  console.log(error.message);
});

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true
}));


app.listen(4000,()=>{
  console.log('now listening for requests on port 4000');
});
