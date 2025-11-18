import { useState, useEffect } from 'react';

export default function Contact(){
    const [irelandTime, setIrelandTime] = useState('');
    const [isAsleep, setIsAsleep] = useState(false);

    useEffect(() => {
      const updateTime = () => {
        const now = new Date();
        const time = now.toLocaleTimeString('en-IE', { 
          timeZone: 'Europe/Dublin',
          hour: '2-digit',
          minute: '2-digit'
        });
        setIrelandTime(time);

        // Get the hour in Ireland timezone
        const irelandHour = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Dublin' })).getHours();
        // Check if between 8pm (20:00) and 8am (08:00)
        setIsAsleep(irelandHour >= 20 || irelandHour < 8);
      };

      updateTime();
      const interval = setInterval(updateTime, 60000); // Update every minute

      return () => clearInterval(interval);
    }, []);

    return (
    <section id="contact" className="h-screen flex items-center scroll-snap-align-start">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-semibold">CONTACT</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Have a specific project in mind or just want to ask a few questions? Feel free to reach out via email or connect with me on social media. It is currently <span className="underline-themed">{irelandTime}</span> where I am. {isAsleep && "I'm probably asleep, but "}I'll get back to you as soon as possible.
                </p>

                <div className="space-y-4">
                  <a href="mailto:stfrancia.ce@gmail.com" className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300">
                    <span className="text-base sm:text-lg">stfrancia.ce@gmail.com</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'GitHub', handle: '@stfranciastein', url: 'https://github.com/stfranciastein' },
                  { name: 'IADT', handle: 'N00151146@iadt.ie', url: 'mailto:N00151146@iadt.ie' },
                  { name: '', handle: '@mohammedche', url: '#' },
                  { name: 'LinkedIn', handle: 'mohammedche', url: '#' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">{social.name}</div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
    );
}
