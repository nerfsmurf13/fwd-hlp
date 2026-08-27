// Single source of truth for mockup copy — edit here, not in components.
// Base copy harvested from the existing Wix site; elevated for presentation.

export const site = {
  name: 'HireLicensedPlumbers.com',
  shortName: 'Hire Licensed Plumbers',
  tagline: 'Protecting your Safety, Health and Welfare.',
  phone: '(936) 933-5696',
  poweredBy: 'Pipe Dreams Productions',
  copyright: '© 2026 HireLicensedPlumbers.com. All rights reserved.'
}

export const nav = [
  { name: 'home', path: '/', label: 'Home' },
  { name: 'why', path: '/why-licensed', label: 'Why Licensed?' },
  { name: 'history', path: '/history', label: 'History' },
  { name: 'regulations', path: '/regulations', label: 'Regulations' },
  { name: 'resources', path: '/resources', label: 'Resources' },
  { name: 'join', path: '/join', label: 'Join the Effort' },
  { name: 'contact', path: '/contact', label: 'Contact' }
]

export const hero = {
  eyebrow: 'A Texas Consumer-Education Campaign',
  headline: ['Hire Licensed.', 'Stay Protected.'],
  body: "When you turn a faucet or light the water heater, you're trusting that whoever did the work did it right. In Texas, a plumbing license is how you know. Check it before the work starts.",
  ctaPrimary: 'Verify a Texas License',
  ctaSecondary: 'Why licensing matters',
  checks: ['Founded by licensed Texas plumbers', 'Free consumer education', 'Backed by state records']
}

export const protects = {
  heading: 'Plumbing Protects Public Health.',
  body: "A plumbing system has three jobs: keep drinking water clean, carry waste away, and keep gas in the pipe. Done wrong, any one of them can hurt you.",
  cards: [
    {
      icon: 'water',
      title: 'Clean Water',
      body: 'Backflow protection and correct materials keep contamination out of the water your family drinks.'
    },
    {
      icon: 'flame',
      title: 'Gas Safety',
      body: "Gas piping has to be sized, joined, and pressure-tested to code. New London showed Texas what happens when it isn't."
    },
    {
      icon: 'shield',
      title: 'Sanitation',
      body: 'Proper drainage and venting carry waste away and keep sewer gases out of your home.'
    },
    {
      icon: 'check',
      title: 'Code & Licensing',
      body: 'Every rule in the plumbing code exists because something went wrong once. A license proves your plumber knows those rules.'
    }
  ]
}

export const verify = {
  heading: "Know Who You're Hiring.",
  body: 'Every licensed plumber in Texas is on record with the State Board. The lookup is free and takes about thirty seconds.',
  cta: 'How to Verify a License',
  officialCta: 'Search the Official TSBPE Database',
  officialUrl: 'https://vo.licensing.hpc.texas.gov/datamart/selSearchType.do',
  source: 'License records are maintained by the Texas State Board of Plumbing Examiners (TSBPE)',
  page: {
    eyebrow: 'Free · Takes About 30 Seconds',
    heading: 'Verify a Texas Plumbing License',
    subheading:
      'Every licensed plumber in Texas is on record with the State Board. Here is how to check before any work begins.',
    steps: [
      {
        title: 'Ask for the license number',
        body: "Any legitimate plumber will give you their license number without hesitation. Plumbing company vehicles are required to display the company's RMP license number, so you can often read it right off the truck."
      },
      {
        title: 'Look them up',
        body: 'Search the official TSBPE database by name or license number. It is public, free, and updated by the state.'
      },
      {
        title: 'Match the details',
        body: 'Check that the name matches the person in front of you, the license type fits the job (Journeyman, Master, or Responsible Master Plumber), and the status says Active.'
      }
    ],
    redFlags: {
      heading: 'When to Walk Away',
      items: [
        "They won't give you a license number.",
        "The number they gave you isn't in the database, or comes back under a different name.",
        'The license shows expired, inactive, or revoked.'
      ]
    },
    complaint: {
      body: 'Already had work done by someone who turned out to be unlicensed, or work that does not meet code? You can file a formal complaint and the Plumbing Board will investigate.',
      label: 'File a complaint with the TSBPE',
      url: 'https://tsbpe.texas.gov/file-a-complaint/'
    }
  }
}

