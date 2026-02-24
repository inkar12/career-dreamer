// Career paths for Interest Space visualization
// source: "database" = blue dot, "ai" = green dot
// dimensions: growth 🌱, strength 💪, passion 💖 (0-1 scale for emoji filter emphasis)

export interface PolymathMeta {
  intersection: string;
  whyFit: string[];
  proofTask: string;
  twoWeekExperiment: string;
}

export interface CareerNode {
  id: string;
  title: string;
  source: "database" | "ai";
  dimensions: { growth: number; strength: number; passion: number };
  dayInLife: string[];
  growthAreas: { skill: string; description: string }[];
  polymathMeta?: PolymathMeta;
}

function slug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export const CAREER_PATHS: CareerNode[] = [
  {
    id: "product-owner",
    title: "Product Owner",
    source: "database",
    dimensions: { growth: 0.7, strength: 0.4, passion: 0.9 },
    dayInLife: [
      "Prioritize backlog and groom user stories with the team.",
      "Run sprint planning and stakeholder alignment meetings.",
      "Define product vision and roadmap based on user feedback.",
    ],
    growthAreas: [
      { skill: "Stakeholder Management", description: "Your ability to align cross-functional teams provides a strong foundation. Develop deeper negotiation and influence skills to drive product decisions across larger organizations." },
      { skill: "Data-Driven Decisions", description: "Understanding metrics and A/B testing will help you validate product hypotheses. Build proficiency in analytics tools and experimentation frameworks." },
    ],
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    source: "database",
    dimensions: { growth: 0.95, strength: 0.8, passion: 0.7 },
    dayInLife: [
      "Build and tune ML models for predictive analytics.",
      "Clean and explore datasets to uncover insights.",
      "Present findings and recommendations to stakeholders.",
    ],
    growthAreas: [
      { skill: "Machine Learning", description: "Your statistical foundation supports model development. Expand into deep learning and NLP for broader impact." },
      { skill: "Data Engineering", description: "Understanding pipelines and data quality will scale your work. Learn Spark, Airflow, or similar tools." },
    ],
  },
  {
    id: "robotics-technician",
    title: "Robotics Technician",
    source: "database",
    dimensions: { growth: 0.6, strength: 0.95, passion: 0.5 },
    dayInLife: [
      "Assemble and install robotic systems according to design specifications.",
      "Perform routine maintenance and calibration on robotic equipment to ensure optimal performance.",
      "Troubleshoot and repair mechanical, electrical, and software issues within robotic systems.",
    ],
    growthAreas: [
      { skill: "PLC Programming", description: "Your experience with software systems provides a strong foundation for PLC logic and structure. Develop proficiency in PLC languages and hardware to control robotic systems." },
      { skill: "Mechanical Aptitude", description: "Understanding mechanical systems and diagnostics will help you troubleshoot faster. Focus on hydraulics, pneumatics, and mechanical assembly." },
      { skill: "Robotics Maintenance", description: "Expand your knowledge of preventive maintenance schedules and predictive diagnostics for industrial robots." },
      { skill: "Welding Skills", description: "Basic welding and fabrication skills support repair and modification of robotic fixtures and enclosures." },
    ],
  },
  {
    id: "software-developer",
    title: "Software Developer / Engineer",
    source: "database",
    dimensions: { growth: 0.8, strength: 0.9, passion: 0.6 },
    dayInLife: [
      "Write, review, and deploy code for new features and bug fixes.",
      "Collaborate with product and design on technical requirements.",
      "Participate in code reviews and architecture discussions.",
    ],
    growthAreas: [
      { skill: "System Design", description: "Scaling from features to systems requires understanding distributed systems, caching, and scalability patterns." },
      { skill: "DevOps Practices", description: "CI/CD, containerization, and observability will help you ship faster and more reliably." },
    ],
  },
  {
    id: "machine-learning-engineer",
    title: "Machine Learning Engineer",
    source: "ai",
    dimensions: { growth: 0.95, strength: 0.85, passion: 0.8 },
    dayInLife: [
      "Design and train ML models for production use cases.",
      "Build pipelines for data ingestion, preprocessing, and model serving.",
      "Monitor model performance and iterate on improvements.",
    ],
    growthAreas: [
      { skill: "MLOps", description: "Deploying and maintaining models at scale requires versioning, monitoring, and automated retraining pipelines." },
      { skill: "Distributed Training", description: "Training large models efficiently demands knowledge of PyTorch/TensorFlow distributed workflows." },
    ],
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    source: "ai",
    dimensions: { growth: 0.9, strength: 0.8, passion: 0.85 },
    dayInLife: [
      "Integrate LLMs and AI APIs into applications.",
      "Fine-tune models for domain-specific tasks.",
      "Optimize inference latency and cost.",
    ],
    growthAreas: [
      { skill: "Prompt Engineering", description: "Mastering prompt design and RAG patterns unlocks practical AI applications quickly." },
      { skill: "Model Fine-Tuning", description: "LoRA, adapter layers, and instruction tuning will let you customize models for your use case." },
    ],
  },
  {
    id: "robotics-engineer",
    title: "Robotics Engineer",
    source: "database",
    dimensions: { growth: 0.85, strength: 0.9, passion: 0.7 },
    dayInLife: [
      "Design robotic systems and select hardware components.",
      "Develop control algorithms and simulation models.",
      "Test and validate systems in lab and field environments.",
    ],
    growthAreas: [
      { skill: "ROS/ROS2", description: "Robot Operating System is the standard for robotics software. Build projects with perception, planning, and control stacks." },
      { skill: "Computer Vision", description: "Sensors and perception are core to robotics. Learn object detection, SLAM, and 3D vision." },
    ],
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    source: "database",
    dimensions: { growth: 0.75, strength: 0.9, passion: 0.5 },
    dayInLife: [
      "Design and build data pipelines and ETL workflows.",
      "Maintain data warehouses and lakehouses.",
      "Ensure data quality, governance, and documentation.",
    ],
    growthAreas: [
      { skill: "Stream Processing", description: "Real-time data demands Kafka, Flink, or similar. Learn event-driven architectures." },
      { skill: "Data Modeling", description: "Dimensional modeling and data vault patterns help you design scalable schemas." },
    ],
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    source: "ai",
    dimensions: { growth: 0.8, strength: 0.85, passion: 0.5 },
    dayInLife: [
      "Manage cloud infrastructure and deployment automation.",
      "Implement security, networking, and cost optimization.",
      "Support development teams with platform services.",
    ],
    growthAreas: [
      { skill: "Infrastructure as Code", description: "Terraform, Pulumi, or CDK will help you manage cloud resources reliably and at scale." },
      { skill: "Kubernetes", description: "Container orchestration is essential for modern cloud-native systems." },
    ],
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    source: "ai",
    dimensions: { growth: 0.7, strength: 0.95, passion: 0.5 },
    dayInLife: [
      "Automate CI/CD pipelines and deployment workflows.",
      "Monitor system health and troubleshoot incidents.",
      "Improve developer experience and tooling.",
    ],
    growthAreas: [
      { skill: "Observability", description: "Metrics, logs, and traces form the foundation. Master OpenTelemetry and modern APM tools." },
      { skill: "SRE Practices", description: "SLIs, SLOs, error budgets, and blameless postmortems will mature your operations." },
    ],
  },
  {
    id: "ai-product-manager",
    title: "AI Product Manager",
    source: "ai",
    dimensions: { growth: 0.85, strength: 0.5, passion: 0.95 },
    dayInLife: [
      "Define AI product strategy and roadmaps.",
      "Work with eng and research to prioritize model capabilities.",
      "Evaluate ethical implications and user trust.",
    ],
    growthAreas: [
      { skill: "AI/ML Fundamentals", description: "Understanding model capabilities and limitations helps you scope realistic product features." },
      { skill: "Responsible AI", description: "Bias, fairness, and explainability are critical for trusted AI products." },
    ],
  },
  {
    id: "web-developer",
    title: "Web Developer",
    source: "database",
    dimensions: { growth: 0.7, strength: 0.9, passion: 0.6 },
    dayInLife: [
      "Build responsive UIs with modern frameworks.",
      "Implement APIs and integrate with backends.",
      "Optimize performance and accessibility.",
    ],
    growthAreas: [
      { skill: "Full-Stack Depth", description: "Expand from frontend to backend and databases for end-to-end ownership." },
      { skill: "Web Performance", description: "Core Web Vitals, lazy loading, and bundle optimization improve user experience." },
    ],
  },
  {
    id: "environmental-engineer",
    title: "Environmental Engineer",
    source: "database",
    dimensions: { growth: 0.6, strength: 0.7, passion: 0.95 },
    dayInLife: [
      "Design systems for pollution control and resource management.",
      "Conduct environmental impact assessments.",
      "Ensure compliance with regulations and sustainability goals.",
    ],
    growthAreas: [
      { skill: "Sustainability Metrics", description: "Life cycle assessment and carbon accounting support data-driven sustainability decisions." },
      { skill: "Regulatory Knowledge", description: "Stay current with EPA, local, and international environmental regulations." },
    ],
  },
  {
    id: "quantitative-analyst",
    title: "Quantitative Analyst (Quant)",
    source: "ai",
    dimensions: { growth: 0.9, strength: 0.95, passion: 0.6 },
    dayInLife: [
      "Develop quantitative models for trading and risk.",
      "Backtest strategies and analyze market data.",
      "Collaborate with traders and portfolio managers.",
    ],
    growthAreas: [
      { skill: "Statistical Arbitrage", description: "Advanced time series and signal processing support alpha generation." },
      { skill: "Risk Management", description: "VaR, stress testing, and portfolio optimization are essential quant skills." },
    ],
  },
  {
    id: "software-architect",
    title: "Software Architect",
    source: "ai",
    dimensions: { growth: 0.8, strength: 0.9, passion: 0.7 },
    dayInLife: [
      "Design system architecture and technical standards.",
      "Evaluate technologies and drive adoption decisions.",
      "Mentor engineers and conduct architecture reviews.",
    ],
    growthAreas: [
      { skill: "Domain-Driven Design", description: "DDD helps align architecture with business domains and bounded contexts." },
      { skill: "Distributed Systems", description: "Consistency, partitioning, and failure handling are core to scalable designs." },
    ],
  },
  {
    id: "hardware-engineer",
    title: "Hardware Engineer",
    source: "database",
    dimensions: { growth: 0.7, strength: 0.95, passion: 0.6 },
    dayInLife: [
      "Design circuits and PCB layouts.",
      "Prototype and test hardware iterations.",
      "Work with manufacturing on production processes.",
    ],
    growthAreas: [
      { skill: "FPGA/ASIC", description: "Digital design and HDL skills enable custom silicon and acceleration." },
      { skill: "Signal Integrity", description: "High-speed design requires understanding of EMI, impedance, and layout best practices." },
    ],
  },
  {
    id: "embedded-systems-engineer",
    title: "Embedded Systems Engineer",
    source: "ai",
    dimensions: { growth: 0.75, strength: 0.95, passion: 0.6 },
    dayInLife: [
      "Develop firmware for microcontrollers and SoCs.",
      "Optimize for power, latency, and real-time constraints.",
      "Debug hardware-software interactions.",
    ],
    growthAreas: [
      { skill: "RTOS", description: "Real-time operating systems like FreeRTOS and Zephyr are standard for embedded." },
      { skill: "Low-Power Design", description: "Battery and IoT devices demand power profiling and optimization." },
    ],
  },
  {
    id: "robotics-software-engineer",
    title: "Robotics Software Engineer",
    source: "ai",
    dimensions: { growth: 0.9, strength: 0.9, passion: 0.75 },
    dayInLife: [
      "Implement perception, planning, and control algorithms.",
      "Integrate sensors and actuation in simulation and real robots.",
      "Deploy and maintain robots in production environments.",
    ],
    growthAreas: [
      { skill: "Motion Planning", description: "Path planning, trajectory optimization, and collision avoidance are core robotics skills." },
      { skill: "Sensor Fusion", description: "Combining lidar, camera, and IMU data improves perception robustness." },
    ],
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence Architect / Developer",
    source: "database",
    dimensions: { growth: 0.6, strength: 0.8, passion: 0.6 },
    dayInLife: [
      "Design dashboards and reports for business users.",
      "Model data for analytics and self-service BI.",
      "Optimize queries and data refresh pipelines.",
    ],
    growthAreas: [
      { skill: "Data Modeling", description: "Star schemas, slowly changing dimensions, and semantic layers power effective BI." },
      { skill: "Visualization Design", description: "Effective dashboards tell a story. Study information design and user needs." },
    ],
  },
  {
    id: "computer-scientist",
    title: "Computer Scientist",
    source: "database",
    dimensions: { growth: 0.95, strength: 0.85, passion: 0.8 },
    dayInLife: [
      "Conduct research in algorithms, systems, or AI.",
      "Publish papers and present at conferences.",
      "Collaborate with industry and academia.",
    ],
    growthAreas: [
      { skill: "Research Methodology", description: "Rigorous experiments, baselines, and reproducibility strengthen your research impact." },
      { skill: "Academic Writing", description: "Clear technical writing and storytelling amplify your contributions." },
    ],
  },
  {
    id: "network-engineer",
    title: "Network Engineer / Architect",
    source: "database",
    dimensions: { growth: 0.6, strength: 0.9, passion: 0.5 },
    dayInLife: [
      "Design and maintain network infrastructure.",
      "Troubleshoot connectivity and performance issues.",
      "Implement security policies and monitoring.",
    ],
    growthAreas: [
      { skill: "Cloud Networking", description: "VPCs, load balancers, and SD-WAN extend networking into the cloud." },
      { skill: "Network Automation", description: "Ansible, Netmiko, and API-driven config reduce manual toil." },
    ],
  },
  {
    id: "sales-engineer",
    title: "Sales Engineer",
    source: "database",
    dimensions: { growth: 0.5, strength: 0.7, passion: 0.85 },
    dayInLife: [
      "Demonstrate products and technical solutions to prospects.",
      "Support sales with technical responses and POCs.",
      "Bridge between product, engineering, and customers.",
    ],
    growthAreas: [
      { skill: "Technical Storytelling", description: "Translating features into business value and use cases wins deals." },
      { skill: "Discovery and Scoping", description: "Asking the right questions helps you design winning solutions." },
    ],
  },
  {
    id: "manufacturing-engineer",
    title: "Manufacturing Engineer",
    source: "database",
    dimensions: { growth: 0.5, strength: 0.9, passion: 0.5 },
    dayInLife: [
      "Optimize production processes and quality control.",
      "Design fixtures and tooling for assembly lines.",
      "Implement lean and continuous improvement.",
    ],
    growthAreas: [
      { skill: "Automation", description: "PLC, robotics, and MES integration modernize manufacturing." },
      { skill: "Quality Systems", description: "Six Sigma, SPC, and root cause analysis improve yield and reliability." },
    ],
  },
  {
    id: "industrial-engineer",
    title: "Industrial Engineer",
    source: "database",
    dimensions: { growth: 0.6, strength: 0.85, passion: 0.5 },
    dayInLife: [
      "Analyze workflows and optimize operations.",
      "Design layouts and process improvements.",
      "Reduce waste and improve efficiency.",
    ],
    growthAreas: [
      { skill: "Simulation", description: "Discrete event simulation models complex systems before implementation." },
      { skill: "Supply Chain", description: "Understanding end-to-end supply chains supports broader optimization." },
    ],
  },
  {
    id: "mobile-developer",
    title: "Mobile Applications Developer",
    source: "database",
    dimensions: { growth: 0.7, strength: 0.9, passion: 0.6 },
    dayInLife: [
      "Build native or cross-platform mobile apps.",
      "Implement UI/UX and integrate backend APIs.",
      "Optimize performance and battery usage.",
    ],
    growthAreas: [
      { skill: "Cross-Platform", description: "React Native, Flutter, or Kotlin Multiplatform expand your reach." },
      { skill: "Mobile UX", description: "Platform guidelines, gestures, and accessibility create polished apps." },
    ],
  },
  {
    id: "qa-engineer",
    title: "Software QA Engineer / Tester",
    source: "database",
    dimensions: { growth: 0.6, strength: 0.85, passion: 0.5 },
    dayInLife: [
      "Design and execute test plans and cases.",
      "Automate tests and integrate into CI/CD.",
      "Report bugs and verify fixes.",
    ],
    growthAreas: [
      { skill: "Test Automation", description: "Selenium, Playwright, or similar tools scale your testing." },
      { skill: "Performance Testing", description: "Load and stress testing validate non-functional requirements." },
    ],
  },
  {
    id: "computer-programmer",
    title: "Computer Programmer",
    source: "database",
    dimensions: { growth: 0.65, strength: 0.9, passion: 0.55 },
    dayInLife: [
      "Write and maintain code for applications.",
      "Debug issues and implement bug fixes.",
      "Collaborate with team on code reviews.",
    ],
    growthAreas: [
      { skill: "Software Design Patterns", description: "Patterns improve maintainability and communication with other developers." },
      { skill: "Version Control", description: "Git workflows, branching strategies, and code review practices support collaboration." },
    ],
  },
  {
    id: "validation-engineer",
    title: "Validation Engineer",
    source: "database",
    dimensions: { growth: 0.5, strength: 0.9, passion: 0.45 },
    dayInLife: [
      "Validate systems against regulatory and quality requirements.",
      "Document validation protocols and results.",
      "Support audits and compliance activities.",
    ],
    growthAreas: [
      { skill: "Regulatory Frameworks", description: "FDA, GxP, or ISO requirements vary by industry. Build domain knowledge." },
      { skill: "Risk Assessment", description: "FMEA and risk-based validation prioritize high-impact testing." },
    ],
  },
  // Business Analytics
  {
    id: "business-analyst",
    title: "Business Analyst",
    source: "database",
    dimensions: { growth: 0.75, strength: 0.75, passion: 0.65 },
    dayInLife: [
      "Gather and document business requirements from stakeholders.",
      "Analyze processes and recommend improvements.",
      "Create reports, user stories, and specifications for development teams.",
    ],
    growthAreas: [
      { skill: "Requirements Elicitation", description: "Master techniques like workshops, interviews, and prototyping to uncover true business needs." },
      { skill: "Process Modeling", description: "BPMN, swimlane diagrams, and value stream mapping clarify workflows and bottlenecks." },
    ],
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    source: "database",
    dimensions: { growth: 0.8, strength: 0.85, passion: 0.6 },
    dayInLife: [
      "Query databases and build reports to answer business questions.",
      "Create dashboards and visualizations in Tableau, Power BI, or similar.",
      "Identify trends, anomalies, and insights to guide decisions.",
    ],
    growthAreas: [
      { skill: "SQL & Statistics", description: "Deepen your ability to extract and interpret data with advanced queries and statistical methods." },
      { skill: "Storytelling with Data", description: "Turn numbers into narratives that drive action. Study design and communication." },
    ],
  },
  {
    id: "investment-banking-analyst",
    title: "Investment Banking Analyst",
    source: "database",
    dimensions: { growth: 0.9, strength: 0.85, passion: 0.65 },
    dayInLife: [
      "Build financial models and prepare pitch materials for M&A and capital markets.",
      "Conduct due diligence and market research for deals.",
      "Support senior bankers with analysis and client presentations.",
    ],
    growthAreas: [
      { skill: "Financial Modeling", description: "LBO, DCF, and merger models are core to IB. Master Excel and valuation frameworks." },
      { skill: "Deal Process", description: "Understand the end-to-end process from mandate to closing." },
    ],
  },
  {
    id: "financial-analyst",
    title: "Financial Analyst",
    source: "database",
    dimensions: { growth: 0.75, strength: 0.8, passion: 0.6 },
    dayInLife: [
      "Build financial models and forecasts.",
      "Analyze company performance, budgets, and investments.",
      "Prepare presentations and recommendations for leadership.",
    ],
    growthAreas: [
      { skill: "Financial Modeling", description: "DCF, LBO, and scenario analysis are core to valuation and planning." },
      { skill: "Industry Knowledge", description: "Understand sector-specific metrics and drivers to provide relevant analysis." },
    ],
  },
  {
    id: "product-analyst",
    title: "Product Analyst",
    source: "ai",
    dimensions: { growth: 0.85, strength: 0.8, passion: 0.7 },
    dayInLife: [
      "Define metrics and track product performance.",
      "Run A/B tests and analyze experiment results.",
      "Partner with product managers to inform roadmap decisions.",
    ],
    growthAreas: [
      { skill: "Experiment Design", description: "Learn statistical rigor for experiments—power, significance, and causal inference." },
      { skill: "Product Sense", description: "Combine data with user research to understand why metrics move." },
    ],
  },
  // Sales Development
  {
    id: "sales-development-rep",
    title: "Sales Development Representative (SDR)",
    source: "database",
    dimensions: { growth: 0.7, strength: 0.75, passion: 0.8 },
    dayInLife: [
      "Research and prospect new leads via outreach (email, calls, LinkedIn).",
      "Qualify opportunities and book meetings for account executives.",
      "Update CRM and track pipeline activity.",
    ],
    growthAreas: [
      { skill: "Outbound Prospecting", description: "Master cold outreach, personalization, and persistence to build a strong pipeline." },
      { skill: "Discovery Conversations", description: "Ask the right questions to identify fit and pain points before passing to sales." },
    ],
  },
  {
    id: "account-executive",
    title: "Account Executive",
    source: "database",
    dimensions: { growth: 0.65, strength: 0.7, passion: 0.85 },
    dayInLife: [
      "Conduct discovery calls and demos with prospects.",
      "Navigate negotiations, proposals, and contract cycles.",
      "Meet quota and grow territory revenue.",
    ],
    growthAreas: [
      { skill: "Objection Handling", description: "Learn to address concerns confidently and turn resistance into commitment." },
      { skill: "Executive Presence", description: "Communicate value to C-level and build trust in complex sales." },
    ],
  },
  {
    id: "customer-success-manager",
    title: "Customer Success Manager",
    source: "database",
    dimensions: { growth: 0.65, strength: 0.7, passion: 0.9 },
    dayInLife: [
      "Onboard new customers and drive adoption.",
      "Conduct check-ins and business reviews.",
      "Identify expansion opportunities and reduce churn.",
    ],
    growthAreas: [
      { skill: "Customer Advocacy", description: "Turn happy customers into references, case studies, and renewal advocates." },
      { skill: "Health Scoring", description: "Use usage and engagement data to predict at-risk accounts." },
    ],
  },
  // Architectural Design
  {
    id: "architect",
    title: "Architect (Building Design)",
    source: "database",
    dimensions: { growth: 0.7, strength: 0.8, passion: 0.9 },
    dayInLife: [
      "Design buildings and spaces using sketches, models, and CAD/BIM software.",
      "Collaborate with clients, engineers, and contractors.",
      "Ensure designs meet codes, budgets, and sustainability standards.",
    ],
    growthAreas: [
      { skill: "BIM & Parametric Design", description: "Revit, Rhino, and Grasshopper enable complex, data-driven designs." },
      { skill: "Sustainable Design", description: "LEED, passive house, and net-zero principles shape the future of buildings." },
    ],
  },
  {
    id: "interior-designer",
    title: "Interior Designer",
    source: "database",
    dimensions: { growth: 0.6, strength: 0.7, passion: 0.95 },
    dayInLife: [
      "Plan layouts, select materials, and specify furnishings.",
      "Create mood boards and 3D visualizations for clients.",
      "Coordinate with contractors and vendors on installation.",
    ],
    growthAreas: [
      { skill: "Space Planning", description: "Balance aesthetics with function, flow, and human factors in every layout." },
      { skill: "Materials & Sourcing", description: "Build knowledge of sustainable and locally sourced options." },
    ],
  },
  {
    id: "landscape-architect",
    title: "Landscape Architect",
    source: "database",
    dimensions: { growth: 0.65, strength: 0.75, passion: 0.9 },
    dayInLife: [
      "Design outdoor spaces—parks, campuses, streetscapes, and private gardens.",
      "Select plants, hardscape materials, and irrigation systems.",
      "Address stormwater, ecology, and accessibility in designs.",
    ],
    growthAreas: [
      { skill: "Ecological Design", description: "Native plantings, habitat restoration, and green infrastructure are increasingly central." },
      { skill: "GIS & Site Analysis", description: "Use spatial data to inform site selection and design decisions." },
    ],
  },
  {
    id: "ux-designer",
    title: "UX / Product Designer",
    source: "ai",
    dimensions: { growth: 0.85, strength: 0.8, passion: 0.9 },
    dayInLife: [
      "Conduct user research and create wireframes and prototypes.",
      "Design flows and interfaces for digital products.",
      "Iterate based on feedback and usability testing.",
    ],
    growthAreas: [
      { skill: "User Research", description: "Interviews, surveys, and usability tests uncover needs that drive design." },
      { skill: "Design Systems", description: "Create reusable components and patterns for consistency at scale." },
    ],
  },
  // Marketing & Creative
  {
    id: "digital-marketing-manager",
    title: "Digital Marketing Manager",
    source: "database",
    dimensions: { growth: 0.75, strength: 0.7, passion: 0.8 },
    dayInLife: [
      "Run campaigns across paid search, social, email, and content.",
      "Analyze performance and optimize spend and messaging.",
      "Align with sales and product on lead gen and brand goals.",
    ],
    growthAreas: [
      { skill: "Marketing Analytics", description: "Attribution, funnel analysis, and experimentation drive smarter decisions." },
      { skill: "Copywriting & Creative", description: "Compelling messaging and creative concepts cut through noise." },
    ],
  },
  {
    id: "content-strategist",
    title: "Content Strategist",
    source: "database",
    dimensions: { growth: 0.7, strength: 0.65, passion: 0.9 },
    dayInLife: [
      "Define content plans and editorial calendars.",
      "Write or oversee blog posts, guides, and social content.",
      "Measure engagement and refine content for audience fit.",
    ],
    growthAreas: [
      { skill: "SEO & Discoverability", description: "Keyword research and on-page optimization help content reach the right people." },
      { skill: "Content Operations", description: "Workflow, CMS, and collaboration tools scale content production." },
    ],
  },
  {
    id: "brand-manager",
    title: "Brand Manager",
    source: "database",
    dimensions: { growth: 0.7, strength: 0.65, passion: 0.9 },
    dayInLife: [
      "Develop brand positioning, voice, and visual identity.",
      "Launch campaigns and track brand health metrics.",
      "Collaborate with creative, marketing, and product teams.",
    ],
    growthAreas: [
      { skill: "Brand Strategy", description: "Differentiation, audience understanding, and storytelling build lasting brands." },
      { skill: "Cross-Functional Leadership", description: "Influence without authority across teams and agencies." },
    ],
  },
  // Healthcare & Education
  {
    id: "healthcare-analyst",
    title: "Healthcare Data Analyst",
    source: "database",
    dimensions: { growth: 0.8, strength: 0.8, passion: 0.85 },
    dayInLife: [
      "Analyze patient outcomes, utilization, and cost data.",
      "Support quality improvement and population health initiatives.",
      "Report to clinical and administrative stakeholders.",
    ],
    growthAreas: [
      { skill: "Clinical Workflows", description: "Understanding how care is delivered improves analysis relevance." },
      { skill: "Healthcare Regulations", description: "HIPAA, value-based care, and reporting requirements shape data use." },
    ],
  },
  {
    id: "instructional-designer",
    title: "Instructional Designer",
    source: "database",
    dimensions: { growth: 0.75, strength: 0.7, passion: 0.9 },
    dayInLife: [
      "Design courses, training modules, and learning experiences.",
      "Apply learning theory and assess effectiveness.",
      "Work with subject matter experts and use authoring tools.",
    ],
    growthAreas: [
      { skill: "Learning Science", description: "Cognitive load, spaced repetition, and feedback improve retention." },
      { skill: "Multimedia Production", description: "Video, simulations, and interactive elements enhance engagement." },
    ],
  },
  {
    id: "corporate-trainer",
    title: "Corporate Trainer",
    source: "database",
    dimensions: { growth: 0.65, strength: 0.7, passion: 0.9 },
    dayInLife: [
      "Deliver in-person or virtual training sessions.",
      "Develop materials and assess learner progress.",
      "Partner with HR and managers on development needs.",
    ],
    growthAreas: [
      { skill: "Facilitation", description: "Engage diverse learners, handle questions, and adapt in real time." },
      { skill: "Learning Technology", description: "LMS, virtual classrooms, and microlearning tools expand your reach." },
    ],
  },
  // Legal & Consulting
  {
    id: "management-consultant",
    title: "Management Consultant",
    source: "database",
    dimensions: { growth: 0.9, strength: 0.8, passion: 0.7 },
    dayInLife: [
      "Analyze client problems and develop recommendations.",
      "Create slides, models, and presentations for executives.",
      "Work in teams on strategy, operations, or M&A projects.",
    ],
    growthAreas: [
      { skill: "Structured Problem Solving", description: "MECE frameworks and hypothesis-driven analysis clarify complex issues." },
      { skill: "Client Communication", description: "Present clearly under pressure and build executive trust." },
    ],
  },
  {
    id: "paralegal",
    title: "Paralegal",
    source: "database",
    dimensions: { growth: 0.6, strength: 0.8, passion: 0.65 },
    dayInLife: [
      "Conduct legal research and draft documents.",
      "Organize case files and support attorneys.",
      "Assist with filings, deadlines, and client communications.",
    ],
    growthAreas: [
      { skill: "Legal Research", description: "Master databases and citation to find and synthesize relevant law." },
      { skill: "Specialization", description: "Immigration, IP, corporate, or litigation—depth in one area adds value." },
    ],
  },
  {
    id: "project-manager",
    title: "Project Manager",
    source: "database",
    dimensions: { growth: 0.75, strength: 0.8, passion: 0.65 },
    dayInLife: [
      "Define scope, timelines, and resources for projects.",
      "Track progress, manage risks, and run status meetings.",
      "Remove blockers and keep stakeholders aligned.",
    ],
    growthAreas: [
      { skill: "Agile & Scrum", description: "Iterative delivery and cross-functional teams require adaptive project approaches." },
      { skill: "Stakeholder Management", description: "Navigate competing priorities and build consensus across teams." },
    ],
  },
  // HR, Operations & More
  {
    id: "hr-analyst",
    title: "HR / People Analyst",
    source: "database",
    dimensions: { growth: 0.7, strength: 0.75, passion: 0.75 },
    dayInLife: [
      "Analyze turnover, engagement, and workforce metrics.",
      "Support talent acquisition and retention strategies.",
      "Build dashboards for HR and leadership.",
    ],
    growthAreas: [
      { skill: "People Analytics", description: "Combine HR data with business outcomes to drive talent decisions." },
      { skill: "Organizational Psychology", description: "Understand motivation, culture, and team dynamics." },
    ],
  },
  {
    id: "game-developer",
    title: "Game Developer",
    source: "ai",
    dimensions: { growth: 0.85, strength: 0.9, passion: 0.95 },
    dayInLife: [
      "Design and implement game mechanics and systems.",
      "Work with artists and designers on Unity/Unreal projects.",
      "Optimize performance and debug gameplay.",
    ],
    growthAreas: [
      { skill: "Game Design", description: "Balance fun, challenge, and progression in interactive experiences." },
      { skill: "Graphics Programming", description: "Shaders, rendering, and real-time 3D bring worlds to life." },
    ],
  },
  {
    id: "journalist",
    title: "Journalist / Reporter",
    source: "database",
    dimensions: { growth: 0.7, strength: 0.65, passion: 0.9 },
    dayInLife: [
      "Research stories, conduct interviews, and verify facts.",
      "Write articles for print or digital publications.",
      "Build sources and follow beats.",
    ],
    growthAreas: [
      { skill: "Investigative Journalism", description: "Deep research and source development uncover important stories." },
      { skill: "Multimedia Storytelling", description: "Video, podcast, and data viz expand your reach." },
    ],
  },
  {
    id: "supply-chain-analyst",
    title: "Supply Chain Analyst",
    source: "database",
    dimensions: { growth: 0.7, strength: 0.8, passion: 0.55 },
    dayInLife: [
      "Analyze inventory, demand, and logistics data.",
      "Optimize sourcing, warehousing, and distribution.",
      "Report on KPIs and support planning.",
    ],
    growthAreas: [
      { skill: "Demand Forecasting", description: "Statistical and ML models improve inventory and capacity planning." },
      { skill: "Supplier Management", description: "Relationships, contracts, and risk mitigation protect the chain." },
    ],
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    source: "ai",
    dimensions: { growth: 0.9, strength: 0.85, passion: 0.7 },
    dayInLife: [
      "Monitor systems for threats and vulnerabilities.",
      "Investigate incidents and implement security controls.",
      "Conduct risk assessments and compliance reviews.",
    ],
    growthAreas: [
      { skill: "Threat Intelligence", description: "Stay ahead of attackers with threat feeds and hunting techniques." },
      { skill: "Security Architecture", description: "Design defense-in-depth and secure-by-default systems." },
    ],
  },
  {
    id: "biomedical-engineer",
    title: "Biomedical Engineer",
    source: "database",
    dimensions: { growth: 0.85, strength: 0.85, passion: 0.9 },
    dayInLife: [
      "Design medical devices and diagnostic equipment.",
      "Conduct testing and validation for regulatory approval.",
      "Collaborate with clinicians and researchers.",
    ],
    growthAreas: [
      { skill: "Regulatory Affairs", description: "FDA and international pathways for medical devices." },
      { skill: "Biomaterials", description: "Understanding tissue interaction and biocompatibility." },
    ],
  },
  {
    id: "social-media-manager",
    title: "Social Media Manager",
    source: "database",
    dimensions: { growth: 0.65, strength: 0.6, passion: 0.9 },
    dayInLife: [
      "Create and schedule content across platforms.",
      "Engage with communities and analyze performance.",
      "Align social strategy with brand and marketing goals.",
    ],
    growthAreas: [
      { skill: "Community Management", description: "Build loyal audiences through authentic engagement." },
      { skill: "Paid Social", description: "Ads and boosting amplify reach with targeted audiences." },
    ],
  },
  {
    id: "technical-writer",
    title: "Technical Writer",
    source: "database",
    dimensions: { growth: 0.65, strength: 0.7, passion: 0.7 },
    dayInLife: [
      "Write documentation, guides, and API references.",
      "Work with engineers to capture and simplify complex topics.",
      "Maintain docs as products evolve.",
    ],
    growthAreas: [
      { skill: "Documentation Systems", description: "Static sites, versioning, and search improve doc usability." },
      { skill: "Developer Experience", description: "Onboarding and self-serve reduce support burden." },
    ],
  },
  {
    id: "recruiter",
    title: "Technical Recruiter",
    source: "database",
    dimensions: { growth: 0.6, strength: 0.7, passion: 0.8 },
    dayInLife: [
      "Source and screen candidates for technical roles.",
      "Conduct interviews and coordinate hiring processes.",
      "Build relationships with hiring managers and candidates.",
    ],
    growthAreas: [
      { skill: "Sourcing Strategies", description: "Boolean search, LinkedIn, and networks find passive talent." },
      { skill: "Candidate Experience", description: "Fast, clear, and respectful processes win top candidates." },
    ],
  },
  {
    id: "venture-capital-associate",
    title: "Venture Capital Associate",
    source: "ai",
    dimensions: { growth: 0.95, strength: 0.75, passion: 0.85 },
    dayInLife: [
      "Source and evaluate startup investment opportunities.",
      "Conduct due diligence and market analysis.",
      "Support portfolio companies and fund operations.",
    ],
    growthAreas: [
      { skill: "Deal Sourcing", description: "Build networks and thesis to find the best opportunities." },
      { skill: "Financial Modeling", description: "Valuation, cap tables, and returns analysis." },
    ],
  },
  // Polymath / cross-domain careers
  {
    id: "product-marketing-manager",
    title: "Product Marketing Manager",
    source: "ai",
    dimensions: { growth: 0.85, strength: 0.7, passion: 0.9 },
    dayInLife: [
      "Bridge product, engineering, and marketing to define go-to-market strategy.",
      "Create positioning, messaging, and launch plans for new products.",
      "Analyze competitors and market trends to inform product roadmap.",
    ],
    growthAreas: [
      { skill: "Technical Acumen", description: "Understanding how products work helps you translate features into customer value and differentiate in market." },
      { skill: "GTM Strategy", description: "Channel mix, pricing, and launch timing are core to successful product launches." },
    ],
    polymathMeta: {
      intersection: "Tech + Marketing",
      whyFit: ["You speak both product and customer; few do.", "Technical depth + messaging = differentiation."],
      proofTask: "Write positioning and 3 key messages for one product in 2 hours.",
      twoWeekExperiment: "Run one small launch (feature, campaign) end-to-end and measure impact.",
    },
  },
  {
    id: "growth-hacker",
    title: "Growth Hacker / Growth Lead",
    source: "ai",
    dimensions: { growth: 0.95, strength: 0.75, passion: 0.9 },
    dayInLife: [
      "Run experiments across acquisition, activation, retention, and referral.",
      "Combine marketing, product, and analytics to drive measurable growth.",
      "Build funnels, automate campaigns, and iterate with data.",
    ],
    growthAreas: [
      { skill: "Experiment Design", description: "Rigorous A/B testing and statistical confidence separate real wins from noise." },
      { skill: "Full-Stack Growth", description: "Basic coding, SQL, and product sense let you ship experiments without waiting on engineering." },
    ],
    polymathMeta: {
      intersection: "Marketing + Tech + Product",
      whyFit: ["You combine creativity with data—both matter for growth.", "Polymath skill stack is exactly what growth needs."],
      proofTask: "Set up one A/B test (even in a spreadsheet) for a real or hypothetical funnel in 2 hours.",
      twoWeekExperiment: "Run 3 small growth experiments and document learnings.",
    },
  },
  {
    id: "startup-operator",
    title: "Startup Operator / Entrepreneur in Residence",
    source: "ai",
    dimensions: { growth: 0.95, strength: 0.7, passion: 0.95 },
    dayInLife: [
      "Wear many hats: strategy, fundraising, ops, and go-to-market at early-stage companies.",
      "Build processes and teams from zero to scale.",
      "Evaluate deals and support portfolio companies from a VC or accelerator.",
    ],
    growthAreas: [
      { skill: "Fundraising", description: "Pitch decks, investor relations, and cap table management are essential for founders and operators." },
      { skill: "Operator Mindset", description: "Move fast, prioritize ruthlessly, and learn from both wins and failures." },
    ],
    polymathMeta: {
      intersection: "Finance + Entrepreneurship",
      whyFit: ["You wear many hats; operators and EIRs do too.", "Breadth + execution speed = fit."],
      proofTask: "Create a one-page pitch or investment memo for one company in 2 hours.",
      twoWeekExperiment: "Shadow one portfolio company or founder and document 5 operational insights.",
    },
  },
  // Polymath intersection careers (pillar + spark)
  {
    id: "science-communicator",
    title: "Science Writer / Science Communicator",
    source: "ai",
    dimensions: { growth: 0.85, strength: 0.65, passion: 0.95 },
    dayInLife: [
      "Turn complex research into stories, articles, or videos for broad audiences.",
      "Collaborate with scientists, educators, and media outlets.",
      "Bridge technical depth with narrative clarity.",
    ],
    growthAreas: [
      { skill: "Narrative Structure", description: "Learn how to translate jargon into engaging narratives without losing accuracy." },
      { skill: "Multimedia", description: "Video, podcast, and interactive formats expand your reach." },
    ],
    polymathMeta: {
      intersection: "Research + Creative",
      whyFit: ["You already know the science; storytelling lets you share it.", "Cross-domain thinking is the core skill."],
      proofTask: "Rewrite one abstract or paper section for a 12-year-old in under 2 hours.",
      twoWeekExperiment: "Publish 3 short explainers on a topic you know, track engagement.",
    },
  },
  {
    id: "edtech-product",
    title: "EdTech Product Manager",
    source: "ai",
    dimensions: { growth: 0.9, strength: 0.7, passion: 0.95 },
    dayInLife: [
      "Define products that improve learning outcomes (apps, platforms, tools).",
      "Work with educators, engineers, and learners to shape roadmaps.",
      "Measure impact through engagement and achievement metrics.",
    ],
    growthAreas: [
      { skill: "Learning Science", description: "Understand how people learn to design effective products." },
      { skill: "Product Discovery", description: "Interviews and experiments with teachers and students." },
    ],
    polymathMeta: {
      intersection: "Education + Tech + Product",
      whyFit: ["You care about learning; tech scales impact.", "Teaching background + product sense = rare combo."],
      proofTask: "Interview 3 educators about one pain point and draft a 1-pager solution.",
      twoWeekExperiment: "Build a tiny learning tool (Notion, spreadsheet, or simple app) and test with 5 users.",
    },
  },
  {
    id: "design-strategist",
    title: "Design Strategist / Service Designer",
    source: "ai",
    dimensions: { growth: 0.85, strength: 0.7, passion: 0.9 },
    dayInLife: [
      "Combine design, research, and business to shape strategy and services.",
      "Run workshops, map journeys, and prototype new offerings.",
      "Bridge C-suite and frontline teams.",
    ],
    growthAreas: [
      { skill: "Facilitation", description: "Lead cross-functional sessions that surface insights and alignment." },
      { skill: "Business Acumen", description: "Connect design decisions to revenue, cost, and risk." },
    ],
    polymathMeta: {
      intersection: "Design + Business + Research",
      whyFit: ["Design gives you tools; strategy gives you influence.", "Pattern recognition across domains is your edge."],
      proofTask: "Map the current experience of one real service (e.g. signing up, onboarding) in 2 hours.",
      twoWeekExperiment: "Run one strategy workshop with a real team and document outcomes.",
    },
  },
  {
    id: "health-tech-product",
    title: "Health Tech Product Manager",
    source: "ai",
    dimensions: { growth: 0.9, strength: 0.75, passion: 0.9 },
    dayInLife: [
      "Ship products for patients, clinicians, or healthcare systems.",
      "Navigate regulatory, clinical, and UX constraints.",
      "Partner with physicians and engineers to prioritize features.",
    ],
    growthAreas: [
      { skill: "Clinical Workflows", description: "Understand how care is delivered to design useful tools." },
      { skill: "Compliance", description: "HIPAA, FDA pathways, and privacy shape what you can ship." },
    ],
    polymathMeta: {
      intersection: "Healthcare + Tech + Product",
      whyFit: ["Healthcare needs people who get both clinical reality and software.", "Impact is immediate and measurable."],
      proofTask: "Shadow one clinician for 2 hours and document 3 workflow pain points.",
      twoWeekExperiment: "Design a simple patient-facing flow (wireframes or prototype) and get feedback from 2 clinicians.",
    },
  },
  {
    id: "sustainability-analyst",
    title: "Sustainability / ESG Analyst",
    source: "ai",
    dimensions: { growth: 0.85, strength: 0.75, passion: 0.95 },
    dayInLife: [
      "Model carbon, ESG metrics, or supply-chain impacts.",
      "Support reporting, strategy, and investor relations.",
      "Bridge science, policy, and business.",
    ],
    growthAreas: [
      { skill: "Life Cycle Assessment", description: "Quantify environmental impact across product lifecycles." },
      { skill: "Reporting Frameworks", description: "GRI, SASB, TCFD—understand standards and disclosure." },
    ],
    polymathMeta: {
      intersection: "Environmental + Finance + Policy",
      whyFit: ["You care about impact; business language gets it heard.", "Data + narrative = change."],
      proofTask: "Calculate the carbon footprint of one product or process in 2 hours.",
      twoWeekExperiment: "Draft an ESG-style report for one small organization or project.",
    },
  },
  {
    id: "innovation-consultant",
    title: "Innovation Consultant / Futures Designer",
    source: "ai",
    dimensions: { growth: 0.95, strength: 0.7, passion: 0.95 },
    dayInLife: [
      "Run foresight, design sprints, or innovation programs for clients.",
      "Synthesize trends, research, and stakeholder input into strategies.",
      "Facilitate teams through ambiguity to clarity.",
    ],
    growthAreas: [
      { skill: "Futures Methods", description: "Scenarios, backcasting, and trend mapping." },
      { skill: "Stakeholder Alignment", description: "Build shared vision across silos." },
    ],
    polymathMeta: {
      intersection: "Design + Research + Business",
      whyFit: ["Polymaths excel in ambiguity; innovation work is all ambiguity.", "Your breadth is the product."],
      proofTask: "Create a 2x2 scenario matrix for one industry or domain in 2 hours.",
      twoWeekExperiment: "Run a mini futures workshop with 3–5 people and document outputs.",
    },
  },
  {
    id: "urban-planner",
    title: "Urban Planner",
    source: "database",
    dimensions: { growth: 0.7, strength: 0.65, passion: 0.9 },
    dayInLife: [
      "Develop plans for land use, transportation, and zoning.",
      "Engage communities and analyze policy impacts.",
      "Prepare reports and presentations for stakeholders.",
    ],
    growthAreas: [
      { skill: "GIS & Spatial Analysis", description: "Maps and data inform equitable and sustainable plans." },
      { skill: "Public Engagement", description: "Inclusive processes build support for change." },
    ],
  },
  {
    id: "pharmaceutical-scientist",
    title: "Pharmaceutical Scientist",
    source: "database",
    dimensions: { growth: 0.9, strength: 0.85, passion: 0.8 },
    dayInLife: [
      "Conduct research on drug discovery and development.",
      "Run experiments and analyze results.",
      "Document and comply with regulatory requirements.",
    ],
    growthAreas: [
      { skill: "Clinical Trials", description: "Design and manage studies from Phase I to approval." },
      { skill: "Regulatory Science", description: "Navigate FDA and global submission pathways." },
    ],
  },
  {
    id: "event-planner",
    title: "Event Planner / Coordinator",
    source: "database",
    dimensions: { growth: 0.6, strength: 0.7, passion: 0.9 },
    dayInLife: [
      "Plan and execute conferences, weddings, or corporate events.",
      "Coordinate vendors, venues, and logistics.",
      "Manage budgets and timelines.",
    ],
    growthAreas: [
      { skill: "Vendor Management", description: "Negotiate, contract, and manage relationships." },
      { skill: "Event Technology", description: "Registration, apps, and virtual hybrid tools." },
    ],
  },
  {
    id: "database-administrator",
    title: "Database Administrator (DBA)",
    source: "database",
    dimensions: { growth: 0.7, strength: 0.9, passion: 0.55 },
    dayInLife: [
      "Manage, tune, and secure database systems.",
      "Plan backups, migrations, and capacity.",
      "Support developers and troubleshoot issues.",
    ],
    growthAreas: [
      { skill: "Performance Tuning", description: "Query optimization, indexing, and scaling strategies." },
      { skill: "Data Governance", description: "Security, privacy, and compliance in data systems." },
    ],
  },
  {
    id: "security-engineer",
    title: "Security Engineer",
    source: "ai",
    dimensions: { growth: 0.85, strength: 0.9, passion: 0.75 },
    dayInLife: [
      "Design and implement security controls.",
      "Conduct penetration testing and code reviews.",
      "Respond to incidents and improve defenses.",
    ],
    growthAreas: [
      { skill: "Application Security", description: "SAST, DAST, and secure SDLC practices." },
      { skill: "Cloud Security", description: "Identity, encryption, and compliance in AWS/GCP/Azure." },
    ],
  },
];

