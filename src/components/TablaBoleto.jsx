import { IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography, TableContainer, Paper } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function TablaBoleto({ boletos, onEliminar }) {
    return (
        <TableContainer component={Paper} elevation={2}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Nombre del Asistente</TableCell>
                        <TableCell>Zona</TableCell>
                        <TableCell align="center">Eliminar Boleto</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {boletos.length > 0 ? (
                        boletos.map((boleto, indice) => (
                            <TableRow key={boleto.id}>
                                <TableCell>{indice + 1}</TableCell>
                                <TableCell>{boleto.nombre}</TableCell>
                                <TableCell>{boleto.zona}</TableCell>
                                <TableCell align="center">
                                    <IconButton
                                        color="error"
                                        onClick={() => onEliminar(boleto.id)}
                                        aria-label="Eliminar boleto"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={4} align="center">
                                <Typography>Aún no hay boletos comprados.</Typography>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TablaBoleto;