export const home = {
  heading: '"Why should I hire a licensed plumber?"',
  subheading:
    'Our job is to give you enough information to answer that question for yourself.',
  missionEyebrow: 'The Mission',
  missionHeading: 'Join Us as We Explore the World of Plumbing',
  intro: 'Two questions drive everything on this site:',
  questions: [
    'Why does Texas require a license to engage in plumbing work?',
    'What does that license actually guarantee you, the customer?'
  ],
  objectivesHeading: "What We're Building",
  objectives: [
    "Videos that document real plumbing disasters and show how work that doesn't meet code puts your safety, health and welfare at risk.",
    'Billboards across the State of Texas pointing folks to HireLicensedPlumbers.com, so every homeowner knows the question to ask.'
  ]
}

export const about = {
  eyebrow: 'Who We Are',
  heading: 'Licensed Plumbers, On a Mission.',
  body: [
    'We are licensed Texas plumbers who are passionate about cultivating a professional culture within the trade. HireLicensedPlumbers.com is our way of opening the shop door and showing you how the trade works, and how it touches your day-to-day life.',
    "From blue ice cubes to exploding water heaters, we've seen what improper installations do to real families. Come with us on a journey of learning."
  ]
}

export const history = {
  heading: 'Lessons Written the Hard Way',
  lede:
    "Nobody sat down and invented Texas plumbing law. It got written one hard lesson at a time. Here's how Texas learned those lessons, and how close it came to throwing them out.",
  eras: [
    {
      id: 'local',
      eyebrow: '1897 – 1947',
      title: 'The Local Era',
      body: [
        'Most people assume plumbing licensing started in 1947. It actually goes back to the 1890s. In 1897 the Legislature passed the first state plumbing law, requiring cities to adopt their own plumbing regulations and establish local examining boards to license Master Plumbers, Journeyman Plumbers, and Plumbing Inspectors.',
        'Why? The same public-health crisis hitting the whole country: cholera, typhoid and dysentery outbreaks traced to sewage contaminating drinking water. Plumbing regulation started as disease prevention, not trade protection.',
        "The catch: a license was valid only in the city that issued it. A master plumber in Dallas couldn't legally work in Fort Worth without going through Fort Worth's board. Reciprocity was rare, exam requirements varied from town to town, and rural Texas had essentially no oversight at all."
      ]
    },
    {
      id: 'statewide',
      eyebrow: '1947',
      title: 'The Plumbing License Law',
      body: [
        'Senate Bill 188 of the 50th Legislature created the State Board of Plumbing Examiners and put licensing under state control. Uniform statewide examination of Master Plumbers, Journeyman Plumbers and Plumbing Inspectors replaced the city-by-city patchwork.',
        "One detail from the original act is worth knowing: board members drew no salary, just a $20 per diem capped at $500 a year, and every expense was paid out of license fees. That structure survives today. The Plumbing Board has never cost the state's general revenue a dime."
      ]
    },
    {
      id: 'maturing',
      eyebrow: '1947 – 2000s',
      title: 'The Framework Matures',
      body: [
        'The framework filled in over the decades. The first statewide plumbing code requirements arrived in 1993 (SB 815) and were updated in 2001, the same year Texas adopted the International Residential Code (SB 365). The license law was recodified into Chapter 1301 of the Occupations Code, which is why every modern statute reference points there.',
        'Along the way came the Tradesman Plumber-Limited license and specialty endorsements like medical gas and water supply protection, building the ladder Texas has now: apprentice, tradesman, journeyman, master.'
      ]
    }
  ],
  glance: 'The whole story, at a glance',
  timeline: [
    { year: '1897', text: 'First state plumbing law. Cities set their own standards and license their own plumbers. A different license in every town, and none at all in rural Texas.' },
    { year: '1937', text: 'The New London School Explosion. Un-odorized gas from a tapped residue line kills nearly 300 students and teachers, still the deadliest school disaster in American history.' },
    { year: '1938', text: 'Cities respond. Houston issues Master Plumbing License #1 on January 1st.' },
    { year: '1947', text: 'SB 188 makes licensing statewide. The Texas State Board of Plumbing Examiners is born, fee-funded then and now.' },
    { year: '1993', text: 'First statewide plumbing code requirements (SB 815). The International Residential Code follows in 2001.' },
    { year: '2019', text: "The Sunset crisis. The board's continuation bill dies procedurally, and an emergency executive order is all that keeps statewide licensing alive." },
    { year: '2021', text: 'HB 636 continues the TSBPE as a stand-alone agency overseeing roughly 60,000 plumbing licenses and registrations.' },
    { year: '2033', text: 'The next Sunset deadline. Unless continued again, the board is abolished and Chapter 1301 expires September 1, 2033.' }
  ],
  artifact: "Cities didn't wait for the state. Master Plumbing License #1, issued by the City of Houston on January 1, 1938, less than a year after New London.",
  event: {
    title: 'The New London School Explosion',
    date: 'March 18, 1937',
    kicker: 'The deadliest school disaster in American history',
    body: [
      'On March 18th, 1937, a great tragedy unfolded in the small East Texas town of New London. The school had cancelled its natural gas contract and tapped into a "residue gas line" to save money. Odorless gas built up unnoticed in the crawl space beneath the building until it ignited, and an explosion shattered the quiet spring afternoon.',
      'The piping had been installed by a janitor and a bus driver. A radiator salesman inspected the work.',
      'Nearly 300 students and teachers lost their lives in a single event, in one day.'
    ],
    aftermath:
      "New London changed the law. It gave us the requirement that mercaptan, the sulfur smell, be added to naturally odorless gas, and it pushed Texas to pass its first Engineering Registration Act that same year. Statewide plumbing licensing followed a decade later, in 1947, once Texans had reckoned with who should be allowed to work on gas and piping systems. Every line of today's plumbing code carries the weight of that afternoon.",
    stats: [
      { value: '1', label: 'tapped gas line' },
      { value: '0', label: 'licensed plumbers on the job' },
      { value: '~300', label: 'lives lost in one afternoon' }
    ]
  },
  crisis: {
    eyebrow: '2018 – 2019',
    title: 'The Sunset Crisis: When Texas Almost Lost the Board',
    kicker: 'For a few weeks in 2019, Texas was on track to have no statewide plumbing license law at all.',
    body: [
      'In its 2018 review under the Texas Sunset Act, Sunset staff recommended abolishing the TSBPE and transferring plumbing regulation to the Department of Licensing and Regulation. Senate Bill 621 was filed to make the transfer.',
      'Then it fell apart. The bill that would have continued the Plumbing Board died on the House floor near the end of the session, and no safety-net bill passed to extend regulation temporarily. The TSBPE, and statewide plumbing licensing with it, was scheduled to expire on September 1, 2019.',
      'On June 13, 2019, Governor Abbott issued an executive order keeping the board alive through May 31, 2021. He invoked his disaster powers under the Government Code, citing the Hurricane Harvey disaster declaration and arguing that abolishing the board would threaten recovery and hurricane preparedness.'
    ],
    takeaway:
      "The Legislature never voted to abolish plumbing licensing on the merits. The continuation bill died procedurally, the Sunset clock ran out, and the only thing that kept the system alive was an emergency executive order. That's how close it came. In 2021, HB 636 continued the board as a stand-alone agency, and in 2023 the Legislature set the next Sunset deadline: September 1, 2033.",
    modern: {
      title: "Shorten the pipeline. Don't remove the gate.",
      body: 'Lately the Legislature has been speeding up the path to a license, not questioning the license itself. In 2025, HB 3214 cut the journeyman-tenure requirement for a master license from four years to two (a one-year apprenticeship path was added back in 2021). The exams, the tier structure, and the license requirement itself all stayed put.'
    }
  }
}

