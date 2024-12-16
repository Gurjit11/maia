const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    "https://www.practo.com/mumbai/doctor/dr-shweta-raje-gynecologist-obstetrician?specialization=Gynecologist&practice_id=693787",
    { waitUntil: "networkidle2" }
  );

  const data = await page.evaluate(() => {
    const getTextContent = (selector) => {
      const element = document.querySelector(selector);
      return element ? element.innerText.trim() : null;
    };

    const getAttribute = (selector, attribute) => {
      const element = document.querySelector(selector);
      return element ? element.getAttribute(attribute) : null;
    };

    const doctorName = getTextContent('[data-qa-id="doctor-name"]');
    const contactNumber = "+918989787876"; // Placeholder as phone number scraping may be restricted
    const contactEmail = "test@ggm.com"; // Placeholder for email
    const education = getTextContent('[data-qa-id="doctor-qualifications"]');
    const about = getTextContent('[data-qa-id="doctor-description"]') || "Some text";
    const profileImage = getAttribute('[data-qa-id="doctor-profile-image"]', "src");

    const experienceElement = Array.from(document.querySelectorAll("*")).find(
      (el) => el.innerText.includes("Years Experience")
    );
    const experienceText = experienceElement ? experienceElement.innerText : "";
    const experienceMatch = experienceText.match(/(\d+)\s+Years Experience/);
    const experiance = experienceMatch ? parseInt(experienceMatch[1], 10) : 0;

    const fees = getTextContent('[data-qa-id="consultation_fee"]');
    const feesStructure = fees ? parseInt(fees.replace(/\D/g, ""), 10) : 0;

    const genderElement = Array.from(document.querySelectorAll("*")).find(
      (el) => el.innerText.includes("Dr.") || el.innerText.includes("She")
    );
    const gender = genderElement && genderElement.innerText.includes("She") ? "Female" : "Male";

    return {
      doctorName,
      contactNumber,
      contactEmail,
      education,
      about,
      gender,
      experiance,
      feesStructure,
      profileImage,
    };
  });

  console.log(data);

  // Save the data to a JSON file
  fs.writeFileSync("doctorData2.json", JSON.stringify(data, null, 2));

  await browser.close();
})();
