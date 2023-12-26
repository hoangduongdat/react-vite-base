import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import RouterRoot from './routers/RouterRoot'
import { Provider } from 'react-redux'
import store from './reducers/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect } from 'react'
import { applyTheme } from './utils/themeUtil'
import { baseTheme } from './styles/base/theme'

const queryClient = new QueryClient()

function App() {
    useEffect(() => {
        applyTheme(baseTheme)
    }, [])

    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        siderBg: '#fff',
                        triggerBg: '#ccc'
                    },
                    Button: {
                        colorPrimary: baseTheme['--primary'],
                        defaultColor: baseTheme['--primary'],
                        primaryColor: baseTheme['--secondary']
                    }
                }
            }}
        >
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <BrowserRouter>
                        <RouterRoot />
                    </BrowserRouter>
                </Provider>
            </QueryClientProvider>
        </ConfigProvider>
    )
}

export default App