export const regulations = {
  heading: 'State Requirements for Licensed Plumbing',
  subheading: 'Starting with Texas.',
  body: [
    "Plumbing companies must comply with state licensing laws to operate legally, and those laws vary from state to state. We'll take a dive into how it works in Texas, and how things are done elsewhere.",
    'Even a company operating legally under a master plumber must send out an individual holding the proper license and endorsement to do the work. That compliance is your financial protection as a homeowner.'
  ],
  prompts: ['What are the differences between states?', 'Do those differences affect you as a consumer?'],
  authority: {
    name: 'Texas State Board of Plumbing Examiners',
    abbr: 'TSBPE',
    body: 'Since 1947, the TSBPE has existed for one purpose: to protect the consumers of plumbing services. The Board licenses plumbers, adopts and enforces rules, investigates complaints, and holds public meetings anyone can attend.'
  },
  cta: 'Explore State Requirements',
  didYouKnow:
    'Before statewide licensing, a plumber had to obtain a different license in every single city he worked in.',
  lawLinks: {
    heading: 'The Law, In Black and White',
    body: "Don't take our word for it. The laws and rules governing the plumbing trade are public record. Read them yourself.",
    groups: [
      {
        label: 'License Law',
        links: [
          {
            title: 'Texas Occupations Code, Chapter 1301',
            note: 'The official statute',
            url: 'https://statutes.capitol.texas.gov/?tab=1&code=OC&chapter=OC.1301&artSec='
          },
          {
            title: 'Plumbing License Law — plain-view reference (PDF)',
            note: 'Easy-to-read version',
            url: 'https://tsbpe.texas.gov/wp-content/uploads/documents/TSBPE_PlumbingLicenseLaw(PlainView)_Sept2025.pdf'
          }
        ]
      },
      {
        label: 'Board Rules',
        links: [
          {
            title: 'TSBPE Rules & Meetings',
            note: 'Official publication — meetings open to the public',
            url: 'https://texas-sos.appianportalsgov.com/rules-and-meetings?interface=VIEW_TAC&part=17&title=22'
          },
          {
            title: 'Administrative Rules — reference (PDF)',
            note: 'Easy-to-read version',
            url: 'https://tsbpe.texas.gov/wp-content/uploads/documents/TSBPE_AdministrativeRules_March2026.pdf'
          }
        ]
      }
    ]
  },
  faq: {
    heading: 'Frequently Asked Questions',
    subheading:
      'Understanding state regulations and consumer rights matters for homeowners and professionals alike. Here are the questions we hear most.',
    items: [
      {
        q: 'What does it take to become a Responsible Master Plumber?',
        a: 'A minimum of six years of documented plumbing experience, plus a series of comprehensive written and hands-on exams on the design and installation of plumbing systems. A Master Plumber must also file a certificate of insurance with the Plumbing Board, and only an RMP can own or operate a bona fide plumbing company.'
      },
      {
        q: "How do I verify a plumber's credentials online?",
        a: 'The Texas State Board of Plumbing Examiners maintains a public database searchable by license number or name. Check it before any work begins. The lookup is free and takes less than a minute.',
        link: {
          label: 'Search the TSBPE license database',
          url: 'https://vo.licensing.hpc.texas.gov/datamart/selSearchType.do'
        }
      },
      {
        q: 'What are my rights if a plumber fails to comply with code?',
        a: "You have the right to a safe and compliant home. If a job isn't completed to code, you can file a complaint with your local building department or directly with the TSBPE. File a formal complaint with the Plumbing Board and they will investigate.",
        link: {
          label: 'File a complaint with the TSBPE',
          url: 'https://tsbpe.texas.gov/file-a-complaint/'
        }
      },
      {
        q: 'Are there safety standards on residential jobsites?',
        a: 'Yes. All jobsites, including residential, must comply with OSHA safety standards.'
      }
    ]
  }
}

