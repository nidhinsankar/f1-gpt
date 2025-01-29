import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export const GET = async () => {
  const f1_link_1 =
    "https://www.crash.net/f1/news/1062388/1/lewis-hamilton-magic-still-there-f1-title-prospects-examined";
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(f1_link_1);
    const title = await page.title();
    const description = await page.$$eval("div", (divs) =>
      divs
        .map((div) => div.textContent?.trim() !== "" && div.textContent?.trim())
        .filter((val) => val !== false)
    );
    console.log("description", description);

    const description2 = new Set(description);

    await browser.close();

    return NextResponse.json({ title: title, description2 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error: error });
  }
};
