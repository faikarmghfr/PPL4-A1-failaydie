module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '25afe6ad16b34fc8bd8ce3aaf7fa4100'),
  },
});
