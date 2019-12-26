const EXTERNAL_URL = 'http://meishule.wuyao.com:5001/api/'
const INTERNAL_URL = 'http://meishule.wuyao.com:5001/api/'
// const PROXY_URL = 'http://izjgk.free.idcfengye.com/v1'

export default {
  // BASE_API: EXTERNAL_URL

  BASE_API: process.env.NODE_ENV === 'development' ? INTERNAL_URL : EXTERNAL_URL
}
