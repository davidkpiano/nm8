import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import uglify from 'rollup-plugin-uglify'
import filesize from 'rollup-plugin-filesize'
import camelCase from 'lodash.camelcase'
import babelMinify from 'rollup-plugin-babel-minify';

const pkg = require('./package.json')

const libraryName = 'nm8'

export default {
  input: `compiled/${libraryName}.js`,
  output: [
    { file: pkg.main, name: camelCase(libraryName), format: 'iife' },
    { file: pkg.module, format: 'es' },
  ],
  sourcemap: false,
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: 'compiled/**',
  },
  plugins: [
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    babelMinify(),
    filesize(),

    // Resolve source maps to the original source
    sourceMaps(),
  ],
}
