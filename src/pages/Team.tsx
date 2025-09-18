import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Brain, Palette, Shield } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Rahul Sharma',
      role: 'Lead Developer & Co-Founder',
      expertise: 'Full-Stack Development, System Architecture',
      bio: 'Ex-Amazon engineer with 8 years of experience in emergency systems. Passionate about using technology to save lives.',
      skills: ['React', 'Node.js', 'AWS', 'IoT'],
      image: 'https://ui-avatars.com/api/?name=Rahul+Sharma',
      social: {
        github: '#',
        linkedin: '#',
        email: 'rahul@seans.in'
      }
    },
    {
      name: 'Dr. Meera Iyer',
      role: 'Medical Advisor & Co-Founder',
      expertise: 'Emergency Medicine, Healthcare Technology',
      bio: 'Emergency physician with 12 years of experience. Expert in response protocols and digital healthcare integration.',
      skills: ['Emergency Medicine', 'Healthcare IT', 'Protocol Design', 'Medical Research'],
      image: 'https://ui-avatars.com/api/?name=Meera+Iyer',
      social: {
        linkedin: '#',
        email: 'meera@seans.in'
      }
    },
    {
      name: 'Arjun Verma',
      role: 'AI/ML Engineer',
      expertise: 'Machine Learning, Traffic Optimization',
      bio: 'PhD in Computer Science from IISc Bangalore. Specialized in real-time optimization algorithms and traffic systems.',
      skills: ['Python', 'TensorFlow', 'Computer Vision', 'Optimization'],
      image: 'https://ui-avatars.com/api/?name=Arjun+Verma',
      social: {
        github: '#',
        linkedin: '#',
        email: 'arjun@seans.in'
      }
    },
    {
      name: 'Neha Kapoor',
      role: 'UX/UI Designer',
      expertise: 'User Experience, Interface Design',
      bio: 'Award-winning designer with focus on emergency and healthcare apps. Collaborated with Govt. of India on e-health projects.',
      skills: ['Figma', 'User Research', 'Prototyping', 'Accessibility'],
      image: 'https://ui-avatars.com/api/?name=Neha+Kapoor',
      social: {
        linkedin: '#',
        email: 'neha@seans.in'
      }
    },
    {
      name: 'Rohit Menon',
      role: 'DevOps Engineer',
      expertise: 'Cloud Infrastructure, Security',
      bio: 'Specialist in high-availability cloud systems. Ensures SEANS runs reliably 24/7 for emergency services.',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Security'],
      image: 'https://ui-avatars.com/api/?name=Rohit+Menon',
      social: {
        github: '#',
        linkedin: '#',
        email: 'rohit@seans.in'
      }
    },
    {
      name: 'Ananya Singh',
      role: 'Product Manager',
      expertise: 'Product Strategy, Emergency Services',
      bio: 'Former EMT turned PM. Deep understanding of emergency response challenges and user needs in high-stress environments.',
      skills: ['Product Strategy', 'User Research', 'Emergency Response', 'Agile'],
      image: 'https://ui-avatars.com/api/?name=Ananya+Singh',
      social: {
        linkedin: '#',
        email: 'ananya@seans.in'
      }
    },
  ];

  const advisors = [
    {
      name: 'Dr. Raghav Nair',
      role: 'Emergency Services Advisor',
      organization: 'All India Institute of Medical Sciences (AIIMS)',
      expertise: 'Emergency medical services policy and operations'
    },
    {
      name: 'Priya Deshpande',
      role: 'Tech Industry Advisor',
      organization: 'Ex-VP at Ola',
      expertise: 'Real-time transportation systems and scaling'
    },
    {
      name: 'Captain Arvind Rao',
      role: 'Fire Department Liaison',
      organization: 'Hyderabad Fire Department',
      expertise: 'Emergency response coordination and training'
    },
  ];

  const globalAdvisors = [
    {
      name: 'Dr. Robert Hayes',
      role: 'Emergency Services Advisor',
      organization: 'National EMS Association',
      expertise: 'Emergency medical services policy and operations'
    },
    {
      name: 'Lisa Park',
      role: 'Tech Industry Advisor',
      organization: 'Former VP at Uber',
      expertise: 'Real-time transportation systems and scaling'
    },
    {
      name: 'Captain James Wilson',
      role: 'Fire Department Liaison',
      organization: 'Metropolitan Fire Department',
      expertise: 'Emergency response coordination and training'
    },
  ];

  const getExpertiseIcon = (role: string) => {
    if (role.includes('Developer')) return Code;
    if (role.includes('AI') || role.includes('ML')) return Brain;
    if (role.includes('Designer')) return Palette;
    if (role.includes('DevOps')) return Shield;
    return Code;
  };

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
            Meet the <span className="text-gradient-emergency">SEANS Team</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            A diverse group of experts united by a mission to revolutionize 
            emergency response and save lives through innovative technology.
          </p>
        </motion.div>
      </section>

      {/* Team Members */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const ExpertiseIcon = getExpertiseIcon(member.role);
            
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                className="group relative overflow-hidden bg-card p-6 rounded-3xl border border-border shadow-card hover:shadow-glow-tech transition-all duration-500 perspective-1000"
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-emergency rounded-2xl flex items-center justify-center overflow-hidden shadow-lg">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <motion.div 
                    className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ExpertiseIcon className="h-4 w-4 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-muted/50 text-xs font-medium rounded-full border border-border group-hover:border-primary/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    {member.social.github && (
                      <motion.a
                        href={member.social.github}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-muted/50 rounded-lg border border-border hover:border-primary/50 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </motion.a>
                    )}
                    {member.social.linkedin && (
                      <motion.a
                        href={member.social.linkedin}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-muted/50 rounded-lg border border-border hover:border-primary/50 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </motion.a>
                    )}
                    <motion.a
                      href={`mailto:${member.social.email}`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-muted/50 rounded-lg border border-border hover:border-primary/50 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Advisors */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advisory Board</h2>
            <p className="text-xl text-muted-foreground">
              Industry experts guiding our mission to transform emergency response
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-glow-emergency transition-shadow"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-white">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{advisor.name}</h3>
                <p className="text-primary font-medium mb-2">{advisor.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{advisor.organization}</p>
                <p className="text-xs text-muted-foreground">{advisor.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for passionate individuals who want to make a 
              difference in emergency response and save lives through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-emergency px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center"
              >
                View Open Positions
              </motion.a>
              <motion.a
                href="mailto:careers@seans.tech"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-ghost-emergency px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center"
              >
                Send Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;