// Keywords for matching questionnaire responses to careers (broader coverage)
export const CAREER_MATCH_KEYWORDS: Record<string, string[]> = {
  tech: ["software", "developer", "engineer", "programming", "web", "tech", "computer", "coding", "ai", "machine learning", "cloud", "devops", "applications", "product"],
  data: ["data", "analytics", "analysis", "metrics", "sql", "excel", "dashboard", "report"],
  research: ["scientist", "research", "academic", "lab", "experiment", "discovery", "publish"],
  impact: ["environmental", "sustainability", "policy", "community", "social", "nonprofit", "esg", "carbon"],
  creative: ["design", "creative", "art", "arts", "artist", "media", "content", "brand", "visual", "science communication", "storytelling"],
  business: ["business", "analyst", "sales", "management", "quant", "consulting", "strategy", "investment", "banking", "finance"],
  architecture: ["architecture", "architect", "building", "space", "interior", "landscape", "cad", "bim", "design buildings"],
  marketing: ["marketing", "campaign", "content", "digital", "brand", "growth", "product marketing"],
  sales: ["sales", "outbound", "prospect", "account", "customer", "revenue", "quota"],
  healthcare: ["healthcare", "health", "clinical", "patient", "medical"],
  education: ["education", "teaching", "training", "instructional", "learning", "edtech"],
  legal: ["legal", "law", "paralegal", "contract", "compliance"],
  project: ["project", "pm", "scrum", "agile", "coordinate"],
  hr: ["hr", "people", "talent", "recruiting", "workforce"],
  game: ["game", "gaming", "unity", "unreal"],
  journalism: ["journalism", "reporter", "writer", "media", "story"],
  supplychain: ["supply chain", "logistics", "procurement", "inventory"],
  security: ["security", "cyber", "infosec", "penetration"],
  biomedical: ["biomedical", "medical device", "pharma", "clinical"],
  events: ["event", "conference", "planning", "coordination"],
  urban: ["urban", "planning", "city", "zoning"],
  venture: ["venture", "vc", "startup", "investment", "entrepreneurship", "entrepreneur", "founder", "operator"],
  polymath: ["polymath", "many interests", "intersection", "cross-domain", "wicked", "innovation", "futures", "design strategy", "service design", "health tech"],
};

