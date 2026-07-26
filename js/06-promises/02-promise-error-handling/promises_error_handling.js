/*
Error handling with promises
 */

function getPost(postId) {
   return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'GET',
        mode: 'cors',
    })
}
getPost(100)
    .then(result => {
        return result.json();
    })
    .then(post => {
        if (Object.getOwnPropertyNames(post).length > 0) {
            for (const key in post) {
                console.log(`${key}: ${post[key]}`);
            }
        }
    })
    .catch(error => {
        if (error?.response && error?.response?.status === 404) {
            console.log("Something went wrong!");
        }
});

// Implicit try ... catch
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

async function main() {
    try {
        await waitAndFail(2000);
        console.log("Bonjour");
        await wait(1000);
        console.log("Les gens");
    } catch (error) {
        console.log("Error");
    }
}