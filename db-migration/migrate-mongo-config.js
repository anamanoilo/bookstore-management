const config = {
  mongodb: {
    url: process.env.DB_URL,
    databaseName: process.env.DB_NAME,

    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },

  migrationsDir: 'migrations',
  changelogCollectionName: 'changelog',
  migrationFileExtension: '.js',
  moduleSystem: 'commonjs',
};

module.exports = config;
