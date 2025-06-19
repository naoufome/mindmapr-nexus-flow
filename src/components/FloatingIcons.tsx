
import { useEffect, useState } from 'react';
import { Brain, Lightbulb, Target, Zap } from 'lucide-react';

interface FloatingIcon {
  id: number;
  Icon: React.ComponentType<{ className?: string }>;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

export const FloatingIcons = () => {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const iconComponents = [Brain, Lightbulb, Target, Zap];
    const newIcons: FloatingIcon[] = [];

    for (let i = 0; i < 12; i++) {
      newIcons.push({
        id: i,
        Icon: iconComponents[i % iconComponents.length],
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4,
      });
    }

    setIcons(newIcons);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute opacity-10 animate-float"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            animationDelay: `${icon.delay}s`,
            animationDuration: `${icon.duration}s`,
          }}
        >
          <icon.Icon className="w-8 h-8 text-neon-blue" />
        </div>
      ))}
    </div>
  );
};
