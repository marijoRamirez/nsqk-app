import { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import Header from '../components/Header'; // El que hicimos antes
import FormularioBoleto from '../components/FormularioBoleto';
import TablaBoleto from '../components/TablaBoleto';

import { obtenerBoletosAPI, guardarBoletoAPI, eliminarBoletoAPI } from '../services/nsqkService';

function MiBoleto() {
    const [boletos, setBoletos] = useState([]);

    useEffect(() => {
        obtenerBoletosAPI().then((datos) => {
            setBoletos(datos);
        });
    }, []);

    const agregarBoleto = (nuevoBoleto) => {
        guardarBoletoAPI(nuevoBoleto).then((boletoGuardado) => {
            setBoletos((boletosPrevios) => [...boletosPrevios, boletoGuardado]);
        });
    };

    const eliminarBoleto = (idAEliminar) => {
        eliminarBoletoAPI(idAEliminar).then((idEliminado) => {
            setBoletos((boletosPrevios) => 
                boletosPrevios.filter((boleto) => boleto.id !== idEliminado)
            );
        });
    };

    return (
        <Box sx={{ bgcolor: '#121212', minHeight: '100vh', pb: 5 }}>
            <Header titulo="Mis boletitos NSQK" />
            
            <Container sx={{ mt: 4 }}>
                <FormularioBoleto onAgregar={agregarBoleto} />
                <TablaBoleto boletos={boletos} onEliminar={eliminarBoleto} />
            </Container>
        </Box>
    );
}

export default MiBoleto;