import {
  createMediaHandler,
  mediaHandlerConfig
} from 'next-tinacms-owncloud/dist/handlers'

import { isAuthorized } from '@tinacms/auth'

export const config = mediaHandlerConfig

export default createMediaHandler({
  baseUrl: process.env.OWNCLOUD_SERVER,
    auth: {
      basic: {
        username: process.env.OWNCLOUD_UN,
        password: process.env.OWNCLOUD_PW
      }
    },
  authorized: async (req, _res) => {
    try {
      if (process.env.NODE_ENV == 'development') {
        return true
      }
      const user = await isAuthorized(req)
      return user && user.verified
    } catch (e) {
      console.error(e)
      return false
    }
  },
})
