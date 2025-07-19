function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getUserProfile() {
    let userProfile = {
        id: 5,
        firstName: "Mathilde",
        lastName: "Larsson"
    }
    await delay(1000);
    return userProfile;
}

async function getPosts(userID) {
    let postsArray = [
        { id: 1, text: "Hello there!", userID: 5 },
        { id: 2, text: "How are you!", userID: 6 }
    ];

    await delay(1000);

    let userPosts = postsArray.filter((post) => {
        return post.userID === userID;
    });
    return userPosts;
}

async function getComments(postID) {
    let commentsArray = [
        { id: 1, postID: 1, userId: 5, text: "Now, the weather is sunny!" },
        { id: 2, postId: 2, userId: 6, text: "Later today, the weather will be cloudy!" }
    ];

    await delay(1000);

    let postComments = commentsArray.filter((comment) => {
        return comment.postID === postID;
    });
    return postComments;
}

console.log("Sequential Start");
let user = await getUserProfile();
console.log("Sequential Profile", user);

let posts = await getPosts(user.id);
for (const post of posts) {
    console.log("Sequential Post", post);
    let comments = await getComments(post.id);
    console.log("Sequential Comment", comments);
}
console.log("Sequential End");

console.log("Parallel Start");
let userPromise = getUserProfile();
let postsPromise = getPosts(5);
let commentsPromise = getComments(1);
let results = await Promise.all([userPromise, postsPromise, commentsPromise]);
for (const result of results) {
    console.log(result);
}
console.log("Parallel End");