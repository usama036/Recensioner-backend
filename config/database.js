const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  const connections = {

    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: {
          rejectUnauthorized: true, // Set to true to reject self-signed certificates
          ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUckFBHM/SGrptth8XFSgkdfH47SAwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvMzY0MGY1ZjItOTFhMC00YjBiLWJhMWQtMzM0MDIyNTVm
ODAxIFByb2plY3QgQ0EwHhcNMjQwNzE2MTUyMDE1WhcNMzQwNzE0MTUyMDE1WjA6
MTgwNgYDVQQDDC8zNjQwZjVmMi05MWEwLTRiMGItYmExZC0zMzQwMjI1NWY4MDEg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALwWzsEm
w8Y45JahSgT222I0M/7PJTs4pXAyO2ez0SPKXNJ7XBWGdFXiXEUsqgFA/5cii8yU
LLC/Q9r1V+mIFsXnZ+uFAYTEwrqjvzxzdMtYPQJYrIlfD9hVHE2vY2uMNHUpNJ7K
cSFf0lfrA3rBg2gaYmEoyfPbmMfV/JrAe2hW57JOpcUabXv7UbzZeeRRriPhYxzt
CVOGcC+2Md62YWpRnaLRWyO1vwwiF6GaARzDQXaP00hFP+Ii+RhF5RZ/OqcrFKc3
kwGngHDGDNWO44fCMa1uUjzrGfbcNZmFfZ5D4+LfQe3Li7lqbXafIiwAsR9hqJiA
kX2L6PrixBu2fWIZxJHc4BgYmLeRmBIbi14E629ND2aZA/HtcoMUPAhGhPj1P1sM
kgn0h2U1dPPRmSk8HBRWpKg4TvH0eZ22rfVrv8aey6QQ/n5/+muYg1jVCDnP5bZ5
cRA2UsyfrZpFZ80g/HeICV9eS9XQd+Xz2oQWAOf7DS2P7w4ZPv+rX/xxkQIDAQAB
oz8wPTAdBgNVHQ4EFgQULKsAFZH5ETUHIViFkpk2oDfGWEIwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAGs47uVTKHGxHg8g
7fAhw13K1F2lKhSVXnBlIdJH9rIYpmAjVHYc5nYpUmPv77ZMDQDe1ZygnYYtqf20
545D35J8V4A2uC/haX9+lRVywDdPfd1fPiUq6N+4zolNs8VpqttXvEDjGCh3I4ZK
/ZF+qZQ5Dm2ApvAY7jvOVLthTs/RVcaDJW0XQoEW+Qm995syeb0cJBRjxOqQp6S/
nhz222+b2fte+dPhahWXFH8A9p29pFlCb0ILfBMdVp/pSMzJ9gZaX8w1j5fUQpcG
L2LZPyS7bhuoXdZOvx81Vu337MLUf5uynsWh2jQEQojTvm6PMhzaQzBMUh/VvstO
mcfYBCay0apKUPS3+hPHDiinmgA8WdNPL+KoZoEqphIP9/Iwd+FjeM0slF/bzcMT
YS0SmWU2a97UfvQddz5wnVSlQ+l46bXGg9fHY6fQxC0qldYY/WXWHbWHGRaHpPUU
HGX4rUHLDB9izs+9GDa5LPvRRxXWKAY3Er9AGPzsHd32U6dOpg==
-----END CERTIFICATE-----
`
          ,
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },

  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
