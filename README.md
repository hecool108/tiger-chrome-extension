Create chrome extension with vite/react/typescript/chakra
npx & pnpm
```shell
npx diget https://github.com/hecool108/tiger-chrome-extension your-app-name
cd your-app-name
pnpm i
```

bunx
```shell
bunx diget https://github.com/hecool108/tiger-chrome-extension your-app-name
cd your-app-name
bun i
```
Start build watcher, this will keep watcher ts/tsx file changes and rebuild the extension
```
bun run chrome:build
```

Open a chrome window to preview and debug
```
bun run chrome:dev
```