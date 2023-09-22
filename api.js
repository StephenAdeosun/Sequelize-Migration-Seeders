const express = require('express');
const itemsRouter = require("./routes/items_route.js")
const userRouter = require("./users/user_route.js")
const app = express();
const port = 5000;
const sequelize = require('./config/sequelize');
// const Sequelize = require('sequelize');

app.use(express.json());

app.use("/items", itemsRouter)
app.use("/users", userRouter)

app.get('*' , (req, res) => {
    res.status(404).send('404 Item Not Found')
})

const ConnectDb = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
ConnectDb()


// sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
// }).catch(err => {
//     console.error('Unable to connect to the database:', err);
// });


app.listen(port, () => {        
    console.log(`Server is running on port ${port}`);
});

