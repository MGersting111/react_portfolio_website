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
        <li>Qlik Sense</li>
        <li>Pandas</li>
        <li>SQL</li>
        
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
                       I'm a Full Stack Developer with hands-on experience in multiple technologies. During my time as a working student, I took on the role of lead UI developer for a client project. I enjoy diving into new tools and frameworks, and I’m always looking for better ways to solve complex problems. My work is driven by a focus on functionality, maintainability, and clean design across both front-end and back-end systems.
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