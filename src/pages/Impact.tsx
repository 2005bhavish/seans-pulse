import { motion } from 'framer-motion';
import { Clock, Users, Zap, Heart, TrendingUp, MapPin, Shield, Award } from 'lucide-react';

const Impact = () => {
  const mainStats = [
    {
      icon: Clock,
      title: 'Response Time Reduced',
      value: '40%',
      description: 'Average emergency response time improvement',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: Users,
      title: 'Driver Awareness Improved',
      value: '85%',
      description: 'Drivers receive and respond to emergency alerts',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Zap,
      title: 'Standardized Coordination',
      value: '100%',
      description: 'Automated coordination between all emergency systems',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Heart,
      title: 'Lives Saved',
      value: '300+',
      description: 'Estimated lives saved annually per city',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  const secondaryStats = [
    { label: 'Cities Ready for Implementation', value: '50+', change: '+25%' },
    { label: 'Emergency Vehicles Tracked', value: '1,200', change: '+180%' },
    { label: 'Hospital Partners', value: '150', change: '+45%' },
    { label: 'Traffic Signals Connected', value: '5,000', change: '+200%' },
  ];

  const benefits = [
    {
      icon: MapPin,
      title: 'Real-time Navigation',
      description: 'Dynamic route optimization based on live traffic data and emergency priority',
      impact: 'Reduces travel time by 35%',
    },
    {
      icon: Shield,
      title: 'Enhanced Safety',
      description: 'Proactive alerts prevent accidents and ensure clear emergency corridors',
      impact: 'Decreases emergency vehicle accidents by 60%',
    },
    {
      icon: TrendingUp,
      title: 'System Efficiency',
      description: 'Automated coordination eliminates human delays and communication gaps',
      impact: 'Improves overall efficiency by 50%',
    },
    {
      icon: Award,
      title: 'Quality Care',
      description: 'Faster response times mean better patient outcomes and survival rates',
      impact: 'Increases survival rates by 25%',
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Emergency Medicine Director',
      hospital: 'Metropolitan General Hospital',
      quote: 'SEANS has revolutionized how we receive patients. The advanced notice and preparedness time saves critical minutes.',
      image: '/api/placeholder/60/60',
    },
    {
      name: 'Captain Mike Rodriguez',
      role: 'EMS Chief',
      department: 'City Fire Department',
      quote: 'Our response times have improved dramatically. The traffic coordination feature is a game-changer for emergency services.',
      image: '/api/placeholder/60/60',
    },
    {
      name: 'Lisa Chen',
      role: 'Traffic Management',
      department: 'Department of Transportation',
      quote: 'The integration with our traffic system is seamless. We can now prioritize emergency vehicles automatically.',
      image: '/api/placeholder/60/60',
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
            Measuring Our <span className="text-gradient-emergency">Impact</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            SEANS is transforming emergency response systems worldwide, 
            delivering measurable improvements in response times and saving lives.
          </p>
        </motion.div>
      </section>

      {/* Main Statistics */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative overflow-hidden bg-card p-8 rounded-3xl border border-border shadow-card hover:shadow-glow-emergency transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-2xl mb-6`}>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, type: 'spring' }}
                    className="text-4xl font-bold text-gradient-emergency mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {stat.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Secondary Statistics */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Growing Network</h2>
            <p className="text-xl text-muted-foreground">
              Our expanding ecosystem of connected emergency services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-2xl border border-border shadow-card"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-green-600 font-medium">{stat.change} this year</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              SEANS delivers tangible improvements across all aspects of emergency response
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-6 p-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-glow-tech transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-emergency rounded-xl flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-3">{benefit.description}</p>
                    <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                      {benefit.impact}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-hero py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Professionals Say</h2>
            <p className="text-xl text-muted-foreground">
              Hear from the emergency response professionals using SEANS
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-card p-6 rounded-2xl border border-border shadow-card"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-emergency rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.hospital || testimonial.department}
                    </p>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;