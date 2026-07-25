/*
Exercise: Book library
 */

/**
 * Represents a single book.
 */
class Book {
    /**
     * Title of the book.
     *
     * @type {string}
     */
    #title;

    /**
     * Number of pages in the book.
     *
     * @type {number}
     */
    #pages;

    /**
     * Current page number
     *
     * @type {number}
     */
    #page = 1;

    /**
     * Creates a book
     *
     * @param {string} title - Book title.
     * @param {number} pages - Number of pages in the book (must be positive integer).
     * @throws {Error} If the title is empty or pages is not a positive integer.
     */
    constructor(title, pages) {
        if (typeof title !== "string" || title.trim() === "") {
            throw new Error("Book title must be a non-empty string.");
        }

        if (!Number.isInteger(pages) || pages <= 0) {
            throw new Error("Book pages must be a positive integer.");
        }

        this.#title = title;
        this.#pages = pages;
    }

    /**
     * Returns the book title.
     *
     * @readonly
     * @return {string}
     */
    get title() {
        return this.#title;
    }

    /**
     * Returns the total number of pages.
     *
     * @readonly
     * @return {number}
     */
    get pages() {
        return this.#pages;
    }

    /**
     * Returns the number of the current page.
     *
     * @readonly
     * @return {number}
     */
    get page() {
        return this.#page;
    }

    /**
     * Moves to the next page.
     * If we are at the end, we return to the first page.
     *
     * @return {void}
     */
    nextPage() {
        this.#page = this.#page < this.#pages ? this.#pages + 1 : 1;
    }

    /**
     * Closes the book (resets the first page).
     *
     * @return {void}
     */
    close() {
        this.#page = 1;
    }

    /**
     * Displays book details in the console.
     *
     * @return {void}
     */
    display() {
        console.log(`
Book name: ${this.title}
pages: ${this.pages}
        `);
    }
}

/**
 * Manages a collection of books.
 */
class Library {
    /**
     * Collection of books.
     *
     * @type {Book[]}
     */
    #books = [];

    /**
     * Returns a collection of books.
     *
     * @readonly
     * @return {Book[]}
     */
    get books() {
        return this.#books;
    }

    /**
     * Add a book to the collection
     * if it not already present(case-insensitive title match).
     *
     * @param {Book} book - The book to add.
     * @return {boolean} True if the book was added, false if it was already present.
     */
    addBook(book) {
        const alreadyExists = this.#books.some((b) => b.title.toLowerCase() === book.title.toLowerCase());

        if (alreadyExists) {
            console.log(`'${book.title}' is already in the library.`);
            return false;
        }

        this.#books.push(book);
        console.log(`'${book.title}' added to the library successfully.`);

        return true;
    }

    /**
     * Add several books to the collection.
     *
     * @param {Book[]} books - The books to add.
     * @return {void}
     */
    addBooks(books) {
        books.forEach(book => {
            this.addBook(book);
        });
    }

    /**
     * Finds and displays books whose title contains the given search term.
     *
     * @param {string} searchItem - Term to search for in the book title.
     * @return {Book[]} The matching books.
     */
    findBooksByTitle(searchItem) {
        const foundBooks = this.#books.filter((book) => book.title.toLowerCase().includes(searchItem.toLowerCase()));

        if (foundBooks.length === 0) {
            console.log(`No books found for '${searchItem}'`);
        } else {
            foundBooks.forEach(book => book.display());
        }

        return foundBooks;
    }

    /**
     *  Sort the books in alphabetical order by title (mutates the internal collection).
     *
     *  @return {void}
     */
    sortBooks() {
        this.#books.sort((a, b) => a.title.localeCompare(b.title));
    }
}

// DEMO

const b = new Book("Seigneur des anneaux", 100);
console.log("Current book's page:", b.page);

b.nextPage();
console.log("Current book's page:", b.page);

b.nextPage();
console.log("Current book's page:", b.page);

b.close();
console.log("Current book's page:", b.page);
b.nextPage();

const l = new Library();

l.addBook(b);
l.addBooks([new Book("Ready player one", 100), new Book("Sans famille", 10), new Book('Les affranchis', 250)]);

l.sortBooks();
console.log(l.books);

let searchWord = prompt("Book title: ")
l.findBooksByTitle(searchWord);