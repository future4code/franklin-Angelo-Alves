import * as express from "express";

const app = express();

app.use(express.json());
// app.use(cors());


var users: object[] = [
    {
       id: 1,
       name: 'angelo',
       phone: '22996143878',
       email: 'angelobehance@gmail.com',
       website: 'www.google.com'
    },
    {
        id: 2,
        name: 'rebecca',
        phone: '22970004271',
        email: 'rebecca@gmail.com',
        website: 'www.rebecca.com'
     },
     {
        id: 3,
        name: 'fulano',
        phone: '23996143878',
        email: 'fulano@gmail.com',
        website: 'www.fulano.com'
     }

]

//fazendo posts de forma separada, conseguimos recuperar separadamente todos os posts,
//post por usuário (filtrando) etc
//    \/ 


const posts= [
    {
        id: 1,
        title: "noticias",
        body: "noticias do dia de hoje lorem ipsuum ",
        userPostId: 1
    },
    {
        id: 2,
        title: "noticias2",
        body: "noticias do dia de amanha lorem ipsuum ",
        userPostId: 1
    },
    {
        id: 3,
        title: "melhores maquiagens pra festas",
        body: "qualquer uma do boti anyway",
        userPostId: 2
    },
    {
        id: 4,
        title: "fulano title",
        body: "fulano body",
        userPostId: 3
    },
]

app.get("/", (req, res) => {          
    res.send("raiz")
})

app.get("/users", (req, res) => {   
    res.status(201).send(users)
})
app.get("/posts", (req, res) => {   
    res.status(201).send(posts)
})

app.get("/posts/:id", (req, res) => {

    const id = Number(req.params.id)

    const listaFiltrada = posts.filter((post)=>{
        return post.userPostId === id
    }

    )
    res.status(201).send(listaFiltrada)
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});