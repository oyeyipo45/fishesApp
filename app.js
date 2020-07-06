const express = require('express');
const fishesRoutes = require('./server/routes/fishes');
const usersRoutes = require('./server/routes/users');
const authRoutes = require('./server/routes/auth');
const morgan = require('morgan');
const cors = require('cors')



const app = express();

app.use(cors())


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(morgan('tiny'));


app.use('/fishes', fishesRoutes);
app.use('/users', usersRoutes);
app.use('/auth', authRoutes);

app.use(( req, res, next) => {
    const err = new Error();
    err.status = 404;
    next(err);
})


if(app.get('env') === 'development'){
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: err
        })
    })
   
}


app.listen(3005, () => {
    console.log(`Server is Starting on 3005`);
    // console.log(process.env);
    
})