import { FlipWords } from "@/components/ui/flip-words"
import { SparklesCore } from "@/components/ui/sparkles"


const page = () => {
  const space = String.fromCodePoint(0x000A0);
  return (
    <div>
      {/* <SparklesCore /> */}
      <FlipWords 
        words={[`Make ${space} your ${space} own ${space} email ${space} templates`, `Choose ${space} from ${space} our ${space} library`, `Or ${space} modify ${space} a ${space} pre-existing ${space} one`]} 
        duration = {3000}
        className="text-4xl flex "
      />
    </div>
  )
}

export default page