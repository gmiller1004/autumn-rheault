import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";
import sharp from "sharp";
import { site } from "../src/lib/site";

type PDFDoc = InstanceType<typeof PDFDocument>;

const OUTPUT = path.join(process.cwd(), "public", "resume.pdf");
const HEADSHOT = path.join(process.cwd(), "public", "headshot.jpg");

const colors = {
  accent: "#7c2d36",
  foreground: "#1c1917",
  muted: "#78716c",
  border: "#e7e0d6",
};

const layout = {
  headshotWidth: 108,
  headshotHeight: 135,
  headshotGap: 18,
  sectionGap: 0.7,
  rowGap: 11,
};

function pageWidth(doc: PDFDoc) {
  return doc.page.width - doc.page.margins.left - doc.page.margins.right;
}

function pageRight(doc: PDFDoc) {
  return doc.page.width - doc.page.margins.right;
}

function sectionHeading(doc: PDFDoc, title: string) {
  doc.moveDown(layout.sectionGap);
  const left = doc.page.margins.left;
  const right = pageRight(doc);

  doc
    .font("Helvetica-Bold")
    .fontSize(8.5)
    .fillColor(colors.accent)
    .text(title.toUpperCase(), left, doc.y, {
      characterSpacing: 0.6,
      width: pageWidth(doc),
    });

  doc
    .moveTo(left, doc.y + 4)
    .lineTo(right, doc.y + 4)
    .strokeColor(colors.border)
    .lineWidth(0.75)
    .stroke();

  doc.y += 14;
}

function educationEntry(
  doc: PDFDoc,
  institution: string,
  period: string,
  bullets: string[],
) {
  const left = doc.page.margins.left;
  const width = pageWidth(doc);
  const y = doc.y;

  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(colors.foreground);
  doc.text(institution, left, y, { width: width - 108 });

  doc.font("Helvetica").fontSize(8.5).fillColor(colors.muted);
  doc.text(period, left, y, { width, align: "right" });

  doc.moveDown(0.22);
  for (const bullet of bullets) {
    doc
      .font("Helvetica")
      .fontSize(9)
      .fillColor(colors.foreground)
      .text(`• ${bullet}`, left + 6, doc.y, {
        width: width - 6,
        lineGap: 3,
      });
  }
  doc.moveDown(0.42);
}

function theatreTableHeader(doc: PDFDoc) {
  const left = doc.page.margins.left;
  const showW = 168;
  const roleX = left + showW + 10;
  const roleW = 244;
  const dateW = 82;
  const y = doc.y;

  doc.font("Helvetica-Bold").fontSize(7.5).fillColor(colors.muted);
  doc.text("SHOW", left, y, { width: showW, characterSpacing: 0.8 });
  doc.text("ROLE", roleX, y, { width: roleW, characterSpacing: 0.8 });
  doc.text("DATE", pageRight(doc) - dateW, y, {
    width: dateW,
    align: "right",
    characterSpacing: 0.8,
  });

  doc.moveDown(0.35);
}

function creditRow(doc: PDFDoc, show: string, role: string, when: string) {
  const left = doc.page.margins.left;
  const showW = 168;
  const roleX = left + showW + 10;
  const roleW = 244;
  const dateW = 82;
  const y = doc.y;

  doc.font("Helvetica-Bold").fontSize(9);
  const showHeight = doc.heightOfString(show, { width: showW, lineGap: 2 });

  doc.font("Helvetica").fontSize(9);
  const roleHeight = doc.heightOfString(role, { width: roleW, lineGap: 2 });

  const rowHeight = Math.max(showHeight, roleHeight, 12);

  doc.font("Helvetica-Bold").fontSize(9).fillColor(colors.foreground);
  doc.text(show, left, y, { width: showW, lineGap: 2 });

  doc.font("Helvetica").fontSize(9).fillColor(colors.foreground);
  doc.text(role, roleX, y, { width: roleW, lineGap: 2 });

  doc.font("Helvetica").fontSize(8.5).fillColor(colors.muted);
  doc.text(when, pageRight(doc) - dateW, y, {
    width: dateW,
    align: "right",
  });

  doc.y = y + rowHeight + layout.rowGap;
}

function parseEducation(detail: string) {
  const [period, ...rest] = detail.split(" · ");
  return { period: period ?? detail, bullets: rest.length ? rest : [detail] };
}

