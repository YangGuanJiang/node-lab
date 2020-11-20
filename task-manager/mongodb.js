const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL,{useNewUrlParser: true, useUnifiedTopology: true},
    (error, client) => {
        if(error) {
            return console.log("connect failed", error);
        }

        const db = client.db(databaseName);

        db.collection("users").deleteOne({
            name: "AA"
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }
);
