import { A as AstroError, j as MissingSharp } from './astro_49ea4433.mjs';
import { f as baseService, p as parseQuality } from './pages/contact_7b776f6b.mjs';
/* empty css                          */import 'os';
import 'fs';
import 'url';
import 'path';
import 'nodemailer';

let sharp;
const qualityTable = {
  low: 25,
  mid: 50,
  high: 80,
  max: 100
};
async function loadSharp() {
  let sharpImport;
  try {
    sharpImport = (await import('sharp')).default;
  } catch (e) {
    throw new AstroError(MissingSharp);
  }
  return sharpImport;
}
const sharpService = {
  validateOptions: baseService.validateOptions,
  getURL: baseService.getURL,
  parseURL: baseService.parseURL,
  getHTMLAttributes: baseService.getHTMLAttributes,
  async transform(inputBuffer, transformOptions) {
    if (!sharp)
      sharp = await loadSharp();
    const transform = transformOptions;
    if (transform.format === "svg")
      return { data: inputBuffer, format: "svg" };
    let result = sharp(inputBuffer, { failOnError: false, pages: -1 });
    result.rotate();
    if (transform.height && !transform.width) {
      result.resize({ height: transform.height });
    } else if (transform.width) {
      result.resize({ width: transform.width });
    }
    if (transform.format) {
      let quality = void 0;
      if (transform.quality) {
        const parsedQuality = parseQuality(transform.quality);
        if (typeof parsedQuality === "number") {
          quality = parsedQuality;
        } else {
          quality = transform.quality in qualityTable ? qualityTable[transform.quality] : void 0;
        }
      }
      result.toFormat(transform.format, { quality });
    }
    const { data, info } = await result.toBuffer({ resolveWithObject: true });
    return {
      data,
      format: info.format
    };
  }
};
var sharp_default = sharpService;

export { sharp_default as default };
