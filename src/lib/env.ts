export const url = "localhost:3000"
const scheme = "http://"
const socketScheme = "ws://"

export const API_URL     = `${scheme}${url}`
export const GRAPHQL_URL = `${API_URL}/api/graphql`
export const WS_URL      = `${socketScheme}${url}/api/graphql`
