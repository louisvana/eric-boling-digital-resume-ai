
import { ResumeContent, PortfolioData, EmploymentData } from './types';

export const RESUME_DATA: ResumeContent = {
  header: {
    name: "Eric Boling",
    title: "Digital Paid Media Strategist",
    contact: {
      location: "Louisville, Kentucky",
      email: "HireEricBoling@gmail.com",
      linkedin: "in/eric-boling",
      linkedinUrl: "https://www.linkedin.com/in/eric-boling"
    }
  },
  summary: "Paid Media Specialist with 4 years of experience leading high-performing campaigns across Meta, Google, and multi-channel ecosystems. Specialized in scaling e-commerce brands with a proven track record of driving measurable growth across multiple accounts.",
  experience: [
    {
      role: "Digital Paid Media Strategist",
      company: "[RedTag Digital](https://www.redtag.digital/)",
      location: "Louisville, KY",
      period: "July 2023 - Present",
      description: "Full-service digital advertising agency",
      achievements: [
        "**Ad Campaign Management**: Develop, execute, and optimize Paid Social and Paid Search campaigns for a portfolio of brands with 5- to 6-figure monthly spend; specialized in e-commerce clients. (Notable clients: Airstream®, Caterpillar®, Gallery Furniture.)",
        "**DTC Growth Success**: Increased ShopCaterpillar.com's online sales by 23%, reduced CAC by 60%, and grew ROAS 250% across Meta and Google in 2024 through compelling data-backed monthly promotions executed perfectly. This required aligning ad strategy, creative, on-site optimizations, Shopify back-end processes, and email automations. Client doubled ad spend in 2025.",
        "**Lead Generation Strategy**: Boosted Meta lead volume for Airstream® by 35% YoY while cutting CPL by 50% by rejecting conventional lead gen strategy on Meta, instead launching Meta Automotive Inventory (DPA) shopping ads optimized for on-platform leads. Personally managed complex catalog builds (136 product feeds across 68 campaigns) to deliver higher-intent leads and long-term performance lift.",
        "**Multi-Channel Advertising**: Hands-on experience across Meta Ads, Google Ads, LinkedIn Ads, TikTok Ads, and CTV/OTT channels.",
        "**Cross-Team Collaboration**: Partner closely with Creative, Dev, and Account teams to ensure seamless execution of campaigns and projects.",
        "**Performance Analysis, A/B Testing**: Continuously monitor and analyze platform and third-party analytics data to uncover trends, surface opportunities, and proactively recommend optimizations. Plan and execute A/B tests to optimize campaign & creative performance.",
        "**Budget Management**: Strategically manage multi-channel budgets to maximize ROI while maintaining performance and spend goals.",
        "**Conversion Tracking Expertise**: Implement, troubleshoot, and optimize conversion tracking via Google Tag Manager and Meta Events Manager.",
        "**Reporting & Client Management**: Deliver clear, actionable performance reporting with a consultative, entrepreneurial attitude—enhancing client satisfaction, retention, and account growth.",
        "**SaaS Leadership**: Oversee daily operations for [DataTag](https://www.redtag.digital/datatag), a proprietary SaaS platform specializing in web traffic deanonymization for advanced audience building and marketing data collection."
      ]
    },
    {
      role: "Paid Media Manager / Content Creator",
      company: "Bob Hook Chevrolet",
      location: "Louisville, KY",
      period: "August 2021 - May 2023",
      achievements: [
        "**Ad Campaign Oversight**: Manage paid social campaigns for automotive, spending $40K/month on Meta for a leading Chevrolet dealership.",
        "**Video Content Production**: Created and distributed 150+ videos for paid ads on Meta, YouTube, and organic social.",
        "**E-commerce Launch**: Started an eBay Motors car parts store that generated $1M in revenue within 12 months."
      ]
    },
    {
      role: "Multimedia Production Specialist",
      company: "Heritage Ford of Indiana",
      location: "Corydon, IN",
      period: "May 2020 - Sep 2021",
      achievements: [
        "**Content Engine**: Acted as a one-man production studio—planning, filming, and editing long-form video content to educate and convert car shoppers.",
        "**Organic Growth**: Produced 70+ long-form videos driving 604.6K views and a 700% increase in subscribers across YouTube and Facebook.",
        "**Social Strategy**: Managed all dealership social accounts (Facebook, Instagram, Twitter, GBP), aligning organic content with sales goals."
      ]
    },
    {
      role: "Founder / E-commerce Operator",
      company: "Podsubscriptions.com",
      location: "Louisville, KY",
      period: "May 2019 - Feb 2020",
      description: "Self-started niche e-commerce business.",
      achievements: [
        "**Business Model**: Built a subscription-first e-commerce model selling vape pods with 25-45% savings for bulk orders. Capitalized on high demand and lush margins.",
        "**Full Stack Execution**: Ran first Google Ads campaigns, built the website, managed inventory, and handled all operations including LLC formation.",
        "**Market Exit**: Successfully launched and operated until Dec 2019, when federal regulations banned the product category. Closed operations strategically before incurring losses."
      ]
    },
    {
      role: "Email Administrator / Web Content Writer",
      company: "Sonic Electronix, Inc.",
      location: "Louisville, KY",
      period: "Apr 2018 - Apr 2019",
      description: "High-volume omnichannel electronics retailer ($40M+ annual revenue).",
      achievements: [
        "**AI Innovation**: Built and trained a machine-learning customer support bot that achieved a 12% ticket deflection rate in 2018. Recognized with a Freshdesk Mastery Certificate.",
        "**System Architecture**: Developed complex logic flows within Freshdesk and authored a 100+ article knowledge base to automate customer solutions.",
        "**Content Scale**: Created and optimized over 500 product listings across the owned website, eBay, and Amazon stores.",
        "**Leadership**: Onboarded and trained 7 new employees and managed gig workers to scale the support and content teams."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Marketing",
      school: "University of Louisville",
      location: "Louisville, KY",
      year: "2017"
    }
  ],
  certifications: [
    {
      title: "Meta Certified Media Buying Professional",
      issuer: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png",
      year: "2024"
    },
    {
      title: "Meta Certified Digital Marketing Associate",
      issuer: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png",
      year: "2024"
    },
    {
      title: "Google Ads Search Certification",
      issuer: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/200px-Google_%22G%22_logo.svg.png",
      year: "2025"
    },
    {
      title: "Google AI-Powered Shopping Ads Certification",
      issuer: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/200px-Google_%22G%22_logo.svg.png",
      year: "2025"
    },
    {
      title: "Shopify CRO Overview and Best Practices Course",
      issuer: "Shopify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/200px-Shopify_logo_2018.svg.png",
      year: "2025"
    }
  ],
  skills: [
    {
      category: "AI Expertise",
      items: [
        "Google Gemini", "Google AI Studio", "Claude", "Vertex AI Studio (Google)", "Google Cloud Console",
        "Google Labs: Opal, Pomelli, Flow",
        "Google Generative AI: Gemini 3+, Nano Banana Pro, VEO 3.1+, Imagen, Vibe Coding",
        "Shopify Sidekick", "Topaz Labs (Full Suite)", "VEED", "CapCut AI",
        "OpenAI API", "OpenAI Prompt Optimizer", "n8n"
      ]
    },
    {
      category: "Marketing Platform Expertise",
      items: [
        "Meta Ads Manager", "Meta Events Manager", "Commerce Manager", "Meta Shops", "Meta Audiences",
        "Google Ads", "Google Shopping", "Merchant Center", "Google Tag Manager", "Google Analytics 4",
        "TikTok Ads Manager", "LinkedIn Ads Manager",
        "Klaviyo", "MailChimp", "Omnisend"
      ]
    },
    {
      category: "On-site / Store Optimization",
      items: [
        "Shopify Expert", "Data Feed Management & Optimization", "Product Optimization",
        "Store Performance", "Customer Segmentation", "Reviews Management",
        "SEO", "AI/LLM SEO", "AI Chatbot Implementation", "App Integration"
      ]
    },
    {
      category: "Organizational & Data",
      items: [
        "Data Analysis", "Data-Driven Decision Making", "Account Growth Strategy",
        "Attribution Modeling", "Custom Reports and Dashboards", "Advanced Audience Building",
        "First-Party Data Collection", "Email List Building", "Zapier/Make Automation"
      ]
    }
  ]
};

export const EMPLOYMENT_DATA: EmploymentData = {
  title: "Employment Must-Haves",
  intro: "My essential requirements for the next opportunity include:",
  items: [
    { label: "Location", value: "100% Remote (Based in Kentucky)" },
    { label: "Compensation", value: "Minimum base salary of $80,000" },
    { label: "Benefits", value: "Comprehensive Healthcare coverage" },
    { label: "Retirement", value: "401(k) plan eligibility and matching" }
  ]
};

export const PORTFOLIO_DATA: PortfolioData = {
  hero: {
    name: "Eric Boling",
    role: "Digital Paid Media Strategist",
    tagline: "Seeking Senior-level Paid Media Strategist & Media Buyer roles.",
    abstract: "",
    image: "https://cdn.shopify.com/s/files/1/0657/7825/4048/files/eric-profile-nobg-web.png?v=1766626579" 
  },
  introduction: {
    philosophy: "In a digital landscape saturated with noise, logic is the barrier to entry. I deconstruct user behavior and platform algorithms to build campaigns that don't just reach audiences, but resonate with them deeply, converting passive scrollers into loyal customers."
  },
  process_diagram: [
    {
      stage: "Audit & Analysis",
      description: "Deep dive into historical data, account structure, and competitor landscape to identify inefficiencies and growth opportunities."
    },
    {
      stage: "Strategy Formulation",
      description: "Developing a roadmap that aligns media channels, budget allocation, and creative messaging with business objectives."
    },
    {
      stage: "Execution & Launch",
      description: "Precision implementation of campaigns with rigorous QA, pixel verification, and audience segmentation."
    },
    {
      stage: "Optimization Loop",
      description: "Continuous A/B testing, bid adjustment, and creative iteration based on real-time performance data."
    }
  ],
  performance_metrics: [
    {
      project: "ShopCaterpillar.com (DTC)",
      data: [
        { label: "Sales Growth", before: 100, after: 123, unit: "%" },
        { label: "ROAS Growth", before: 100, after: 350, unit: "%" },
        { label: "CAC Reduction", before: 100, after: 40, unit: "%" }
      ]
    },
    {
      project: "Airstream® (Lead Gen)",
      data: [
        { label: "Lead Volume", before: 100, after: 135, unit: "%" },
        { label: "CPL", before: 100, after: 50, unit: "%" }
      ]
    }
  ],
  case_studies: [
    {
      id: "cat",
      client: "Caterpillar®",
      title: "DTC eCommerce Growth",
      hook: "Growing Revenue 23% at Same Ad Spend via Full-Funnel Optimization (Double Digit ROAS)",
      role: "Lead Media Buyer & Strategist - Meta, Google, Shopify",
      stats: [
        { label: "Revenue", value: "+23%", icon: 'dollar' },
        { label: "New Cust.", value: "+118%", icon: 'users' },
        { label: "ROAS", value: "+250%", icon: 'trending' },
        { label: "CPP", value: "-55%", icon: 'cart' }
      ],
      context: "Licensed apparel partner for Caterpillar® (CAT). Historically a 'printer-first' operation with strict brand constraints, lacking a native e-commerce culture or data strategy.",
      pivot: {
        problem: "The client operated as an apparel printer rather than an eCommerce retailer. They faced a 'growth ceiling' where digital presence functioned like a fulfillment center, and strict brand guidelines on pricing restricted creative agility.",
        solution: "I executed a data-driven overhaul to break the ceiling. We negotiated creative freedom for 'Price Blowout' monthly promos and integrated a $75 free shipping threshold to drive volume without increasing ad spend."
      },
      strategy: `Drawing on my long-time experience in E-commerce, I implemented full-funnel strategy that aligned media buying, creative messaging, and on-site user experience that drove a 250% increase in ROAS and 23% lift in sales with $0 additional ad spend.

Highlights of the strategy were deploying a powerhouse catalog-only "pillar" Advantage+ Shopping Campaign (ASC) on Meta, supplemented by aggressive, data-backed monthly promotions. This structure ensured we captured constant demand while spiking volume during key periods without inflating costs.

Crucially, I identified a cart abandonment issue and negotiated with the client to implement a $75 free shipping threshold to boost CVR and AOV. This strategy, plus countless improvements not mentioned here, plus Meta and Google Ad wizardry drove:
- A sustained 250% increase in ROAS (from 3-4X to 8-11X ROAS on Meta and Google)
- 23% lift in Total Sales
- 60% Customer Acquisition Cost (CAC)
- A 100% increase in ad spend from the client
 
All with $0 additional ad spend.

Not to mention:
- Over 10,000 new customers, and tens of thousands of new email subscribers

There was not a red metric on this account YoY. This account went ballistic over 2025. I'll tell you all about it.`,
      techStack: ["Meta ASC", "Google PMAX", "Shopify Analytics", "DataFeedWatch", "MailChimp"]
    },
    {
      id: "gallery",
      client: "Gallery Furniture",
      title: "B2C Lead Gen & Local High-Ticket",
      hook: "Managing $164,000/month Ad Spend on High-Ticket B2C Lead Gen and Shopping Ads in Houston, TX - For an Icon",
      role: "Lead Media Buyer & Strategist - Meta, Google, Shopify",
      stats: [
        { label: "Annual Spend", value: "$1.9M+", icon: 'dollar' },
        { label: "Lead Volume", value: "1,600/wk", icon: 'users' },
        { label: "Cost Per Lead", value: "$18", icon: 'zap' },
        { label: "Leads YoY", value: "+25%", icon: 'trending' }
      ],
      context: "Houston's legendary Gallery Furniture generates over $150M annually. Managed by 'Mattress Mack', the brand is famous for high-stakes sports-hedge promotions to back 'Win it All' customer offers.",
      pivot: {
        problem: "Managing a high-volume account ($1,600+ leads/wk) required sophisticated infrastructure. The legacy website throttled conversions, and manual lead handling caused massive data leakage between ad clicks and Salesforce.",
        solution: "We migrated to Shopify for robust e-commerce. I then architected a fully automated lead infrastructure using Zapier to sync Google/Meta leads directly with Salesforce and offline conversion events."
      },
      strategyTitle: "Sole Strategist & Executioner",
      strategy: `As the Lead Media Buyer for Gallery Furniture, I manage $1.9M/yr across Google, Meta, and TikTok. I develop and execute successful six-figure monthly paid search and paid social campaigns with the objectives of primarily B2C Lead Gen, then Online Sales, for a 2 location furniture store in Houston, TX - with an iconic owner, Mattress Mack.

This client is among the three largest clients at my agency. I inherited this account and their ad accounts are quite seasoned, so I don't have many eye-popping results here. However, the volume of spend, the high-ticket price of their products, the weekly meetings, weekly reports, and constant contact with their team; monthly meetings with Google and Meta Performance Teams, and much more - show my responsibility and capability.`,
      techStack: ["Google Ads", "Meta AI Pilots", "Zapier", "Salesforce", "DataTag", "AgencyAnalytics"]
    },
    {
      id: "airstream",
      client: "Airstream®",
      title: "Rethinking Lead Generation",
      hook: "Rejecting Convention to Drive 35% Volume Growth",
      role: "Paid Social Strategist",
      stats: [
        { label: "Lead Volume", value: "+35%", icon: 'users' },
        { label: "Cost Per Lead", value: "-50%", icon: 'dollar' },
        { label: "Product Feeds", value: "136", icon: 'target' },
        { label: "Campaigns", value: "68", icon: 'zap' }
      ],
      context: "The iconic American travel trailer brand. The challenge was generating dealer-specific leads across a complex network of local dealerships with varying inventory.",
      pivot: {
        problem: "Conventional static lead forms were generating low-intent leads. Users wanted to see *specific* trailers available near them, not generic brand imagery.",
        solution: "Pivoted to Meta Automotive Inventory Ads (DPA). We stopped selling the 'brand' and started selling the 'inventory,' optimized specifically for on-platform lead submission."
      },
      strategy: "I personally architected and managed a complex catalog system involving 136 individual product feeds across 68 hyper-local campaigns. By utilizing Dynamic Product Ads (DPA) optimized for leads rather than clicks, we put the exact right unit in front of the local buyer. This reduced friction and halved the CPL while significantly increasing intent.",
      techStack: ["Meta DPA (Auto)", "Catalog Manager", "Facebook Lead Forms", "Dynamic Feeds", "Geo-Fencing"]
    }
  ],
  credentials: [
    "Meta Certified Media Buying Professional",
    "Meta Certified Digital Marketing Associate",
    "Google AI-Powered Shopping Ads",
    "Shopify CRO Overview and Best Practices Course Completion"
  ],
  contact: {
    email: "HireEricBoling@gmail.com",
    linkedin: "https://www.linkedin.com/in/eric-boling",
    portfolio: "Coming Soon"
  },
  faqs: [
    {
      question: "Tell us about yourself.",
      answer: "My name’s Eric Boling. I’m currently a Digital Media Strategist at RedTag Digital, a full-service agency based in Louisville, Kentucky. I’ve spent the last four years focused on performance, and growing my Paid Social and Paid Search clients businesses through campaigns on Meta and Google, with some crossover into TikTok, LinkedIn, and a few other platforms. Before that, I had a few different roles in eCommerce managing $40M on eBay, Amazon, and our website, and then as a Creator and Content Marketer - creating long and short-form content, as well as video ads for Meta. All in, I’ve been in this space for about seven years.\n\nAt RedTag, I lead paid social strategy for all of our eCommerce clients. I’ve worked with handful of brands—especially national DTC and apparel brands—helping them grow online sales, improve ROAS, and scale their accounts efficiently.\n\nI also bring a background that helps me look beyond just the ad platform. My experience in content creation and eCommerce has made it easier to collaborate with creative, dev, and SEO teams to solve problems, spot opportunities, and push performance forward. That cross-functional understanding has been a big asset in client success.\n\nAt this stage in my career, I’m looking to specialize further—at an agency that already excels in this space. That’s what brought me to you. I want to work with a team where I can contribute at a high level, manage larger accounts, and collaborate with other performance experts doing this at an advanced level. I’m excited by the chance to contribute my skills, grow alongside your team, and help push performance even further."
    },
    {
      question: "Why are you leaving your current job / why do you want to work at ____?",
      answer: "{{placeholder}}"
    },
    {
      question: "Talk about collaboration with other teams/creative team.",
      answer: "{{placeholder}}"
    },
    {
      question: "What is your creative testing strategy?",
      answer: "{{placeholder}}"
    }
  ]
};