function coverPlacement(
  imgW: number,
  imgH: number,
  frameW: number,
  frameH: number,
) {
  const scale = Math.max(frameW / imgW, frameH / imgH);
  const drawW = imgW * scale;
  const drawH = imgH * scale;
  return {
    drawW,
    drawH,
    offsetX: (frameW - drawW) / 2,
    offsetY: 0,
  };
}

function drawHeader(doc: PDFDoc, headshotMeta: { width: number; height: number }) {
  const left = doc.page.margins.left;
  const top = doc.page.margins.top;
  const textWidth =
    pageWidth(doc) - layout.headshotWidth - layout.headshotGap;
  const headshotX = pageRight(doc) - layout.headshotWidth;

  if (fs.existsSync(HEADSHOT)) {
    doc
      .save()
      .roundedRect(
        headshotX - 1,
        top - 1,
        layout.headshotWidth + 2,
        layout.headshotHeight + 2,
        4,
      )
      .strokeColor(colors.border)
      .lineWidth(0.75)
      .stroke()
      .restore();

    const { drawW, drawH, offsetX, offsetY } = coverPlacement(
      headshotMeta.width,
      headshotMeta.height,
      layout.headshotWidth,
      layout.headshotHeight,
    );

    doc.save();
    doc
      .roundedRect(headshotX, top, layout.headshotWidth, layout.headshotHeight, 3)
      .clip();
    doc.image(HEADSHOT, headshotX + offsetX, top + offsetY, {
      width: drawW,
      height: drawH,
    });
    doc.restore();
  }

  doc
    .font("Helvetica-Bold")
    .fontSize(22)
    .fillColor(colors.foreground)
    .text(site.name.toUpperCase(), left, top, {
      width: textWidth,
      characterSpacing: 1.6,
      lineGap: 2,
    });

  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(colors.accent)
    .text(site.tagline, left, doc.y + 4, { width: textWidth });

  doc
    .font("Helvetica")
    .fontSize(8.5)
    .fillColor(colors.muted)
    .text(
      `${site.email}  ·  ${site.phone}  ·  ${site.location}`,
      left,
      doc.y + 8,
      { width: textWidth, lineGap: 2 },
    );

  doc
    .font("Helvetica")
    .fontSize(8.5)
    .fillColor(colors.muted)
    .text("autumnrheault.com", left, doc.y + 4, { width: textWidth });

  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(colors.foreground)
    .text(
      `Age ${site.age}  ·  ${site.playingAge}  ·  ${site.height}`,
      left,
      doc.y + 8,
      { width: textWidth },
    );

  const headerBottom = Math.max(doc.y + 8, top + layout.headshotHeight + 12);
  doc.y = headerBottom;
}

async function main() {
  const headshotMeta = fs.existsSync(HEADSHOT)
    ? await sharp(HEADSHOT).metadata()
    : { width: layout.headshotWidth, height: layout.headshotHeight };

  const doc = new PDFDocument({
    size: "LETTER",
    margins: { top: 44, bottom: 44, left: 50, right: 50 },
  });

  doc.pipe(fs.createWriteStream(OUTPUT));

  drawHeader(doc, {
    width: headshotMeta.width ?? layout.headshotWidth,
    height: headshotMeta.height ?? layout.headshotHeight,
  });

  sectionHeading(doc, "Education");

  for (const entry of site.training) {
    const { period, bullets } = parseEducation(entry.detail);
    educationEntry(doc, entry.discipline, period, bullets);
  }

  sectionHeading(doc, "Theatre");

  doc
    .font("Helvetica-Bold")
    .fontSize(9.5)
    .fillColor(colors.foreground)
    .text("Norris Performing Arts Center");

  doc.moveDown(0.3);
  theatreTableHeader(doc);

  for (const credit of site.credits) {
    creditRow(doc, credit.show, credit.role, credit.year);
  }

  sectionHeading(doc, "Awards & Skills");

  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(colors.foreground)
    .text(
      [`• ${site.awards[0]}`, site.skills.join("  ·  ")].join("\n"),
      doc.page.margins.left,
      doc.y,
      { width: pageWidth(doc), lineGap: 6 },
    );

  doc.end();

  await new Promise<void>((resolve, reject) => {
    doc.on("finish", resolve);
    doc.on("error", reject);
  });

  console.log(`Wrote ${OUTPUT}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
