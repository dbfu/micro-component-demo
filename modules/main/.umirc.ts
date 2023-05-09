import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/index", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/app1/*", microApp: 'app1' },
    { path: "/app2/*", microApp: 'app2' },
  ],
  npmClient: 'pnpm',
  plugins: ['@umijs/plugins/dist/qiankun'],
  qiankun: {
    master: {
      apps: [
        {
          name: 'app1',
          entry: '//localhost:8001',
        },
        {
          name: 'app2',
          entry: '//localhost:8002',
        },
      ],
    },
  },
});
