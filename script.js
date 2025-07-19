function getUserProfile() {
    return new Promise((resolve, reject) => {
        let userProfile = {
            id: 5,
            firstName: "Mathilde",
            lastName: "Larsson"
        }
        setTimeout(() => {
            resolve(userProfile);
        }, 500);
    });
}
console.log("Start");
getUserProfile().then((x) => {
    console.log(x.firstName);
});
console.log("Program End");

function getPosts() {
    return new Promise((resolve, reject) => {
        let postsArray = [
            { id: 1, text: "Hello there!", userID: 5 },
            { id: 2, text: "How are you!", userID: 6 }
        ];
        setTimeout(() => {
            resolve(postsArray);
        }, 1000);
    });
}
getPosts().then((x) => {
    console.log(x[0]);
});

function getComments() {
    return new Promise((resolve, reject) => {
        let commentsArray = [
            { id: 1, postId: 1, userId: 5, text: "Now, the weather is sunny!" },
            { id: 2, postId: 2, userId: 6, text: "Later today, the weather will be cloudy!" }
        ];
        setTimeout(() => {
            resolve(commentsArray);
        }, 2000)

    });
}
getComments().then((x) => {
    console.log(x[1]);
});