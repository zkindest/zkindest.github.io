import { resolve, join } from 'path';
import withOffline from 'next-offline';
import remarkGfm from 'remark-gfm';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

/**@type  {import('next').NextConfig} */
export default withOffline({
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  webpack: (config, { defaultLoaders }) => {
    config.resolve.alias['@'] = resolve(__dirname, '.');
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [remarkGfm],
          },
        },
        join(__dirname, './lib/mdx-data-loader'),
      ],
    });

    return config;
  },
  env: {
    APP_URL:
      process.env.NODE_ENV === 'development'
        ? `http://localhost:3000/`
        : `http://zkindest.github.io/`,
  },
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  experimental: { esmExternals: true },
});
