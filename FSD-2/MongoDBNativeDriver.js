const {MongoClient}=require("mongodb");
const uri="";

const client=new MongoClient(uri);
async function run(){
    try{
        await client.connect();
        console.log("connected");
        const db=client.db("schoolDB");
        const students=db.collection("students");
        await db.createCollection("teachers");
        console.log("teachers collection created in schooldb");
        await students.insertOne({name:"lokesh",grade:"A"});
        console.log("inserted a document into students collection");
        await db.collection("teachers").drop();
        console.log("teachers collection dropped");
        await db.dropDatabase();
        console.log("schooldb databsae dropped");
    }catch(error){
        console.error("error",error);
    }finally{
        await client.close();
        console.log("connection closed");
    }
}
run();
