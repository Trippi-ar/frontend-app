import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import './filtros.css';

export default function Filtros() {
    return (
        <Box sx={{ minWidth: 120 , display: "flex", marginTop:5, color:'white'}}>
            <FormControl fullWidth>
                <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                    Ubicacion
                </InputLabel>
                <NativeSelect class="input"
                    defaultValue={10}
                    inputProps={{
                        name: 'ubicacion',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={1}>Sierras de cba</option>
                    <option value={2}>Sierras de san luis</option>
                    <option value={3}>Algun lugar del mundo</option>
                </NativeSelect>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                    Actividad
                </InputLabel>
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                        name: 'actividad',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={1}>Treking</option>
                    <option value={2}>Playa nudista</option>
                    <option value={3}>Lugares de mala muerte</option>
                </NativeSelect>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                   Fecha
                </InputLabel>
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                        name: 'Fecha',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={1}>Aca va un calendario</option>
                    <option value={2}>Aca va un calendario</option>
                    <option value={3}>Aca va un calendario</option>
                </NativeSelect>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                    Nombre
                </InputLabel>
                <NativeSelect
                    defaultValue={10}
                    inputProps={{
                        name: 'Nombre',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={1}>Llenar con lo que trae el endpoint</option>
                    <option value={2}>Llenar con lo que trae el endpoint</option>
                    <option value={3}>Llenar con lo que trae el endpoints</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}