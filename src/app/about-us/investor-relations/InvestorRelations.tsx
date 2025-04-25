import {
  ArrowUpRight,
  BarChart3,
  Calendar,
  ChevronRight,
  Download,
  FileText,
  Globe,
  LineChart,
  Mail,
  TrendingUp,
  Users,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Skeleton } from '@/components/ui/skeleton';
import { FadeIn } from '@/components/ui/fade-in';
import Image from 'next/image';

export default function InvestorRelations() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <FadeIn>
        <section className="relative px-4 py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 z-0"></div>
          <div className="container relative z-10 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight text-primary">
                Investor Relations
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-foreground/80">
                Delivering sustainable growth and long-term value for our
                shareholders through innovation and strategic execution.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="group">
                  Latest Annual Report
                  <FileText className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="group">
                  Financial Calendar
                  <Calendar className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StockCard />
              <Card className="overflow-hidden group hover:shadow-md transition-all duration-300 border border-primary/10">
                <CardHeader className="bg-secondary text-black p-6">
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Q2 2023 Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-2xl font-bold mb-2">$4.2B</p>
                  <p className="text-sm text-foreground/70">
                    Revenue (↑12% YoY)
                  </p>
                  <Button variant="link" className="p-0 mt-4 group">
                    View Report
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden group hover:shadow-md transition-all duration-300 border border-primary/10">
                <CardHeader className="bg-accent text-black p-6">
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="font-medium">Earnings Call</p>
                  <p className="text-sm text-foreground/70 mb-4">
                    August 15, 2023 - 2:00 PM ET
                  </p>
                  <Button variant="link" className="p-0 group">
                    Add to Calendar
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Latest News Section */}
      <FadeIn>
        <section className="px-4 py-20 bg-white">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 tracking-tight text-primary">
              Latest Investor News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <NewsCard key={item} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" className="group">
                View All News
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Financial Highlights */}
      <FadeIn>
        <section className="px-4 py-20 bg-primary/5">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight text-primary">
              Financial Highlights
            </h2>
            <p className="text-lg mb-12 max-w-3xl text-foreground/80">
              Our strong financial performance reflects our commitment to
              sustainable growth and operational excellence.
            </p>

            <Tabs defaultValue="annual" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="annual">Annual</TabsTrigger>
                <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
                <TabsTrigger value="5year">5-Year Trend</TabsTrigger>
              </TabsList>

              <TabsContent value="annual" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <FinancialCard
                    title="Revenue"
                    value="$16.8B"
                    change="+15%"
                    icon={<BarChart3 className="h-5 w-5" />}
                  />
                  <FinancialCard
                    title="Operating Income"
                    value="$5.2B"
                    change="+18%"
                    icon={<LineChart className="h-5 w-5" />}
                  />
                  <FinancialCard
                    title="Net Income"
                    value="$3.9B"
                    change="+22%"
                    icon={<TrendingUp className="h-5 w-5" />}
                  />
                  <FinancialCard
                    title="EPS"
                    value="$4.28"
                    change="+24%"
                    icon={<Users className="h-5 w-5" />}
                  />
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <p className="text-foreground/50">
                      Interactive Chart Placeholder
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="group">
                    <Download className="mr-2 h-4 w-4" />
                    Annual Report 2023
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                  <Button variant="outline" className="group">
                    <Download className="mr-2 h-4 w-4" />
                    Annual Report 2022
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                  <Button variant="outline" className="group">
                    <Download className="mr-2 h-4 w-4" />
                    Annual Report 2021
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="quarterly" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <FinancialCard
                    title="Q2 2023 Revenue"
                    value="$4.2B"
                    change="+12%"
                    icon={<BarChart3 className="h-5 w-5" />}
                  />
                  <FinancialCard
                    title="Q2 2023 Op. Income"
                    value="$1.3B"
                    change="+14%"
                    icon={<LineChart className="h-5 w-5" />}
                  />
                  <FinancialCard
                    title="Q2 2023 Net Income"
                    value="$980M"
                    change="+16%"
                    icon={<TrendingUp className="h-5 w-5" />}
                  />
                  <FinancialCard
                    title="Q2 2023 EPS"
                    value="$1.08"
                    change="+18%"
                    icon={<Users className="h-5 w-5" />}
                  />
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <p className="text-foreground/50">
                      Quarterly Chart Placeholder
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="group">
                    <Download className="mr-2 h-4 w-4" />
                    Q2 2023 Report
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                  <Button variant="outline" className="group">
                    <Download className="mr-2 h-4 w-4" />
                    Q1 2023 Report
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                  <Button variant="outline" className="group">
                    <Download className="mr-2 h-4 w-4" />
                    Q4 2022 Report
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="5year" className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <p className="text-foreground/50">
                      5-Year Trend Chart Placeholder
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Revenue Growth</CardTitle>
                      <CardDescription>5-Year CAGR: 18%</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-48 bg-muted rounded-md flex items-center justify-center">
                        <p className="text-foreground/50">
                          Revenue Chart Placeholder
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Profit Margin</CardTitle>
                      <CardDescription>
                        5-Year Improvement: +5.2%
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-48 bg-muted rounded-md flex items-center justify-center">
                        <p className="text-foreground/50">
                          Margin Chart Placeholder
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Button variant="outline" className="group">
                  <Download className="mr-2 h-4 w-4" />
                  5-Year Financial Summary
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </FadeIn>

      {/* Stock Information */}
      <FadeIn>
        <section className="px-4 py-20 bg-white">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight text-primary">
                  Stock Information
                </h2>
                <p className="text-lg mb-8 text-foreground/80">
                  Our stock has consistently outperformed market benchmarks,
                  reflecting our strong business fundamentals and growth
                  strategy.
                </p>

                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-muted rounded-xl">
                    <span className="font-medium">Stock Price</span>
                    <span className="text-xl font-bold">$142.68</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-xl">
                    <span className="font-medium">Change</span>
                    <span className="text-xl font-bold text-success">
                      +$3.42 (2.46%)
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-xl">
                    <span className="font-medium">Market Cap</span>
                    <span className="text-xl font-bold">$128.5B</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-xl">
                    <span className="font-medium">52-Week Range</span>
                    <span className="text-xl font-bold">$98.76 - $156.32</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-xl">
                    <span className="font-medium">Dividend Yield</span>
                    <span className="text-xl font-bold">1.8%</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="group">
                    Interactive Stock Chart
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-xl">
                <div className="aspect-square bg-white rounded-md flex items-center justify-center">
                  <p className="text-foreground/50">
                    Interactive Stock Chart Placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Leadership Team */}
      <FadeIn>
        <section className="px-4 py-20 bg-primary/5">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight text-primary">
              Leadership Team
            </h2>
            <p className="text-lg mb-12 max-w-3xl text-foreground/80">
              Our experienced leadership team is committed to driving
              sustainable growth and creating long-term shareholder value.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {[
                {
                  name: 'Sarah Johnson',
                  title: 'Chief Executive Officer',
                  image: '/placeholder.svg?height=300&width=300',
                },
                {
                  name: 'Michael Chen',
                  title: 'Chief Financial Officer',
                  image: '/placeholder.svg?height=300&width=300',
                },
                {
                  name: 'David Williams',
                  title: 'Chief Operating Officer',
                  image: '/placeholder.svg?height=300&width=300',
                },
                {
                  name: 'Emily Rodriguez',
                  title: 'Chief Technology Officer',
                  image: '/placeholder.svg?height=300&width=300',
                },
                {
                  name: 'James Wilson',
                  title: 'Chief Marketing Officer',
                  image: '/placeholder.svg?height=300&width=300',
                },
                {
                  name: 'Sophia Lee',
                  title: 'Chief Strategy Officer',
                  image: '/placeholder.svg?height=300&width=300',
                },
              ].map((leader, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group hover:shadow-md transition-all duration-300 border border-primary/10"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={leader.image || '/placeholder.svg'}
                      alt={leader.name}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-foreground/70">{leader.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ESG & Sustainability */}
      <FadeIn>
        <section className="px-4 py-20 bg-white">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight text-primary">
                  ESG & Sustainability
                </h2>
                <p className="text-lg mb-8 text-foreground/80">
                  We are committed to sustainable business practices and
                  creating positive impact for all stakeholders.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded-full">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Environmental</h3>
                      <p className="text-foreground/70">
                        We&apos;ve reduced our carbon footprint by 35% since
                        2018 and are on track to achieve carbon neutrality by
                        2030.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-tertiary text-tertiary-foreground p-3 rounded-full">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Social</h3>
                      <p className="text-foreground/70">
                        Our diverse workforce and inclusive culture drive
                        innovation and reflect the communities we serve.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Governance</h3>
                      <p className="text-foreground/70">
                        Our robust governance framework ensures accountability,
                        transparency, and ethical business practices.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="group">
                    ESG Report 2023
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-square bg-muted rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Sustainability Initiative"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square bg-muted rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Community Engagement"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square bg-muted rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Diversity and Inclusion"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square bg-muted rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Governance Structure"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* FAQ Section */}
      <FadeIn>
        <section className="px-4 py-20 bg-primary/5">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight text-center text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-lg mb-12 text-center text-foreground/80">
              Find answers to common investor questions
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is your dividend policy?
                </AccordionTrigger>
                <AccordionContent>
                  Our dividend policy aims to return 30-40% of annual free cash
                  flow to shareholders, while maintaining flexibility for
                  strategic investments and share repurchases. We have
                  consistently increased our dividend for the past 8 years.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How can I access annual reports and SEC filings?
                </AccordionTrigger>
                <AccordionContent>
                  All our annual reports, quarterly reports, and SEC filings are
                  available in the Investor Relations section of our website.
                  You can also access them directly from the SEC&apos;s EDGAR
                  database.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  When is your next earnings call?
                </AccordionTrigger>
                <AccordionContent>
                  Our next earnings call is scheduled for August 15, 2023, at
                  2:00 PM Eastern Time. You can register for the webcast through
                  our Investor Relations website.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What is your approach to ESG?
                </AccordionTrigger>
                <AccordionContent>
                  ESG considerations are integrated into our business strategy
                  and operations. We publish an annual ESG report that details
                  our initiatives, progress, and goals across environmental
                  sustainability, social responsibility, and corporate
                  governance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  How do you plan to drive future growth?
                </AccordionTrigger>
                <AccordionContent>
                  Our growth strategy focuses on three pillars: expanding our
                  core business in existing markets, entering new geographic
                  markets with high growth potential, and strategic acquisitions
                  that complement our product portfolio and capabilities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  What is your capital allocation strategy?
                </AccordionTrigger>
                <AccordionContent>
                  Our capital allocation priorities are: (1) investing in
                  organic growth opportunities, (2) strategic M&A, (3) returning
                  capital to shareholders through dividends and share
                  repurchases, and (4) maintaining a strong balance sheet with
                  investment-grade credit ratings.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </FadeIn>

      {/* Contact Section */}
      <FadeIn>
        <section className="px-4 py-20 bg-white">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight text-primary">
              Investor Contact
            </h2>
            <p className="text-lg mb-12 text-foreground/80">
              Have questions? Our Investor Relations team is here to help.
            </p>

            <Card className="p-8 bg-primary text-primary-foreground border border-primary/10">
              <CardContent className="p-0 flex flex-col items-center">
                <div className="bg-primary-foreground text-primary rounded-full p-4 mb-6">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Investor Relations Department
                </h3>
                <p className="mb-6">
                  We&apos;re here to answer your questions and provide
                  information about investing in our company.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
                  <Button variant="secondary" size="lg" className="group">
                    Email Us
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 group"
                  >
                    Contact Us
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}

// Component for Stock Card with skeleton loading
function StockCard() {
  return (
    <Card className="overflow-hidden group hover:shadow-md transition-all duration-300 border border-primary/10">
      <CardHeader className="bg-primary text-white p-6">
        <CardTitle className="flex items-center">
          <BarChart3 className="mr-2 h-5 w-5" />
          Stock Performance
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <SkeletonText />
            <SkeletonText width="w-20" />
          </div>
          <div className="flex justify-between">
            <SkeletonText />
            <SkeletonText width="w-20" />
          </div>
          <div className="flex justify-between">
            <SkeletonText />
            <SkeletonText width="w-20" />
          </div>
        </div>
        <Button variant="link" className="p-0 mt-4 group">
          View Details
          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Button>
      </CardContent>
    </Card>
  );
}

// Component for Financial Card
interface FinancialCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

function FinancialCard({ title, value, change, icon }: FinancialCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-md transition-all duration-300 border border-primary/10">
      <CardHeader className="p-6 pb-2">
        <CardTitle className="flex items-center text-lg">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-2">
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-sm text-success">{change}</p>
      </CardContent>
    </Card>
  );
}

// Component for News Card with skeleton loading
function NewsCard() {
  return (
    <Card className="overflow-hidden group hover:shadow-md transition-all duration-300 border border-primary/10">
      <div className="aspect-video relative overflow-hidden">
        <Skeleton className="absolute inset-0" />
        <Image
          src="/placeholder.svg?height=200&width=400"
          alt="News"
          width={400}
          height={200}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-xs bg-muted px-2 py-1 rounded-full">
            Press Release
          </span>
          <span className="text-xs text-foreground/60 ml-2">July 28, 2023</span>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          Company Announces Record Q2 Results and Raises Full-Year Guidance
        </h3>
        <p className="text-foreground/70 line-clamp-2 mb-4">
          The company reported strong performance across all business segments,
          with revenue growth exceeding analyst expectations.
        </p>
        <Button variant="link" className="p-0 group">
          Read More
          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Button>
      </CardContent>
    </Card>
  );
}

// Skeleton Text Component
function SkeletonText({ width = 'w-24' }) {
  return <Skeleton className={`h-4 ${width}`} />;
}
