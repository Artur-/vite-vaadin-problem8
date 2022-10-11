
export default {
  root: "frontend",
  base: "",
  resolve: {
    preserveSymlinks: true,
  },
  server: {
    watch: {
      ignored: ["!**/node_modules/@vaadin/flow-frontend/**"],
    },
  },
  optimizeDeps: {
    exclude: ["@vaadin/flow-frontend"],
  },
};
