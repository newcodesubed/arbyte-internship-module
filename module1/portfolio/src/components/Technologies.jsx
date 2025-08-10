import { FaHtml5, FaCss3Alt, FaNodeJs, FaDocker, FaAws, FaLinux, FaGithub } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import {
  SiJavascript,
  SiTailwindcss,
  SiReactquery,
  SiMongodb,
  SiPostgresql,
  SiBlender, 
  SiAdobephotoshop,
  SiC,
  
  SiCplusplus,
  SiExpress,
  SiRedux,
  SiSupabase
} from "react-icons/si";
import { motion } from "framer-motion";
const iconVariants =(duration)=> ({
  initial: {  y: -20 },
  animate: { 
    y:[10, -10],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "linear",
      repeatType: "reverse"
    }
   }
})

function Technologies() {
  return (
    <div className="pb-24">
        <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
    <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2.5)}
    >
        <RiReactjsLine className="text-7xl text-cyan-400"/>

    </motion.div>
    {/* html */}
<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(3)}
    >        <FaHtml5 className="text-7xl text-[#e34f26]" title="HTML" />
      </motion.div>

      {/* css */}
<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(5)}
    >        <FaCss3Alt className="text-7xl text-[#1572B6]" title="CSS" />
      </motion.div>

      {/* javascript */}
<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2.5)}
    >        <SiJavascript className="text-7xl text-[#f7df1e]" title="JavaScript" />
      </motion.div>

<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(4)}
    >        <TbBrandNextjs className="text-7xl" title="Next.js" />
      </motion.div>

      {/* tailwind */}
<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2)}
    >        <SiTailwindcss className="text-7xl text-[#38bdf8]" title="Tailwind CSS" />
      </motion.div>

      {/* react-query */}
<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(3)}
    >        <SiReactquery className="text-7xl text-[#ff4154]" title="React Query / TanStack Query" />
        {/* React Query / TanStack Query uses a red-ish brand in many places; adjust hex if you prefer */}
      </motion.div>

      {/* nodejs */}
<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(6)}
    >        <FaNodeJs className="text-7xl text-[#3c873a]" title="Node.js" />
      </motion.div>

      {/* mongodb */}
<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2.5)}
    >        <SiMongodb className="text-7xl text-[#47A248]" title="MongoDB" />
      </motion.div>

      {/* postgresql */}
<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(5)}
    >        <SiPostgresql className="text-7xl text-[#336791]" title="PostgreSQL" />
      </motion.div>

      {/* docker */}
<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2)}
    >        <FaDocker className="text-7xl text-[#0db7ed]" title="Docker" />
      </motion.div>

      {/* aws */}
<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(3)}
    >        <FaAws className="text-7xl text-[#ff9900]" title="AWS" />
      </motion.div>

      {/* linux */}
<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(6)}
    >        <FaLinux className="text-7xl text-[#5a460b]" title="Linux" />
      </motion.div>

      

      {/* github */}
<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2.5)}
    >        <FaGithub className="text-7xl text-[#171515]" title="GitHub" />
      </motion.div>

      {/* C */}
<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(5)}
    >        <SiC className="text-7xl text-[#A8B9CC]" title="C" />
      </motion.div>

      {/* C++ */}
<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(3)}
    >        <SiCplusplus className="text-7xl text-[#00599C]" title="C++" />
      </motion.div>

      {/* express.js */}
<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2.5)}
    >        <SiExpress className="text-7xl text-[#000000]" title="Express.js" />
      </motion.div>

      {/* redux */}
<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(5)}
    >        <SiRedux className="text-7xl text-[#764abc]" title="Redux" />
      </motion.div>

      {/* supabase */}
<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(3)}
    >        <SiSupabase className="text-7xl text-[#3ee0c9]" title="Supabase" />
      </motion.div>
<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(4)}
    >        <SiBlender className="text-7xl text-[#F5792A]" title="Blender" />
      </motion.div>
<motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2.5)}
    >        <SiAdobephotoshop className="text-7xl text-[#31A8FF]" title="Adobe Photoshop" />

      </motion.div>
    </motion.div>
        </div>
    
  )
}

export default Technologies