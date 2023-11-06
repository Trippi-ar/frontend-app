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
            description: 'Descripción de excursion A',
            image: 'https://picsum.photos/200',
            ubication: "Sierras de Cordoba",
            date:"10/10/2023",
            activity: "Trekin",
            
        },
        {
            id: 2,
            name: 'Excursion B',
            description: 'Descripción de excursion B',
            image: 'https://picsum.photos/201',
            ubication: "Sierras de Cordoba",
            date:"10/10/2023",
            activity: "Palestra",
        },
        
        {
            id: 3,
            name: 'Excursion C',
            description: 'Descripción de excursion C',
            image: 'https://picsum.photos/202',
            ubication: "Sierras de Cordoba",
            date:"10/10/2023",
            activity: "Excursion",
        },
        {
            id: 4,
            name: 'Excursion D',
            description: 'Descripción de excursion D',
            image: 'https://picsum.photos/203',
            ubication: "Sierras de Cordoba",
            date:"10/10/2023",
            activity: "Senderismo",
        },
        {
            id: 5,
            name: 'Excursion E',
            description: 'Descripción de excursion E',
            image: 'https://picsum.photos/204',
            ubication: "Sierras de Cordoba",
            date:"10/10/2023",
            activity: "Avistamiento de aves",
        },
        {
            id: 6,
            name: 'Excursion F',
            description: 'Descripción de excursion F',
            image: 'https://picsum.photos/205',
            ubication: "Sierras de Cordoba",
            date:"10/10/2023",
            activity: "Trekin",
        },
        {
            id: 7,
            name: 'Excursion G',
            description: 'Descripción de excursion G',
            image: 'https://picsum.photos/206',
            ubication: "Sierras de Cordoba",
            date:"10/10/2023",
            activity: "Trekin",
        },
        {
            id: 8,
            name: 'Excursion H',
            description: 'Descripción de excursion H',
            image: 'https://picsum.photos/207',
            ubication: "Sierras de Cordoba",
            date:"10/10/2023",
            activity: "Caminata",
        },
        {
            id: 9,
            name: 'Excursion I',
            description: 'Descripción de excursion I',
            image: 'https://picsum.photos/208',
            ubication: "Sierras de Cordoba",
            date:"10/10/2023",
            activity: "Trekin",
        },
        {
            id: 10,
            name: 'Excursion J',
            description: 'Descripción de excursion J',
            image: 'https://picsum.photos/209',
            ubication: "Sierras de Cordoba",
            date:"10/10/2023",
            activity: "Trekin",
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
                                <Typography component="h3" variant="body2">
                                    {randomHotel.activity}
                                </Typography>
                                <Typography component="h4" variant="body2">
                                    {randomHotel.ubication}
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