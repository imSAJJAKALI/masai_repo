const mongoose=require('mongoose')

const connection = mongoose.connect('mongodb+srv://sajjaka393:sajjakali@cluster0.meet2uu.mongodb.net/sajjak?retryWrites=true&w=majority')


module.exports=connection
