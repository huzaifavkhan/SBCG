
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import NewsPostCard from '@/components/NewsPostCard';
import { newsPosts } from '@/data/newsPosts';

const News = () => {
  // Get the newest news post for the featured post section (the new post with id '6')
  const featuredPost = newsPosts.find(post => post.id === '6') || newsPosts[0];
  // Get the rest of the news posts for the grid section
  const otherPosts = newsPosts.filter(post => post.id !== featuredPost?.id);
  
  return (
    <PageLayout>
      <SEO 
        title={"SBCG - News"}
        description="Stay updated with the latest news and insights on AI-powered business solutions, healthcare innovation, and strategic consulting from SBCG."
        keywords={['AI business solutions', 'AI in business', 'business strategy consulting', 'AI consulting services',
                  'AI for banks', 'AI in finance', 'healthcare innovation', 'digital health', 'AI in healthcare',
                  'healthcare consulting', 'strategic consulting', 'business transformation AI', 'AI market insights',
                  'AI news updates', 'AI decision making'
                  ]}
        type="website"
      />
      
      <div className="w-full pt-24 pb-12 bg-gradient-to-b from-black to-sky-900 text-white">
        <div className="container mx-auto px-4 bg">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SBCG News &amp; Insights</h1>
            <p className="text-xl text-gray-300 mb-6">
              The latest trends and news in AI and smart technology
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPost && (
            <Link to={`/news/${featuredPost.slug}`} className="col-span-1 md:col-span-2 lg:col-span-3">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="grid md:grid-cols-2 h-full">
                  <div 
                    className="bg-cover bg-center h-64 md:h-full p-8 flex items-center justify-center"
                    style={{ 
                      backgroundImage: `url('${featuredPost.imageUrl}')`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="text-white text-center bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium inline-block mb-4">Featured</span>
                      <h3 className="text-2xl md:text-3xl font-bold">{featuredPost.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-gray-500 text-sm mb-2">Published: {featuredPost.date}</p>
                    <p className="text-gray-700 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <Button variant="outline" className="group">
                      Read more 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </Link>
          )}
          
          {/* Other news posts */}
          {otherPosts.map((post) => (
            <NewsPostCard 
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl || '/uploads/news/news-banner.png'}
              date={post.date}
              slug={post.slug}
              category={post.category}
            />
          ))}
          
          {/* If there are fewer than 3 published posts, add placeholders */}
          {newsPosts.length < 4 && Array.from({ length: Math.max(0, 4 - newsPosts.length) }).map((_, index) => (
            <NewsPostCard 
              key={`placeholder-${index}`}
              title="Upcoming article"
              excerpt="Stay tuned for more exciting articles about AI and smart technology."
              imageUrl={index % 2 === 0 ? "/uploads/news/news-banner.png" : "/uploads/news/news-banner.png"}
              date="Coming soon"
              slug="#"
              category="Upcoming"
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default News;
