import { Card, CardContent, CardMedia, Typography, Container } from "@mui/material";
import { getDefaultNormalizer } from "@testing-library/react";

export default function Hotel() {
    return (
        <Container>
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
            </Card>

        </Container>

    )
}