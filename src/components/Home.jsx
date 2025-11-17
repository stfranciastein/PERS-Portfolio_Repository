export default function Home(){
    return (
        <header id="home" className="h-screen flex items-start pt-9 pb-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 w-full items-end">
            <div className="flex justify-center lg:justify-start">
              <img 
                src="https://i.pinimg.com/736x/29/62/b1/2962b17c11aced64f0db5773c9eda192.jpg" 
                alt="Josh Santiago-Francia"
                className="w-full max-w-2xl rounded-[10px] grayscale"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-[clamp(3rem,8vw,100px)] font-bold leading-[0.9]">JOSH SANTIAGO FRANCIA</h1>
            </div>
          </div>
        </header>
    );
}
