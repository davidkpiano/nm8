import commonjs from 'rollup-plugin-commonjs' 
import filesize from 'rollup-plugin-filesize'
import camelCase from 'lodash.camelcase'
import babelMinify from 'rollup-plugin-babel-minify';
import typescript from 'rollup-plugin-typescript';

const pkg = require('./package.json')

const libraryName = 'nm8'

export default {
  input: `src/${libraryName}.ts`,
  output: [
    { file: pkg.main, name: camelCase(libraryName), format: 'umd' }
  ],
  sourcemap: false,
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: 'src/**',
  },
  strict: false,
  plugins: [
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    typescript({
      target: "es5",
      typescript: require('typescript')
    }),
    babelMinify({
      simplify: false
    }),
    filesize()
  ],
}
