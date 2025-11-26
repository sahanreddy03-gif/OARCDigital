import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "wouter";

const blogPosts = [
  {
    id: 1,
    category: "AI Marketing",
    title: "How AI is Revolutionizing Digital Marketing in 2025",
    excerpt: "Discover the cutting-edge AI technologies that are transforming how brands connect with their audiences and drive unprecedented growth.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    readTime: "6 min read",
    date: "Nov 15, 2025"
  },
  {
    id: 2,
    category: "Case Study",
    title: "From 2% to 8%: A Conversion Rate Transformation Story",
    excerpt: "Learn how we helped a mid-size e-commerce brand quadruple their conversion rates using AI-powered personalization and creative optimization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    readTime: "8 min read",
    date: "Nov 8, 2025"
  },
  {
    id: 3,
    category: "Strategy",
    title: "The Complete Guide to AI Employees for Growing Businesses",
    excerpt: "Everything you need to know about hiring AI employees: costs, capabilities, integration strategies, and how to measure ROI effectively.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    readTime: "10 min read",
    date: "Oct 28, 2025"
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
            <Card 
              key={post.id}
              className={`group overflow-hidden hover-elevate transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
                
                <Link href={`/blog/${post.id}`}>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-0 h-auto font-medium text-primary hover:text-primary/80"
                    data-testid={`button-read-article-${post.id}`}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
