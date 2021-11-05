export const url = location.host
const scheme = location.protocol + '//'
const socketScheme = location.protocol + '//'

export const API_URL     = `${scheme}${url}`
export const GRAPHQL_URL = `${API_URL}/api/graphql`
export const WS_URL      = `${socketScheme}${url}/api/graphql`
