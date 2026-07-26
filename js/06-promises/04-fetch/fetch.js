
// Get informations

async function fetchUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            method: "GET",
            headers: {
                "Accept": 'application/json',
                "Content-Type": "application/json"
            }
        }
    );

    if (response.ok === true) {
        return response.json();
    }

    throw new Error("Could not fetch users");
}

fetchUsers()
    .then(users => console.log(users))
    .catch(error => console.log(error.message));

// Post data

async function postData(post) {
    const r = await fetch("http://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": 'application/json',
        },
        body: JSON.stringify(post)
    });

    if (r.ok === true) {
        return r.json();
    }
    throw new Error("Could not fetch posts");
}

postData({title:"Hello World"})
   .then(postData => console.log(postData))