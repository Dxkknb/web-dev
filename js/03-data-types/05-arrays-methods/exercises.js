// TODO: Product filtering (e-commerce)
const products = [
	{ name: "Mouse", price: 25, inStock: true },
	{ name: "Keyboard", price: 120, inStock: false },
	{ name: "Monitor", price: 90, inStock: true }
];
const cheaperProductsInStock = products
	.filter((product) => product.inStock && product.price < 100);

console.log("Cheaper products in stock:", cheaperProductsInStock);

// TODO: Extract user emails
const users = [
	{ id: 1, name: "Alice Johnson", email: "alice.johnson@example.com" },
	{ id: 2, name: "Bruno Koffi", email: "bruno.koffi@example.com" },
	{ id: 3, name: "Carla Mendes", email: "carla.mendes@example.com" },
	{ id: 4, name: "David Smith", email: "david.smith@example.com" },
	{ id: 5, name: "Emma Dubois", email: "emma.dubois@example.com" },
	{ id: 6, name: "Fabrice Konan", email: "fabrice.konan@example.com" },
	{ id: 7, name: "Grace Williams", email: "grace.williams@example.com" },
	{ id: 8, name: "Hassan Traoré", email: "hassan.traore@example.com" },
	{ id: 9, name: "Isabella Rossi", email: "isabella.rossi@example.com" },
	{ id: 10, name: "Jean-Pierre N’Guessan", email: "jp.nguessan@example.com" }
];
const userEmails = users.map((user) => user.email);

console.log("User's emails:", userEmails);

// TODO: Total cart price
const shoppingCart = [
	{
		id: 1,
		name: "T-shirt",
		price: 15,
		quantity: 2
	},
	{
		id: 2,
		name: "Sneakers",
		price: 60,
		quantity: 1
	},
	{
		id: 3,
		name: "Cap",
		price: 10,
		quantity: 3
	}
];
const totalPrice = shoppingCart.reduce((acc, item) => {
	return acc + item.price;
}, 0);

console.log("Total shopping cart amount:", totalPrice);

// TODO: Find first admin user
const usersWithRole = [
	{ id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", admin: false },
	{ id: 2, name: "Bruno Koffi", email: "bruno.koffi@example.com", admin: false },
	{ id: 3, name: "Carla Mendes", email: "carla.mendes@example.com", admin: true },
	{ id: 4, name: "David Smith", email: "david.smith@example.com", admin: true },
	{ id: 5, name: "Emma Dubois", email: "emma.dubois@example.com", admin: false }
];
const firstAdmin = usersWithRole.find(user => user.admin);

console.log("First admin:", firstAdmin);

// TODO: User Management Dashboard
const userInfos = [
	{ id: 1, name: "Alice", age: 28, role: "admin", active: true },
	{ id: 2, name: "Bob", age: 17, role: "user", active: false },
	{ id: 3, name: "Charlie", age: 34, role: "user", active: true },
	{ id: 4, name: "David", age: 15, role: "guest", active: true },
	{ id: 5, name: "Eva", age: 42, role: "admin", active: false },
	{ id: 6, name: "Frank", age: 30, role: "user", active: true }
];

/**
 * @typedef {Object} User
 * @property {number} id - unique identifier
 * @property {string} name - name of user
 * @property {string} role - user's role
 * @property {boolean} active - active user
 *
 * @param {User[]} users - list of users
 * @return {User[]} - Return the list of active users
 */
function findActiveUsers(users) {
	return users.filter(user => user.active);
}

console.log("Active users:", findActiveUsers(userInfos));

/**
 * @typedef {Object} User
 * @property {number} id - unique identifier
 * @property {string} name - name of user
 * @property {string} role - user's role
 * @property {boolean} active - active user
 *
 * @param {User[]} users - list of users
 * @return {User[]} - Return only admins
 */
function onlyAdmins(users) {
	return users.filter(user => user.role === "admin");
}

console.log("Only Admins:", onlyAdmins(userInfos));

/**
 * @typedef {Object} User
 * @property {number} id - unique identifier
 * @property {string} name - name of user
 * @property {string} role - user's role
 * @property {boolean} active - active user
 *
 * @param {User[]} users - list of users
 * @return {User[]} - Return only admins
 */
function olderThanEighteen(users) {
	return users.filter(user => user.age >= 18);
}

console.log("Older than 18 users:", olderThanEighteen(userInfos));