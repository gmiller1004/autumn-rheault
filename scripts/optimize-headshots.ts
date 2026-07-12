import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SOURCE_DIR =
  "/Volumes/EOS_DIGITAL/DCIM/100EOS5D/Headshots_For_Edit/Cropped Corrected/Full Correction";
const OUTPUT_DIR = path.join(process.cwd(), "public", "headshots");

const LONG_EDGE = 1800;
const JPEG_QUALITY = 88;

const files = [
  "3Q5A3360-Edit-1.jpg",
  "3Q5A3370-2.jpg",
  "3Q5A3380-3.jpg",
  "3Q5A3390-4.jpg",
  "3Q5A3410-5.jpg",
  "3Q5A3420-6.jpg",
  "3Q5A3470-7.jpg",
  "3Q5A3480-Edit-8.jpg",
  "3Q5A3490-Edit-9.jpg",
  "3Q5A3520-10.jpg",
  "3Q5A3540-11.jpg",
  "3Q5A3550-12.jpg",
  "3Q5A3660-Edit-13.jpg",
  "3Q5A3670-14.jpg",
  "3Q5A3680-Edit-15.jpg",
  "3Q5A3690-16.jpg",
  "3Q5A3700-Edit-17.jpg",
  "3Q5A3720-18.jpg",
] as const;

function outputName(source: string) {
  const match = source.match(/3Q5A(\d+)/i);
  return `${match?.[1] ?? source.replace(/\W+/g, "-").toLowerCase()}.jpg`;
}

async function optimizeOne(sourcePath: string, outputPath: string) {
  await sharp(sourcePath, { failOn: "none" })
    .rotate()
    .resize(LONG_EDGE, LONG_EDGE, {
      fit: "inside",
      withoutEnlargement: true,
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.5, m1: 1.0, m2: 0.3, x1: 2, y2: 10, y3: 20 })
    .jpeg({
      quality: JPEG_QUALITY,
      mozjpeg: true,
      chromaSubsampling: "4:4:4",
    })
    .toFile(outputPath);
}

async function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    throw new Error(`Source directory not found: ${SOURCE_DIR}`);
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  let totalBytes = 0;

  for (const file of files) {
    const sourcePath = path.join(SOURCE_DIR, file);
    if (!fs.existsSync(sourcePath)) {
      throw new Error(`Missing source file: ${sourcePath}`);
    }

    const out = path.join(OUTPUT_DIR, outputName(file));
    await optimizeOne(sourcePath, out);
    totalBytes += fs.statSync(out).size;
    console.log(`✓ ${out}`);
  }

  console.log(
    `Optimized ${files.length} headshots (${(totalBytes / 1024 / 1024).toFixed(1)} MB total)`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
