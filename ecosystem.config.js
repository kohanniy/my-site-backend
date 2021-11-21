module.exports = {
  apps: [
    {
      name: "app",
      script: "npm",
      args: "start",
      instances: "max",
      exec_mode: "cluster",
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
  ],
};
