'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { FadeIn } from '@/components/ui/fade-in';
import { useToast } from '@/components/ui/use-toast';

export default function ContactPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    privacy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, privacy: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacy) {
      toast({
        title: 'Privacy policy agreement required',
        description: 'Please accept the privacy policy to continue.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Create URL parameters for passing data to thank you page
        const params = new URLSearchParams({
          name: formData.name,
          email: formData.email,
        });

        if (formData.phone) params.append('phone', formData.phone);
        if (formData.company) params.append('company', formData.company);

        router.push(`/about-us/contact-us/thank-you?${params.toString()}`);
      } else {
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Failed to send message',
        description: 'Please try again later or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name*"
                    required
                    className="bg-transparent border-b border-black/20 rounded-xl px-2 h-12 placeholder:text-black/60 focus:border-black/40 focus:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email*"
                    required
                    className="bg-transparent border-b border-black/20 rounded-xl px-2 h-12 placeholder:text-black/60 focus:border-black/40 focus:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number*"
                    required
                    className="bg-transparent border-b border-black/20 rounded-xl px-2 h-12 placeholder:text-black/60 focus:border-black/40 focus:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company (optional)"
                    className="bg-transparent border-b border-black/20 rounded-xl px-2 h-12 placeholder:text-black/60 focus:border-black/40 focus:ring-0"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  className="min-h-[100px] resize-none bg-transparent border rounded-xl px-2 placeholder:text-black/60 focus:border-black/40 focus:ring-0"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacy}
                    onCheckedChange={handleCheckboxChange}
                    className="rounded-sm"
                  />
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
                className="w-full text-md py-6"
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
