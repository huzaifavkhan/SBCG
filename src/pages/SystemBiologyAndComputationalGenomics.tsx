import ServicePageLayout from '@/components/ServicePageLayout';
import { 
  Microscope, Brain, Dna, Stethoscope, FlaskConical, Cpu, BarChart3, 
  Target, Shield, Zap, TrendingUp, Users, Database, Lightbulb,
  Activity, FileText, Search, Award, CheckCircle, Sparkles
} from 'lucide-react';
import SEO from '@/components/SEO';

const SystemBiologyAndComputationalGenomics = () => {
  return (
    <ServicePageLayout
      title="Systems Biology & Computational Genomics"
      subtitle="AI-driven healthcare and bioinformatics solutions"
      imageUrl="/uploads/biology-banner.jpg"
      darkMode={true}
    >
      <SEO 
        title="SBCG - Systems Biology & Computational Genomics"
        description="Advanced AI-driven healthcare solutions including disease diagnosis, personalized medicine, drug development, and computational genomics for medical practitioners and institutions."
        keywords={[
          'systems biology', 'computational genomics', 'bioinformatics', 'AI healthcare', 'disease diagnosis',
          'personalized medicine', 'drug development', 'medical AI', 'genomics analysis', 'precision medicine',
          'healthcare analytics', 'diagnostic accuracy', 'predictive health models', 'genetic profiling',
          'treatment optimization', 'pharmaceutical AI', 'clinical decision support', 'biomedical data analysis',
          'healthcare automation', 'medical data science', 'genomic medicine', 'AI diagnostics',
          'health risk prediction', 'therapeutic development', 'clinical research AI', 'medical imaging AI',
          'patient outcomes improvement', 'healthcare efficiency', 'medical practitioners support',
          'institutional healthcare solutions', 'AI cure approach', 'treatment personalization',
          'drug discovery AI', 'clinical trials optimization', 'medical research automation',
          'healthcare innovation', 'biomedical engineering', 'computational biology', 'genetic analysis',
          'molecular diagnostics', 'health informatics', 'medical technology', 'AI-powered healthcare',
          'digital health solutions', 'healthcare transformation', 'medical data integration',
          'clinical workflow optimization', 'healthcare AI platforms', 'SBCG healthcare solutions'
        ]}
      />

      <h2 className="text-3xl font-bold mb-6">Systems Biology & Computational Genomics</h2>
      
      {/* Background Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8 text-gray-700 space-y-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">Revolutionizing Healthcare Through AI & Genomics</h3>
        <p>
          Welcome to SBCG, where we interweave artificial intelligence, bioinformatics, and deep domain knowledge 
          to revolutionize healthcare. Our specialty lies in the fields of Systems Biology, Computational Genomics, 
          and Bioinformatics, drawing on expertise from diverse disciplines such as biology, computer science, 
          mathematics, and engineering.
        </p>
        <p>
          Our services are extensive and include network analysis, pathway analysis, quantitative modeling, data 
          integration, sequence analysis, comparative genomics, functional genomics, and structural genomics. By 
          employing advanced computational tools, high-throughput experimental technologies, and strategies rooted 
          in bioinformatics, we process and analyze complex data sets to extract valuable insights.
        </p>
        <p>
          A key aspect of our work lies in leveraging Artificial Intelligence for Health Sciences. This involves 
          the use of AI for disease diagnostics, data analysis, and the innovative AI Cure approach that uses 
          artificial intelligence to refine treatment plans, boost patient outcomes, and expedite drug development.
        </p>
      </div>
      
      {/* Mission Statement */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Helping Medical Practitioners & Institutions Improve Disease Diagnosis, Predict Illnesses & 
          Prescribe Personalized Medicine, while Supporting the Advancement of Drug Development.
        </p>
      </div>
      
      {/* Core AI Healthcare Solutions */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">AI-Powered Healthcare Solutions</h3>
      <p className="text-gray-600 mb-6">
        Our comprehensive suite of AI-driven healthcare solutions transforms medical practice through 
        cutting-edge technology and data-driven insights:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Stethoscope className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Enhanced Diagnostic Accuracy</h4>
            <p className="text-gray-600">AI-powered diagnostic systems that improve accuracy and efficiency, enabling faster and more precise disease identification.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Activity className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Predictive Health Analytics</h4>
            <p className="text-gray-600">Advanced data analysis and predictive models to foresee health risks, enabling proactive healthcare interventions.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Dna className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Personalized Medicine</h4>
            <p className="text-gray-600">Treatment plans tailored to individual genetic profiles, optimizing therapeutic outcomes through precision medicine approaches.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <FlaskConical className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">AI-Accelerated Drug Development</h4>
            <p className="text-gray-600">Leveraging genomics insights and bioinformatics strategies for innovative drug creation and accelerated development timelines.</p>
          </div>
        </div>
      </div>

      {/* Computational Biology Services */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Computational Biology & Bioinformatics Services</h3>
      
      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <BarChart3 className="h-6 w-6 text-[#28afdf] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Network & Pathway Analysis</h4>
            <p className="text-gray-600">Advanced computational analysis of biological networks and metabolic pathways.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Cpu className="h-6 w-6 text-[#ffc208] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Quantitative Modeling</h4>
            <p className="text-gray-600">Mathematical models to simulate and predict biological system behaviors.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Database className="h-6 w-6 text-[#8430f7] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Data Integration</h4>
            <p className="text-gray-600">Seamless integration of multi-omics data for comprehensive biological insights.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Search className="h-6 w-6 text-[#ff5310] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Sequence Analysis</h4>
            <p className="text-gray-600">Advanced genomic sequence analysis and comparative genomics studies.</p>
          </div>
        </div>
        
        <div className="bg-white to-green-50 shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Microscope className="h-6 w-6 text-[#47bf4a] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Functional Genomics</h4>
            <p className="text-gray-600">Comprehensive analysis of gene function and regulation mechanisms.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Lightbulb className="h-6 w-6 text-[#d118f9] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Structural Genomics</h4>
            <p className="text-gray-600">3D structure prediction and analysis for protein function understanding.</p>
          </div>
        </div>
      </div>

      {/* AI Cure Approach */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">The AI Cure Approach</h3>
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8 border-l-4 border-green-500">
        <div className="flex items-start mb-4">
          <Brain className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Artificial Intelligence for Treatment Optimization</h4>
            <p className="text-gray-600">
              Our innovative AI Cure approach uses artificial intelligence to refine treatment plans, boost patient 
              outcomes, and expedite the development of novel drugs through advanced machine learning algorithms 
              and predictive modeling.
            </p>
          </div>
        </div>
      </div>
      
      {/* Key Capabilities */}
      <h4 className="text-xl font-semibold mb-4">Advanced Computational Capabilities</h4>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 text-[#47bf4a] mr-3" />
          <span className="text-gray-600">High-throughput experimental technologies</span>
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 text-[#47bf4a] mr-3" />
          <span className="text-gray-600">Advanced computational tools and algorithms</span>
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 text-[#47bf4a] mr-3" />
          <span className="text-gray-600">Complex dataset processing and analysis</span>
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 text-[#47bf4a] mr-3" />
          <span className="text-gray-600">Multi-disciplinary expertise integration</span>
        </div>
      </div>
      
      {/* Benefits */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Transformational Healthcare Benefits</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <Target className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Enhanced Diagnostic Precision</h4>
            <p className="text-gray-600">AI-powered diagnostic systems dramatically improve accuracy and efficiency, enabling healthcare providers to identify diseases faster and more precisely than traditional methods.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <TrendingUp className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Proactive Health Risk Management</h4>
            <p className="text-gray-600">Predictive models analyze patient data to foresee health risks, enabling preventive interventions that improve patient outcomes and reduce healthcare costs.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Dna className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Precision Medicine Excellence</h4>
            <p className="text-gray-600">Genetic profile-based treatment plans ensure optimal therapeutic outcomes through personalized medicine approaches tailored to individual patient needs.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Zap className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Accelerated Drug Discovery</h4>
            <p className="text-gray-600">AI-driven drug development processes significantly reduce time-to-market for new therapeutics while improving success rates and reducing development costs.</p>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Specialized Service Areas</h3>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-orange-500">
          <div className="flex items-start">
            <Users className="h-6 w-6 text-[#ff5310] mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-700">Medical Practitioners Support</h4>
              <p className="text-gray-600">Comprehensive AI tools and platforms designed to enhance clinical decision-making, improve diagnostic workflows, and optimize patient care delivery.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500">
          <div className="flex items-start">
            <Shield className="h-6 w-6 text-[#47bf4a] mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-700">Healthcare Institutions</h4>
              <p className="text-gray-600">Enterprise-level solutions for hospitals, research centers, and healthcare systems to improve operational efficiency and patient outcomes.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-purple-500">
          <div className="flex items-start">
            <FlaskConical className="h-6 w-6 text-[#d118f9] mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-700">Pharmaceutical Research</h4>
              <p className="text-gray-600">Advanced bioinformatics and computational tools to accelerate drug discovery, optimize clinical trials, and enhance therapeutic development.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-yellow-400">
          <div className="flex items-start">
            <FileText className="h-6 w-6 text-[#ffc208] mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-700">Clinical Research Support</h4>
              <p className="text-gray-600">Computational genomics tools for research institutions to analyze complex biological data and accelerate scientific discoveries.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Expertise */}
      <h4 className="text-xl font-semibold mb-4">Core Technical Expertise</h4>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="flex items-center">
          <Award className="h-6 w-6 text-[#28afdf] mr-3 flex-shrink-0" />
          <span className="text-gray-600">Multi-omics data integration</span>
        </div>
        <div className="flex items-center">
          <Award className="h-6 w-6 text-[#28afdf] mr-3" />
          <span className="text-gray-600">Machine learning for healthcare</span>
        </div>
        <div className="flex items-center">
          <Award className="h-6 w-6 text-[#28afdf] mr-3" />
          <span className="text-gray-600">Genomic sequence analysis</span>
        </div>
        <div className="flex items-center">
          <Award className="h-6 w-6 text-[#28afdf] mr-3" />
          <span className="text-gray-600">Comparative genomics studies</span>
        </div>
        <div className="flex items-center">
          <Award className="h-6 w-6 text-[#28afdf] mr-3" />
          <span className="text-gray-600">Structural bioinformatics</span>
        </div>
        <div className="flex items-center">
          <Award className="h-6 w-6 text-[#28afdf] mr-3" />
          <span className="text-gray-600">Clinical data analytics</span>
        </div>
      </div>
      
      {/* Impact & Outcomes */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Expected Impact & Outcomes</h3>
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-500">
        <p className="text-gray-700 mb-4">
          Through SBCG's Systems Biology & Computational Genomics solutions, healthcare organizations 
          achieve breakthrough improvements in diagnostic accuracy, treatment personalization, and drug 
          development efficiency. Our AI-driven approach transforms traditional healthcare delivery into 
          precision medicine practices.
        </p>
        <p className="text-gray-700 mb-4">
          Medical practitioners gain access to powerful AI tools that enhance their clinical decision-making 
          capabilities, while institutions benefit from streamlined operations, improved patient outcomes, 
          and accelerated research capabilities.
        </p>
        <p className="text-gray-700">
          Our solutions enable healthcare providers to deliver more effective treatments, reduce medical 
          errors, optimize resource allocation, and ultimately save lives through the power of AI and 
          computational genomics.
        </p>
      </div>

      {/* Innovation Promise */}
      <div className="bg-gray-100 p-6 rounded-lg mt-8 flex items-start">
        <Sparkles className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Continuous Innovation</h4>
          <p className="text-gray-600">
            SBCG continues to push the boundaries of healthcare AI, constantly developing new algorithms, 
            expanding our bioinformatics capabilities, and collaborating with leading medical institutions 
            to bring the latest advances in computational genomics to clinical practice.
          </p>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default SystemBiologyAndComputationalGenomics;