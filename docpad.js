// Generated by CoffeeScript 1.6.3
var docpadConfig,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

docpadConfig = {
  reloadPaths: [],
  regeneratePaths: [],
  regenerateDelay: 100,
  ignorePaths: false,
  port: null,
  maxAge: 86400000,
  serverExpress: null,
  serverHttp: null,
  extendServer: true,
  middlewareStandard: true,
  middlewareBodyParser: true,
  middlewareMethodOverride: true,
  middlewareExpressRouter: true,
  middleware404: true,
  middleware500: true,
  logLevel: ((__indexOf.call(process.argv, '-d') >= 0) ? 7 : 6),
  logger: null,
  growl: true,
  catchExceptions: true,
  reportErrors: process.argv.join('').indexOf('test') === -1,
  reportStatistics: process.argv.join('').indexOf('test') === -1,
  airbrakeToken: null,
  mixpanelToken: null,
  detectEncoding: false,
  renderSingleExtensions: false,
  renderPasses: 1,
  checkVersion: false,
  welcome: false,
  prompts: false,
  helperUrl: 'https://docpad.org/helper/',
  safeMode: false,
  collections: {},
  regenerateEvery: false,
  templateData: {
    site: {
      url: "http://website.com",
      title: "Your Website",
      description: "When your website appears in search results in say Google, the text here will be shown underneath your website's title.",
      keywords: "place, your, website, keywoards, here, keep, them, related, to, the, content, of, your, website"
    },
    getPreparedTitle: function() {
      if (this.document.title) {
        return "" + this.document.title + " | " + this.site.title;
      } else {
        return this.site.title;
      }
    },
    getPreparedDescription: function() {
      return this.document.description || this.site.description;
    },
    getPreparedKeywords: function() {
      return this.site.keywords.concat(this.document.keywords || []).join(', ');
    }
  },
  skipUnsupportedPlugins: true,
  enabledUnlistedPlugins: true,
  enabledPlugins: {
    pokemon: false,
    digimon: true
  },
  plugins: {
    stylus: {
      useNib: false
    }
  },
  events: {
    serverExtend: function(opts) {
      var docpad, server;
      server = opts.server;
      return docpad = this.docpad;
    }
  },
  localeCode: null,
  env: null,
  environments: {
    development: {
      maxAge: false,
      checkVersion: process.argv.length >= 2 && /docpad$/.test(process.argv[1]),
      welcome: process.argv.length >= 2 && /docpad$/.test(process.argv[1]),
      prompts: process.argv.length >= 2 && /docpad$/.test(process.argv[1]),
      port: 9005
    }
  }
};

module.exports = docpadConfig;
