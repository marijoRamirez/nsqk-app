let mockBoletos = [];
const LATENCIA = 500;

export const obtenerBoletosAPI = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve([...mockBoletos]), LATENCIA);
    });
};

export const guardarBoletoAPI = (nuevoBoleto) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            mockBoletos.push(nuevoBoleto);
            resolve(nuevoBoleto);
        }, LATENCIA);
    });
};

export const eliminarBoletoAPI = (idAEliminar) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            mockBoletos = mockBoletos.filter(boleto => boleto.id !== idAEliminar);
            resolve(idAEliminar);
        }, LATENCIA);
    });
};