export const sunset = {
  eyebrow: "Why This Can't Wait",
  heading: 'The Plumbing Board Is On the Chopping Block.',
  body: "Under the Texas Sunset Act, state agencies are periodically reviewed and can be abolished. In 2019 it nearly happened: the Plumbing Board's continuation bill died procedurally, and an emergency executive order was all that kept statewide licensing alive. The next deadline is September 1, 2033. If the Board goes, so does statewide vetting, training verification, and oversight of the people working on your water and gas.",
  closing: "We're riding for the sunset. Not to disappear over the horizon, but to keep our Plumbing Board from being abolished.",
  cta: 'Join the Effort'
}

export const join = {
  eyebrow: 'Attention, Plumbers',
  heading: 'Texas Needs You.',
  lede: 'This campaign will stand to benefit every licensed plumber in the State of Texas. Hop on the wagon.',
  body: [
    'Hire Licensed Plumbers exists to educate the public on what licensing requirements really deliver: a system for vetting individuals, verifying on-the-job training and classroom education, and maintaining state regulatory oversight.',
    'That system only survives if the public understands its value. Our job, yours and ours, is to bring folks to a place of understanding that the Texas State Board of Plumbing Examiners exists to protect the consumers of plumbing services.'
  ],
  ways: [
    {
      title: 'Spread the Word',
      body: "Download the brochure, make many copies, and put one in every customer's hand.",
      cta: 'Get the Brochure',
      to: '/resources'
    },
    {
      title: 'Become a Trusted Partner',
      body: 'Companies contributing $1,000 or more annually are listed on the site for the year, with a banner, a bio, and a short video commercial featuring your RMP.',
      cta: 'Contact Us',
      to: '/contact'
    },
    {
      title: 'Show Up',
      body: 'TSBPE board meetings are open to the public. Rule changes are posted for comment before any vote. Your voice counts. Use it.',
      cta: 'See the Rules Process',
      to: '/regulations'
    }
  ],
  partners: {
    heading: 'Trusted Partners',
    body: [
      "Calling a licensed plumber doesn't always guarantee an honest one, and it just chaps our hide that some take advantage of unwitting customers.",
      "That's why we keep a list of companies that support this effort and are committed to protecting the health of the nation and the integrity of the trade. Next time you need a licensed plumber, the choice gets a little easier."
    ],
    placeholder: 'Partner directory launching soon — your company could be first on the list.'
  }
}

