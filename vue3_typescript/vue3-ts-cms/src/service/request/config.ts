let BASE_URL = ''
let BASE_NAME = ''
const TIMEOUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000'
  BASE_NAME = 'coderwhy'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://coderwhy.org/prod'
  BASE_NAME = 'kobe'
} else {
  BASE_URL = 'https://coderwhy.org/test'
  BASE_NAME = 'james'
}

export { BASE_URL, BASE_NAME, TIMEOUT }
