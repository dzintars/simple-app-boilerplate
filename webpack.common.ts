import webpack from 'webpack'
import PnpWebpackPlugin from 'pnp-webpack-plugin'

const config: webpack.Configuration = {
  context: __dirname, // to automatically find tsconfig.json
  entry: {
    main: './src/index.ts',
    /* vendor: './src/vendor.ts', */
  },
  // plugins: [
  //   // handle type checking whilst ts-loader gets on with the transpilation
  //   new ForkTsCheckerWebpackPlugin(
  //     PnpWebpackPlugin.forkTsCheckerOptions({
  //       eslint: true,
  //       useTypescriptIncrementalApi: false,
  //     })
  //   ),
  // ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.ts?$/,
        loader: require.resolve('ts-loader'),
        options: PnpWebpackPlugin.tsLoaderOptions(),
        // options: PnpWebpackPlugin.tsLoaderOptions({ transpileOnly: true }),
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  resolve: {
    plugins: [PnpWebpackPlugin],
    extensions: ['.ts', '.js', '.json', '.scss'],
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },
  stats: { children: false },
}

export default config