// Domain clusters for structured layout (tech, engineering, healthcare stay separate)
export const CAREER_DOMAIN: Record<string, string> = {
  "product-owner": "product", "ai-product-manager": "product", "product-analyst": "product", "product-marketing-manager": "product",
  "data-scientist": "data", "data-engineer": "data", "data-analyst": "data", "business-intelligence": "data",
  "software-developer": "tech", "web-developer": "tech", "cloud-engineer": "tech", "devops-engineer": "tech", "mobile-developer": "tech",
  "qa-engineer": "tech", "computer-programmer": "tech", "ai-engineer": "tech", "machine-learning-engineer": "tech", "software-architect": "tech",
  "embedded-systems-engineer": "tech", "security-engineer": "tech", "database-administrator": "tech", "cybersecurity-analyst": "tech",
  "game-developer": "tech", "technical-writer": "tech", "computer-scientist": "tech", "network-engineer": "tech", "growth-hacker": "tech",
  "robotics-engineer": "engineering", "robotics-technician": "engineering", "robotics-software-engineer": "engineering",
  "hardware-engineer": "engineering", "manufacturing-engineer": "engineering", "industrial-engineer": "engineering",
  "biomedical-engineer": "healthcare", "healthcare-analyst": "healthcare", "pharmaceutical-scientist": "healthcare",
  "environmental-engineer": "engineering", "validation-engineer": "engineering",
  "investment-banking-analyst": "finance", "financial-analyst": "finance", "quantitative-analyst": "finance", "venture-capital-associate": "finance", "startup-operator": "finance",
  "digital-marketing-manager": "marketing", "content-strategist": "marketing", "brand-manager": "marketing", "social-media-manager": "marketing",
  "ux-designer": "creative", "architect": "creative", "interior-designer": "creative", "landscape-architect": "creative",
  "journalist": "creative", "event-planner": "creative",
  "business-analyst": "business", "management-consultant": "business", "project-manager": "business", "account-executive": "business",
  "sales-development-rep": "business", "customer-success-manager": "business", "sales-engineer": "business",
  "hr-analyst": "business", "recruiter": "business", "supply-chain-analyst": "business", "paralegal": "business", "urban-planner": "creative",
  "science-communicator": "creative", "edtech-product": "product", "design-strategist": "creative",
  "health-tech-product": "product", "sustainability-analyst": "business", "innovation-consultant": "business",
};

