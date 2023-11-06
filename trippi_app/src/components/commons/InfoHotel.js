import { Card, CardContent, CardMedia, Typography, Container, Button } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import { getDefaultNormalizer } from "@testing-library/react";

function generateRandomData() {
    // Define una lista de datos aleatorios
    const hotels = [
        {
            name: 'Excursion A',
            description: 'Descripción del Hotel A',
            image: 'https://picsum.photos/200',
        },
        {
            name: 'Excursion B',
            description: 'Descripción del Hotel B',
            image: 'https://picsum.photos/201',
        },
        // Agrega más hoteles con datos aleatorios aquí
        {
            name: 'Excursion C',
            description: 'Descripción del Hotel B',
            image: 'https://picsum.photos/201',
        },
        {
            name: 'Excursion D',
            description: 'Descripción del Hotel B',
            image: 'https://picsum.photos/201',
        },
        {
            name: 'Excursion E',
            description: 'Descripción del Hotel B',
            image: 'https://picsum.photos/201',
        },
        {
            name: 'Excursion F',
            description: 'Descripción del Hotel B',
            image: 'https://picsum.photos/201',
        },

    ];

    // Selecciona un hotel aleatorio de la lista
    const randomHotel = hotels[Math.floor(Math.random() * hotels.length)];

    return randomHotel;
}

export default function Hotel() {

    const numberOfHotels = 10;
    return (

        <Container>
            {Array.from({ length: numberOfHotels }, (_, index) => {
                const randomHotel = generateRandomData();
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