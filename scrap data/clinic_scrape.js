const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    "https://www.practo.com/mumbai/clinic/womens-hospital-khar-west",
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

    // Clinic Details
    const clinicName = getTextContent('[data-qa-id="clinic-name"]') || "Unknown Clinic Name";
    const contactNumber = getTextContent('[data-qa-id="phone_number"]') || "+91XXXXXXXXXX"; // Placeholder
    const clinicImage = getAttribute('[data-qa-id="clinic-image"]', "src") || "https://img.freepik.com/free-vector/square-business-logo_23-2147503134.jpg";
    const clinicMediaImages = Array.from(document.querySelectorAll('img[data-qa-id="doctor-clinics-photo"]')).map(
      (img) => img.getAttribute("src")
    ) || [];
    const addressText = getTextContent('[data-qa-id="clinic-address"]') || "Unknown Address";

    // Working Hours
    const workingHoursData = Array.from(document.querySelectorAll('[data-qa-id="timings_list"]')).map((timing) => {
      const days = timing.querySelector('[data-qa-id="clinic-timings-day"] span')?.innerText || "Unknown";
      const time = timing.querySelector('[data-qa-id="clinic-timings-session"] span')?.innerText || "Unknown";
      return { days, time };
    });

    const workingHours = workingHoursData.map((item) => {
      const [startTime, endTime] = item.time.split(" - ");
      const dayOfWeek = item.days.split(" - ");
      return dayOfWeek.map((day) => ({
        dayOfWeek: day,
        startTime: startTime.trim(),
        endTime: endTime.trim(),
      }));
    }).flat();

    // FAQ Section
    const faqSection = Array.from(document.querySelectorAll('[data-qa-id="individual-faq"]')).map((faq) => {
      const question = faq.querySelector('[data-qa-id="faq-question"]')?.innerText.replace("Q: ", "").trim();
      const answer = faq.querySelector('[data-qa-id="faq-answer"]')?.innerText.replace("A: ", "").trim();
      return { question, answer };
    });

    // Address Parsing
    const addressParts = addressText.split(",");
    const city = "Mumbai"; // Assuming city as Mumbai
    const state = "Maharashtra"; // Assuming state
    const location = { lat: 19.076, lng: 72.8777 }; // Mumbai Coordinates

    return {
      clinicDetails: {
        clinicName,
        contactNumber,
        secondoryNumber: "+91XXXXXXXXXX", // Placeholder
        contactEmail: "", // Placeholder
        logoImage: clinicImage,
        clinicMedia: clinicMediaImages,
      },
      noOfBeds: 100, // Placeholder
      address: {
        addressName: addressParts[0] || "Unknown",
        address: addressText,
        area: "", // Placeholder
        landmark: "", // Placeholder
        city,
        state,
        pincode: "", // Placeholder
        location,
      },
      workingHours,
      faqs: faqSection,
    };
  });

  console.log(data);

  // Save the data to a file
  fs.writeFileSync("clinicData.json", JSON.stringify(data, null, 2));

  await browser.close();
})();