const DOMAIN_ORDER = ["tech", "data", "engineering", "healthcare", "finance", "marketing", "creative", "business", "product", "other"];

export function careerMatchesArchetypes(careerTitle: string, archetypeKeywords: string[][]): boolean {
  const lower = careerTitle.toLowerCase();
  for (const keywords of archetypeKeywords) {
    if (keywords.some((k) => lower.includes(k))) return true;
  }
  return false;
}

// Min careers when multiple intersections exist; max to avoid overwhelming
const MIN_MATCHED_CAREERS = 6;
const MAX_MATCHED_CAREERS = 15;

// Match whole words only—"art" must not match "pharmaceutical"
function containsWord(text: string, word: string): boolean {
  const w = word.trim();
  if (!w) return false;
  const escaped = w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const hasSpace = /\s/.test(w);
  return hasSpace ? new RegExp(`\\b${escaped.replace(/\s+/g, "\\s+")}\\b`, "i").test(text) : new RegExp(`\\b${escaped}\\b`, "i").test(text);
}

// Direct phrases: when user names a role, strongly prefer that career
const DIRECT_PHRASES: { phrase: string; careerId: string }[] = [
  { phrase: "product marketing", careerId: "product-marketing-manager" },
  { phrase: "growth hacker", careerId: "growth-hacker" },
  { phrase: "growth lead", careerId: "growth-hacker" },
  { phrase: "venture capital", careerId: "venture-capital-associate" },
  { phrase: "vc ", careerId: "venture-capital-associate" },
  { phrase: "startup", careerId: "startup-operator" },
  { phrase: "entrepreneur", careerId: "startup-operator" },
  { phrase: "entrepreneurship", careerId: "startup-operator" },
];

