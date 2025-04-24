'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, ThumbsUp, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/fade-in';

export default function HarvestingTips() {
  return (
    <section className="container py-16 md:py-24">
      <div className="space-y-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
          Expert Harvesting Tips
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
          Maximize your saffron yield and quality with these professional
          insights
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <FadeIn delay={0.1}>
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="h-full"
          >
            <Card className="border-none shadow-md h-full flex flex-col">
              <CardHeader className="pb-2 flex-none">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <ThumbsUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Best Practices</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-foreground/70">
                  <li>• Harvest on dry mornings after dew has evaporated</li>
                  <li>• Use a small pair of scissors for precise cutting</li>
                  <li>• Keep harvested flowers in a cool basket</li>
                  <li>• Process flowers within 24 hours of harvesting</li>
                  <li>• Wear clean cotton gloves to prevent oil transfer</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="h-full"
          >
            <Card className="border-none shadow-md h-full flex flex-col">
              <CardHeader className="pb-2 flex-none">
                <div className="bg-tertiary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-tertiary" />
                </div>
                <CardTitle className="text-xl">Common Mistakes</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-foreground/70">
                  <li>
                    • Harvesting too late in the day when flowers are fully open
                  </li>
                  <li>• Including yellow stamens with red stigmas</li>
                  <li>
                    • Drying in direct sunlight (destroys color and aroma)
                  </li>
                  <li>• Storing in plastic containers (traps moisture)</li>
                  <li>• Handling stigmas with wet or oily hands</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="h-full"
          >
            <Card className="border-none shadow-md h-full flex flex-col">
              <CardHeader className="pb-2 flex-none">
                <div className="bg-secondary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Pro Tips</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-foreground/70">
                  <li>
                    • Use a food dehydrator on lowest setting for consistent
                    drying
                  </li>
                  <li>
                    • Keep a harvest journal to track yield year over year
                  </li>
                  <li>• Stagger plantings to extend your harvest season</li>
                  <li>
                    • Store in amber glass containers to protect from light
                  </li>
                  <li>
                    • Add a few grains of rice to storage container to absorb
                    moisture
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
