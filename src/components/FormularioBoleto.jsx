import { useState } from 'react';
import { Box, TextField, Button, Paper } from '@mui/material';

function FormularioBoleto({ onAgregar }) {
    const [nombre, setNombre] = useState('');
    const [zona, setZona] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        const nuevoBoleto = {
            id: Date.now(),
            nombre: nombre,
            zona: zona
        };
        onAgregar(nuevoBoleto);
        setNombre('');
        setZona('');
    };

    return (
        <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
            <form onSubmit={manejarEnvio}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <TextField 
                        label="Nombre del Asistente" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        required 
                        fullWidth 
                    />
                    <TextField 
                        label="Zona (Ej. General A)" 
                        value={zona} 
                        onChange={(e) => setZona(e.target.value)} 
                        required 
                        fullWidth 
                    />
                    <Button type="submit" variant="contained" sx={{ bgcolor: '#0000FF', minWidth: '150px' }}>
                        Comprar Boleto
                    </Button>
                </Box>
            </form>
        </Paper>
    );
}

export default FormularioBoleto;