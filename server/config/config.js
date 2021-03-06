// =======================================
//      Puerto
// =======================================


process.env.PORT = process.env.PORT || 3000;

// =======================================
//      Entorno
// =======================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';



// =======================================
//      Vencimiento del token 
// =======================================
// 60 segundos 
// 60 minutos
// 34 horas
// 30 días
process.env.CADUCIDAD_TOKEN = '48h';


// =======================================
//      SEED de autenticación
// =======================================


process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// =======================================
//      Base de Datos
// =======================================

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {

    urlDB = process.env.MONGO_URI;

}

process.env.URLDB = urlDB;

// =======================================
//      Google Client ID
// =======================================

process.env.CLIENT_ID = process.env.CLIENT_ID || '500398381157-9o9iu3dda7sa79oa34jabmk0nlk2lbvp.apps.googleusercontent.com';