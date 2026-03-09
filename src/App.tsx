import { motion } from 'motion/react';
import { 
  Plane, 
  User, 
  Target, 
  History, 
  Wrench, 
  Cpu, 
  Image as ImageIcon, 
  Mail, 
  Github,
  ChevronRight,
  MapPin,
  Calendar,
  Rocket
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-orange-500/30">
      {/* Navigation / Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-zinc-100 font-bold tracking-wider uppercase">
            <Plane className="w-5 h-5 text-orange-500" />
            <span>Project TİHA</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
            <a href="#vision" className="hover:text-orange-500 transition-colors">Vision</a>
            <a href="#history" className="hover:text-orange-500 transition-colors">History</a>
            <a href="#progress" className="hover:text-orange-500 transition-colors">Progress</a>
            <a href="#skills" className="hover:text-orange-500 transition-colors">Skills</a>
            <a href="#gallery" className="hover:text-orange-500 transition-colors">Gallery</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative py-20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-zinc-950 to-zinc-950 -z-10" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-mono mb-6 border border-orange-500/20">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              SYSTEM ONLINE
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 tracking-tight mb-6">
              Engineering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Autonomous Flight</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mb-8">
              A 20-year aircraft development initiative by a 14-year-old solo engineer based in Dubai.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#vision" className="inline-flex items-center gap-2 bg-orange-500 text-zinc-950 px-6 py-3 rounded-lg font-semibold hover:bg-orange-400 transition-colors">
                <Rocket className="w-4 h-4" />
                Explore the Vision
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-100 px-6 py-3 rounded-lg font-semibold hover:bg-zinc-800 transition-colors">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </div>
          </div>
        </motion.section>

        {/* About & Vision Grid */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* About */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="about" 
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-zinc-800 rounded-lg text-orange-500">
                <User className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-100">About the Engineer</h2>
            </div>
            <div className="space-y-4 text-zinc-400">
              <p>
                Hello, I'm a 14-year-old solo engineer based in Dubai, currently attending school while dedicating my free time to aerospace engineering and robotics.
              </p>
              <p>
                My primary interest lies in unmanned aerial vehicles (UAVs), autonomous systems, and advanced manufacturing. My ultimate goal is to design and build a fully functional, long-range autonomous aircraft from scratch.
              </p>
              <div className="flex items-center gap-4 pt-4 text-sm font-mono">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-zinc-500" />
                  Dubai, UAE
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-zinc-500" />
                  Çınar GÜRSOY • Age 14
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            id="vision" 
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Target className="w-32 h-32" />
            </div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-3 bg-zinc-800 rounded-lg text-orange-500">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-100">Project Vision</h2>
            </div>
            <div className="space-y-4 text-zinc-400 relative z-10">
              <p className="text-lg font-medium text-zinc-200">
                A 900km-range, diesel-powered, autonomous aircraft built entirely from raw materials.
              </p>
              <p>
                Project TİHA is a 20-year development roadmap aimed at mastering every aspect of aerospace engineering—from aerodynamics and propulsion to avionics and autonomous flight control.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-orange-500 shrink-0" />
                  <span><strong>Range:</strong> 900km operational radius</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-orange-500 shrink-0" />
                  <span><strong>Propulsion:</strong> Custom diesel powerplant</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-orange-500 shrink-0" />
                  <span><strong>Manufacturing:</strong> 100% raw materials, in-house fabrication</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Version History */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="history"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-orange-500">
              <History className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-zinc-100">Version History</h2>
          </div>
          
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-800 text-sm font-mono text-zinc-400 uppercase tracking-wider">
                    <th className="p-4 font-medium">Version</th>
                    <th className="p-4 font-medium">Name</th>
                    <th className="p-4 font-medium">Year</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium">Key Achievement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/50 text-zinc-300">
                  <tr className="hover:bg-zinc-800/20 transition-colors">
                    <td className="p-4 font-mono text-orange-500">Su-1</td>
                    <td className="p-4 font-medium text-zinc-100">First Hand-Built Glider</td>
                    <td className="p-4 text-zinc-400">2024</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-medium border border-orange-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                        In Progress
                      </span>
                    </td>
                    <td className="p-4 text-zinc-400">Basic aerodynamic validation</td>
                  </tr>
                  <tr className="hover:bg-zinc-800/20 transition-colors opacity-60">
                    <td className="p-4 font-mono">Su-2</td>
                    <td className="p-4">Powered Prototype</td>
                    <td className="p-4">TBD</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700">
                        Planned
                      </span>
                    </td>
                    <td className="p-4">Electric propulsion integration</td>
                  </tr>
                  <tr className="hover:bg-zinc-800/20 transition-colors opacity-60">
                    <td className="p-4 font-mono">Su-3</td>
                    <td className="p-4">Autonomous Testbed</td>
                    <td className="p-4">TBD</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700">
                        Planned
                      </span>
                    </td>
                    <td className="p-4">Flight controller implementation</td>
                  </tr>
                  <tr className="hover:bg-zinc-800/20 transition-colors opacity-60">
                    <td className="p-4 font-mono">Su-4</td>
                    <td className="p-4">Diesel Scale Model</td>
                    <td className="p-4">TBD</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700">
                        Planned
                      </span>
                    </td>
                    <td className="p-4">Custom powerplant testing</td>
                  </tr>
                  <tr className="hover:bg-zinc-800/20 transition-colors opacity-60">
                    <td className="p-4 font-mono">TİHA-1</td>
                    <td className="p-4">Final Production Model</td>
                    <td className="p-4">TBD</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700">
                        Planned
                      </span>
                    </td>
                    <td className="p-4">900km autonomous flight</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Progress */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="progress"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-orange-500">
              <Calendar className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-zinc-100">Progress</h2>
          </div>
          
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-800" />
            
            <div className="relative pl-8">
              <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-orange-500 ring-4 ring-zinc-950" />
              <h3 className="text-xl font-bold text-zinc-100 mb-2">10.03.26</h3>
              <div className="text-zinc-400 space-y-3">
                <p>Initial project phases established. Su-1 glider development in progress.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills & Tools */}
        <section id="skills" className="grid md:grid-cols-2 gap-8">
          {/* Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-orange-500">
                <Cpu className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-100">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Python', level: 'Basic' },
                { name: 'C++', level: 'Basic' },
                { name: '3D Printing', level: 'Intermediate' },
                { name: 'Laser Cutting', level: 'Intermediate' },
                { name: 'CAD (Fusion 360)', level: 'Learning' },
                { name: 'Electronics', level: 'Fundamentals' },
              ].map((skill) => (
                <div key={skill.name} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                  <div className="font-medium text-zinc-200">{skill.name}</div>
                  <div className="text-sm text-zinc-500 mt-1 font-mono">{skill.level}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-orange-500">
                <Wrench className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-100">Tools & Equipment</h2>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <div>
                    <strong className="text-zinc-200 block">Personal Workshop</strong>
                    <span className="text-zinc-400 text-sm">3D Printer, Multimeter, Soldering Iron (in progress)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <div>
                    <strong className="text-zinc-200 block">School D&T Lab Access</strong>
                    <span className="text-zinc-400 text-sm">Laser Cutter, Vacuum Former, Heavy Machinery</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Goals & Gallery */}
        <section id="gallery" className="grid md:grid-cols-2 gap-8">
          {/* Current Goals */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-zinc-800 rounded-lg text-orange-500">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-100">Current Goals</h2>
            </div>
            <div className="flex-1 flex items-center justify-center border-2 border-dashed border-zinc-800 rounded-xl p-8 text-center">
              <div className="space-y-2">
                <div className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Awaiting Data</div>
                <p className="text-zinc-400">Goals will be populated upon completion of Su-1 phase.</p>
              </div>
            </div>
          </motion.div>

          {/* Gallery */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-zinc-800 rounded-lg text-orange-500">
                <ImageIcon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-100">Gallery</h2>
            </div>
            <div className="flex-1 flex items-center justify-center border-2 border-dashed border-zinc-800 rounded-xl p-8 text-center bg-zinc-900/30">
              <div className="space-y-4 flex flex-col items-center">
                <ImageIcon className="w-8 h-8 text-zinc-600" />
                <div>
                  <div className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-1">Image Repository Empty</div>
                  <p className="text-zinc-400 text-sm">Photos of the Su-1 build will be uploaded as progress continues.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="contact"
          className="text-center py-12 border-t border-zinc-800/50"
        >
          <h2 className="text-3xl font-bold text-zinc-100 mb-8">Establish Connection</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:cinargursoy1923@gmail.com" className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 text-zinc-200 px-6 py-4 rounded-xl transition-all hover:-translate-y-1">
              <Mail className="w-5 h-5 text-orange-500" />
              <span className="font-medium">cinargursoy1923@gmail.com</span>
            </a>
            <a href="#" className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 text-zinc-200 px-6 py-4 rounded-xl transition-all hover:-translate-y-1">
              <Github className="w-5 h-5 text-orange-500" />
              <span className="font-medium">GitHub Profile</span>
            </a>
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-950 py-8 text-center text-zinc-500 text-sm font-mono">
        <p>PROJECT TİHA © {new Date().getFullYear()} • DUBAI, UAE</p>
      </footer>
    </div>
  );
}
