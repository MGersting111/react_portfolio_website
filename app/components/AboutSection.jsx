"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Flutter</li>
        <li>Flask</li>
        <li>Next.js</li>
        <li>Tableau & Qlik Sense</li>
        <li>Pandas & Scikit-Learn</li>
        <li>Postgres</li>
        
      </ul>
    ),
  },
    {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Internship at KPMG - Data Analytics</li>
        <li>Working student at Sinovo - Software Development</li>
        <li>Internship at ioki GmbH - Software Development</li>
        <li>Working student at F.A.Z. Institut - Data Maintenance</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Information Systems B.Sc. - Frankfurt University of Applied Sciences</li>
        <li>A-Levels, Karl-Rehbein-Schule</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>IBM Data Science Certificate</li>
        <li>Meta Data Analyst Certificate</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/kpmg.jpg" alt="computer" width={500} height={500} className="rounded-full object-cover"/>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I am a passionate Full Stack Developer with a keen interest in building scalable web applications and data-driven solutions.
                        With a strong foundation in both front-end and back-end technologies, I strive to create seamless user experiences while ensuring robust functionality.
                        My journey in the tech world has equipped me with the skills to tackle complex challenges and deliver innovative solutions.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                          <TabButton
                            selectTab={() => handleTabChange("experience")}
                            active={tab === "experience"}
                        >
                            {" "}
                            Experience{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-4">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection