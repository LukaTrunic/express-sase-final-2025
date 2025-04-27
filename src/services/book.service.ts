import axios from "axios";

const client = axios.create({
    baseURL: "https://gutendex.com",
    timeout: 12000,
    headers: {
        'Accept': 'application/json',
        //'X-Name': 'The Library System' // you can check which frontend application is using your beckend application
    },
    validateStatus: (status: number) => {
        return status >= 200 && status < 400;
    }
})

export class BookService {
    static async getBooks() {
        return await client.request({
            url: '/books',
            method: 'get'
        });
    }

    static async getBookById(id: number) {
        return await client.get(`/books/${id}`);
    }

    static async getBooksByIds(ids: number[]) {
        return await client.request({
            url: '/books',
            method: 'post',
            data: ids
        });
    }
}