export const resources = {
  heading: 'Know Before You Hire.',
  subheading: 'Download the brochure, make many copies, and help spread the word!',
  documents: [
    {
      title: 'Why Hire a Licensed Plumber? — Brochure',
      type: 'PDF · Plumbers: make many copies',
      url: 'https://www.hirelicensedplumbers.com/_files/ugd/574268_bf3ccbb3c1d54c92a36e292c36572793.pdf'
    }
  ],
  skits: {
    label: 'Scary Plumbing Skits',
    body: 'Short videos dramatizing real plumbing disasters. There is no shortage of examples, and we plan to exhaust the list. When you see what improper installation actually does, the message gets clear in a hurry.'
  },
  videos: [
    { title: 'Where Do the Plumbing Codes Come From?', category: 'Licensing', youtubeId: 'BmS6_QmYNWM' },
    { title: 'A Word From Our Founders', category: 'The Campaign', youtubeId: 's_XPq4YBUhk' }
  ]
}

export const social = [
  { label: 'Facebook', url: 'http://www.facebook.com' },
  { label: 'Instagram', url: 'http://www.instagram.com' },
  { label: 'LinkedIn', url: 'http://www.linkedin.com' },
  { label: 'X', url: 'http://www.x.com' },
  { label: 'YouTube', url: 'http://www.youtube.com' },
  { label: 'TikTok', url: 'http://www.tiktok.com' }
]
