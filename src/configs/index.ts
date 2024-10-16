const AppConfig = {
    app:{
        name: import.meta.env?.VITE_APP_NAME ?? 'AppName',
        debug: Boolean(import.meta.env?.VITE_APP_DEBUG),
    },
    url: {
        base: import.meta.env?.VITE_URL_BASE ?? '/',
        api: import.meta.env?.VITE_URL_API ?? 'localhost:8000',
        app: import.meta.env?.VITE_URL_APP ?? 'localhost:3000',
        paymentResult: import.meta.env?.VITE_URL_PAYMENT_RESULT ?? 'localhost:3000/payment-result',
    },
    theme:{
        default: import.meta.env?.VITE_THEME_DEFAULT ?? 'light',
        supported: import.meta.env?.VITE_THEME_SUPPORTED ?? 'light',
    }
}

export default AppConfig