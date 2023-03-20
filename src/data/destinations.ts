export const destinations = [
    {
        _id: 1,
        picture: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bG9uZHJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        name: "Viaje a Londres 2018",
        destination: "Londres, Reino Unido",
        flag: "🇬🇧",
        shipDate: {
            start: "2018-06-21",
            end: "2018-06-23"
        },
        people: [
            {
                name: "Alex Cantón",
                email: "alexcan.dvlpr@gmail.com",
                picture: "https://cdn.semana.es/wp-content/uploads/2021/05/johnny-depp.jpg"
            }
        ],
        monuments: [
            { name: "Big Ben", picture: "https://images.unsplash.com/photo-1454793147212-9e7e57e89a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80", viewed: false },
            { name: "Tienda M&M", picture: "https://images.unsplash.com/photo-1626157149703-739e3f27ac0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1208&q=80", viewed: false },
        ]
    },
    {
        _id: 2,
        picture: "https://images.unsplash.com/photo-1525874684015-58379d421a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cm9tYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        name: "Viaje a Roma 2019",
        destination: "Roma, Italia",
        flag: "🇮🇹",
        shipDate: {
            start: "2019-10-13",
            end: "2019-10-15"
        },
        people: [
            {
                name: "Alex Cantón",
                email: "alexcan.dvlpr@gmail.com",
                picture: "https://cdn.semana.es/wp-content/uploads/2021/05/johnny-depp.jpg"
            },
            {
                name: "Almudena Gutierrez",
                email: "almudena1806@gmail.com",
                picture: "https://fotografias.antena3.com/clipping/cmsimages01/2021/12/18/EB865CF3-7AD2-409B-83C9-C410C6A50DC8/98.jpg?crop=1024,576,x0,y0&width=1900&height=1069&optimize=high&format=webply"
            }
        ],
        monuments: [
            { name: "Coliseo Romano", picture: "https://images.unsplash.com/photo-1588614959060-4d144f28b207?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1686&q=80", viewed: true },
            { name: "Fontana Di Trevi", picture: "https://images.unsplash.com/photo-1610655769933-177d3adb53eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Rm9udGFuYSUyMGRpJTIwdHJldml8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", viewed: false },
            { name: "Monumento Victor Emmanuel II", picture: "https://images.unsplash.com/photo-1651608239026-b6942cbb1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80", viewed: false },
        ]
    },
    {
        _id: 3,
        picture: "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVybGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        name: "Viaje a Berlín 2019",
        destination: "Berlín, Alemania",
        flag: "🇩🇪",
        shipDate: {
            start: "2019-11-09",
            end: "2019-11-12"
        },
        people: [
            {
                name: "Alex Cantón",
                email: "alexcan.dvlpr@gmail.com",
                picture: "https://cdn.semana.es/wp-content/uploads/2021/05/johnny-depp.jpg"
            },
            {
                name: "Almudena Gutierrez",
                email: "almudena1806@gmail.com",
                picture: "https://fotografias.antena3.com/clipping/cmsimages01/2021/12/18/EB865CF3-7AD2-409B-83C9-C410C6A50DC8/98.jpg?crop=1024,576,x0,y0&width=1900&height=1069&optimize=high&format=webply"
            },
            {
                name: "Rocío Cantón",
                email: "rc.cantongarcia@gmail.com",
                picture: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/megan-fox-drogas-ayahuasca-experiencia-1626191416.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*"
            }
        ],
        monuments: [
            { name: "Monumento al Holocausto", picture: "https://images.unsplash.com/photo-1544774417-1ddb51935914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", viewed: false }
        ]
    },
];

export const getSingleDestinationById = (id: number) => destinations.filter(destination => destination._id === id)[0];