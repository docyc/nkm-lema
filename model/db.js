const mongoClient = require('mongodb').MongoClient;
const config = require('./config');

class Db {
    constructor() {

    }
    connect(){
        return new Promise((resolve,reject)=>{
            mongoClient.connect(config.dbUrl, { useNewUrlParser: true }, (err,client)=>{
                if(err){
                    reject(err);
                    return;
                }
                let db =client.db(config.dbname);
                resolve(db);
            })
        })
    }
    find(collectionname, json){
        return new Promise((resolve, reject)=>{
            this.connect().then((db)=>{
                let reslut = db.collection(collectionname).find(json);
                reslut.toArray((err, docs)=>{
                    if(err){
                        reject(err);
                        return;
                    }
                    resolve(docs);
                })
            })
        })
    }
    insert(collectionname,json){
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                db.collection(collectionname).insert(json,(err,reslut)=>{
                    if(err){
                        reject(err);
                        return;
                    }
                    resolve(reslut);
                });
            })
        })
    }
    remove(){

    }
    update(){

    }
}


const db = new Db();
db.find('user',{email:'420400150@qq.com'}).then((data)=>{
    // console.log(data)
});
db.insert('user',{username:'Tom',email:'363076749@qq.com',userpass:'123456',sex:'0'}).then((data)=>{
    console.log(data)
});


