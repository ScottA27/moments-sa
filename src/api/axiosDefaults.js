import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-sa-618bed1ba91a.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true