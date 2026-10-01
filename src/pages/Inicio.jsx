import { Box, Typography } from '@mui/material';
import CountdownTimer from '../components/Timer';
import Header from '../components/Header';

function Inicio() {
    const fechaConcierto = new Date('2027-01-23T20:00:00'); 

    return (
        <>
            <Header titulo="NSQK" />
            
            <Box sx={{ textAlign: 'center', mt: 4, px: 2 }}>
                <Typography variant="h1" fontWeight="900" gutterBottom sx={{ textTransform: 'uppercase', color: '#0000FF' }}>
                    NSQK
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Estadio GNP Seguros (CDMX)
                </Typography>
                <CountdownTimer targetDate={fechaConcierto} />
            </Box>
        </>
    );
}

export default Inicio;