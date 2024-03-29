import { v4 as uuid } from "uuid";

export const products = [
  {
    _id: uuid(),
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    originalPrice: 175,
    discountedPrice: 99,
    discount: 43,
    genre: ["autobiography"],
    stars: 4.6,
    totalRatings: 24800,
    format: "Paperback",
    inStock: true,
    bestSeller: true,
    description: "An Inspiration The Holocaust was one of the most horrendous and terrible eras in history. Innumerable books have been written describing the horrors of the Holocaust; but nothing beats the documentation of a family who had gone into hiding in the diary of a little girl, Anne Frank. Honest, lucid, and empathetic; The Diary of A Young Girl deserves a read by everyone.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/81xPFVVGesL.jpg",
  },
  {
    _id: uuid(),
    title: "Great Stories for Children",
    author: "Ruskin Bond",
    originalPrice: 195,
    discountedPrice: 122,
    discount: 37,
    genre: ["fiction", "children"],
    stars: 4.2,
    totalRatings: 4566,
    format: "Paperback",
    inStock: true,
    bestSeller: false,
    description: "Great Stories for Children is a collection of some of Ruskin Bond's most delightful children's stories.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/51HZN1uIVqL._SX321_BO1,204,203,200_.jpg",
  },
  {
    _id: uuid(),
    title: "Pride & Prejudice",
    author: "Jane Austen",
    originalPrice: 199,
    discountedPrice: 99,
    discount: 51,
    genre: ["drama", "romance"],
    stars: 3.4,
    totalRatings: 12878,
    format: "Paperback",
    inStock: true,
    bestSeller: true,
    description: "Through this tale about two warring hearts, Austen weaves a witty satire about life in eighteenth century England. And through it was published more than two centuries ago, Pride and Prejudice continues to enthrall readers to this very day.",
    coverImage: "https://rukminim2.flixcart.com/image/416/416/kqidx8w0/book/m/t/q/pride-prejudice-original-imag4hhytfbvzyza.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "Twilight - New Moon",
    author: "Stephenie Meyer",
    originalPrice: 499,
    discountedPrice: 345,
    discount: 31,
    genre: ["romance", "fantasy", "fiction"],
    stars: 1.2,
    totalRatings: 12006,
    format: "Paperback",
    inStock: false,
    bestSeller: false,
    description: "For Bella Swan, there is one thing more important than life itself: Edward Cullen. But being in love with a vampire is more dangerous than Bella ever could have imagined. Edward has already rescued Bella from the clutches of an evil vampire but now, as their daring relationship threatens all that is near and dear to them, they realise their troubles may just be beginning …",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/81rpWBnoCBL.jpg",
  },
  {
    _id: uuid(),
    title: "Becoming",
    author: "Michelle Obama",
    originalPrice: 1699,
    discountedPrice: 1204, 
    discount: 29,
    genre: ["autobiography"],
    stars: 4.6,
    totalRatings: 33412,
    format: "Hardcover",
    inStock: true,
    bestSeller: false,
    description: "n her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her -- from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work, to her time spent at the world's most famous address.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/81dDwAzxtrL.jpg",
  },
  {
    _id: uuid(),
    title: "The Origin of Species",
    author: "Charles Darwin",
    originalPrice: 299,
    discountedPrice: 159, 
    discount: 47,
    genre: ["science"],
    stars: 2.0,
    totalRatings: 13734,
    format: "Paperback",
    inStock: true,
    bestSeller: true,
    description: "The theory of natural selection constructed by Charles Darwin is comprised in his revolutionary work of scientific literature called the Origin of Species. This piece of work recounts his ideas on the process of evolution of living beings based on the process of natural selection and it laid down the foundation for evolutionary biology.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/71rUpSynUHL.jpg",
  },
  {
    _id: uuid(),
    title: "The Theory of Everything",
    author: "Stephen Hawking",
    originalPrice: 199,
    discountedPrice: 145, 
    discount: 27,
    genre: ["science"],
    stars: 4.5,
    totalRatings: 38928,
    format: "Paperback",
    inStock: false,
    bestSeller: false,
    description: "Seven lectures by the brilliant theoretical physicist have been compiled into this book to try to explain to the common man, the complex problems of mathematics and the question that has been gripped everyone all for centuries, the theory of existence.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/51oHUvYzbsL.jpg",
  },
  {
    _id: uuid(),
    title: "My Life in Full: Work, Family, and Our Future",
    author: "Indra Nooyi",
    originalPrice: 699,
    discountedPrice: 475,
    discount: 32,
    genre: ["autobiography"],
    stars: 4.4,
    totalRatings: 17534,
    format: "Hardcover",
    inStock: true,
    bestSeller: false,
    description: "An intimate and powerful memoir by the trailblazing former CEO of PepsiCoFor a dozen years as one of the world's most admired CEOs, Indra Nooyi redefined what it means to be an exceptional leader. The first woman of colour and immigrant to run a Fortune 50 company and one of the foremost strategic thinkers of our time she transformed PepsiCo with a unique vision, a vigorous pursuit of excellence, and a deep sense of purpose. Now, in a rich memoir brimming with grace, grit, and good humour, My Life in Full offers a first-hand view of Nooyi's legendary career and the sacrifices it so often demanded.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/71GYH1FTilL.jpg",
  },
  {
    _id: uuid(),
    title: "Atomic Habits",
    author: "James Clear",
    originalPrice: 799,
    discountedPrice: 520, 
    discount: 35,
    genre: ["self-help"],
    stars: 4.6,
    totalRatings: 42699,
    format: "Paperback",
    inStock: true,
    bestSeller: false,
    description: "Packed with evidence-based strategies, Atomic Habits will teach you how to make small changes that will transform your habits and deliver amazing results.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg",
  },
  {
    _id: uuid(),
    title: "Eat That Frog!",
    author: "Brian Tracy",
    originalPrice: 299,
    discountedPrice: 249,
    discount: 17,
    genre: ["self-help"],
    stars: 2.3,
    totalRatings: 9811,
    format: "Paperback",
    inStock: true,
    bestSeller: false,
    description: "Successful people don't try to do everything. They learn to focus on the most important tasks and make sure those get done. They eat their frogs.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/61ZNAnIrwwL.jpg",
  },
  {
    _id: uuid(),
    title: "Can't Hurt Me",
    author: "David Goggins",
    originalPrice: 1500,
    discountedPrice: 1471,
    discount: 2,
    genre: ["autobiography"],
    stars: 4.4,
    totalRatings: 3009,
    format: "Hardcover",
    inStock: true,
    bestSeller: false,
    description: "For David Goggins, childhood was a nightmare - poverty, prejudice, and physical abuse colored his days and haunted his nights. But through self-discipline, mental toughness, and hard work, Goggins transformed himself from a depressed, overweight young man with no future into a U.S. Armed Forces icon and one of the world's top endurance athletes.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/812jTyNSu1L.jpg",
  },
  {
    _id: uuid(),
    title: "A Brief History Of Time: From Big Bang To Black Holes",
    author: "Stephen Hawking",
    originalPrice: 399,
    discountedPrice: 333,
    discount: 17,
    genre: ["science"],
    stars: 4.6,
    totalRatings: 13665,
    format: "Paperback",
    inStock: true,
    bestSeller: true,
    description: "Was there a beginning of time? Could time run backwards? Is the universe infinite or does it have boundaries? These are just some of the questions considered in an internationally acclaimed masterpiece which begins by reviewing the great theories of the cosmos from Newton to Einstein, before delving into the secrets which still lie at the heart of space and time.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/81DBK93b6jL.jpg",
  },
  {
    _id: uuid(),
    title: "The Notebook",
    author: "Nicholas Sparks",
    originalPrice: 399,
    discountedPrice: 255,
    discount: 36,
    genre: ["romance"],
    stars: 4.3,
    totalRatings: 34009,
    format: "Paperback",
    inStock: false,
    bestSeller: false,
    description: "The Notebook: The love story to end all love stories (Calhoun Family Saga)",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/710v59ixsEL.jpg",
  },
  {
    _id: uuid(),
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    originalPrice: 99,
    discountedPrice: 95, 
    discount: 5,
    genre: ["drama", "fiction", "romance"],
    stars: 1.6,
    totalRatings: 19443,
    format: "Paperback",
    inStock: true,
    bestSeller: false,
    description: "Romeo and Juliet is one of the most popular and frequently enacted plays penned by Shakespeare. Despite the violent feud between families, the play weaves a fated love story between two young lovers.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/711TxX8cdlL.jpg",
  },
  {
    _id: uuid(),
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    originalPrice: 150,
    discountedPrice: 109, 
    discount: 27,
    genre: ["romance", "drama", "fiction"],
    stars: 3.3,
    totalRatings: 8766,
    format: "Paperback",
    inStock: true,
    bestSeller: false,
    description: "In this definitive tale on American culture, Fitzgerald pits a chaste dream against the corrupting influences of wealth and comes up with an epic story that can only be defined as 'a Great American novel'.",
    coverImage: "https://m.media-amazon.com/images/I/41XMaCHkrgL.jpg",
  },
  {
    _id: uuid(),
    title: "Animal Farm",
    author: "George Orwell",
    originalPrice: 140,
    discountedPrice: 69, 
    discount: 51,
    genre: ["fiction"],
    stars: 4.6,
    totalRatings: 36776,
    format: "Paperback",
    inStock: false,
    bestSeller: false,
    description: "Animal Farm is, one level, a simple story about barnyard animals. On a much deeper level, it is a savage political satire on corrupted ideals, misdirected revolutions and class conflict themes as valid today as they were sixty years ago.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/71JUJ6pGoIL.jpg",
  },
  {
    _id: uuid(),
    title: "The Adventures of Sherlock Holmes",
    author: "Sir Arthur Conan Doyle",
    originalPrice: 195,
    discountedPrice: 159,
    discount: 18,
    genre: ["adventure", "fiction"],
    stars: 4.9,
    totalRatings: 99324,
    format: "Paperback",
    inStock: false,
    bestSeller: true,
    description: "Meet Sherlock Holmes, the ruthless and self-disciplined detective who takes up every case as an intellectual challenge. He not only solves mysteries and discovers murderers, thieves and criminals, but also identifies the social injustices and provides a new and just approach to remedy them. A collection of twelve short stories, many of which were Doyle’s favorite, the Adventures of Sherlock Holmes was well-received on its publication.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/81Hq73lPrEL.jpg",
  },
  {
    _id: uuid(),
    title: "Siddhartha",
    author: "Hermann Hesse",
    originalPrice: 399,
    discountedPrice: 299,
    discount: 25,
    genre: ["fiction", "philosophy"],
    stars: 1.9,
    totalRatings: 309,
    format: "Hardcover",
    inStock: true,
    bestSeller: false,
    description: "Siddhartha is a novel by Hermann Hesse that deals with the spiritual journey of a boy known as Siddhartha from the Indian subcontinent during the time of Lord Buddha.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/71o4Wi1CRsL.jpg",
  },
  {
    _id: uuid(),
    title: "The Prophet",
    author: "Kahlil Gibran",
    originalPrice: 399,
    discountedPrice: 279, 
    discount: 30,
    genre: ["fiction", "fantasy", "philosophy"],
    stars: 4.3,
    totalRatings: 9008,
    format: "Paperback",
    inStock: true,
    bestSeller: false,
    description: "A book of twenty-six poetic essays written in English, Kahlil Gibran’s The Prophet is full of religious inspirations.",
    coverImage: "https://m.media-amazon.com/images/I/51oKFW+PXBL.jpg",
  },
  {
    _id: uuid(),
    title: "1984",
    author: "George Orwell",
    originalPrice: 499,
    discountedPrice: 309, 
    discount: 38,
    genre: ["fiction"],
    stars: 4.6,
    totalRatings: 76896,
    format: "Hardcover",
    inStock: true,
    bestSeller: false,
    description: "Orwell’s masterful critique of the political structures of the time works itself out through the story of Winston Smith, a man caught in the webs of a dystopian future, and his clandestine love affair with Julia, a young woman he meets during the course of his work for the government. As much as it is an entertaining read, 1984 is also a brilliant, and more importantly, a timeless satirical attack on the social and political structures of the world.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/41t+5gUqXYL._SX277_BO1,204,203,200_.jpg",
  },
  {
    _id: uuid(),
    title: "The Alchemist",
    author: "Paulo Coelho",
    originalPrice: 350,
    discountedPrice: 227, 
    discount: 35,
    genre: ["adventure", "fiction", "fanasy"],
    stars: 4.8,
    totalRatings: 77227,
    format: "Paperback",
    inStock: true,
    bestSeller: false,
    description: "This story, dazzling in its powerful simplicity and inspiring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried in the Pyramids.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
  },
  {
    _id: uuid(),
    title: "Othello",
    author: "William Shakespeare",
    originalPrice: 99,
    discountedPrice: 79, 
    discount: 20,
    genre: [ "drama", "romance"],
    stars: 2.5,
    totalRatings: 393,
    format: "Paperback",
    inStock: false,
    bestSeller: false,
    description: "Othello, a soldier in the service of the Venetian Republic, is tricked by his villainous ensign, Iago, into believing that his beloved wife, Desdemona, is an adulteress. In a fit of emotional imbalance, Othello murders her in the most ungracious manner. What happens when he comes to know that she is innocent?",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/71vx+-X-GQL.jpg",
  },
  {
    _id: uuid(),
    title: "The Arabian Nights",
    author: "Richard F. Burton",
    originalPrice: 299,
    discountedPrice: 199,
    discount: 33,
    genre: ["fantasy", "children"],
    stars: 2.9,
    totalRatings: 2988,
    format: "Paperback",
    inStock: true,
    bestSeller: true,
    description: "Tragedies, comedies, erotica, poems and tales of valor, history, romance and mischief. Bringing alive jinns, monsters, spirits, magicians and sorcerers, these timeless folk tales from the Middle East, have enchanted readers for centuries.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/71TtNL6A24L.jpg",
  },
  {
    _id: uuid(),
    title: "The Complete Grimms' Fairy Tales",
    author: "Jacob Grimm & Wilhelm Grimm",
    originalPrice: 899,
    discountedPrice: 800, 
    discount: 11,
    genre: ["fantasy", "children"],
    stars: 1.6,
    totalRatings: 3009,
    format: "Hardcover",
    inStock: true,
    bestSeller: false,
    description: "There is boundless magic and wonder in these tales, as is evidenced by their constant retelling through adaptions into films, theatre, opera, animations, and other cultural forms, along with their place in the tradition of oral storytelling.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/A1jNWp0QN1L.jpg",
  },
  {
    _id: uuid(),
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    originalPrice: 499,
    discountedPrice: 200,
    discount: 40,
    genre: ["adventure", "children", "fiction", "fantasy"],
    stars: 4.6,
    totalRatings: 18998,
    format: "Paperback",
    inStock: false,
    bestSeller: false,
    description: " “Escape to Hogwarts with the unmissable series that has sparked a lifelong reading journey for children and families all over the world.”",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/51UDJ6EbhXL._SX323_BO1,204,203,200_.jpg",
  },
  {
    _id: uuid(),
    title: "Harry Potter and the Half-Blood Prince",
    author: "J. K. Rowling",
    originalPrice: 700,
    discountedPrice: 350, 
    discount: 50,
    genre: ["adventure", "children", "fiction", "fantasy"],
    stars: 4.5,
    totalRatings: 87665,
    format: "Paperback",
    inStock: true,
    bestSeller: false,
    description: "Escape to Hogwarts with the unmissable series that has sparked a lifelong reading journey for children and families all over the world.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/915i0eI3J8L.jpg",
  },
  {
    _id: uuid(),
    title: "Grandma's Bag of Stories",
    author: "Sudha Murty",
    originalPrice: 195,
    discountedPrice: 122, 
    discount: 37,
    genre: ["children", "fiction"],
    stars: 3.3,
    totalRatings: 9887,
    format: "Paperback",
    inStock: true,
    bestSeller: false,
    description: "Memories of a grandparent spinning tales around animals and mysterious characters have kept many of us rapt till date.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/81jv44QdNwL.jpg",
  },
  {
    _id: uuid(),
    title: "Losing My Virginity",
    author: "Sir Pichard Branson",
    originalPrice: 599,
    discountedPrice: 399,
    discount: 33,
    genre: ["autobiography"],
    stars: 4.8,
    totalRatings: 17834,
    format: "Paperback",
    inStock: true,
    bestSeller: true,
    description: "Richard Branson is a worldwide icon known for his tremendous wealth and industry leading business models. His spectacular journey has remained a topic of discussion and now Branson himself, reveals his story through his biography, 'Losing My Virginity.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/51G5tJ9dvKL._SX323_BO1,204,203,200_.jpg",
  }
];
