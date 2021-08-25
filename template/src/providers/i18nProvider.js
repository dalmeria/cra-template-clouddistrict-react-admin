import enMessages from 'ra-language-english'
import esMessages from '@blackbox-vision/ra-language-spanish'
import polyglotI18nProvider from 'ra-i18n-polyglot'
import { resolveBrowserLocale } from 'react-admin'
import domainMessages from 'assets/i18n'

const messages = {
  es: { ...esMessages, ...domainMessages.es },
  en: { ...enMessages, ...domainMessages.en },
}

const browserLocale = resolveBrowserLocale()

const i18nProvider = polyglotI18nProvider(locale => messages[locale] || messages.es, browserLocale)

export default i18nProvider
