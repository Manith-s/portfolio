import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { slug } = useParams();

  const projectData: Record<string, any> = {
    "sql-query-engine": {
      title: "SQL Query Explanation & Optimization Engine",
      year: "2024",
      category: "Backend / AI",
      description: "A local, offline-capable tool for SQL analysis, explanation, and optimization using FastAPI, PostgreSQL, and local LLM integration.",
      longDescription: "This project provides a complete API for SQL Explanation (convert SQL to plain English), Query Optimization (suggest performance improvements), Static Analysis (lint and validate SQL), and Plan Analysis (analyze EXPLAIN plans for bottlenecks). The system runs fully offline using FastAPI for the web API, PostgreSQL for database operations, Ollama for local LLM inference, and sqlglot for SQL parsing.",
      techStack: ["Python", "FastAPI", "PostgreSQL", "Ollama", "HypoPG", "Docker"],
      github: "https://github.com/Manith-s/SQL-Query-Explanation-Optimization-Engine-",
      features: [
        "SQL to plain English translation using local LLMs",
        "Cost-based query optimization with HypoPG",
        "Hypothetical index testing without DDL",
        "Prometheus metrics for observability",
        "Deterministic rewrite suggestions",
        "CLI and API interfaces"
      ]
    },
    "cryptoforecast": {
      title: "CryptoForecast: Bitcoin Price Prediction",
      year: "2021",
      category: "Machine Learning",
      description: "A comprehensive ML pipeline for Bitcoin price prediction using multiple advanced models and sophisticated feature engineering.",
      longDescription: "Implements a complete end-to-end machine learning pipeline from data collection through model training to evaluation. Leverages multiple data sources, advanced feature engineering techniques (100+ features including technical indicators and market regimes), and various ML models including traditional ML, deep learning (LSTM, GRU), ensemble methods, and reinforcement learning (PPO, A2C).",
      techStack: ["Python", "TensorFlow", "scikit-learn", "LSTM", "XGBoost", "Pandas"],
      github: "https://github.com/Manith-s/CryptoForecast",
      features: [
        "Multi-source data collection (Binance, CryptoCompare, Yahoo Finance)",
        "100+ engineered features including technical indicators",
        "LSTM and GRU networks for sequence prediction",
        "Ensemble methods (Voting, Stacking, Blending)",
        "Market regime detection and anomaly identification",
        "74% directional accuracy in price movement prediction"
      ]
    },
    "hydroyield": {
      title: "HydroYield: Smart Hydroponic System",
      year: "2022",
      category: "IoT / ML",
      description: "An intelligent Flask-based system for crop recommendation and yield prediction in hydroponic farming environments.",
      longDescription: "HydroYield collects environmental data from IoT sensors, processes it using ML models, and provides actionable recommendations for optimal crop selection. The system uses Random Forest classifiers for crop prediction (97-99% accuracy) and yield estimation, with real-time monitoring, intelligent recommendations, and historical trend analysis.",
      techStack: ["Python", "Flask", "MongoDB", "scikit-learn", "IoT Sensors", "Random Forest"],
      github: "https://github.com/Manith-s/HydroYield",
      features: [
        "Real-time environmental monitoring (temp, humidity, pH)",
        "ML-powered crop recommendation system",
        "Yield prediction with confidence scoring",
        "Growing condition optimization suggestions",
        "Historical analysis and trend visualization",
        "85% accuracy in crop yield prediction"
      ]
    },
    "university-scheduler": {
      title: "University Course Scheduler",
      year: "2025",
      category: "Full Stack",
      description: "Comprehensive system for automating university course schedules using constraint-based optimization.",
      longDescription: "A hybrid architecture combining Node.js/Express backend with Python-based constraint solving engine using Google OR-Tools. Generates optimal schedules satisfying complex requirements like professor availability, course prerequisites, cross-program sharing, and time slot constraints. Features React/TypeScript frontend for visualization and conflict resolution.",
      techStack: ["Node.js", "Express", "React", "TypeScript", "Python", "OR-Tools", "PostgreSQL"],
      github: "https://github.com/Manith-s/University-Scheduler-",
      features: [
        "Constraint Programming (CP-SAT) solver using OR-Tools",
        "Multi-program course association support",
        "Advanced constraint handling (availability, qualifications, patterns)",
        "Conflict detection with detailed explanations",
        "React/TypeScript admin interface",
        "45% reduction in course overlaps"
      ]
    }
  };

  const project = slug ? projectData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link to="/projects" className="text-accent hover:underline">
              ← Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-muted-foreground">{project.year}</span>
                <span className="text-sm font-mono text-accent">{project.category}</span>
              </div>
              <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
              
              <div className="flex gap-4">
                {project.github && (
                  <Button asChild variant="default">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl font-black opacity-30 mb-4">{"</>"}</div>
                <p className="text-muted-foreground">Project Showcase</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string, index: number) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
