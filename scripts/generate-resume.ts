import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";
import { site } from "../src/lib/site";

type PDFDoc = InstanceType<typeof PDFDocument>;

const OUTPUT = path.join(process.cwd(), "public", "resume.pdf");

const colors = {
  accent: "#7c2d36",
  foreground: "#1c1917",
  muted: "#78716c",
  border: "#e7e0d6",
};

function sectionHeading(doc: PDFDoc, title: string) {
  doc.moveDown(0.6);
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(colors.accent)
    .text(title.toUpperCase(), { characterSpacing: 1.2 });
  doc
    .moveTo(doc.page.margins.left, doc.y + 4)
    .lineTo(doc.page.width - doc.page.margins.right, doc.y + 4)
    .strokeColor(colors.border)
    .lineWidth(1)
    .stroke();
  doc.moveDown(0.5);
}

function educationEntry(
  doc: PDFDoc,
  institution: string,
  period: string,
  bullets: string[],
) {
  const left = doc.page.margins.left;
  const right = doc.page.width - doc.page.margins.right;
  const y = doc.y;

  doc.font("Helvetica-Bold").fontSize(10).fillColor(colors.foreground);
  doc.text(institution, left, y, { width: right - left - 120, continued: false });

  doc.font("Helvetica").fontSize(9).fillColor(colors.muted);
  doc.text(period, left, y, { width: right - left, align: "right" });

  doc.moveDown(0.15);
  for (const bullet of bullets) {
    doc
      .font("Helvetica")
      .fontSize(9.5)
      .fillColor(colors.foreground)
      .text(`• ${bullet}`, { indent: 8, lineGap: 2 });
  }
  doc.moveDown(0.35);
}

function creditRow(
  doc: PDFDoc,
  show: string,
  role: string,
  when: string,
) {
  const left = doc.page.margins.left;
  const right = doc.page.width - doc.page.margins.right;
  const y = doc.y;
  const showWidth = 170;
  const dateWidth = 90;

  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(colors.foreground);
  doc.text(show, left, y, { width: showWidth });

  doc.font("Helvetica").fontSize(9.5).fillColor(colors.foreground);
  doc.text(role, left + showWidth, y, {
    width: right - left - showWidth - dateWidth,
  });

  doc.font("Helvetica").fontSize(9).fillColor(colors.muted);
  doc.text(when, left, y, { width: right - left, align: "right" });

  doc.moveDown(0.45);
}

function parseEducation(detail: string) {
  const [period, ...rest] = detail.split(" · ");
  return { period: period ?? detail, bullets: rest.length ? rest : [detail] };
}

const doc = new PDFDocument({
  size: "LETTER",
  margins: { top: 48, bottom: 48, left: 54, right: 54 },
});

doc.pipe(fs.createWriteStream(OUTPUT));

const contentWidth =
  doc.page.width - doc.page.margins.left - doc.page.margins.right;

doc
  .font("Helvetica-Bold")
  .fontSize(26)
  .fillColor(colors.foreground)
  .text(site.name.toUpperCase(), { align: "center", characterSpacing: 2 });

doc
  .font("Helvetica")
  .fontSize(11)
  .fillColor(colors.accent)
  .text(site.tagline, { align: "center" });

doc.moveDown(0.35);

doc
  .font("Helvetica")
  .fontSize(9)
  .fillColor(colors.muted)
  .text(
    `${site.email}  ·  ${site.phone}  ·  ${site.location}  ·  autumnrheault.com`,
    { align: "center", lineGap: 1 },
  );

doc.moveDown(0.25);

doc
  .font("Helvetica")
  .fontSize(9.5)
  .fillColor(colors.foreground)
  .text(
    `Age ${site.age}  ·  ${site.playingAge}  ·  ${site.height}`,
    { align: "center" },
  );

sectionHeading(doc, "Education");

for (const entry of site.training) {
  const { period, bullets } = parseEducation(entry.detail);
  educationEntry(doc, entry.discipline, period, bullets);
}

sectionHeading(doc, "Theatre");

doc
  .font("Helvetica-Bold")
  .fontSize(10)
  .fillColor(colors.foreground)
  .text("Norris Performing Arts Center");

doc.moveDown(0.25);

for (const credit of site.credits) {
  creditRow(doc, credit.show, credit.role, credit.year);
}

sectionHeading(doc, "Awards & Skills");

for (const award of site.awards) {
  doc
    .font("Helvetica-Bold")
    .fontSize(9.5)
    .fillColor(colors.foreground)
    .text(`• ${award}`, { lineGap: 2 });
}

doc.moveDown(0.2);

doc
  .font("Helvetica")
  .fontSize(9.5)
  .fillColor(colors.foreground)
  .text(site.skills.join("  ·  "), { lineGap: 3, width: contentWidth });

doc.end();

doc.on("finish", () => {
  console.log(`Wrote ${OUTPUT}`);
});
