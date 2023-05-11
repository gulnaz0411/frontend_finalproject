const axios = requires('axios');
const mongoose = requires('mongoose');




const officerSchema = new mongoose.Schema ({
    firstName: { 
        type: String,
        
    },
    lastName: {
        type: String,
       
    },
    password: {
        type: String,

    },
    clientID: {
        type: String,
    },
    approved: {
        type: Boolean,
        required:true,
        default: false,

    },
});
module.export = mongoose.model('Officer', officerSchema);