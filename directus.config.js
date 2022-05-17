
module.exports = function (env) {
    return {
        // User inputs from railway starter button
        ADMIN_EMAIL: env.ADMIN_EMAIL,
        ADMIN_PASSWORD: env.ADMIN_PASSWORD,
        KEY: env.KEY,
        SECRET: env.SECRET,

        // Reference: https://docs.railway.app/deploy/exposing-your-app
        PORT: env.PORT,

        // Reference: https://docs.railway.app/develop/variables#railway-provided-variables
        PUBLIC_URL: `https://${env.RAILWAY_STATIC_URL}`,

        // Database variables from Railway PostgreSQL Plugin
        // Reference: https://docs.railway.app/plugins/postgresql
        DB_CLIENT: 'mysql',
        DB_HOST: env.MYSQLHOST,
        DB_PORT: env.MYSQLPORT,
        DB_DATABASE: env.MYSQLDATABASE,
        DB_USER: env.MYSQLUSER,
        DB_PASSWORD: env.MYSQLPASSWORD,
    };
};
