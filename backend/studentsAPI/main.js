const express = require('express');
const cors = require('cors'); // Importa el paquete CORS
const app = express();
const PORT = 3000;
app.use(cors());

const estudiantes = {
    "1712723285": {
      names: "Juan Pérez",
      lastNames: "García López",
      faculty: "Engineering",
      academicPeriod: "2023-2024",
      enrollmentDate: "2023-05-01T00:00:00+08:00"
    },
    "1712723286": {
      names: "María",
      lastNames: "González",
      faculty: "Medicina",
      academicPeriod: "2023-2024",
      enrollmentDate: "2023-05-01T00:00:00+08:00"
    },
    "1712723287": {
      names: "José",
      lastNames: "Hernández",
      faculty: "Derecho",
      academicPeriod: "2023-2024",
      enrollmentDate: "2023-05-01T00:00:00+08:00"
    },
    "1712723288": {
      names: "Ana",
      lastNames: "Martínez",
      faculty: "Arquitectura",
      academicPeriod: "2023-2024",
      enrollmentDate: "2023-05-01T00:00:00+08:00"
    }

};

app.use(express.json());

app.get('/student', (req, res) => {
    res.json(estudiantes);

});

app.get('/student/:dni', (req, res) => {
    const cedula = req.params.dni;
    const estudiante = estudiantes[cedula];

    if(estudiante) {
        res.json(estudiante);
    } else {
        res.status(404).send('Estudiante no encontrado');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
