import { ConfigProvider } from 'antd'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import RouterRoot from './routers/RouterRoot'
import { Provider } from 'react-redux'
import store from './reducers/store'

const queryClient = new QueryClient()

function App() {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        siderBg: '#fff',
                        triggerBg: '#ccc'
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
