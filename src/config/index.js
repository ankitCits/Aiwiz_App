import axios from 'axios'
import moment from 'moment'
export const url = ''

//Axios Instance For GET, POST, DELETE, PUT
export const AXIOS_INSTANCE = axios.create({
  baseURL: url,
})

const today = moment(new Date())
const yesterday = "2022-05-05T05:24:48.945Z"


export const REFRESH_URL = 'https://auth.squadcast.com/oauth/access-token'
export const INCIDENT_URL = 'https://api.squadcast.com/v3'
export const TEAMS_URL = 'https://api.squadcast.com/v3/teams'
export const SCHEDULE_URL = 'https://api.squadcast.com/v3/schedules'
export const INCIDENT_DETAIL = 'https://api.squadcast.com/v3/incidents'
export const ACKNOWLEDGE_RESOLVE = 'https://api.squadcast.com/v3/incidents/'
export const REFRES_TOKEN = '43a950deb7e650fcd1e51424d5f9732d33e15c55809af45927c9bf2dec299730773b553f1b22f16f8622fdf3f53a1ffbb38a9762b753fb7f87127860ba36084c'
export const TODAY = today
export const YESTERDAY = yesterday