// When user skips questionnaire, show a small curated set instead of 70+ careers
export const DEFAULT_EXPLORE_IDS = [
  "software-developer", "data-analyst", "digital-marketing-manager", "product-owner",
  "management-consultant", "ux-designer", "growth-hacker", "venture-capital-associate",
  "healthcare-analyst", "content-strategist", "project-manager", "journalist",
];

export function matchCareersFromText(text: string): string[] {
  const lower = text.toLowerCase();
  const scores = new Map<string, number>();

  // 1. Direct role-name matching: user wrote "Product Marketing Manager" → prioritize it
  for (const { phrase, careerId } of DIRECT_PHRASES) {
    if (lower.includes(phrase)) scores.set(careerId, (scores.get(careerId) ?? 0) + 100);
  }

  // 2. Find which domains the user mentioned (use word boundaries so "art" ≠ "pharmaceutical")
  const userDomains = new Set<string>();
  for (const [category, keywords] of Object.entries(CAREER_MATCH_KEYWORDS)) {
    if (keywords.some((k) => containsWord(lower, k))) userDomains.add(category);
  }

  // 3. Add careers that match 2+ user domains (cross-path) OR got a direct match. Track 1-domain matches for padding.
  const needsCrossDomain = userDomains.size >= 2;
  const oneDomainScores = new Map<string, number>();
  for (const career of CAREER_PATHS) {
    const titleLower = career.title.toLowerCase();
    let matchedDomains = 0;
    for (const [category, keywords] of Object.entries(CAREER_MATCH_KEYWORDS)) {
      if (!userDomains.has(category)) continue;
      const careerMatches = keywords.filter((k) => containsWord(titleLower, k)).length;
      if (careerMatches > 0) matchedDomains++;
    }
    const overlap = Array.from(userDomains).filter((cat) =>
      CAREER_MATCH_KEYWORDS[cat]?.some((k) => containsWord(titleLower, k))
    ).length;
    const baseScore = overlap * overlap + (scores.get(career.id) ?? 0);
    if (needsCrossDomain && matchedDomains < 2 && !scores.has(career.id)) {
      if (matchedDomains >= 1) oneDomainScores.set(career.id, baseScore);
      continue;
    }
    if (matchedDomains === 0 && !scores.has(career.id)) continue;
    scores.set(career.id, baseScore);
  }

  if (scores.size === 0) return CAREER_PATHS.slice(0, MAX_MATCHED_CAREERS).map((c) => c.id);
  let result = Array.from(scores.entries())
    .filter(([, s]) => s > 0)
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => id);

  // Pad to reach minimum: 1-domain matches (when cross-domain) or same-domain careers (always)
  if (result.length > 0 && result.length < MIN_MATCHED_CAREERS) {
    const existing = new Set(result);
    const padding: string[] = [];
    const addToPadding = (id: string) => {
      if (!existing.has(id)) {
        padding.push(id);
        existing.add(id);
      }
    };
    if (needsCrossDomain) {
      for (const [id] of Array.from(oneDomainScores.entries())
        .sort((a, b) => b[1] - a[1])) {
        addToPadding(id);
      }
    }
    const needed = MIN_MATCHED_CAREERS - result.length;
    if (padding.length < needed) {
      const domainsOfMatches = new Set(
        result.map((id) => CAREER_DOMAIN[id]).filter(Boolean)
      );
      if (domainsOfMatches.size > 0) {
        for (const c of CAREER_PATHS) {
          if (domainsOfMatches.has(CAREER_DOMAIN[c.id] ?? "")) addToPadding(c.id);
        }
      }
    }
    if (padding.length < needed) {
      for (const c of CAREER_PATHS) {
        if (padding.length >= needed) break;
        addToPadding(c.id);
      }
    }
    result = [...result, ...padding.slice(0, needed)];
  }

  return result.slice(0, MAX_MATCHED_CAREERS);
}

