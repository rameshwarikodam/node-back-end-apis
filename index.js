const express = require("express")

const app = express()

// routes
app.get("/", (req, res) => {
    res.send("Welcome to Home")
})

app.get("/about", (req, res) => {
    res.send("I am API of celebs list")
})

// dynamic route
app.get("/users/:id", (req, res) => {

    const id = req.params.id;

    res.send(`Welcome ${id}`)

})

app.get("/celebs", (req, res) => {

    var celebsList = [
        {
            "name": "Leonardo DiCaprio",
            "image": "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
            "descripton": "Leonardo Wilhelm DiCaprio is an American actor, producer, and environmentalist. He has often played unconventional parts, particularly in biopics and period films. As of 2019, his films have earned US$7.2 billion worldwide, and he has placed eight times in annual rankings of the world's highest-paid actors"
        },
        {
            "name": "Robert Downey, Jr.",
            "image": "https://www.pinkvilla.com/files/iron-man-star-robert-downey-jr-best-film.jpg",
            "descripton": "Robert John Downey Jr. is an American actor, producer, and singer. His career has been characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles, before a resurgence of commercial success in middle age."
        },
        {
            "name": "Tom Cruise",
            "image": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Jack_Reacher-_Never_Go_Back_Japan_Premiere_Red_Carpet-_Tom_Cruise_%2835338493152%29_%28cropped%29.jpg",
            "descripton": "Thomas Cruise Mapother IV is an American actor and producer. He has received several accolades for his work, including three Golden Globe Awards and three nominations for Academy Awards. With a net worth of $570 million as of 2020, he is one of the highest-paid actors in the world"
        },
        {
            "name": "Chris Hemsworth",
            "image": "https://www.gstatic.com/tv/thumb/persons/528854/528854_v9_bb.jpg",
            "descripton": "Christopher Hemsworth is an Australian actor. He first rose to prominence in Australia playing Kim Hyde in the Australian television series Home and Away before beginning a film career in Hollywood."
        },
        {
            "name": "Morgan Freeman",
            "image": "https://www.gstatic.com/tv/thumb/persons/47162/47162_v9_bb.jpg",
            "descripton": "Morgan Freeman is an American actor and film narrator. Freeman won an Academy Award in 2005 for Best Supporting Actor with Million Dollar Baby and has received Oscar nominations for his performances in Street Smart, Driving Miss Daisy, The Shawshank Redemption and Invictus"
        },
        {
            "name": "Angelina Jolie",
            "image": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Angelina_Jolie_%2848462664366%29_%28cropped%29.jpg",
            "descripton": "Angelina Jolie is an American actress, filmmaker, and humanitarian. The recipient of numerous accolades, including an Academy Award and three Golden Globe Awards, she has been named Hollywood's highest-paid actress multiple times."
        },
        {
            "name": "Natalie Portman",
            "image": "https://m.media-amazon.com/images/M/MV5BMTQ3ODE3Mjg1NV5BMl5BanBnXkFtZTcwNzA4ODcxNA@@._V1_UY1200_CR132,0,630,1200_AL_.jpg",
            "descripton": "Natalie Portman is an actress and filmmaker with dual Israeli and American citizenship. Prolific in film since a teenager, she has starred in blockbusters and also played psychologically troubled women "
        },
        {
            "name": "Vin Diesel",
            "image": "https://www.gstatic.com/tv/thumb/persons/79719/79719_v9_bb.jpg",
            "descripton": "Mark Sinclair, known professionally as Vin Diesel, is an American actor, producer, director, and screenwriter. He is best known for playing Dominic Toretto in the Fast & Furious franchise, and is one of the highest-grossing actors of all time"
        },
        {
            "name": "Scarlett Johansson",
            "image": "https://upload.wikimedia.org/wikipedia/commons/2/26/Scarlett_Johansson_by_Gage_Skidmore_2019.jpg",
            "descripton": "Scarlett Ingrid Johansson is an American actress and singer. The world's highest-paid actress since 2018, she has made multiple appearances in the Forbes Celebrity 100. Her films have grossed over $14.3 billion worldwide, making Johansson the ninth-highest-grossing box office star of all time"
        },
        {
            "name": "Jackie Chan",
            "image": "https://www.gstatic.com/tv/thumb/persons/28555/28555_v9_ba.jpg",
            "descripton": "Chan Kong-sang SBS MBE PMW, known professionally as Jackie Chan, is a Hong Kong martial artist, actor, film director, producer, stuntman, and singer. He is known in the cinematic world for his acrobatic fighting style, comic timing, use of improvised weapons, and innovative stunts, which he typically performs himself."
        }
    ];

    res.send(celebsList)

})

app.listen(process.env.PORT || 5000, () => {
    console.log("NodeJS server is listening on the port 80")
})