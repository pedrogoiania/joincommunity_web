import env from '../../.env'
var consts = {}
if (env.ambient == 'dev') {
    consts = {
        API_URL: 'http://localhost:3004/api',
        IGAPI_URL: 'http://localhost:3004/ig',
        OAPI_URL: 'http://localhost:3004',
        ADMIN_URL: 'http://localhost:3004/admin',
    }

} else {
    consts = {
        API_URL: 'https://api.terapiaadistancia.com.br/api',
        OAPI_URL: 'https://api.terapiaadistancia.com.br',
        ADMIN_URL: 'https://api.terapiaadistancia.com.br/admin',
    }
}

export default consts 