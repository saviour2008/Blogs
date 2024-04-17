# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

## 如何在项目Coding时，自动引入外部的方法

VSCODE中的插件安装Auto Import即可


## 在React项目Coding时，js文件写入div，按tab没有自动补全<div></div>

在VSCODE的setting中，搜索emmet，将 Emmet: Include Languages Item设为javascript， Value设为javascriptreact

## React中的疑难杂症

1. index.js中记得把严格模式注释掉

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).


```
<div>多多关照</div>
```