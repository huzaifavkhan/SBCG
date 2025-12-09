import ServicePageLayout from '@/components/ServicePageLayout';
import { 
  Building, TrendingUp, Shield, Users, Target, Star, PieChart, 
  Briefcase, Award, CheckCircle, DollarSign, BarChart3, Home,
  Handshake, Eye, Calculator, MapPin, Crown, Gem
} from 'lucide-react';
import SEO from '@/components/SEO';

const SBCGInvestments = () => {
  return (
    <ServicePageLayout
      title="SBCG Investments"
      subtitle="Premium real estate investments and strategic wealth management"
      imageUrl="/uploads/investment-banner.jpg"
      darkMode={true}
    >
      <SEO 
        title="SBCG - SBCG Investments"
        description="Exclusive access to premier real estate opportunities with Emaar and HMR Waterfront. Specialized REIT advisory services for high-return, diversified investment portfolios."
        keywords={[
          'luxury real estate investment', 'high-return real estate', 'Emaar properties', 'HMR Waterfront',
          'real estate investment trusts', 'REIT advisory', 'property investment', 'real estate portfolio',
          'investment advisory services', 'wealth management', 'luxury property development', 'premier real estate',
          'real estate opportunities', 'investment diversification', 'property portfolio management',
          'high-yield investments', 'real estate returns', 'investment strategy', 'property development partnerships',
          'exclusive real estate access', 'luxury development projects', 'investment risk management',
          'real estate market insights', 'property value appreciation', 'long-term investment gains',
          'discerning investors', 'bespoke investment advice', 'transparent investment services',
          'trust-based relationships', 'investment stability', 'consistent income streams', 'REIT strategies',
          'diversified portfolios', 'investment growth', 'real estate advisory', 'property investment consulting',
          'investment planning', 'wealth building strategies', 'premium investment opportunities',
          'real estate market analysis', 'investment performance', 'SBCG Investments', 'real estate finance',
          'property development investment', 'luxury real estate advisory', 'investment portfolio optimization',
          'real estate investment consulting', 'high-net-worth investors', 'institutional real estate investment'
        ]}
      />

      <h2 className="text-3xl font-bold mb-6">SBCG Investments: Premier Real Estate & Wealth Management</h2>
      
      {/* Background Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8 text-gray-700 space-y-6 border border-gray-100">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">Exclusive Investment Opportunities</h3>
        <p>
          SBCG Investments specializes in high-return, luxury real estate projects in collaboration with 
          leading developers like Emaar and HMR Waterfront. Our deep market insight and strategic partnerships 
          provide our clients with exclusive access to premier investment opportunities.
        </p>
        <p>
          Our unwavering commitment is to ensure the utmost satisfaction of our clients through meticulous 
          and bespoke investment advisory services. At SBCG Investments, we build our reputation on the 
          pillars of trust, transparency, and integrity, dedicated to making each investment journey 
          reassuring and profitable.
        </p>
      </div>
      
      {/* Core Investment Services */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Premium Investment Solutions</h3>
      <p className="text-gray-600 mb-6">
        We provide comprehensive investment services designed to maximize returns while minimizing risks 
        through strategic partnerships and expert market analysis:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-yellow-400 flex items-start">
          <Building className="h-6 w-6 text-[#ffc208] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Luxury Real Estate Development</h4>
            <p className="text-gray-600">Exclusive access to premier real estate opportunities through partnerships with renowned developers like Emaar and HMR Waterfront, focusing on high-value appreciation properties.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500 flex items-start">
          <PieChart className="h-6 w-6 text-[#28afdf] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">REIT Advisory Services</h4>
            <p className="text-gray-600">Strategic guidance on Real Estate Investment Trusts to ensure diversified portfolios that offer both stability and consistent income growth potential.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500 flex items-start">
          <Shield className="h-6 w-6 text-[#47bf4a] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Risk Management Strategies</h4>
            <p className="text-gray-600">Implementing robust strategies to minimize investment risks and safeguard returns through comprehensive market analysis and diversification techniques.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-purple-500 flex items-start">
          <Handshake className="h-6 w-6 text-[#d118f9] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Bespoke Investment Advisory</h4>
            <p className="text-gray-600">Personalized investment advice tailored to individual client profiles, ensuring transparent, trust-based relationships and optimal investment outcomes.</p>
          </div>
        </div>
      </div>

      {/* Strategic Partnerships */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Strategic Developer Partnerships</h3>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <div className="flex items-start mb-4">
          <Crown className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Premier Developer Network</h4>
            <p className="text-gray-600">
              In partnership with renowned developers like Emaar and HMR Waterfront, we provide exclusive 
              access to premier real estate opportunities. Our deep market insight allows us to pinpoint 
              properties that are poised for significant value increase, offering lucrative returns for 
              our discerning investors who prioritize long-term investment gains.
            </p>
          </div>
        </div>
      </div>

      {/* Investment Focus Areas */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Investment Focus Areas</h3>
      
      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Home className="h-6 w-6 text-[#ffc208] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">High-Value Properties</h4>
            <p className="text-gray-600">Premium residential and commercial properties with exceptional appreciation potential.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <BarChart3 className="h-6 w-6 text-[#47bf4a] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Income-Generating Assets</h4>
            <p className="text-gray-600">REITs and properties that provide stable, consistent income streams for long-term wealth building.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <MapPin className="h-6 w-6 text-[#d118f9] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Strategic Locations</h4>
            <p className="text-gray-600">Prime locations with strong growth fundamentals and emerging market opportunities.</p>
          </div>
        </div>
      </div>
      
      {/* Investment Approach */}
      <h4 className="text-xl font-semibold mb-4">Our Investment Philosophy</h4>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 text-[#47bf4a] mr-3" />
          <span className="text-gray-600">Deep market insight and analysis</span>
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 text-[#47bf4a] mr-3" />
          <span className="text-gray-600">Long-term value appreciation focus</span>
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 text-[#47bf4a] mr-3" />
          <span className="text-gray-600">Diversified portfolio strategies</span>
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 text-[#47bf4a] mr-3" />
          <span className="text-gray-600">Risk mitigation and capital preservation</span>
        </div>
      </div>
      
      {/* Client Benefits */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Investment Advantages</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <TrendingUp className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Exceptional Returns</h4>
            <p className="text-gray-600">Access to high-return luxury real estate projects with proven track records of significant value appreciation and strong market performance.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Eye className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Market Intelligence</h4>
            <p className="text-gray-600">Deep market insight and analysis capabilities that identify properties poised for significant value increases before they become widely recognized opportunities.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Shield className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Risk Mitigation Excellence</h4>
            <p className="text-gray-600">Robust risk management strategies designed to minimize investment risks while safeguarding returns through diversification and careful market analysis.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Star className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Personalized Service</h4>
            <p className="text-gray-600">Bespoke investment advisory services built on trust, transparency, and integrity, ensuring each client receives personalized attention and optimal investment strategies.</p>
          </div>
        </div>
      </div>

      {/* REIT Specialization */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">REIT Investment Expertise</h3>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <div className="flex items-start">
          <Calculator className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Specialized REIT Knowledge</h4>
            <p className="text-gray-600 mb-4">
              Our specialized knowledge in Real Estate Investment Trusts (REITs) enables us to deliver 
              comprehensive advisory services tailored to individual investment profiles. We strategize 
              to diversify investment portfolios, balancing risk with the potential for stable and 
              consistent income from REITs.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 text-[#47bf4a] mr-2" />
                <span className="text-sm text-gray-700">Consistent Income Generation</span>
              </div>
              <div className="flex items-center">
                <BarChart3 className="h-4 w-4 text-[#ff5310] mr-2" />
                <span className="text-sm text-gray-700">Portfolio Diversification</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Advantages */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Developer Partnership Benefits</h3>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-100">
          <div className="flex items-center mb-4">
            <Gem className="h-6 w-6 text-purple-600 mr-3" />
            <h4 className="text-lg font-semibold text-gray-700">Emaar Properties</h4>
          </div>
          <p className="text-gray-600">Exclusive access to Emaar's premium developments, including luxury residential towers, commercial complexes, and mixed-use projects with proven track records of exceptional returns.</p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-100">
          <div className="flex items-center mb-4">
            <Crown className="h-6 w-6 text-blue-600 mr-3" />
            <h4 className="text-lg font-semibold text-gray-700">HMR Waterfront</h4>
          </div>
          <p className="text-gray-600">Strategic partnerships with HMR Waterfront for waterfront luxury developments, offering unique investment opportunities in prime coastal and marina locations.</p>
        </div>
      </div>

      {/* Service Excellence */}
      <h4 className="text-xl font-semibold mb-4">Service Excellence Pillars</h4>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
          <Handshake className="h-8 w-8 text-blue-600 mb-2" />
          <h5 className="font-semibold text-black mb-1">Trust</h5>
          <p className="text-sm text-gray-600">Building lasting relationships based on reliability and proven results</p>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-green-50 rounded-lg border border-green-100">
          <Eye className="h-8 w-8 text-green-600 mb-2" />
          <h5 className="font-semibold text-black mb-1">Transparency</h5>
          <p className="text-sm text-gray-600">Complete visibility into investment opportunities and market analysis</p>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-purple-50 rounded-lg border border-purple-100">
          <Award className="h-8 w-8 text-purple-600 mb-2" />
          <h5 className="font-semibold text-black mb-1">Integrity</h5>
          <p className="text-sm text-gray-600">Ethical practices and honest guidance in every investment decision</p>
        </div>
      </div>
      
      {/* Investment Outcomes */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Investment Outcomes & Value Proposition</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <Target className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Lucrative Long-Term Returns</h4>
            <p className="text-gray-600">Our deep market insight allows us to pinpoint properties poised for significant value increase, delivering exceptional returns for discerning investors who prioritize sustainable wealth growth.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <BarChart3 className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Portfolio Optimization</h4>
            <p className="text-gray-600">Strategic diversification across real estate assets and REITs creates balanced portfolios that provide both capital appreciation and steady income streams.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Users className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Exclusive Access</h4>
            <p className="text-gray-600">Partnership relationships with premier developers provide clients with early access to luxury developments and off-market opportunities not available to general investors.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Briefcase className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Professional Investment Management</h4>
            <p className="text-gray-600">Comprehensive investment advisory services ensure optimal asset allocation, timing, and strategic positioning for maximum return potential.</p>
          </div>
        </div>
      </div>
      
      {/* Client Promise */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Our Commitment to Excellence</h3>
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
        <p className="text-gray-700 mb-4">
          SBCG Investments is committed to ensuring the utmost satisfaction of our clients through 
          meticulous and bespoke investment advisory services. Every investment opportunity is carefully 
          vetted to ensure it meets our stringent criteria for long-term value appreciation and risk management.
        </p>
        <p className="text-gray-700">
          Our clients benefit from exclusive access to premier real estate developments, expert REIT guidance, 
          and personalized investment strategies that have consistently delivered superior returns while 
          maintaining the highest standards of transparency and professional integrity.
        </p>
      </div>

      {/* Success Metrics */}
      <div className="bg-gray-100 p-6 rounded-lg mt-8 flex items-start">
        <Star className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Proven Track Record</h4>
          <p className="text-gray-600">
            Our investment strategies have consistently delivered above-market returns through strategic 
            partnerships, comprehensive market analysis, and disciplined risk management. We continue to 
            expand our developer network and identify emerging opportunities that provide exceptional 
            value for our investment partners.
          </p>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default SBCGInvestments;