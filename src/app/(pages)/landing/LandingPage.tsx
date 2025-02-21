import { Footer } from "@/components/Footer";
import GrayTwinklingCircles from "@/components/glowcircles";
import { InputBox } from "@/components/InputBox";

export default function LandingPage() {
  return (
    <div className="pt-20 relative">
      <div>
        <GrayTwinklingCircles />
      </div>
      <div className="flex justify-center">
        <img
          src="/hero-background-top.png"
          alt="herobackground"
          className="absolute top-20"
          width={1200}
        />
      </div>
      <div className="flex justify-center flex-col items-center -mt-72">
        <div className="text-6xl font-bold">New Era of Rank Tracking</div>
        <div className="text-lg flex justify-center flex-col items-center  text-[#d2d0dd]">
          <p className=" pt-5 max-w-[580px]">
            {`Find out what's working and what's not to get more search traffic.`}
          </p>
          <p>Like an SEO consultant who can analyze millions of data.</p>
        </div>
        <InputBox />
        <div className=" text-[#d2d0dd]">No credit card required</div>
      </div>
      <div className="stack bg-gradient-to-t from-[#0c031a] pb-10">
        <img src="/hero-background-bottom.png" alt="herobottom" width={1200} />
        <img
          src="/hero-background-lights.png"
          alt="Lightsbackground"
          width={1500}
        />
        <img src="/cta.png" alt="Cta" width={1150} className="pt-28" />
      </div>
      <img src="/creating-project-background.png" alt="createProject"  />
      <div className="flex flex-col justify-center items-center text-5xl font-bold tracking-wide leading-tight">
        <div>Faster. Smarter.</div>
        <div>Start to use in few seconds</div>
        <div className="text-xl font-normal leading-snug pt-3 text-[#d2d0dd]">
          {`Let us find the best competitors and we'll use the given`}
        </div>
        <div className="text-xl font-normal text-[#d2d0dd]">
          data to find most relevant keywords.
        </div>
      </div>
      <div>
        <video src="/cards-video.webm" muted autoPlay loop ></video>
      </div>
      <div className="flex justify-center -mt-32">
        <div className=" bg-[#221437] border border-slate-700 px-3 py-2 rounded-full text-sm tracking-widest">
          MAGIC HAPPENS BY DATA SCIENCE
        </div>
      </div>
      <div className="flex justify-center flex-col items-center z-50 text-5xl font-bold leading-tight pt-2 pb-10">
        <div className=" max-w-[500px]">Spot issues faster</div>
        <div>with smart indicators</div>
      </div>
      <Footer/>
    </div>
  );
}
