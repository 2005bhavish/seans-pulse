import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Navigation, 
  MessageSquare, 
  Clock, 
  Hospital, 
  MapPin,
  Phone,
  CheckCircle,
  AlertTriangle,
  Car,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Demo = () => {
  const [isSimulationActive, setIsSimulationActive] = useState(false);
  const [ambulancePosition, setAmbulancePosition] = useState({ x: 20, y: 60 });
  const [currentStep, setCurrentStep] = useState(0);
  const [notifications, setNotifications] = useState<Array<{id: number, message: string, type: string}>>([]);

  const hospitalPosition = { x: 80, y: 20 };

  const simulationSteps = [
    { message: '🚨 Emergency call received: Cardiac arrest at MG Road, Secunderabad', type: 'emergency' },
    { message: '📍 Ambulance dispatched - ETA 8 minutes', type: 'dispatch' },
    { message: '🗺️ Optimal route calculated via SEANS AI', type: 'route' },
    { message: '📱 WhatsApp alerts sent to 47 nearby drivers', type: 'whatsapp' },
    { message: '🚦 Traffic signals switching to green corridor', type: 'traffic' },
    { message: '🏥 Nearest hospital notified - OT/ICU alerted', type: 'hospital' },
    { message: '✅ Ambulance arrived - Response time: 5 minutes (40% faster!)', type: 'success' },
  ];

  const startSimulation = () => {
    setIsSimulationActive(true);
    setCurrentStep(0);
    setNotifications([]);
    
    simulationSteps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index + 1);
        setNotifications(prev => [...prev, { id: index, message: step.message, type: step.type }]);
        
        // Move ambulance position (simulated steps)
        if (index === 1) {
          setAmbulancePosition({ x: 35, y: 45 });
        } else if (index === 3) {
          setAmbulancePosition({ x: 60, y: 30 });
        } else if (index === 6) {
          setAmbulancePosition(hospitalPosition);
        }
      }, index * 2000);
    });

    // Reset after simulation
    setTimeout(() => {
      setIsSimulationActive(false);
    }, simulationSteps.length * 2000 + 3000);
  };

  const mockAlerts = [
    { id: 1, driver: 'Ravi K.', distance: '0.3 km', status: 'moved' },
    { id: 2, driver: 'Ananya S.', distance: '0.1 km', status: 'moved' },
    { id: 3, driver: 'Mohammed A.', distance: '0.5 km', status: 'alerted' },
  ];

  return (
    <div className="min-h-screen py-24">
      {/* Header */}
      <section className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Live SEANS <span className="text-gradient-emergency">Demo</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Experience how SEANS transforms emergency response in real-time. 
            Watch as our system coordinates ambulances, traffic, and hospitals seamlessly across Indian city environments.
          </p>
          
          <Button 
            onClick={startSimulation}
            disabled={isSimulationActive}
            size="lg"
            variant="emergency"
            className="text-lg px-8 py-6"
          >
            {isSimulationActive ? 'Simulation Running...' : 'Start Emergency Simulation'}
          </Button>
        </motion.div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Map */}
          <div className="lg:col-span-2">
            <Card className="card-tech">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Live Emergency Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 rounded-lg overflow-hidden border-2 border-border bg-gradient-to-br from-blue-50 to-green-50 relative">
                  {/* Mock Map Background */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px),
                        linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}
                  />
                  
                  {/* Street Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    <line x1="0%" y1="30%" x2="100%" y2="30%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="0%" y1="70%" x2="100%" y2="70%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="30%" y1="0%" x2="30%" y2="100%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="70%" y1="0%" x2="70%" y2="100%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
                  </svg>

                  {/* Ambulance */}
                  <motion.div
                    className="absolute w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center shadow-lg z-10"
                    style={{ 
                      left: `${ambulancePosition.x}%`, 
                      top: `${ambulancePosition.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    animate={{ 
                      left: `${ambulancePosition.x}%`, 
                      top: `${ambulancePosition.y}%`
                    }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  >
                    <Car className="h-4 w-4 text-white" />
                    {isSimulationActive && (
                      <motion.div
                        className="absolute inset-0 bg-red-500 rounded-lg"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </motion.div>

                  {/* Hospital */}
                  <motion.div
                    className="absolute w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg z-10"
                    style={{ 
                      left: `${hospitalPosition.x}%`, 
                      top: `${hospitalPosition.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Hospital className="h-5 w-5 text-white" />
                  </motion.div>

                  {/* Traffic Lights */}
                  {[  { x: 30, y: 30 }, { x: 70, y: 30 }, { x: 30, y: 70 }, { x: 70, y: 70 } ].map((light, index) => (
                    <motion.div
                      key={index}
                      className={`absolute w-3 h-3 rounded-full shadow-lg ${
                        isSimulationActive && currentStep > 3 
                          ? 'bg-green-500 animate-pulse' 
                          : 'bg-red-500'
                      }`}
                      style={{ 
                        left: `${light.x}%`, 
                        top: `${light.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  ))}

                  {/* Route Path */}
                  {isSimulationActive && (
                    <motion.svg 
                      className="absolute inset-0 w-full h-full"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 3, ease: "easeInOut" }}
                    >
                      <motion.path
                        d={`M ${ambulancePosition.x * 4}% ${ambulancePosition.y * 4}% L ${hospitalPosition.x * 4}% ${hospitalPosition.y * 4}%`}
                        stroke="#ef4444"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="10,5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.7 }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                    </motion.svg>
                  )}

                  {/* Map Labels */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
                    <h4 className="font-semibold text-sm">Hyderabad Emergency Grid</h4>
                    <p className="text-xs text-muted-foreground">Live Simulation (India)</p>
                  </div>
                </div>
                
                {/* Map Legend */}
                <div className="flex items-center gap-6 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <span>Ambulance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full" />
                    <span>Hospital</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${
                      isSimulationActive && currentStep > 3 ? 'bg-green-500' : 'bg-red-500'
                    }`} />
                    <span>Traffic Lights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="h-3 w-3 text-primary" />
                    <span>Live Updates</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Control Panel */}
          <div className="space-y-6">
            {/* Real-time Notifications */}
            <Card className="card-emergency">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Live Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {notifications.map((notification, index) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date().toLocaleTimeString('en-IN')}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  {notifications.length === 0 && (
                    <p className="text-muted-foreground text-center py-8">
                      Click "Start Emergency Simulation" to see live updates
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Alerts */}
            <Card className="card-tech">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-green-600" />
                  WhatsApp Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <div>
                        <p className="font-medium text-sm">{alert.driver}</p>
                        <p className="text-xs text-muted-foreground">{alert.distance} away</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {alert.status === 'moved' ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <AlertTriangle className="h-4 w-4 text-yellow-600" />
                        )}
                        <span className="text-xs capitalize">{alert.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Traffic Light Status */}
            <Card className="card-emergency">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="h-5 w-5 text-primary" />
                  Traffic Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Banjara Hills & Road 10', 'Secunderabad Station Rd', 'HITEC City Junction'].map((intersection, index) => (
                    <div key={intersection} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{intersection}</p>
                        <p className="text-xs text-muted-foreground">Traffic Signal</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          isSimulationActive && currentStep > 3 
                            ? 'bg-green-500 animate-pulse' 
                            : 'bg-red-500'
                        }`} />
                        <span className="text-xs">
                          {isSimulationActive && currentStep > 3 ? 'GREEN' : 'AUTO'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Response Time', value: isSimulationActive && currentStep > 6 ? '5 min' : '8 min', improvement: '-40%' },
            { label: 'Alerts Sent', value: currentStep > 2 ? '47' : '0', improvement: '+∞' },
            { label: 'Traffic Cleared', value: currentStep > 3 ? '12 signals' : '0', improvement: '100%' },
            { label: 'Hospital Ready', value: currentStep > 4 ? 'Yes' : 'No', improvement: 'Instant' },
          ].map((stat, index) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-green-600 font-medium">{stat.improvement}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Demo;
