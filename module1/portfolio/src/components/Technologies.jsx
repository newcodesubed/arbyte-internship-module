import { FaHtml5, FaCss3Alt, FaNodeJs, FaDocker, FaAws, FaLinux, FaGithub } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiJavascript,
  SiTailwindcss,
  SiReactquery,
  SiMongodb,
  SiPostgresql,
  
  SiC,
  SiCplusplus,
  SiExpress,
  SiRedux,
  SiSupabase
} from "react-icons/si";
function Technologies() {
  return (
    <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
    <div>
        <RiReactjsLine className="text-7xl text-cyan-400"/>

    </div>
    {/* html */}
      <div>
        <FaHtml5 className="text-7xl text-[#e34f26]" title="HTML" />
      </div>

      {/* css */}
      <div>
        <FaCss3Alt className="text-7xl text-[#1572B6]" title="CSS" />
      </div>

      {/* javascript */}
      <div>
        <SiJavascript className="text-7xl text-[#f7df1e]" title="JavaScript" />
      </div>

      

      {/* tailwind */}
      <div>
        <SiTailwindcss className="text-7xl text-[#38bdf8]" title="Tailwind CSS" />
      </div>

      {/* react-query */}
      <div>
        <SiReactquery className="text-7xl text-[#ff4154]" title="React Query / TanStack Query" />
        {/* React Query / TanStack Query uses a red-ish brand in many places; adjust hex if you prefer */}
      </div>

      {/* nodejs */}
      <div>
        <FaNodeJs className="text-7xl text-[#3c873a]" title="Node.js" />
      </div>

      {/* mongodb */}
      <div>
        <SiMongodb className="text-7xl text-[#47A248]" title="MongoDB" />
      </div>

      {/* postgresql */}
      <div>
        <SiPostgresql className="text-7xl text-[#336791]" title="PostgreSQL" />
      </div>

      {/* docker */}
      <div>
        <FaDocker className="text-7xl text-[#0db7ed]" title="Docker" />
      </div>

      {/* aws */}
      <div>
        <FaAws className="text-7xl text-[#ff9900]" title="AWS" />
      </div>

      {/* linux */}
      <div>
        <FaLinux className="text-7xl text-[#5a460b]" title="Linux" />
      </div>

      

      {/* github */}
      <div>
        <FaGithub className="text-7xl text-[#171515]" title="GitHub" />
      </div>

      {/* C */}
      <div>
        <SiC className="text-7xl text-[#A8B9CC]" title="C" />
      </div>

      {/* C++ */}
      <div>
        <SiCplusplus className="text-7xl text-[#00599C]" title="C++" />
      </div>

      {/* express.js */}
      <div>
        <SiExpress className="text-7xl text-[#000000]" title="Express.js" />
      </div>

      {/* redux */}
      <div>
        <SiRedux className="text-7xl text-[#764abc]" title="Redux" />
      </div>

      {/* supabase */}
      <div>
        <SiSupabase className="text-7xl text-[#3ee0c9]" title="Supabase" />
      </div>
    </div>
        </div>
    
  )
}

export default Technologies