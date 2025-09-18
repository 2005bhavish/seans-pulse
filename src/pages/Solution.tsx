import { motion } from 'framer-motion';
import { MessageSquare, Hospital, TrafficCone, Map, Satellite, Users } from 'lucide-react';

const Solution = () => {
  const problems = [
    {
      title: 'Ambulance Delays',
      description: 'Traditional sirens are often ignored or unheard, causing critical delays in emergency response.',
      impact: '30% longer response times',
    },
    {
      title: 'Traffic Congestion',
      description: 'Emergency vehicles get stuck in traffic without effective way to clear path ahead.',
      impact: 'Lives lost due to delays',
    },
    {
      title: 'Poor Coordination',
      description: 'Lack of communication between ambulances, hospitals, and traffic systems.',
      impact: 'Inefficient resource allocation',
    },
  ];

  const solutions = [
    {
      icon: MessageSquare,
      title: 'WhatsApp Alerts',
      description: 'Direct notifications to nearby drivers via WhatsApp with ambulance location and ETA.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Hospital,
      title: 'Smart Medical Center Integration',
      description: 'Real-time hospital capacity updates and automated bed reservations for incoming patients.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: TrafficCone,
      title: 'Traffic Signal Integration',
      description: 'Automatic traffic light control to create green corridors for emergency vehicles.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Map,
      title: 'Google Maps Integration',
      description: 'Real-time traffic data and optimal route calculation with live updates to all connected devices.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Satellite,
      title: 'IoT + GPS Tracking',
      description: 'Precise location tracking and automated alerts to all relevant systems and nearby vehicles.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className="min-h-screen py-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The <span className="text-gradient-emergency">Problem</span> & Our <span className="text-gradient-emergency">Solution</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Emergency response systems face critical challenges that cost lives. 
            SEANS addresses these with innovative technology solutions.
          </p>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Challenges</h2>
            <p className="text-xl text-muted-foreground">
              Critical issues plaguing emergency response systems worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-card p-6 rounded-2xl border border-border shadow-card hover:shadow-glow-emergency transition-shadow"
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground mb-4">{problem.description}</p>
                <div className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full inline-block">
                  {problem.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SEANS Solution Components</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our integrated platform combines five powerful technologies to create 
              the most effective emergency response system ever built.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden bg-card p-8 rounded-3xl border border-border shadow-card hover:shadow-glow-tech transition-all duration-300"
                >
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-hero py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">How SEANS Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { step: '01', title: 'Emergency Call', desc: 'Emergency services activated' },
                { step: '02', title: 'Route Calculation', desc: 'AI determines optimal path' },
                { step: '03', title: 'Alert Broadcast', desc: 'Notifications sent to all systems' },
                { step: '04', title: 'Path Cleared', desc: 'Traffic signals and drivers respond' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-emergency rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solution;