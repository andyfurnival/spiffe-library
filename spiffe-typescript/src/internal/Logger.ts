enum LogLevel {
  DEBUG,
  INFO,
  WARNING,
  ERROR,
}

interface LoggerConfig {
  logLevel: LogLevel;
}

export class Logger {
  private config: LoggerConfig;
  private context: string;

  constructor(context: Function, config?: LoggerConfig) {
    this.context = context.name;
    this.config = config || {
      logLevel: process.env.LOG_LEVEL
        ? (LogLevel[process.env.LOG_LEVEL as keyof typeof LogLevel] as LogLevel)
        : LogLevel.INFO,
    };
  }

  debug(message: string | object, obj?: object) {
    if (this.config.logLevel <= LogLevel.DEBUG) {
      this.log(LogLevel.DEBUG, message, obj);
    }
  }

  info(message: string | object, obj?: object) {
    if (this.config.logLevel <= LogLevel.INFO) {
      this.log(LogLevel.INFO, message, obj);
    }
  }

  warn(message: string | object, obj?: object) {
    if (this.config.logLevel <= LogLevel.WARNING) {
      this.log(LogLevel.WARNING, message, obj);
    }
  }

  error(message: string | object, obj?: object) {
    if (this.config.logLevel <= LogLevel.ERROR) {
      this.log(LogLevel.ERROR, message, obj);
    }
  }

  private log(level: LogLevel, message: string | object, obj?: object) {
    let logMessage: string;

    if (typeof message === 'string') {
      logMessage = obj ? `${message} - ${JSON.stringify(obj)}` : message;
    } else {
      logMessage = JSON.stringify(this, (key, value) =>
        typeof value === 'bigint'
          ? value.toString()
          : value // return everything else unchanged
      )
    }

    console.log(`[${LogLevel[level]}] [${this.context}] ${logMessage}`);
  }
}
