
import { useSelector } from 'react-redux'
import { IntlProvider } from 'react-intl'
function ReduxConnectIntl({children}) {
  const locale = useSelector(state => state?.app?.language)
  return (
    <IntlProvider defaultLocale={locale.la} locale={locale.la} messages={locale.messages}>
      {children}
    </IntlProvider>


  );
}

export default ReduxConnectIntl
