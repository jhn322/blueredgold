'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { FadeIn } from '@/components/ui/fade-in';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <div className="relative min-h-screen w-full bg-black/90">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact-us/contact-us-hero.webp"
          alt="Contact Us Background"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row items-center justify-center px-4 py-16 gap-12 sm:px-6 lg:px-8">
        {/* Left Content */}
        <FadeIn className="w-full lg:w-5/12 text-left">
          <h1 className="font-display text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Get in touch
          </h1>
          <p className="text-lg text-gray-200">
            Use our contact form, and we&apos;ll ensure your inquiry finds its
            way to the appropriate team member. We value your time and interest
            and promise a prompt response.
          </p>
        </FadeIn>

        {/* Right Form Section */}
        <FadeIn delay={300} className="w-full lg:w-7/12">
          <div className="bg-background rounded-xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Input
                    placeholder="Full name*"
                    required
                    className="bg-transparent border-b border-black/20 rounded-xl px-2 h-12 placeholder:text-black/60 focus:border-black/40 focus:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email*"
                    required
                    className="bg-transparent border-b border-black/20 rounded-xl px-2 h-12 placeholder:text-black/60 focus:border-black/40 focus:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="tel"
                    placeholder="Phone number*"
                    required
                    className="bg-transparent border-b border-black/20 rounded-xl px-2 h-12 placeholder:text-black/60 focus:border-black/40 focus:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="Company (optional)"
                    className="bg-transparent border-b border-black/20 rounded-xl px-2 h-12 placeholder:text-black/60 focus:border-black/40 focus:ring-0"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Textarea
                  placeholder="Message"
                  className="min-h-[100px] resize-none bg-transparent border rounded-xl px-2 placeholder:text-black/60 focus:border-black/40 focus:ring-0"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="privacy" required className="rounded-sm" />
                  <Label htmlFor="privacy" className="text-sm">
                    I have read and accepted the{' '}
                    <a
                      href="/privacy-policy"
                      className="text-primary hover:underline"
                    >
                      privacy policy
                    </a>
                    *
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full text-md rounded-full py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </Button>
            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
