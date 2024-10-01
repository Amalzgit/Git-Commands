if (process.env.NODE_ENV !== 'production') {
    import('dotenv').then(dotenv => dotenv.config());
}

const serverConfig = {
    port: process.env.PORT || 3000
};

export default serverConfig;
