import { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Container, Button } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import { getDefaultNormalizer } from "@testing-library/react";

function generateRandomData() {
    // Esta es una lista aleatoria de excursiones
    const hotels = [
        {
            id: 1,
            name: 'Excursion A',
            description: 'Descripción del Hotel A',
            image: 'https://picsum.photos/200',
        },
        {
            id: 2,
            name: 'Excursion B',
            description: 'Descripción del Hotel B',
            image: 'https://picsum.photos/201',
        },
        
        {
            id: 3,
            name: 'Excursion C',
            description: 'Descripción del Hotel B',
            image: 'https://picsum.photos/202',
        },
        {
            id: 4,
            name: 'Excursion D',
            description: 'Descripción del Hotel B',
            image: 'https://picsum.photos/203',
        },
        {
            id: 5,
            name: 'Excursion E',
            description: 'Descripción del Hotel B',
            image: 'https://picsum.photos/204',
        },
        {
            id: 6,
            name: 'Excursion F',
            description: 'Descripción del Hotel B',
            image: 'https://picsum.photos/205',
        },
        {
            id: 7,
            name: 'Excursion G',
            description: 'Descripción del Hotel B',
            image: 'https://picsum.photos/206',
        },
        {
            id: 8,
            name: 'Excursion H',
            description: 'Descripción del Hotel B',
            image: 'https://picsum.photos/207',
        },
        {
            id: 9,
            name: 'Excursion I',
            description: 'Descripción del Hotel B',
            image: 'https://picsum.photos/208',
        },
        {
            id: 10,
            name: 'Excursion J',
            description: 'Descripción del Hotel B',
            image: 'https://picsum.photos/209',
        },

    ];

    // Selecciona un hotel aleatorio de la lista
    const randomHotel = hotels[Math.floor(Math.random() * hotels.length)];

    return randomHotel;
}

export default function Hotel() {

    const [usedHotels, setUsedHotels] = useState([]);
    const numberOfHotels = 10; // El número de tarjetas a mostrar

    useEffect(() => {
        if (usedHotels.length === numberOfHotels) {
            // Si ya se han utilizado todos los hoteles, reinicia la lista utilizada
            setUsedHotels([]);
        }
    }, [usedHotels, numberOfHotels]);
    return (

        <Container>
            {Array.from({ length: numberOfHotels }, (_, index) => {
                const randomHotel = generateRandomData(usedHotels, setUsedHotels);
                return (
                    <Container key={index} style={{ margin: 10 }}>
                        <Card>
                            <CardMedia component="img" image={randomHotel.image} height="200" alt="Descripción" />
                            <CardContent>
                                <Typography variant="h5">{randomHotel.name}</Typography>
                                <Typography component="p" variant="body2">
                                    {randomHotel.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained">Reservar</Button>
                                <Button>Consultar</Button>
                            </CardActions>
                        </Card>
                    </Container>
                );
            })}
        </Container>

    )
}