import Header from './Header';
import Footer from './Footer';
import ProfileSection from './ProfileSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import InternshipSection from './InternshipSection';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';

const Portfolio = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <Header />
    <main className="container mx-auto px-4 py-8">
      <ProfileSection />
      <AboutSection />
      <ProjectsSection />
      <InternshipSection />
      <BlogSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Portfolio;
