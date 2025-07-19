function getUserProfile() {
    return new Promise((resolve, reject) => {
        let userProfile = {
            id: 5,
            firstName: "Mathilde",
            lastName: "Larsson"
        }
        setTimeout(() => {
            resolve(userProfile);
        }, 1000);
    });
}



function getPosts(userID) {
    return new Promise((resolve, reject) => {
        let postsArray = [
            { id: 1, text: "Hello there!", userID: 5 },
            { id: 2, text: "How are you!", userID: 6 }
        ];
        setTimeout(() => {
            let userPosts = postsArray.filter((post) => {
                return post.userID === userID;
            });
            resolve(userPosts);
        }, 1000);
    });
}

function getComments(postID) {
    return new Promise((resolve, reject) => {
        let commentsArray = [
            { id: 1, postID: 1, userId: 5, text: "Now, the weather is sunny!" },
            { id: 2, postId: 2, userId: 6, text: "Later today, the weather will be cloudy!" }
        ];
        setTimeout(() => {
            let postComments = commentsArray.filter((comment) => {
                return comment.postID === postID;
            })
            resolve(postComments);
        }, 1000)

    });
}

console.log("Sequential Start");
getUserProfile().then((user) => {
    console.log("Sequential Profile", user);
    getPosts(user.id).then((posts) => {
        for (const post of posts) {
            console.log("Sequential Post", post);
            getComments(post.id).then((comments) => {
                console.log("Sequential Comment", comments);
            });
        }
    });
});

console.log("Sequential End");

console.log("Parallel Start");
getUserProfile().then((x) => {
    console.log("Parallel Profile", x);
});

getPosts(5).then((x) => {
    console.log("Parallel Posts", x);
});

getComments(1).then((x) => {
    console.log("Parallel Comments", x);
});
console.log("Parallel End");