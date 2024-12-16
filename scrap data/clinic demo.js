// import puppeteer from "puppeteer";
// import fs from "fs";
const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => 
  {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    "https://www.practo.com/Mumbai/clinic/inkus-infertility-clinic-charni-road",
    { waitUntil: "networkidle2" }
  );

  const data = await page.evaluate(() => {
    const getTextContent = (selector) => {
      const element = document.querySelector(selector);
      return element ? element.innerText : null;
    };

    const getAttribute = (selector, attribute) => {
      const element = document.querySelector(selector);
      return element ? element.getAttribute(attribute) : null;
    };

    const clinicName = getTextContent('[data-qa-id="clinic-name"]');
    // const contactNumber = getTextContent('[data-qa-id="phone_number"]');
    
    const specialityText = getTextContent('[data-qa-id="clinic-speciality"]');
    const splitSpecialities = (specialityText) => {
      if (!specialityText) return [];
      // Split by common delimiters such as "and", "/", or ","
      return specialityText
        .split(/and|\/|,/)
        .map((speciality) => speciality.trim())
        .filter((speciality) => speciality.length > 0);
    };
    // const fees = getTextContent('[data-qa-id="consultation_fee"]');
    const clinicImage = getAttribute(
      '[data-qa-id="clinic-image"]',
      "src"
    );
    const clinicMediaImages = Array.from(document.querySelectorAll('img[data-qa-id="doctor-clinics-photo"]')).map(
      (img) => img.getAttribute("src")
    );
    const addressText = getTextContent('[data-qa-id="clinic-address"]');

    const experienceElement = Array.from(document.querySelectorAll("*")).find(
      (el) => el.innerText.includes("Years Experience")
    );
    const experienceText = experienceElement ? experienceElement.innerText : "";
    const experienceMatch = experienceText.match(/(\d+)\s+Years Experience/);
    const yearsExperience = experienceMatch
      ? parseInt(experienceMatch[1], 10)
      : null;



    const specializationsElement = document.querySelector(
      '[data-qa-id="doctor-specializations"]'
    );
    const specializations = specializationsElement
      ? Array.from(
          specializationsElement.querySelectorAll("div > div > span")
        ).map((span) => span.innerText)
      : [];

    const starRating = getTextContent('[data-qa-id="star_rating"] span');

    const feedbackTabElement = document.querySelector(
      '[data-qa-id="feedback-tab"] button'
    );
    const feedbackText = feedbackTabElement ? feedbackTabElement.innerText : "";
    const feedbackMatch = feedbackText.match(/Stories\((\d+)\)/);
    const feedbackStories = feedbackMatch
      ? parseInt(feedbackMatch[1], 10)
      : null;

    const servicesElement = document.querySelector(
      '[data-qa-id="doctor-services"] > div:nth-child(2)'
    );
    const services = servicesElement
      ? Array.from(
          servicesElement.querySelectorAll('[data-qa-id="services-item"]')
        ).map((service) => service.innerText)
      : [];
    const clinicInfo = Array.from(
      document.querySelectorAll(
        ".c-profile--clinic--item > .c-profile--clinic--item"
      )
    ).map((clinic) => {
      const name = clinic
        .querySelector(".c-profile--clinic__name")
        .textContent.trim();
      const locality = clinic
        .querySelector('[data-qa-id="clinic-locality"]')
        .textContent.trim();
      return { name, locality };
    });

    return {
      doctorName,
      contactNumber,
      yearsExperience,
      fees,
      education,
      profileImage,
      specializations,
      reviewsStat: {
        totalReviews: feedbackStories,
        avgRating: starRating,
      },
      clinicInfo,
      services,
    };
  });

  console.log(data);
  fs.writeFileSync("doctorData.json", JSON.stringify(data, null, 2));

  await browser.close();
})();