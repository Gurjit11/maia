// src/components/BlogPost.js

import React from "react";
import fertilitysupport from "../../public/fertilitysupport.png";
import Image from "next/image";

const FertilitySupport = () => {
  return (
    <div className="bg-white">
      <div className=" text-black container mx-auto px-4 md:px-20 py-5 sm:py-20">
        <div className="text-2xl sm:text-4xl  mx-auto flex justify-center items-center gap-3 font-semibold sm:text-center text-gray-800 mb-8">
          <div className="rounded-lg justify-center items-center gap-1 flex">
            <div className="w-18 h-18 relative">
              <div className="w-18 h-18  bg-slate-200 rounded-full">
                <Image src={fertilitysupport} alt={"icon"} />
              </div>
            </div>
          </div>
          Understanding Fertility Support
        </div>
        <Image
          src="https://via.placeholder.com/1200x400"
          alt="Fertility Support"
          className="object-cover w-full h-full"
        />
        <div className="prose max-w-3xl mx-auto">
          <div className="prose lg:prose-xl mx-auto">
            <p className="font-thin sm:text-xl my-4">
              Fertility support encompasses a range of treatments and lifestyle
              changes aimed at helping couples conceive. From medical
              interventions like IVF to natural methods, understanding your
              options is crucial.
            </p>
            <h2 className="text-xl font-semibold ml-3 my-2">
              Section 1: Introduction to Fertility Support
            </h2>
            <p>
              The journey to parenthood can be challenging for many couples.
              Fertility support aims to assist couples facing difficulties in
              conceiving. This support can come in various forms, including
              medical treatments, lifestyle changes, and emotional support.
            </p>
            <p>
              Infertility affects millions of people worldwide, and the reasons
              can vary greatly. Its important to understand the underlying
              causes and the options available to address them.
            </p>
            <h2 className="text-xl font-semibold ml-3 my-2">
              Section 2: Medical Interventions
            </h2>
            <p>
              Medical interventions are often the first line of treatment for
              couples experiencing infertility. These can include medications,
              surgeries, and assisted reproductive technologies (ART) such as in
              vitro fertilization (IVF).
            </p>
            <p>
              <strong>In Vitro Fertilization (IVF)</strong> is a process where
              eggs are retrieved from a womans ovaries and fertilized by sperm
              in a laboratory. The resulting embryos are then transferred to the
              womans uterus with the hope of achieving pregnancy.
            </p>
            <h2 className="text-xl font-semibold ml-3 my-2">
              Section 3: Lifestyle Changes
            </h2>
            <p>
              Lifestyle changes can have a significant impact on fertility.
              Simple adjustments in diet, exercise, and stress management can
              improve the chances of conception.
            </p>
            <p>
              <strong>Diet</strong>: A balanced diet rich in vitamins and
              minerals is essential for reproductive health. Foods high in
              antioxidants, such as fruits and vegetables, can improve
              fertility.
            </p>
            <p>
              <strong>Exercise</strong>: Regular physical activity can help
              maintain a healthy weight, which is crucial for fertility. Both
              obesity and being underweight can affect hormonal balance and
              ovulation.
            </p>
            <h2 className="text-xl font-semibold ml-3 my-2">
              Section 4: Emotional Support
            </h2>
            <p>
              The emotional aspect of fertility struggles cannot be overlooked.
              Seeking support from counselors, support groups, or therapists can
              help couples navigate the emotional challenges of infertility.
            </p>
            <p>
              <strong>Support Groups</strong>: Connecting with others who are
              going through similar experiences can provide comfort and
              practical advice. Many organizations offer support groups for
              individuals and couples facing infertility.
            </p>
            <h2 className="text-xl font-semibold ml-3 my-2">
              Section 5: Conclusion
            </h2>
            <p>
              Fertility support is a multifaceted approach that includes medical
              treatments, lifestyle changes, and emotional support. By
              understanding and exploring these options, couples can improve
              their chances of conceiving and achieve their dream of parenthood.
            </p>
            <p>
              Remember, every couples journey is unique, and what works for one
              may not work for another. Its essential to consult with healthcare
              professionals to determine the best course of action for your
              specific situation.
            </p>
            <p>
              For more information on fertility support and treatments, consult
              with a fertility specialist or visit reputable sources online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FertilitySupport;
// src/pages/fertilitysupport.js
