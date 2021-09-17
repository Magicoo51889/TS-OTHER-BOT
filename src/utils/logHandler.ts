import { createLogger, format, transports, config } from "winston";
const { combine, timestamp, colorize, printf } = format;

export const logHandler = createLogger({
  levels: config.npm.levels,
  level: "silly",
  transports: [new transports.Console()],
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    colorize(),
    printf((info: { level: any; timestamp: any; message: any; }) => `${info.level}: ${[info.timestamp]}: ${info.message}`)
  ),
  exitOnError: false,
});