const puppeteer = require("puppeteer-core");
const path = require("path");
const fs = require("fs");

async function capture() {
  const outputDir = path.join(__dirname, "../public/images/screenshots");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 },
  });

  const page = await browser.newPage();

  console.log("Navigating to Homepage...");
  await page.goto("http://localhost:3000", { waitUntil: "networkidle2", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 2000));

  await page.screenshot({
    path: path.join(outputDir, "home-hero.png"),
    clip: { x: 0, y: 0, width: 1440, height: 1100 },
  });
  console.log("Captured home-hero.png");

  await page.screenshot({
    path: path.join(outputDir, "home-full.png"),
    fullPage: true,
  });
  console.log("Captured home-full.png");

  console.log("Navigating to Destinations...");
  await page.goto("http://localhost:3000/destinations", { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outputDir, "destinations.png") });
  console.log("Captured destinations.png");

  console.log("Navigating to Trips...");
  await page.goto("http://localhost:3000/trips", { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outputDir, "trips.png") });
  console.log("Captured trips.png");

  console.log("Navigating to Booking...");
  await page.goto("http://localhost:3000/booking", { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outputDir, "booking.png") });
  console.log("Captured booking.png");

  await browser.close();
  console.log("All screenshots captured successfully!");
}

capture().catch((err) => {
  console.error("Error capturing screenshots:", err);
  process.exit(1);
});
