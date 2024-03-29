const express  = require ('express');
const {chats} = require("./data/data.js");
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const chatRoutes = require("./routes/chatRoutes.js")
const userRoutes = require('./routes/userRoutes.js')
const {notFound,errorHandler} = require('./middleware/errorMiddleware.js')
const app = express();
dotenv.config();
connectDB();

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("API is running")
});

app.use('/api/user',userRoutes);
app.use('/api/chat',chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(5000 , console.log(`Server started on PORT ${PORT}`));