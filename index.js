import mongoose from "mongoose";
import Blog from "./model/Blog.js";
import User from "./model/User.js";

mongoose.connect("mongodb://localhost/testdb")

//Create a new document of type blog
// const article = await Blog.create({
//     title: "Article 21",
//     category: "Bollywood",
//     isPublished: false,
//     content: "Content for article 21 about bollywood",
//     tags: ["tag-article-21-1", "tag-article-21-2", "tag-article-21-3"],
//     comments:[
//         {
//             userName: "john1993",
//             userComment: "Article 21 is about SRK!",
//             likesCount: 10000
//         }
//     ]
// })

//Read an existing document
// const firstArticle = await Blog.findOne({})
// console.log(firstArticle)

//Read/Query document by Id
// const bollywoodArticle = await Blog.findById("64591c2640476a934b7578fe").exec()
// console.log(bollywoodArticle)

// //Update the document
// bollywoodArticle.title = 'Updated to Article 57'
// await bollywoodArticle.save()

//Project document fields
// const projectedFields = await Blog.findById("64591c2640476a934b7578fe", "title category isPublished").exec()
// console.log(projectedFields)

//Deleting data
// await Blog.deleteOne({category: "Bollywood"})

//Create a user document where validation succeeds
// const user1 = await User.create({
//     name: "Jeevendra",
//     email: "jeevendra.singh@gmail.com"
// })

//Create a document where validation fails
// const user2 = await User.create({
//     name: "Jeev",
//     email: "JEEV@GMAIL.COM"
// })

//Create a user with timestamp
const user3 = await User.create({
    name: "John",
    email: "john@gmail.com"
})