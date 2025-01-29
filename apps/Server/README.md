```
pnpm i
pnpm dev
```

环境变量配置

```
DATABASE_URL=
```

更新了 better-auth 配置后使用命令重新生成 schema ，平常不需要使用
```
npx @better-auth/cli generate --output ./src/db/schema/auth.ts
```