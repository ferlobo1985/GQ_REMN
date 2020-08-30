const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(
    '/graphql',
    graphqlHTTP({
        
    })
)


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Running running on port ${PORT}`)
});