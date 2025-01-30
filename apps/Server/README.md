```
pnpm i
pnpm dev
pnpm build
pnpm start
```

环境变量配置

```
# Neon 数据库
DATABASE_URL=
# 认证密钥
AUTH_SECRET=
# Github OAuth
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

```
pnpm generate # 生成 schema
pnpm migrate # 迁移数据库
```

更新了 better-auth 配置后使用命令重新生成 schema ，平常不需要使用
```
npx @better-auth/cli generate --output ./src/db/schema/auth.ts
```

暂时不支持生产部署，可以用 `pnpm start` 模拟生产环境