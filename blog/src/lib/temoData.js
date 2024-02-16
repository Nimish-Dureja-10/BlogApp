const users = [
    {id:1,name:"Nimish"},
    {id:2,name:"Priyanshu"},
    {id:3,name:"Kunal"},
    {id:4,name:"Pulkit"},
    {id:5,name:"Kushagra"},
];

const posts = [ 
    {id:1,title:"Post 1", body: ".....",userId:1},
    {id:1,title:"Post 2", body: ".....",userId:2},
    {id:1,title:"Post 3", body: ".....",userId:3},
    {id:1,title:"Post 4", body: ".....",userId:4},
    {id:1,title:"Post 5", body: ".....",userId:5},
]

export const getPosts = () => {
    return posts;
}

export const getPost = (id) => {
    return posts.find(post=>post.id === parseInt(id));
}

export const getUser = (id) => {
    return users.find(user=>user.id === parseInt(id));
}

// MongoDB Password
// fbbXVdtGOdFfZCuR