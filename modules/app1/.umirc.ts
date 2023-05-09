import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
  plugins: ['@umijs/plugins/dist/qiankun', '@umijs/plugins/dist/model'],
  qiankun: {
    slave: {},
    master: {
      apps: [
        {
          name: 'app2',
          entry: '//localhost:8002',
        },
      ],
    }
  },
  model: {},
});
