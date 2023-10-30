import { Card, CardContent, CardMedia, Typography, Container, Button } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import { getDefaultNormalizer } from "@testing-library/react";

export default function Hotel() {
    return (
        <Container >
            <Card>
                <CardMedia
                    component="img"
                    image="https://via.placeholder.com/1000x200"
                    height="200"
                    alt="descripcion" />
                <CardContent>
                    <Typography variant="h5">Nombre del hotel</Typography>
                    <Typography
                        component="p"
                        variant="body2">
                        Texto secundario

                    </Typography>
                </CardContent>
                <CardActions> 
                    <Button variant="contained">Reservar</Button>  
                    <Button>Consultar</Button>
                </CardActions>
            </Card>

        </Container>

    )
}