const posts = [
    {
        title: 'Post 1',
        body: 'This is post 1'
    },
    {
        title: 'Post 2',
        body: 'This is post 2'
    }
]

const getPosts = () => {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

const createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });

    
}

// createPost({ title: 'Post 3', body: 'This is post three' })
//     .then(getPosts)
//     .catch(err => console.log(err));

// Async/Await
// const init = async() => {
//     await createPost({ title: 'Post 3', body: 'This is post three' });

//     getPosts();
// }

// init();

// Async / Await / Fetch
const fetchUsers = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();

// Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));

