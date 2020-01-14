# enginedigital/auto-hmr-loader

Forked from [AgeOfLearning/aofl hmr-loader](https://github.com/AgeOfLearning/aofl/tree/v3.2.1/webpack-packages/hmr-loader)

## Getting Started

Run `npm i -S enginedigital/auto-hmr-loader`

Or add `"auto-hmr-loader": "https://github.com/enginedigital/auto-hmr-loader",`

Then add the loader to your webpack config:

```js
module: {
  rules: [
    {
      test: /\.js$/,
      enforce: 'pre',
      use: [
        {
          loader: 'auto-hmr-loader',
          options: {
            cache: true
          }
        }
      ]
    }
  ]
}
```

### TODO

- [ ] Handle require imports
