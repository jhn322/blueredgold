'use client';

import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ThumbsUp,
  Lightbulb,
  Check,
  X,
  Star,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/fade-in';

export default function HarvestingTips() {
  return (
    <section className="container py-16 md:py-24">
      <div className="space-y-4 text-center mb-12">
        <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
          <span className="text-sm font-medium text-primary">Keep In Mind</span>
        </div>
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
            <Card className="border-none shadow-md h-full flex flex-col bg-purple-100 dark:bg-purple-900/20">
              <CardHeader className="pb-2 flex-none">
                <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <ThumbsUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Best Practices</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Harvest on dry mornings after dew has evaporated
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Use a small pair of scissors for precise cutting
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Keep harvested flowers in a cool basket</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Process flowers within 24 hours of harvesting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Wear clean cotton gloves to prevent oil transfer
                    </span>
                  </li>
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
            <Card className="border-none shadow-md h-full flex flex-col bg-red-100 dark:bg-red-900/20">
              <CardHeader className="pb-2 flex-none">
                <div className="bg-tertiary/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-tertiary" />
                </div>
                <CardTitle className="text-xl">Common Mistakes</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start">
                    <X className="h-4 w-4 text-tertiary mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Harvesting too late in the day when flowers are fully open
                    </span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-4 w-4 text-tertiary mt-1 mr-2 flex-shrink-0" />
                    <span>Including yellow stamens with red stigmas</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-4 w-4 text-tertiary mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Drying in direct sunlight (destroys color and aroma)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-4 w-4 text-tertiary mt-1 mr-2 flex-shrink-0" />
                    <span>Storing in plastic containers (traps moisture)</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-4 w-4 text-tertiary mt-1 mr-2 flex-shrink-0" />
                    <span>Handling stigmas with wet or oily hands</span>
                  </li>
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
            <Card className="border-none shadow-md h-full flex flex-col bg-yellow-100 dark:bg-yellow-900/20">
              <CardHeader className="pb-2 flex-none">
                <div className="bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Pro Tips</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-secondary mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Use a food dehydrator on lowest setting for consistent
                      drying
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-secondary mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Keep a harvest journal to track yield year over year
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-secondary mt-1 mr-2 flex-shrink-0" />
                    <span>Stagger plantings to extend your harvest season</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-secondary mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Store in amber glass containers to protect from light
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-secondary mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Add a few grains of rice to storage container to absorb
                      moisture
                    </span>
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
