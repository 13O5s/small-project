var users = [
    {
        id: 1,
        name: 'Duy Anh',
    },
    {
        id: 2,
        name: 'Son Dang',
    },
    {
        id: 3,
        name: 'John',
    }
];

var comments =[
    {
        id: 1,
        user_id: 1,
        content: 'This is a comment 1',
    },
    {
        id: 2,
        user_id: 2,
        content: 'This is a comment 2',
    },
];

// 1 lay cmt
// 2. Tu cmt lay ra user_id
// 3. Tu user_id lay ra ten

// fake API
function getComments()
{
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(comments);
        },1000);
    });
}

function getUsersById(UserIDS)
{
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            var res = users.filter(function(user) {
                return UserIDS.includes(user.id);
            })
        setTimeout(resolve(res),1000);
        },1000);
    });
}

getComments()
    .then(function(comments) {
        var userIds = comments.map(function(comment) 
        {return comment.user_id});
        return getUsersById(userIds)
            .then(function(user){
                return {
                    users: user,
                    comments: comments, 
                };
            })
        
    })
    .then(function(users) {
        console.log(users);
    })


