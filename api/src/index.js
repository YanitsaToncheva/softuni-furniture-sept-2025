import express from 'express';



const app = express();


app.get('/', (req, res) => {
    console.log('it works')
    res.send('it works!!!');
});

app.listen(3030, () => console.log('Server is listening on http://localhost:3030...'));


