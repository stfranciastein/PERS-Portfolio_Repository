export default function Home(){
    return (
        <header id="home" className="h-screen flex items-start pt-9 pb-8 scroll-snap-align-start">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 w-full items-end">
            <div className="flex justify-center lg:justify-start">
              <img 
                src="https://i.pinimg.com/736x/29/62/b1/2962b17c11aced64f0db5773c9eda192.jpg" 
                alt="Josh Santiago-Francia"
                className="w-full h-[500px] sm:h-auto max-w-2xl rounded-[10px] grayscale object-cover"
              />
            </div>

            <div className="flex flex-col justify-center items-center lg:items-start gap-4">
              <h1 className="text-[clamp(3rem,8vw,90px)] font-medium leading-[0.9] text-center lg:text-left">JOSH SANTIAGO FRANCIA</h1>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {['HTML', 'CSS', 'PHP', 'React', 'Tailwind', 'Bootstrap'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm border-2 border-foreground bg-transparent rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>
    );
}
