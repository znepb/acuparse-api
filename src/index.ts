import fetch from "node-fetch";
import {
  Archive,
  ArchiveInformationAtlas,
  ArchiveInformationMain,
  ArchiveMain,
  ArchiveResponse,
  Health,
  Main,
  MainResponse,
} from ".";

export default class Acuparse {
  public key?: string;
  public endpoint: string;

  /**
   * Creates a new AcuParse instance.
   * @param {string} endpoint A URL representing the endpoint to request from.
   * @param {string?} key The API key to use.
   */
  constructor(endpoint: string, key?: string) {
    this.key = key;
    this.endpoint = endpoint;
  }

  /**
   * Gets the health of the AcuParse instance.
   * @returns A promise with the AcuParse instance's health report.
   */
  public async getHealth(): Promise<Health> {
    const resp = (await (
      await fetch(`${this.endpoint}/api/system/health`)
    ).json()) as any;
    resp.installed = resp.installed === "true";

    return resp;
  }

  // Main
  /**
   * Gets the main information of the AcuParse instance.
   * @param {string} units Either metric or imperial, the units to use.
   * @returns The information for the main sensor.
   */
  public async getMain(
    units: "metric" | "imperial" = "metric"
  ): Promise<Main | undefined> {
    const resp = (await (
      await fetch(`${this.endpoint}/api/v1/json/dashboard/?main`)
    ).json()) as MainResponse;

    const main = resp.main;

    if (units === "imperial") {
      return {
        units,
        temp: {
          temp: main.tempF,
          trend: main.tempF_trend,
          feelsLike: main.tempF,
          dewPoint: main.dewptF,
          high: main.tempF_high,
          low: main.tempF_low,
          avg: main.tempF_avg,
          highRecordedAt: main.high_temp_recorded,
          lowRecordedAt: main.low_temp_recorded,
        },
        relativeHumidity: {
          relativeHumidity: main.relH,
          trend: main.relH_trend,
        },
        wind: {
          speed: main.windSpeedMPH,
          direction: {
            deg: main.windDEG,
            dir: main.windDIR,
          },
          peak: {
            speed: main.windSpeedMPH_peak,
            direction: {
              deg: main.windDEG_peak,
              dir: main.windDIR_peak,
            },
          },
          beaufort: main.windBeaufort,
        },
        windGust: {
          speed: main.windGustMPH,
          direction: {
            deg: main.windGustDEG,
            dir: main.windGustDIR,
          },
          peak: {
            speed: main.windGustPeakMPH,
            direction: {
              deg: main.windGustDEGPeak,
              dir: main.windGustDIRPeak,
            },
          },
        },
        rain: {
          rate: main.rainIN,
          total: main.rainTotalIN_today,
        },
        pressure: {
          pressure: main.pressure_inHg,
          trend: main.pressure_trend,
        },
        sun: {
          rise: main.sunrise,
          set: main.sunset,
        },
        moon: {
          rise: main.moonrise,
          set: main.moonset,
          age: main.moon_age,
          stage: main.moon_stage,
          illumination: Number(main.moon_illumination.replace("%", "")),
          nextNew: main.moon_nextNew,
          nextFull: main.moon_nextFull,
          lastNew: main.moon_lastNew,
          lastFull: main.moon_lastFull,
        },
        light: {
          intensity: {
            intensity: resp.atlas?.lightIntensity,
            text: resp.atlas?.lightIntensity_text,
          },
          lightTime: resp.atlas?.lightSeconds,
          uv: {
            uv: resp.atlas?.uvIndex,
            text: resp.atlas?.uvIndex_text,
          },
          lastUpdated: resp.atlas?.lastUpdated,
        },
        lightning: {
          strikes: resp.lightning?.strikecount,
          daily: resp.lightning?.dailystrikes,
          current: resp.lightning?.currentstrikes,
          interference: {
            interference: resp.lightning?.interference,
            text: resp.lightning?.interference_text,
          },
          lastStrikeAt: resp.lightning?.last_strike_ts,
          lastStrikeDistance: resp.lightning?.last_strike_distance_M,
          lastUpdated: resp.lightning?.last_update,
        },
        lastUpdated: main.lastUpdated,
      };
    }

    return {
      units,
      temp: {
        temp: main.tempC,
        trend: main.tempF_trend,
        feelsLike: main.tempC,
        dewPoint: main.dewptC,
        high: main.tempC_high,
        low: main.tempC_low,
        avg: main.tempC_avg,
        highRecordedAt: main.high_temp_recorded,
        lowRecordedAt: main.low_temp_recorded,
      },
      relativeHumidity: {
        relativeHumidity: main.relH,
        trend: main.relH_trend,
      },
      wind: {
        speed: main.windSpeedKMH,
        direction: {
          deg: main.windDEG,
          dir: main.windDIR,
        },
        peak: {
          speed: main.windSpeedKMH_peak,
          direction: {
            deg: main.windDEG_peak,
            dir: main.windDIR_peak,
          },
        },
        beaufort: main.windBeaufort,
      },
      windGust: {
        speed: main.windGustKMH,
        direction: {
          deg: main.windGustDEG,
          dir: main.windGustDIR,
        },
        peak: {
          speed: main.windGustPeakKMH,
          direction: {
            deg: main.windGustDEGPeak,
            dir: main.windGustDIRPeak,
          },
        },
      },
      rain: {
        rate: main.rainMM,
        total: main.rainTotalMM_today,
      },
      pressure: {
        pressure: main.pressure_kPa,
        trend: main.pressure_trend,
      },
      sun: {
        rise: main.sunrise,
        set: main.sunset,
      },
      moon: {
        rise: main.moonrise,
        set: main.moonset,
        age: main.moon_age,
        stage: main.moon_stage,
        illumination: Number(main.moon_illumination.replace("%", "")),
        nextNew: main.moon_nextNew,
        nextFull: main.moon_nextFull,
        lastNew: main.moon_lastNew,
        lastFull: main.moon_lastFull,
      },
      light: {
        intensity: {
          intensity: resp.atlas?.lightIntensity,
          text: resp.atlas?.lightIntensity_text,
        },
        lightTime: resp.atlas?.lightSeconds,
        uv: {
          uv: resp.atlas?.uvIndex,
          text: resp.atlas?.uvIndex_text,
        },
        lastUpdated: resp.atlas?.lastUpdated,
      },
      lightning: {
        strikes: resp.lightning?.strikecount,
        daily: resp.lightning?.dailystrikes,
        current: resp.lightning?.currentstrikes,
        interference: {
          interference: resp.lightning?.interference,
          text: resp.lightning?.interference_text,
        },
        lastStrikeAt: resp.lightning?.last_strike_ts,
        lastStrikeDistance: resp.lightning?.last_strike_distance_KM,
        lastUpdated: resp.lightning?.last_update,
      },
      lastUpdated: main.lastUpdated,
    };
  }

