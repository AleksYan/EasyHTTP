const http = new easyHTTP;

//get posts

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){

//     if(err){
//         console.log(err);
//     } else{
//         console.log(posts)
//     }
// });

// //get single posts
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){

//     if(err){
//         console.log(err);
//     } else{
//         console.log(post)
//     }
// });

// Create Data
const data = {
    title: 'Custom post',
    body: 'This is a custom post'
};

// create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post)
//     }
// });

// UPDATE PUT REQ

// http.put('https://jsonplaceholder.typicode.com/posts/10', data, function(err, post){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post)
//     }
// });


// Deleting post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, posts){

    if(err){
        console.log(err);
    } else{
        console.log(posts)
    }
});
