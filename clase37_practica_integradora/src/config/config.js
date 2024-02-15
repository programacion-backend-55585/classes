import doteenv from 'dotenv';

doteenv.config();

export default {
    persistence: process.env.PERSISTENCE,
    mongoURL: process.env.MONGO_URL,
    mongoDBName: process.env.MONGO_DBNAME,
    port: process.env.PORT || 8080,
    mailUser: process.env.MAIL_USER,
    mailPass: process.env.MAIL_PASS
}