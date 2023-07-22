import { pino } from 'pino'

export default pino({ timestamp: () => `,"time":"${new Date().toJSON()}"` })
