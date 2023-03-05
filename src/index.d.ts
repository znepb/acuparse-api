export interface Health {
  status: string;
  installed: boolean;
  realtime: string;
  updated: string;
  authenticated: boolean;
  admin: boolean;
  database: string;
}

export type directions =
  | "N"
  | "NNE"
  | "NE"
  | "ENE"
  | "E"
  | "ESE"
  | "SE"
  | "SSE"
  | "S"
  | "SSW"
  | "SW"
  | "WSW"
  | "W"
  | "WNW"
  | "NW"
  | "NWW";
export type trend = "rising" | "steady" | "falling";

// Main
export interface MainResponse {
  main: {
    tempF: number;
    tempC: number;
    tempF_trend: trend;
    feelsF?: number;
    feelsC?: number;
    dewptF: number;
    dewptC: number;
    tempC_high: number;
    tempF_high: number;
    high_temp_recorded: string;
    tempC_low: number;
    tempF_low: number;
    low_temp_recorded: string;
    tempC_avg: number;
    tempF_avg: number;
    relH: number;
    relH_trend: trend;
    windSpeedMPH: number;
    windSpeedKMH: number;
    windDEG: number;
    windDIR: directions;
    windDEG_peak: number;
    windDIR_peak: directions;
    windSpeedMPH_peak: number;
    windSpeedKMH_peak: number;
    windSpeed_peak_recorded: string;
    windBeaufort: number;
    windGustDEG: number;
    windGustDIR: directions;
    windGustMPH: number;
    windGustKMH: number;
    windGustPeakMPH: number;
    windGustPeakKMH: number;
    windGustDEGPeak: number;
    windGustDIRPeak: directions;
    windGustPeakRecorded: string;
    windAvgMPH: number;
    windAvgKMH: number;
    rainIN: number;
    rainMM: number;
    rainTotalIN_today: number;
    rainTotalMM_today: number;
    pressure_inHg: number;
    pressure_kPa: number;
    pressure_trend: trend;
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_age: number;
    moon_stage: string;
    moon_illumination: string;
    moon_nextNew: string;
    moon_nextFull: string;
    moon_lastNew: string;
    moon_lastFull: string;
    lastUpdated: string;
  };
  atlas?: {
    lightIntensity: number;
    lightIntensity_text: string;
    lightSeconds: number;
    lightHours: number;
    uvIndex: number;
    uvIndex_text: string;
    lastUpdated: string;
  };
  lightning?: {
    strikecount: number;
    dailystrikes: number;
    currentstrikes: number;
    interference: number;
    interference_text: string;
    last_strike_ts: string;
    last_update: string;
    last_strike_distance_KM: number;
    last_strike_distance_M: number;
  };
}

export interface Main {
  units: "imperial" | "metric";
  temp: {
    temp: number;
    trend: trend;
    feelsLike?: number;
    dewPoint: number;
    high: number;
    low: number;
    avg: number;
    highRecordedAt: string;
    lowRecordedAt: string;
  };
  relativeHumidity: {
    relativeHumidity: number;
    trend: trend;
  };
  wind: {
    speed: number;
    direction: {
      deg: number;
      dir: directions;
    };
    peak: {
      speed: number;
      direction: {
        deg: number;
        dir: directions;
      };
    };
    beaufort: number;
  };
  windGust: {
    speed: number;
    direction: {
      deg: number;
      dir: directions;
    };
    peak: {
      speed: number;
      direction: {
        deg: number;
        dir: directions;
      };
    };
  };
  rain: {
    rate: number;
    total: number;
  };
  pressure: {
    pressure: number;
    trend: trend;
  };
  sun: {
    rise: string;
    set: string;
  };
  moon: {
    rise: string;
    set: string;
    age: number;
    stage: string;
    illumination: number;
    nextNew: string;
    nextFull: string;
    lastNew: string;
    lastFull: string;
  };
  light?: {
    intensity?: {
      intensity?: number;
      text?: string;
    };
    lightTime?: number;
    uv?: {
      uv?: number;
      text?: string;
    };
    lastUpdated?: string;
  };
  lightning?: {
    strikes?: number;
    daily?: number;
    current?: number;
    interference?: {
      interference?: number;
      text?: string;
    };
    lastStrikeAt?: string;
    lastStrikeDistance?: number;
    lastUpdated?: string;
  };
  lastUpdated: string;
}

// Archive
export interface ArchiveInformationMain {
  tempF_high: number;
  tempF_low: number;
  tempC_high: number;
  tempC_low: number;
  tempF_high_recorded: string;
  tempF_low_recorded: string;
  windS_mph_high: number;
  windS_kmh_high: number;
  windS_mph_high_recorded: string;
  windDIR: directions;
  pressure_inHg_high: number;
  pressure_kPa_high: number;
  pressure_inHg_low: number;
  pressure_kPa_low: number;
  pressure_inHg_high_recorded: string;
  pressure_inHg_low_recorded: string;
  relH_high: number;
  relH_low: number;
  relH_high_recorded: string;
  relH_low_recorded: string;
  rainfall_IN_total: number;
  rainfall_MM_total: number;
}

export interface ArchiveInformationAtlas {
  uvindex_high: number;
  uvindex_high_recorded: string;
  light_high: number;
  light_high_recorded: string;
  lightHours_high: number;
  lightHours_high_recorded: string;
  lightning: number;
  lightning_recorded: string;
}

export interface ArchiveObject<T> {
  yesterday: T;
  week: T;
  month: T;
  lastMonth: T;
  year: T;
  ever: T;
}

export interface ArchiveResponse {
  main: ArchiveObject<ArchiveInformationMain>;
  atlas?: ArchiveObject<ArchiveInformationAtlas>;
}

//

export interface ArchiveMain {
  temp: {
    high: number;
    low: number;
    highRecordedAt: string;
    lowRecordedAt: string;
  };
  wind: {
    high: number;
    highRecordedAt: string;
    dir: directions;
  };
  pressure: {
    high: number;
    low: number;
    highRecordedAt: string;
    lowRecordedAt: string;
  };
  humidity: {
    high: number;
    low: number;
    highRecordedAt: string;
    lowRecordedAt: string;
  };
  rainfall: number;
}

export interface ArchiveAtlas {
  uv: {
    high: number;
    highRecordedAt: string;
  };
  light: {
    high: number;
    highRecordedAt: string;
  };
  lightHours: number;
  lightningStrikes: number;
}

export interface Archive {
  units: "imperial" | "metric";
  main: ArchiveObject<ArchiveMain>;
  atlas?: ArchiveObject<ArchiveAtlas>;
}
