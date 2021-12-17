const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: 'This field is required'
    },
    email: {
        type: String,
        required: 'This field is required'
    },
    mobile: {
        type: Number,
        required: 'This field is required'
    },
    city: {
        type: String,
        required: 'This field is required'
    }
});


    // alert("button was clicked");
    //var collection = db.collection('students');  // get reference to the collection
    collection.find({Name: student.fullName}, {$exists: true}).toArray(function(err, doc) //find if a value exists
    {     
        if(doc) //if it does
        {
            console.log(doc); // print out what it sends back
        }
        else if(!doc) // if it does not 
        {
            console.log("Not in docs");
        }
    });
                    

mongoose.model("Student", studentSchema);