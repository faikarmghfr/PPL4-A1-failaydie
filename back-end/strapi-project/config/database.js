module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '103.102.153.143'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'db_ka01'),
      user: env('DATABASE_USERNAME', 'ka01'),
      password: env('DATABASE_PASSWORD', 'Stormy_2022'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
