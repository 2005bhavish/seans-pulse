import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'Emergency Innovation Lab',
        'Tech University Campus',
        'Building 42, Room 301',
        'Hyderabad, Telangana, India - 500032',
      ],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '+91 98765 43210',
        '+91 98765 43211',
        'Available 24/7 for emergencies',
      ],
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'General: contact@seans.in',
        'Demo: demo@seans.in',
        'Partnerships: partners@seans.in',
      ],
    },
    {
      icon: Clock,
      title: 'Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM IST',
        'Emergency Support: 24/7',
        'Response time: < 2 hours',
      ],
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
        duration: 5000,
      });

      setFormData({
        name: '',
        email: '',
        organization: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: 'How quickly can SEANS be implemented in an Indian city?',
      answer: 'Implementation typically takes 3-6 months depending on existing infrastructure. We provide full support throughout the process.'
    },
    {
      question: 'What are the system requirements?',
      answer: 'SEANS integrates with existing emergency systems, traffic management, and mobile networks. We provide a detailed technical assessment.'
    },
    {
      question: 'Is training provided for emergency personnel?',
      answer: 'Yes, we provide comprehensive training for all stakeholders including emergency services, hospital staff, and traffic management teams.'
    },
    {
      question: 'What about data privacy and security?',
      answer: 'SEANS uses enterprise-grade encryption and complies with Indian IT laws and healthcare data protection regulations.'
    }
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
            Get in <span className="text-gradient-emergency">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Ready to revolutionize emergency response in your city? 
            Contact us to schedule a demo or discuss implementation.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="card-emergency">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Send us a message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Rahul Sharma"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="rahul@example.com"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium mb-2">
                        Organization
                      </label>
                      <Input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="City Emergency Services, Hospital Network, etc."
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your emergency response challenges and how SEANS can help..."
                        className="w-full resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-lg py-6"
                      variant="emergency"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-card rounded-2xl border border-border shadow-card hover:shadow-glow-tech transition-shadow"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-emergency rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-emergency rounded-2xl text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="h-6 w-6" />
                <h3 className="font-bold text-lg">Emergency Support</h3>
              </div>
              <p className="text-white/90 mb-4">
                For critical system issues or emergency support, contact us immediately:
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Hotline:</strong> +91 98765 43212</p>
                <p><strong>Email:</strong> emergency@seans.in</p>
                <p><strong>Response:</strong> &lt; 15 minutes</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about SEANS implementation and features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card rounded-2xl border border-border shadow-card"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="font-semibold">{faq.question}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
