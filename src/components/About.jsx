import { useState, useEffect } from 'react';

export default function About(){
    const [currentWord, setCurrentWord] = useState(0);
    const words = ['AESTHETIC', 'INNOVATIVE', 'EFFECTIVE'];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
      }, 3000);

      return () => clearInterval(interval);
    }, [words.length]);

    return (
        <section id="about" className="h-screen flex items-center scroll-snap-align-start">
          <div className="grid xl:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="xl:col-span-3 flex items-center">
              <h1 className="text-[clamp(2.4rem,15vw,120px)] font-bold leading-[0.9] tracking-tight">
                CREATING DESIGNS THAT ARE{' '}
                <span
                  key={currentWord}
                  className="inline-block text-blue-500 dark:text-yellow-400 animate-wordCycle font-mono"
                  style={{ minWidth: '10ch', maxWidth: '10ch', display: 'inline-block', whiteSpace: 'nowrap' }}
                >
                  {words[currentWord]}
                </span>
              </h1>
            </div>

            <div className="xl:col-span-2 flex flex-col justify-center space-y-6 sm:space-y-8 mt-8 xl:mt-0">
              <p className="text-lg text-foreground leading-relaxed break-words">
                I'm a passionate web developer and designer commited to crafting <span className="underline-themed">visually appealing</span> and <span className="underline-themed">user-friendly</span> digital experiences. Whether it be through clean code or intuitive and bold designs, I strive to create solutions that not only look great but also function seamlessly.
              </p>
              <p className="text-lg text-foreground leading-relaxed break-words">
                I've been a tech enthusiast for years, constantly exploring new tools and techniques that can enhance my skills in both <span className="underline-themed">coding</span> and <span className="underline-themed">design</span>. I'm always eager to take on new challenges and collaborate on exciting projects.
              </p>
            </div>
          </div>
        </section>
    );
}