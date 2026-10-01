import { AppBar, Toolbar, Typography, Box, Badge, IconButton } from "@mui/material";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

function Header({ titulo }) {
    return (
        <AppBar position="static" sx={{ bgcolor: '#0000FF', mb: 4 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                    {titulo} - GNP Seguros
                </Typography>
                
            </Toolbar>
        </AppBar>
    );
}

export default Header;