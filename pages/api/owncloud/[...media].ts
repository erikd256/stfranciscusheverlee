import {
  createMediaHandler,
} from 'next-tinacms-owncloud/dist/handlers'

import { isAuthorized } from '@tinacms/auth'

export default createMediaHandler({
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