  // Archive
  private makeArchiveForIndexMain(
    units: "metric" | "imperial",
    object: ArchiveInformationMain
  ): ArchiveMain {
    if (units === "imperial") {
      return {
        temp: {
          high: object.tempF_high,
          low: object.tempF_low,
          highRecordedAt: object.tempF_high_recorded,
          lowRecordedAt: object.tempF_low_recorded,
        },
        wind: {
          high: object.windS_mph_high,
          highRecordedAt: object.windS_mph_high_recorded,
          dir: object.windDIR,
        },
        pressure: {
          high: object.pressure_inHg_high,
          low: object.pressure_inHg_low,
          highRecordedAt: object.pressure_inHg_high_recorded,
          lowRecordedAt: object.pressure_inHg_low_recorded,
        },
        humidity: {
          high: object.relH_high,
          low: object.relH_low,
          highRecordedAt: object.relH_high_recorded,
          lowRecordedAt: object.relH_low_recorded,
        },
        rainfall: object.rainfall_IN_total,
      };
    }

    return {
      temp: {
        high: object.tempC_high,
        low: object.tempC_low,
        highRecordedAt: object.tempF_high_recorded,
        lowRecordedAt: object.tempF_low_recorded,
      },
      wind: {
        high: object.windS_kmh_high,
        highRecordedAt: object.windS_mph_high_recorded,
        dir: object.windDIR,
      },
      pressure: {
        high: object.pressure_kPa_high,
        low: object.pressure_kPa_low,
        highRecordedAt: object.pressure_inHg_high_recorded,
        lowRecordedAt: object.pressure_inHg_low_recorded,
      },
      humidity: {
        high: object.relH_high,
        low: object.relH_low,
        highRecordedAt: object.relH_high_recorded,
        lowRecordedAt: object.relH_low_recorded,
      },
      rainfall: object.rainfall_MM_total,
    };
  }

  private makeArchiveForIndexAtlas(object: ArchiveInformationAtlas) {
    return {
      uv: {
        high: object.uvindex_high,
        highRecordedAt: object.uvindex_high_recorded,
      },
      light: {
        high: object.light_high,
        highRecordedAt: object.uvindex_high_recorded,
      },
      lightHours: object.lightHours_high,
      lightningStrikes: object.lightning,
    };
  }

  /**
   * Gets archive information from the AcuParse instance.
   * @param units Either imperial or metric, the units to use.
   * @returns Archive information of the instance.
   */
  public async getArchive(
    units: "metric" | "imperial" = "metric"
  ): Promise<Archive | undefined> {
    const resp = (await (
      await fetch(`${this.endpoint}/api/v1/json/archive`)
    ).json()) as ArchiveResponse;

    const ret: Archive = {
      units,
      main: {
        yesterday: this.makeArchiveForIndexMain(units, resp.main.yesterday),
        week: this.makeArchiveForIndexMain(units, resp.main.week),
        month: this.makeArchiveForIndexMain(units, resp.main.month),
        lastMonth: this.makeArchiveForIndexMain(units, resp.main.lastMonth),
        year: this.makeArchiveForIndexMain(units, resp.main.year),
        ever: this.makeArchiveForIndexMain(units, resp.main.ever),
      },
    };

    if (resp.atlas) {
      ret.atlas = {
        yesterday: this.makeArchiveForIndexAtlas(resp.atlas.yesterday),
        week: this.makeArchiveForIndexAtlas(resp.atlas.week),
        month: this.makeArchiveForIndexAtlas(resp.atlas.month),
        lastMonth: this.makeArchiveForIndexAtlas(resp.atlas.lastMonth),
        year: this.makeArchiveForIndexAtlas(resp.atlas.year),
        ever: this.makeArchiveForIndexAtlas(resp.atlas.ever),
      };
    }

    return ret;
  }
}
