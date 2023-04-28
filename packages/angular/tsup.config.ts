import { defineConfig, Format } from "tsup"

export default defineConfig({
  dts: true,
  clean: true,
  entry: ["./src/**/*"],
  format: ["esm", "cjs"] as Format[],
  external: ["@angular/core", "@angular/common"],
  loader: {
    '.scss': "copy",
    '.html': 'copy'
  },
})
