const mongoose = requires('mongoose');


const userShema = new mongoose.Shema (
    {
        email:{ type: String,required:true, unique: true},
        password: { type: String, required:true },
        token: { type: String},
    },
  
);
//методы  сохранения и удаления токена
userSchema.methods.setToken = function(token) {
    this.token = token;
};


userSchema.methods.removeToken = function () {
    this.token = undefined;
};

const User = mongoose.model( ' User', userShema);

module.export = User;





