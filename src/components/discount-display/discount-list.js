import { v4 as uuid } from "uuid";
import BooksImg1 from "../../assets/images/book1.jpg";
import BooksImg2 from "../../assets/images/book2.jpg";
import BooksImg3 from "../../assets/images/book3.jpg";
import BooksImg4 from "../../assets/images/book4.jpg";


export const discountList = [
    {
        _id: uuid(),
        description: "Buy 3 or more books, and get 8% off!",
        img: BooksImg1
    },
    {
        _id: uuid(),
        description: "Save upto 15% on top book bundles!!",
        img: BooksImg2
    },
    {
        _id: uuid(),
        description: "Get 20% off on Boxsets and Collectibles",
        img: BooksImg3
    },
    {
        _id: uuid(),
        description: "Exchange your old books, get 50% 0ff!",
        img: BooksImg4
    }
];