module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3307),
        database: env('DATABASE_NAME', 'dagangants'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', ''),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
