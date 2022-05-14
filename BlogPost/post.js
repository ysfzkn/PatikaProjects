
/*
Yusuf Ozkan.

This code adds new posts to posts object, 
lists them and does them asynchronously.

*/

let posts = 
[
    {
        id : 1,
        title : 'History of Music',
        category : 'Music',
        author : 'Yusuf Ozkan'
    },
    {
        id : 2,
        title : 'What is WEB3 ?',
        category : 'Technology',
        author : 'Elon Musk'
    },
    {
        id : 3,
        title : 'How can we handle with stress in a daily life ?',
        category : 'Psychology',
        author : 'Viktor Emil Frankl'
    }
]

let new_post = 
{
    id : posts.length + 1,
    title : 'What is the last situation in Ukraine ?',
    category : 'Political',
    author : 'Anderson Cooper'
}

const addPost = async (newPost) => 
{

}