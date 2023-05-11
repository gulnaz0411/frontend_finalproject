const mongoose = requires("mongoose");
const Schema = mongoose.Schema;


const caseSchema = new mongoose.Schema({
    status: {
        type: String, 
        enum: ['new', 'in_progress', 'done'],
        default: 'New',
    },
    licenseNumber:{
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['mountain', 'track', 'urban','road'],
        required: true,
    },
    ownerFullName:{
        type: String,
        required: true,
    },

    clientId:{
        type: String,
        required: true,
    },
     createdAt: {
        type: Date,
        default: Date.now,
     },
     updatedAt: {
        type: Date,
        default: Date.now,
     },
     color: {
        type: String,
        required:true,
     }, 
     date:{
        type: Date,
        required: true,
     },
     officer:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Officer",
        required: true,
            
        },
     description:{
        type: String,
     },
     resolution:{
        type: String,
     },   
     }
);
module.export. mongoose.model("Case", caseSchema);