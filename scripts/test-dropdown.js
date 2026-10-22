const puppeteer = require("puppeteer-core");
const path = require("path");

async function testDropdown() {
  const outputDir = path.join(__dirname, "../public/images/screenshots");

  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 },
  });

  const page = await browser.newPage();
  await page.goto("http://localhost:3000", { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 1000));

  console.log("Clicking Guests trigger...");
  await page.click('[data-testid="guests-trigger"]');
  await new Promise((r) => setTimeout(r, 600));

  await page.screenshot({
    path: path.join(outputDir, "dropdown-guests-open.png"),
    clip: { x: 0, y: 400, width: 1440, height: 600 },
  });
  console.log("Saved dropdown-guests-open.png");

  console.log("Clicking Dates trigger...");
  await page.click('[data-testid="dates-trigger"]');
  await new Promise((r) => setTimeout(r, 600));

  await page.screenshot({
    path: path.join(outputDir, "dropdown-dates-open.png"),
    clip: { x: 0, y: 400, width: 1440, height: 600 },
  });
  console.log("Saved dropdown-dates-open.png");

  await browser.close();
}

testDropdown().catch(console.error);
