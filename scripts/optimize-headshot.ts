import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SOURCE =
  "/Volumes/EOS_DIGITAL/DCIM/100EOS5D/Headshots_For_Edit/Cropped Corrected/Full Correction/3Q5A3660-Edit-13.jpg";
const OUTPUT = path.join(process.cwd(), "public", "headshot.jpg");

const LONG_EDGE = 1800;
const JPEG_QUALITY = 90;

async function main() {
  if (!fs.existsSync(SOURCE)) {
    throw new Error(`Source headshot not found: ${SOURCE}`);
  }

  const input = sharp(SOURCE, { failOn: "none" }).rotate();
  const metadata = await input.metadata();

  await input
    .resize(LONG_EDGE, LONG_EDGE, {
      fit: "inside",
      withoutEnlargement: true,
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.65, m1: 1.0, m2: 0.35, x1: 2, y2: 10, y3: 20 })
    .jpeg({
      quality: JPEG_QUALITY,
      mozjpeg: true,
      chromaSubsampling: "4:4:4",
    })
    .toFile(OUTPUT);

  const outMeta = await sharp(OUTPUT).metadata();
  const { size } = fs.statSync(OUTPUT);

  console.log(`Source: ${metadata.width}x${metadata.height}`);
  console.log(`Output: ${outMeta.width}x${outMeta.height}`);
  console.log(`File size: ${(size / 1024).toFixed(0)} KB`);
  console.log(`Wrote ${OUTPUT}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
