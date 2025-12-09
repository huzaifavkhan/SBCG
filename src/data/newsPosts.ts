export interface NewsPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: ContentSection[];
  date: string;
  author: string;
  category: string;
  imageUrl?: string;
  keywords?: string[];
  metaDescription?: string;
  sourceUrl?: string;
}

export interface ContentSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'quote' | 'table' | 'stats' | 'chart' | 'icon-list' | 'bibliography';
  content?: string;
  items?: string[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  statsData?: {
    value: string;
    label: string;
    icon?: string;
  }[];
  chartData?: {
    title: string;
    data: { name: string; value: number; }[];
  };
}

export const newsPosts: NewsPost[] = [
  {
    id: '1',
    title: 'ICCBS-UoK Partners with SBCG to Advance Computational Genomics Research',
    slug: 'iccbs-uok-sbcg-partnership-computational-genomics',
    excerpt: 'The International Center for Chemical and Biological Sciences at University of Karachi establishes strategic partnership with SBCG to enhance genomics research capabilities and foster innovation in Pakistan.',
    date: 'May 30, 2023',
    author: 'SBCG Research Team',
    category: 'Partnership',
    imageUrl: '/uploads/news/ICCBS-UoK-inks-MoU-with-SBCG-Karachi.jpg',
    sourceUrl: 'https://pakobserver.net/iccbs-uok-inks-mou-with-sbcg-karachi/',
    keywords: [
      'SBCG',
      'ICCBS',
      'University of Karachi',
      'computational genomics',
      'systems biology',
      'research partnership',
      'MoU',
      'genomics research Pakistan',
      'bioinformatics',
      'molecular medicine',
      'scientific collaboration',
      'healthcare research'
    ],
    metaDescription: 'ICCBS-University of Karachi signs MoU with SBCG to advance computational genomics and systems biology research in Pakistan, fostering academic and scientific collaboration.',
    content: [
      {
        type: 'paragraph',
        content: 'The International Center for Chemical and Biological Sciences (ICCBS) at the University of Karachi has signed a landmark Memorandum of Understanding (MoU) with Systems Biology and Computational Genomics (SBCG), marking a significant milestone in Pakistan\'s computational genomics landscape. This strategic partnership aims to develop academic, scientific, and research collaboration in the field of systems biology and computational genomics.'
      },
      {
        type: 'heading',
        content: 'Strengthening Pakistan\'s Research Infrastructure'
      },
      {
        type: 'paragraph',
        content: 'This collaboration represents a crucial step in strengthening Pakistan\'s research infrastructure in computational biology and genomics. By combining ICCBS\'s established research facilities with SBCG\'s computational expertise, the partnership creates new opportunities for groundbreaking research in molecular medicine and biological data analysis.'
      },
      {
        type: 'subheading',
        content: 'Key Areas of Collaboration'
      },
      {
        type: 'icon-list',
        items: [
          'Joint research projects in computational genomics and systems biology',
          'Development of bioinformatics tools and methodologies',
          'Training programs for researchers and students in computational biology',
          'Knowledge sharing and technology transfer initiatives',
          'Publication of collaborative research findings in international journals'
        ]
      },
      {
        type: 'heading',
        content: 'Impact on Healthcare and Medicine'
      },
      {
        type: 'paragraph',
        content: 'The partnership is expected to have significant implications for healthcare and medicine in Pakistan. By advancing computational genomics research, the collaboration will contribute to better understanding of genetic diseases, development of personalized medicine approaches, and improvement of healthcare delivery systems.'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '220M',
            label: 'Population that could benefit from genomics research',
            icon: 'Users'
          },
          {
            value: '1 in 20',
            label: 'Birth rate with genetic conditions in Pakistan',
            icon: 'Heart'
          },
          {
            value: '2023',
            label: 'Year of strategic partnership establishment',
            icon: 'Calendar'
          }
        ]
      },
      {
        type: 'quote',
        content: 'This partnership represents our commitment to advancing genomics research that can directly benefit Pakistani healthcare and contribute to global scientific knowledge.'
      },
      {
        type: 'heading',
        content: 'Future Prospects'
      },
      {
        type: 'paragraph',
        content: 'The MoU establishes a framework for long-term collaboration that will benefit both institutions and the broader scientific community. The partnership is expected to attract international funding, facilitate student and faculty exchanges, and position Pakistan as a growing hub for computational genomics research in South Asia.'
      },
      {
      type: 'bibliography',
        items: [
          'Pakistan Observer, "ICCBS-UoK inks MoU with SBCG-Karachi," June 2023. Available at: https://pakobserver.net/iccbs-uok-inks-mou-with-sbcg-karachi/',
          'SBCG Official Website, "Partnership News and Updates," 2023. Available at: https://www.sbcg.co/news/',
          'ICCBS University of Karachi, "Research Collaborations and Partnerships," 2023. Available at: https://www.iccs.edu/'
        ]
      }
    ]
  },
];