import { FlipWords } from "@/components/ui/flip-words"
import { HeroParallax, products } from "@/components/ui/hero-parallax";



const page = () => {
  const space = String.fromCodePoint(0x000A0);
  return (  
    <div className=" bg-slate-950 h-screen">
      {/* <SparklesCore /> */}
      <FlipWords 
        words={[`Make ${space} your ${space} own ${space} email ${space} templates`, `Choose ${space} from ${space} our ${space} library`, `Or ${space} modify ${space} a ${space} pre-existing ${space} one`]} 
        duration = {3000}
        className="text-6xl flex justify-center dark:text-slate-900 font-medium "
      />
      <div className="bg-slate-950">
        <HeroParallax
          products={products}
        />
      </div>
    </div>
  )
}

export default page