export function getCareerById(id: string): CareerNode | undefined {
  return CAREER_PATHS.find((c) => c.id === id || slug(c.title) === id);
}

// Fallback positions: multi-ring layout to prevent overlap
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function getFallbackPositions(count: number): { x: number; y: number }[] {
  const positions: { x: number; y: number }[] = [];
  const centerX = 50;
  const centerY = 50;
  const rings = 5;
  const perRing = Math.ceil(count / rings);
  for (let i = 0; i < count; i++) {
    const ring = Math.floor(i / perRing);
    const idxInRing = i % perRing;
    const angleStep = (2 * Math.PI) / perRing;
    const angle = idxInRing * angleStep + ring * 0.4;
    const rMin = 22 + ring * 6;
    const rMax = rMin + 4;
    const r = rMin + (seededRandom(i * 11) * (rMax - rMin));
    const rx = (seededRandom(i * 7) - 0.5) * 1;
    const ry = (seededRandom(i * 13 + 1) - 0.5) * 1;
    positions.push({
      x: centerX + Math.cos(angle) * r + rx,
      y: centerY + Math.sin(angle) * r + ry,
    });
  }
  return positions;
}

/** Positions careers by domain—spread to avoid overlap, rings within wedges */
export function getPositionsByDomain(careers: CareerNode[]): { x: number; y: number }[] {
  const centerX = 50;
  const centerY = 50;
  const wedgeCount = DOMAIN_ORDER.length;
  const wedgeAngle = (2 * Math.PI) / wedgeCount;
  const byDomain = new Map<string, CareerNode[]>();
  for (const c of careers) {
    const d = CAREER_DOMAIN[c.id] ?? "other";
    if (!byDomain.has(d)) byDomain.set(d, []);
    byDomain.get(d)!.push(c);
  }
  const result: { x: number; y: number }[] = [];
  for (const c of careers) {
    const d = CAREER_DOMAIN[c.id] ?? "other";
    const domainIdx = DOMAIN_ORDER.indexOf(d);
    const wedgeIdx = domainIdx >= 0 ? domainIdx : 0;
    const inDomain = byDomain.get(d)!;
    const idxInDomain = inDomain.indexOf(c);
    const n = inDomain.length;
    const baseAngle = wedgeIdx * wedgeAngle + wedgeAngle / 2;
    const spread = Math.min(wedgeAngle * 0.75, (Math.PI * 1.2) / Math.max(1, n));
    const angleStep = n > 1 ? spread / (n - 1) : 0;
    const angle = baseAngle + angleStep * idxInDomain - spread / 2;
    const rings = Math.ceil(Math.sqrt(n));
    const ring = Math.floor(idxInDomain / Math.ceil(n / rings));
    const rMin = 28 + ring * 12;
    const rMax = rMin + 10;
    const r = rMin + seededRandom(c.id.length * 7 + idxInDomain) * (rMax - rMin);
    const jitter = 2;
    const rx = (seededRandom(idxInDomain * 11) - 0.5) * jitter;
    const ry = (seededRandom(idxInDomain * 13 + 1) - 0.5) * jitter;
    result.push({
      x: centerX + Math.cos(angle) * r + rx,
      y: centerY + Math.sin(angle) * r + ry,
    });
  }
  return result;
}
