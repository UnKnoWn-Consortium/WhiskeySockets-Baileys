import { DEFAULT_CONNECTION_CONFIG } from '../Defaults/index.js'
import { UserFacingSocketConfig } from '../Types/index.js'
import { makeRegistrationSocket as _makeSocket } from './registration.js'

// export the last socket layer
const makeWASocket = (config: UserFacingSocketConfig) => (
	_makeSocket({
		...DEFAULT_CONNECTION_CONFIG,
		...config
	})
)

export default makeWASocket
