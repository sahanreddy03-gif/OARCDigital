"use client";

import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: "restaurant-marketing-malta",
    category: "Revenue Growth",
    title: "Restaurant Marketing in Malta: What the Top Venues Do Differently",
    excerpt: "Why some Malta restaurants are always full and others struggle — the marketing strategies and operational decisions that separate them.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&q=80",
    readTime: "13 min read",
    date: "Mar 1, 2026"
  },
  {
    id: "ai-marketing-malta",
    category: "AI Marketing",
    title: "AI Marketing in Malta: What's Actually Useful for Your Business Right Now",
    excerpt: "Beyond the hype — the AI marketing tools saving Malta businesses real time and money in 2026.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80",
    readTime: "12 min read",
    date: "Mar 1, 2026"
  },
  {
    id: "social-media-management-cost-malta",
    category: "Revenue Growth",
    title: "How Much Does Social Media Management Cost in Malta? (2026 Guide)",
    excerpt: "Real pricing for social media management in Malta — freelancers vs agencies, what you actually get, and how to know if you are being overcharged.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
    readTime: "12 min read",
    date: "Mar 20, 2026"
  }
];

export default function BlogPreviewSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-background"
      data-testid="section-blog-preview"
    >
      <div className={`container mx-auto px-6 md:px-8 lg:px-10 max-w-7xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">From Our Blog</span>
            </div>
            <h2 className="font-bold font-display text-foreground" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: '1.15' }}>
              Latest <span className="italic font-serif">Insights</span>
            </h2>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="rounded-full" data-testid="button-view-all-blog">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card 
                className={`group overflow-hidden hover-elevate transition-all duration-700 cursor-pointer h-full delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                data-testid={`blog-card-${post.id}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant="secondary" 
                      className="bg-white/90 dark:bg-black/80 text-foreground backdrop-blur-sm text-xs"
                      data-testid={`blog-category-${post.id}`}
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 
                    className="font-semibold text-lg mb-2 text-foreground line-clamp-2 group-hover:text-primary transition-colors"
                    data-testid={`blog-title-${post.id}`}
                  >
                    {post.title}
                  </h3>
                  
                  <p 
                    className="text-sm text-muted-foreground line-clamp-2 mb-4"
                    data-testid={`blog-excerpt-${post.id}`}
                  >
                    {post.excerpt}
                  </p>
                  
                  <span className="inline-flex items-center font-medium text-primary text-sm">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
