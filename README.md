# 如何运行

```
npm test
```

# 如何准备 vitest 环境与配置


## 1. 安装 vitest

```
npm install -D vitest @testing-library/vue
```

## 2. 安装  happy-dom，用于组件测试

```
npm install -D happy-dom
```

#### Happy-dom 是做什么的

[Happy DOM](https://github.com/capricorn86/happy-dom) 是一个没有图形用户界面的 web 浏览器，使用 Javascript 语言实现。 它包含了很多 Web 标准，例如 WHATWG [DOM](https://dom.spec.whatwg.org/) 和 [HTML](https://html.spec.whatwg.org/multipage/).

[Happy DOM](https://github.com/capricorn86/happy-dom) 的目标是为了测试的目的，而模拟一个恰好够用的 web browser， 可以抓取网站和服务器端渲染

[Happy DOM](https://github.com/capricorn86/happy-dom) 注重性能，可以作为 [JSDOM](https://github.com/jsdom/jsdom) 的一个替代品。

[Read more about how to use Happy DOM](https://github.com/capricorn86/happy-dom/tree/master/packages/happy-dom)

如果不使用 happy-dom，你也可以使用jsdom。

```
npm i -D vjsdom
```

## 3. vitest 的配置

默认 vitest 使用 vite 的默认配置文件 `vite.config.ts`。但为了更好的隔离测试与生产代码，创建一个 vitest.config.ts.

```js
import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    environment: "happy-dom",   // 指定使用 happy-dom 来模拟浏览器环境
    exclude: [...configDefaults.exclude, 'packages/template/*', '**/node_modules/**'],
  },
}))
```

## 4. 编写测试

`./test/base.test.ts` 是一个单元测试
`./src/components/Notification.test.ts` 是对组件 Notification.ts 的组件测试


## 5. package.json 的配置

在 `package.json` 的 `scripts:{}` 中加入下面的代码：

```
    "test": "vitest",
    "coverage": "vitest run --coverage"
```


## 6. 运行测试

```
npm test
```

## 7. 运行并生成覆盖率

```
npm coverage
````