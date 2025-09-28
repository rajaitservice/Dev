
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarIcon, Clock, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest insights in Splunk implementation, data engineering, and IT solutions.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <Clock3 className="h-24 w-24 text-brand-blue" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Blog Coming Soon!</h2>
              <p className="text-lg text-gray-700 mb-6">
                We're working on creating valuable content for you. Our blog will be launching soon with expert insights, tutorials, and industry news.
              </p>
              <div className="flex items-center justify-center gap-6 text-gray-500 mb-8">
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span>Coming Soon</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>5 min read</span>
                </div>
              </div>
              <Button
                className="bg-brand-blue hover:bg-blue-700 text-white"
                onClick={() => window.location.href = '/'}
              >
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
