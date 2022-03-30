module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '46182fbc0011f1a3f68831c2cf2c2eb7'),
  },
});
