/*
Promises API
 */

// TODO: Promise.all

function getPosts(base_url) {
    const ids = [1, 2, 3, 4, 5];

    const urls = ids.map(id => {
        return fetch(base_url + id);
    });

    Promise
        .all(urls)
        .then(responses => {
            return responses.map(r => r.json())
        }).then(posts => {
        posts.forEach(v => {
            v.then(post => {
                for (const key in post) {
                    console.log(`${key}: ${post[key]}`);
                }

                console.log('-'.repeat(100))
            });
        })
    });
}

getPosts("https://jsonplaceholder.typicode.com/posts/");

// TODO: Promise.allSettled
/**
 * Wait a delay
 *
 * @param {number} duration
 * @return {Promise<void>}
 */
async function wait(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(duration);
        }, duration);
    });
}

/**
 * Wait a delay
 *
 * @param {number} duration
 * @return {Promise<void>}
 */
async function waitAndFail(duration) {
    return new Promise((reject) => {
        setTimeout(() => {
            reject(duration);
        }, duration);
    });
}

Promise
    .all([wait(1000), waitAndFail(3000), waitAndFail(2000)])
    .then(console.log);