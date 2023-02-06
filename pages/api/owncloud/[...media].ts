// pages/api/cloudinary/[...media].ts

import {
  mediaHandlerConfig,
  createMediaHandler,
} from 'next-tinacms-owncloud/dist/handlers'

import { isAuthorized } from '@tinacms/auth'

export const config = mediaHandlerConfig

export default createMediaHandler({
  server: process.env.OWNCLOUD_SERVER,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
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
