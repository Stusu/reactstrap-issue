import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/cjs/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/esm/index.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    resolve(),
    commonjs(),
    typescript(),
    postcss(),
    terser(),
  ],
};
