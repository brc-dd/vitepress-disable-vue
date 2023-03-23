# Disable Vue Moustaches in Markdown

Simple POC to wrap all the content in `v-pre`.

## Use Cases

- Migrating old docs that have `{{ ... }}` and don't want it to be evaluated by Vue.
- Running some generator and don't want to manually find and escape `{{ }}` by `v-pre`.

## Related issues

- https://github.com/vuejs/vitepress/discussions/480
- https://github.com/vuejs/vitepress/issues/559
- https://github.com/vuejs/vitepress/issues/927
- https://github.com/vuejs/vitepress/issues/1330
- https://github.com/vuejs/vitepress/issues/1818
- https://github.com/vuejs/vitepress/issues/1836

## Considerations

- Might break theme styling if child combinator is used with `<Content>`.
  - The default theme has no such style, so it works fine as of now.
- Styles and script blocks are still parsed and evaluated.
  - To remove them, reset the `env.sfcBlocks` after render (just before returning).
- VitePress doesn't use `env.sfcBlocks.template`, so there is no need to add `v-pre` there.

## License

CC0
