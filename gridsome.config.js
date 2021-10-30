const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteUrl: "https://google.com",
  plugins: [
    {
      use: 'gridsome-plugin-robots-txt',
      options: {
        host: 'https://google.com',
        sitemap: 'https://google.com/sitemap.xml',
        policy: [
          {
            userAgent: "*"
          }
        ]
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/thank-you'],
        config: {
          '/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/': {
            changefreq: 'weekly',
            priority: 0.5
          }
        }
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksRel: ['noopener']
    }
  },
  css: {
      loaderOptions: {
          postcss: {
              plugins: postcssPlugins,
          },
      },
  },
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/images')
  }
}
