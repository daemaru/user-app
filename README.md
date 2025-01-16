# daemaru

An Electron application with React and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ yarn
```

### Development

```bash
$ yarn dev
```

### Build

```bash
# For windows
$ yarn build:win

# For macOS
$ yarn build:mac

# For Linux
$ yarn build:linux
```

```
daemaru-user-frontend
├─ .editorconfig
├─ .eslintignore
├─ .eslintrc.cjs
├─ .gitignore
├─ .prettierignore
├─ .prettierrc.yaml
├─ .vscode
│  ├─ extensions.json
│  ├─ launch.json
│  └─ settings.json
├─ build
│  ├─ entitlements.mac.plist
│  ├─ icon.icns
│  ├─ icon.ico
│  └─ icon.png
├─ electron-builder.yml
├─ electron.vite.config.ts
├─ package.json
├─ postcss.config.js
├─ README.md
├─ resources
│  └─ icon.png
├─ src
│  ├─ main
│  │  └─ index.ts
│  ├─ preload
│  │  ├─ index.d.ts
│  │  └─ index.ts
│  └─ renderer
│     ├─ index.html
│     └─ src
│        ├─ App.tsx
│        ├─ assets
│        │  ├─ daemaruLogo.tsx
│        │  ├─ fonts
│        │  │  ├─ pretendard-subset.css
│        │  │  ├─ pretendard.css
│        │  │  ├─ woff
│        │  │  │  ├─ Pretendard-Black.woff
│        │  │  │  ├─ Pretendard-Bold.woff
│        │  │  │  ├─ Pretendard-ExtraBold.woff
│        │  │  │  ├─ Pretendard-ExtraLight.woff
│        │  │  │  ├─ Pretendard-Light.woff
│        │  │  │  ├─ Pretendard-Medium.woff
│        │  │  │  ├─ Pretendard-Regular.woff
│        │  │  │  ├─ Pretendard-SemiBold.woff
│        │  │  │  └─ Pretendard-Thin.woff
│        │  │  ├─ woff-subset
│        │  │  │  ├─ Pretendard-Black.subset.woff
│        │  │  │  ├─ Pretendard-Bold.subset.woff
│        │  │  │  ├─ Pretendard-ExtraBold.subset.woff
│        │  │  │  ├─ Pretendard-ExtraLight.subset.woff
│        │  │  │  ├─ Pretendard-Light.subset.woff
│        │  │  │  ├─ Pretendard-Medium.subset.woff
│        │  │  │  ├─ Pretendard-Regular.subset.woff
│        │  │  │  ├─ Pretendard-SemiBold.subset.woff
│        │  │  │  └─ Pretendard-Thin.subset.woff
│        │  │  ├─ woff2
│        │  │  │  ├─ Pretendard-Black.woff2
│        │  │  │  ├─ Pretendard-Bold.woff2
│        │  │  │  ├─ Pretendard-ExtraBold.woff2
│        │  │  │  ├─ Pretendard-ExtraLight.woff2
│        │  │  │  ├─ Pretendard-Light.woff2
│        │  │  │  ├─ Pretendard-Medium.woff2
│        │  │  │  ├─ Pretendard-Regular.woff2
│        │  │  │  ├─ Pretendard-SemiBold.woff2
│        │  │  │  └─ Pretendard-Thin.woff2
│        │  │  └─ woff2-subset
│        │  │     ├─ Pretendard-Black.subset.woff2
│        │  │     ├─ Pretendard-Bold.subset.woff2
│        │  │     ├─ Pretendard-ExtraBold.subset.woff2
│        │  │     ├─ Pretendard-ExtraLight.subset.woff2
│        │  │     ├─ Pretendard-Light.subset.woff2
│        │  │     ├─ Pretendard-Medium.subset.woff2
│        │  │     ├─ Pretendard-Regular.subset.woff2
│        │  │     ├─ Pretendard-SemiBold.subset.woff2
│        │  │     └─ Pretendard-Thin.subset.woff2
│        │  ├─ image
│        │  │  └─ background.png
│        │  ├─ index.ts
│        │  └─ main.css
│        ├─ components
│        ├─ env.d.ts
│        ├─ function
│        │  └─ getCalendar.ts
│        └─ main.tsx
├─ tailwind.config.js
├─ tsconfig.json
├─ tsconfig.node.json
├─ tsconfig.web.json
└─ yarn.lock

```