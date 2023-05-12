const { default: mongoose } = require('mongoose')




mongoose.connect('mongodb+srv://adithyacse21:9lMdsKbeKkFDQnhk@cluster0.iuposea.mongodb.net/test')
    .then(()=>console.log('mongoose db connected'))
    .catch(err=>console.log(err))
