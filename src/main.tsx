import React from 'react'
import ReactDOM from 'react-dom/client'
import { BaseProvider, createTheme } from 'baseui'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import App from './App'
import './index.css'

const engine = new Styletron()
const overrides = {
  colors: {
    contentPrimary: '#123d35',
    backgroundPrimary: '#f2e8d5',
    buttonPrimaryFill: '#eb675b',
    buttonPrimaryText: '#123d35',
    buttonPrimaryHover: '#d95c51',
  },
  borders: {
    buttonBorderRadius: '0px',
    tagBorderRadius: '999px',
  },
  typography: {
    PrimaryFontFamily: 'DM Sans, Arial, sans-serif',
  },
}
const theme = createTheme(overrides)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>,
)
