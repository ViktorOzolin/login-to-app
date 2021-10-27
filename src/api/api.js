export const contactsAPI = {
    getData: () => {
       return fetch("https://jsonplaceholder.typicode.com/users")
    }
}