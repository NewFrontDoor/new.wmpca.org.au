import img1 from '../assets/Christianity1A.png';
import img2 from '../assets/CitywideGathering.png';
import img3 from '../assets/FellowshipGroups.png';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';

const contact = {
  map: false,
  content: [
    [
      {
        heading: "I'D LIKE TO BE ON YOUR MAILING LIST",
        content: 'A weekly email update on our upcoming events and activities.',
        action: {text: 'Sign Up', to: '/signup'}
      },
      {
        heading: "I'D LIKE TO INVESTIGATE THE BASICS OF CHRISTIANITY",
        content:
          'An informal, 6 week course on the basics of the Christian faith.',
        action: {text: 'Express interest here', to: '/signup'}
      }
    ],
    [
      {
        heading: 'email',
        content: 'name@wmpca.org.au'
      },
      {
        heading: 'postal',
        content: [
          'WOMENS MINISTRY IN THE PRESBYTERIAN CHURCH OF AUSTRALIA',
          'Line 2',
          'Line 3',
          'Line 4'
        ]
      },
    ],
    [
      {
        heading: 'STARTING UNI IN 2020?',
        content:
          "We'd love to get in touch with you and help your transition to uni be a smooth one. Even if you are planning on going to another uni, we'd love to put you in touch with the AFES group there!",
        action: {text: 'Express interest here', to: '/signup'}
      },
      {
        heading: 'WHAT IS A CHRISTIAN?',
        content:
          "The Story is a beautiful 6 minute video produced by an American organisation that gives a good overview of the Bible's main message. The 'Two Ways To Live' site also gives a good, visual summary of the main Christian message and what it means to respond to Jesus as the saviour and loving ruler of the world.",
        action: {text: "Watch 'The Story'", to: '/the-story'}
      }
    ]
  ]
};

const portfolio = {
  heading: 'get involved',
  content: [
    {
      image: img1,
      heading: 'Christianity 1A',
      description: 'A 6 week introduction to Christianity',
      body: [
        "'The Kingdom of Heaven' is one of the central themes of Christianity and the theme running through our 6 week course: 'Christianity 1A'.",
        "Come join us as we delve in to the Bible and Jesus' life. Anyone is welcome and no prior knowledge is required.",
        "The studies are set up to allow plenty of discussion and meaningful questions. We're wanting to overcome misconceptions about Christianity and whet the appetite of those who don't know much or anything about Jesus.",
        'The course is designed to outline core beliefs of the Christian faith and will be most beneficial if people attend every week.',
        'Snacks and coffee provided.'
      ],
      button: 'Express interest here'
    },
    {
      image: img3,
      heading: 'Fellowship Groups',
      description: 'Join a Fellowship Group today',
      body: [
        'Small groups of 3+ students meeting according to faculty or residential college. These groups provide us with opportunities to get to know one another and to think, plan and pray about how best to share the gospel with others.',
        'Fellowship Groups meet at least fortnightly to talk and pray, but also plan a range of social and evangelistic activities.',
        'Fellowship Groups are not about what you will get out of it, but about coming into fellowship with others in order to reach the campus with the gospel.'
      ],
      button: 'Sign Up for a Fellowship Group'
    },
    {
      image: img2,
      heading: 'Citywide Gathering',
      description:
        'Once a month 7pm Thursdays @ Wellspring Anglican Church building',
      body: [
        'Once a month, we meet on Thursday evenings for our main public gathering. They will give us a clear focus on our mission through preaching, praying, singing and talking to one another. These meetings will be ideal for both Christians and visitors.',
        'Once a month, 7pm Thursdays @ Wellspring Anglican Church building, corner Lord St and Grosvenor St, Sandy Bay.'
      ],
      button: 'Current Series topics and dates'
    }
  ]
};

const menu = [
  {
    link: 'about',
    text: 'About Us'
  },
  {
    link: 'newsletter',
    text: 'Newsletter'
  },
  {
    link: 'blog',
    text: 'blog'
  },
  {
    link: 'talks',
    text: 'Talks'
  },
  {
    link: 'resources',
    text: 'Resources',
    children: [
      {
        link: 'connect',
        text: 'Connect & Network'
      }
    ]
  }
];

const about =
  {
    heading: 'About us',
    slug: '/about',
    content: [
      'The Women’s Ministries of the Presbyterian Church of Australia (WMPCA) is a national committee with members located in NSW, Queensland and Western Australia. We desire to liaise with all states and churches, so please contact us.',
      'While the WMPCA does not hold regular events, please keep a look out for information about the Conference that we hold once every three years. More information about our next event will be released soon.',
      'If you have any suggestions about information we have available on this website please contact us and let us know. We appreciate all suggestions.',
      ' <p>We also have a Facebook page which can be found at <a href="https://www.facebook.com/wmpres/" target="_blank" rel="noreferrer noopener">facebook.com/wmpres</a></p>',
      '“This is my prayer that your love may abound more and more in knowledge and depth of insight, so that you may be able to discern what is best and may be pure and blameless until the day of Christ, filled with the fruit of righteousness that comes through Jesus Christ— to the glory and praise of God.” Phil 1:9-11',
      '<br/>Contact Details:',
      'Email: name@wmpca.org.au<br/>Phone: xxxx xxx xxx'

    ]
  }

const newsletter = {
    heading: 'Newsletter',
    slug: '/newsletter',
    content: [
      'WMPCA Newsletter 2018 Issue 2',
      '<a href="http://wmpca.org.au/wp-content/uploads/2018/04/WMPCA-Newsletter-2018-Issue-1-.pdf" target="_blank" rel="noreferrer noopener">WMPCA Newsletter 2018 Issue 1</a>'
    ]
  }

const connect =
  {
    heading: 'Connect & Network',
    slug: '/connect',
    content: [
      'Here are some contacts of networks within Australia.',
      '',
      '<a href="http://womeninministry.org.au/" target="_blank" rel="noreferrer noopener">Victoria</a>',
      '<a href="http://womenministry.org.au/ministry/" target="_blank" rel="noreferrer noopener">NSW</a>',
      '<a href="http://pcq.org.au/womens-ministries.php" target="_blank" rel="noreferrer noopener">Queensland</a>',
      '<a href="http://pcnsw.org.au/index.php/presbyterian-womens-association/" target="_blank" rel="noreferrer noopener">PWA (deadlink)</a>',
      '<a href="http://pwansw.org.au/pwmu/" target="_blank" rel="noreferrer noopener">PWMU</a>',
      '<a href="http://www.qtc.edu.au/m2w/" target="_blank" rel="noreferrer noopener">QTC</a>',
      '<a href="http://www.christcollege.edu.au/course/ministry-training-for-women-mtw/" target="_blank" rel="noreferrer noopener">Christ College (deadlink)</a>',
      '',
      'If you would like your page to appear here please contact us.',
      'Still looking for contacts? Try the <a href="http://preskey.org.au/preskey-find-a-presbyterian-church.html" target="_blank" rel="noreferrer noopener">PresKey</a>'
    ]
  }

const blog = 
  {
    heading: 'Blog',
    slug: '/blog',
    content: [
      ''
    ]
  }

const heading = ['WOMENS MINISTRY IN THE', 'PRESBYTERIAN CHURCH OF AUSTRALIA'];

const slides = [{src: slide1, alt: ''}, {src: slide2, alt: ''}];


export {contact, portfolio, menu, heading, slides, about, newsletter , connect, blog};
