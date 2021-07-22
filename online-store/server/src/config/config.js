global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';

module.exports = {
    port: process.env.PORT || 8081,
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}