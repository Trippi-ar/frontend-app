import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function Filtros() {
    return (
        <Box sx={{ minWidth: 120 , display: "flex", marginTop:5}}>
            <FormControl fullWidth>
                <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                    Distancia...
                </InputLabel>
                <NativeSelect
                    defaultValue={10}
                    inputProps={{
                        name: 'distancia',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={1}>Cerca</option>
                    <option value={2}>Lejos</option>
                    <option value={3}>Muy Lejos</option>
                </NativeSelect>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                    Valoracion
                </InputLabel>
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                        name: 'valoracion',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={1}>Bueno</option>
                    <option value={2}>Medio</option>
                    <option value={3}>Malo</option>
                </NativeSelect>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                    Costo
                </InputLabel>
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                        name: 'Costo',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={1}>Caro</option>
                    <option value={2}>Medio</option>
                    <option value={3}>Barato</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}