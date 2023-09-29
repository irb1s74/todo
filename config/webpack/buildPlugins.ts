import { DefinePlugin, type WebpackPluginInstance } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import { type BuildOptions } from './buildTypes'

export const buildPlugins = ({ paths, isDev }: BuildOptions): WebpackPluginInstance[] => {
  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ]

  if (!isDev) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    )
    if (paths.logo) {
      plugins.push(
        new CopyPlugin({
          patterns: [{ from: paths.logo, to: paths.build }],
        }),
      )
    }
  }
  return plugins
}
