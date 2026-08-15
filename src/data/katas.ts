import type { Kata } from "@/lib/types";

export const PLAYLIST_ID = "PLSAVyiM48sqvzLBEbPqD8TZpfu5UyzO9t";
export const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`;

export const katas: Kata[] = [
  {
    id: 1,
    slug: "kata-01-zero-funding",
    title: "Guide to Scaling A Startup with Zero Funding",
    subtitle: "Aspiration, proofs, and the Lollapalooza stack that hires for you.",
    videoId: "9NjA41wShTI",
    duration: "~1h",
    published: "2025-12-21",
    status: "ready",
    themes: ["distribution", "hiring", "zero-funding", "proofs"],
    concepts: ["aspiration as hiring", "photogrammetry proof", "Lollapalooza effects"],
    synopsis:
      "Kata 1 is the origin story of the series: how Aeos scaled without a funding round by making the work public. Varun argues that aspirational content (YouTube, Instagram, early trailers) is not marketing first — it is a hiring engine. A garbage-collection company cannot recruit the same way because the work is not aspirational. The episode then stacks five simultaneous technology bets — phone GPUs/NPUs, DLSS-style upscaling, Unreal Engine optimisation, text-to-3D, and game-pass economics — into a Lollapalooza thesis for why small teams can now ship high-fidelity games.",
    slides: [
      {
        title: "Aspiration is a hiring tool",
        bullets: [
          "Public work attracts people who want to be on the stage.",
          "Non-aspirational businesses cannot recruit the same way.",
          "The first trailer / proof is a talent magnet, not a product launch.",
        ],
        timestampSec: 180,
      },
      {
        title: "Prove it before you scale it",
        bullets: [
          "Photogrammetry video was an early proof, not a game trailer.",
          "People forgot the memo that it was alpha.",
          "The real ROI was inbound talent.",
        ],
        timestampSec: 420,
      },
      {
        title: "Five effects pointing the same way",
        bullets: [
          "Phone GPUs and NPUs getting better because of on-device AI.",
          "DLSS / upscaling making 30fps look like 300fps.",
          "Unreal spending years on optimisation.",
          "Text-to-3D crossing the threat line for 3D artists.",
          "Subscription economics forcing game costs down.",
        ],
        timestampSec: 900,
      },
    ],
    sections: [
      {
        id: "k1-aspiration",
        title: "Aspiration as a hiring engine",
        timestampSec: 120,
        summary: "Public stage work makes hiring easy. Un-glamorous work does not.",
        body: "Varun opens with a blunt hiring observation: people want to work backstage of a company that is on YouTube and Instagram. That aspiration made hiring easy for Aeos. The inverse is also true — if you ran a garbage-collection company, it would be extremely hard to attract the same talent because the work is not aspirational. The first move of a zero-funding startup is therefore not a pitch deck. It is making the work look like a place a talented person would want to be seen.",
        quotes: [
          "There was this aspiration among people that I want to be on the stage of YouTube and Instagram and it made hiring easy for us.",
        ],
      },
      {
        id: "k1-proof",
        title: "Proofs, not trailers",
        timestampSec: 400,
        summary: "The first video proved photogrammetry. People treated it like a game trailer.",
        body: "The early photogrammetry video was widely misread as a game trailer. Internally it was a proof: can we do this? The public forgot the memo that it was early alpha. The actual return was inbound talent. Headshot, the mobile gaming controller, is framed the same way — a bet that sits next to the thesis, not a random side quest.",
      },
      {
        id: "k1-lollapalooza",
        title: "The Lollapalooza stack",
        timestampSec: 800,
        summary: "Five independent tech curves all point at small teams shipping high-fidelity games.",
        body: "Switch 2's “10x faster” claim is mostly upscaling, not a 10x chip. Phones now ship bigger GPUs and NPUs because generative AI (erase a person, on-device inference) runs locally. Unreal is finally obsessed with optimisation. Text-to-3D (Spark 3D, Hunyuan) is good enough that 3D artists are in the same threatened phase photographers were three years ago. Meanwhile Game Pass-style subscriptions only work if the cost of a high-quality game falls. Clair Obscur: Expedition 33 — ~30 people, Unreal, likely GOTY — is the template. Small teams plus these five curves is the zero-funding path.",
        quotes: [
          "An entrepreneur's job is not to take risk. In real life an entrepreneur's job is to reduce risk.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "kata-02-coordination",
    title: "Why 90% of Companies Break After 50 People",
    subtitle: "The Lightning Way: stories, incentives, and writing that travel.",
    videoId: "uojkYJz7d-k",
    duration: "1:00:14",
    published: "2025-12-24",
    status: "ready",
    themes: ["coordination", "leadership", "incentives", "writing"],
    concepts: ["Lightning Way", "coordination cost", "stories and incentives", "100% coordination myth"],
    synopsis:
      "Kata 2 is the hardest problem after early growth: coordination at scale. Quality degrades as teams grow because information, standards, and care do not travel. Varun's answer is the Lightning Way — generate current as a leader through stories and incentives, then reduce coordination cost with clear writing. The episode covers mastery, leader burnout, rules vs closed systems, and why 100% coordination is a myth you should not chase.",
    slides: [
      {
        title: "The coordination cost framework",
        bullets: [
          "Skill is already there. Coordination is the missing variable.",
          "Quality degrades as layers are added.",
          "Services businesses die when they scale faster than communication.",
        ],
        timestampSec: 718,
      },
      {
        title: "Units of current: stories and incentives",
        bullets: [
          "A streak of success makes your stories prophetic.",
          "A streak of failures makes storytelling unreliable.",
          "Incentives are a five-word superpower.",
        ],
        timestampSec: 1110,
      },
      {
        title: "Clear writing is the secret weapon",
        bullets: [
          "Person A: exact job, incentives, plan.",
          "Person B: the same, no ambiguity.",
          "Then the grand plan for how they coordinate.",
        ],
        timestampSec: 2692,
      },
    ],
    sections: [
      {
        id: "k2-quality",
        title: "Why quality dies after 50",
        timestampSec: 53,
        summary: "The second layer of a company cannot absorb founder DNA by osmosis.",
        body: "After early growth the problem is no longer “can we do the work.” It is “can the next layer of people do the work the way the first layer did.” The best you can hope for is that the core team absorbs some DNA and passes it on. That is a very hard problem. Most services businesses fail here because they scale headcount faster than they scale communication. Caring about the customer beats aggressive expansion — expansion without care is just more uncoordinated work.",
      },
      {
        id: "k2-lightning",
        title: "The Lightning Way",
        timestampSec: 718,
        summary: "Leaders generate current. The units are stories and incentives.",
        body: "The Aeos logo is a lightning bolt. The Lightning Way is how Varun manages, leads, delegates, and thinks about teams. The first unit of current is stories: a forward-looking story matched with performance. If you say you will do a thing and then actually do it over 2–3 years, the story has meaning. A streak of success makes you prophetic to your teams. A streak of failures makes the storytelling unreliable. The second unit is incentives. Five words: everything runs on superpowered incentives. Aeos leadership had zero churn among the top 16 people — not because of base salary, but because of incentive design.",
        quotes: [
          "Setting incentives is a superpower. Five words that change how I think about almost everything.",
        ],
      },
      {
        id: "k2-writing",
        title: "Writing reduces coordination cost",
        timestampSec: 2400,
        summary: "Clear writing lets even non-coordinators generate current.",
        body: "You can make non-coordinators coordinate. The technique is boring and it works: write Person A's exact job, incentives, and plan. Do the same for Person B. Then write the grand plan for how they coordinate. Skill drops out of the equation. Asynchronous written direction is how Aeos started projects the leadership did not even fully believe in. Writing provides direction and speed. A coordinated system focused on growth crushes an uncoordinated system with infighting. 90% of companies outside are fighting among themselves.",
        quotes: [
          "A coordinated system focused purely on growth crushes an uncoordinated system with infighting.",
        ],
      },
      {
        id: "k2-myth",
        title: "The 100% coordination myth",
        timestampSec: 3484,
        summary: "You cannot coordinate everyone perfectly. You can still get years of progress in months.",
        body: "Chasing 100% coordination is a trap. Most systems are barely coordinated. The bigger the system, the worse it gets — the fear is becoming 1,000 or 5,000 people and then uncoordinated. Active management is required. If everyone sets differences aside, you can make several years of progress in several months, especially in an AI-first world where lack of execution skill is no longer the bottleneck. Sales, conversion, and client management still need humans.",
      },
    ],
  },
  {
    id: 3,
    slug: "kata-03-how-i-use-ai",
    title: "How I Use AI (1 Hour Masterclass)",
    subtitle: "AI is a literal genie. Clarity is the wish.",
    videoId: "yJFsZLgUa40",
    duration: "44:29",
    published: "2026-01-01",
    status: "ready",
    themes: ["ai", "clarity", "writing", "delegation"],
    concepts: ["literal genie", "context failure", "incentives via AI", "references over invention"],
    synopsis:
      "Kata 3 turns the Lightning Way into an AI operating system. Writing is thinking. Most execution failures are context failures, not skill failures. AI (and people) behave like literal genies — vague wishes produce cursed outputs. The fix is examples, references, and precise specs. Use AI for research, planning, hiring, incentive design, reporting, and creative direction, then verify with a human. Weak managers who will not fire low performers lose high performers.",
    slides: [
      {
        title: "The genie thought experiment",
        bullets: [
          "AI does exactly what you said, not what you meant.",
          "People on teams do the same.",
          "Deep research is the genie in glasses asking clarifying questions.",
        ],
        timestampSec: 183,
      },
      {
        title: "Writing is thinking",
        bullets: [
          "If you cannot write it, you do not have it.",
          "AI expands a clear seed. It cannot invent your missing context.",
          "Work with one AI long enough that it knows your voice.",
        ],
        timestampSec: 640,
      },
      {
        title: "Incentives, not pep talks",
        bullets: [
          "Do not be the Zumba trainer of your company.",
          "Ask the model to design incentives tied to profitability.",
          "Then a human still has to pick up the phone.",
        ],
        timestampSec: 1218,
      },
    ],
    sections: [
      {
        id: "k3-genie",
        title: "AI as a literal genie",
        timestampSec: 183,
        summary: "Vague wishes get you drowned in money instead of a bank transfer.",
        body: "The session starts with the genie thought experiment. You wish for money. The genie dumps it on your head, or steals it, because you did not specify legal, in a bank account, not drowning you. AI is that genie. Deep-research modes are the genie in a tie asking whether you wanted it fraudulently or legally. Teams behave the same way. Most execution failures are context failures, not skill failures. Examples, references, and precise specifications reduce coordination cost for both computers and people.",
        quotes: [
          "Most execution failures are context failures rather than skill failures.",
        ],
      },
      {
        id: "k3-write",
        title: "Clarity, writing, and meshed work",
        timestampSec: 640,
        summary: "The future is not AI or human. It is people who can use both.",
        body: "AI is thorough at generic research — kitchen appliance costs, furniture, renovations — but the numbers still need a human check. The world will be meshed: AI does the skill stuff, humans do the phone calls, hiring, selling, and incentive design. People who only have skill will be less useful. People who have skill plus the ability to use the skill in the world will do fantastically well. Remember Kata 2: unless you want to be a Zumba trainer saying “you can do it,” you need to set incentives. Varun asks models to design talent incentives with a clear profitability goal and a penalty for waste.",
      },
      {
        id: "k3-refs",
        title: "References, not blank-page genius",
        timestampSec: 1800,
        summary: "Everything is a reference with a twist. Execution is the style.",
        body: "For a panic-attack scene, ask the model for movie references including camera angles. It will surface The Sopranos driveway collapse, Iron Man 3 PTSD dinner, even Korean films you have never seen. That is not stealing. Aeos makes 2,000+ videos a month. Everything is a reference of another thing, with a twist. The act of executing someone else's idea with your camera, your background, your cut, becomes your style. GPT and Gemini are better idea generators than most humans after the first three ideas, because human idea #4 is generic.",
      },
      {
        id: "k3-lead",
        title: "Leadership, low performers, and the long sport",
        timestampSec: 2235,
        summary: "Weak managers who will not fire lose the people who do 90% of the work.",
        body: "Your clarity as a leader can make or break careers. Weak managers are afraid to fire low performers and in exchange lose high performers. A high performer will not stay on a team that feels like a group project where they do 90%. Use AI to hold your context so the next piece of feedback is written in your voice. This is a long sport. Aeos looks like a 3-year rocket. It is a 10-year journey. Enjoy the backstage-of-WWE feeling — public work, public comments — and do not burn out in four months.",
      },
    ],
  },
  {
    id: 4,
    slug: "kata-04-scouters",
    title: "Why Indians Don't Attempt (And Stay Average Forever)",
    subtitle: "Scouters: a Dragon Ball instrument for reading competence.",
    videoId: "mPjj7-eHw1s",
    duration: "54:37",
    published: "2026-01-10",
    status: "ready",
    themes: ["competence", "attempts", "hiring", "india"],
    concepts: ["scouters", "five scouter levels", "attempts produce information", "niceness trap"],
    synopsis:
      "Kata 4 shifts from systems to people. A scouter (Dragon Ball) reads power level. Varun's version reads competence: who actually gets things done when real risk is involved, versus who only talks. India is described as an anti-attempt culture — afraid of public ridicule after a swing. Action produces information. One clean, high-integrity attempt raises your scouter even if the outcome is bad. High scouters cluster with high scouters.",
    slides: [
      {
        title: "What a scouter reads",
        bullets: [
          "Not talk. Not credentials. Attempts under personal risk.",
          "Excuses do not matter at higher levels.",
          "You are supposed to perform a miracle with bad cards.",
        ],
        timestampSec: 90,
      },
      {
        title: "Five scouter levels",
        bullets: [
          "Talk with no attempt.",
          "Belief without a swing.",
          "Prediction without skin in the game.",
          "Clean attempt, even if it fails.",
          "Pulled it off — permanent level-up.",
        ],
        timestampSec: 1255,
      },
      {
        title: "The niceness trap",
        bullets: [
          "Indian culture over-rates being nice.",
          "Nice is not competent.",
          "Hire and cluster for scouter, not warmth.",
        ],
        timestampSec: 2722,
      },
    ],
    sections: [
      {
        id: "k4-scouter",
        title: "What are scouters?",
        timestampSec: 90,
        summary: "A hiring and self-appraisal instrument borrowed from Dragon Ball.",
        body: "You need this skill on both sides of the table: hiring (who has potential) and being hired (what do you actually need to have to get the raise). A scouter in Dragon Ball reads power level. Varun's scouter reads competence under risk. In Aeos you are allowed to take any bet. If you are wrong, you can lose the job. That is the point — personal risk is how you know the swing was real. Everyone has excuses. Almost every public success story had bad cards. You are not supposed to have all the tools. You are supposed to perform a miracle, then pull it off.",
        quotes: [
          "The way to accurately know what you're capable of doing is by trying — by attempting.",
        ],
      },
      {
        id: "k4-levels",
        title: "The five scouter levels",
        timestampSec: 1255,
        summary: "Talk < belief < prediction < clean attempt < pulled it off.",
        body: "Predictive competence is cheap: you make a YouTube video about a future that happens, and people think you might be right next time. Belief without a swing is a trap — you can believe garbage for life and never find out. If personal risk is low (kid of a billionaire with a couple of million to try), the scouter bump is smaller because observers can see the external help. Even a failed swing still raises competence if the attempt was clean and high-integrity. Markets can kill a good attempt. Quitting or asking for a department switch the moment it gets hard does not.",
      },
      {
        id: "k4-india",
        title: "The Indian competence blindspot",
        timestampSec: 1580,
        summary: "An anti-attempt nation, afraid of finding out.",
        body: "India is framed as very anti-attempt because after an attempt you find out whether the story of yourself is true. Lots of people are afraid to find out — like being afraid to go to the doctor. Elon will try a new idea in the Valley without that shame load. One success permanently increases scouter level. The Hotmail guy still has respect twenty years later for one thing. High scouter levels attract other high scouter levels. They do not enjoy talking to low scouters because “you’re not going to get this game.”",
        quotes: [
          "India as a nation is a very anti-attempt nation because after an attempt you'll find out whether the story of yourself in your head is true or not.",
        ],
      },
      {
        id: "k4-hire",
        title: "Using scouters in hiring",
        timestampSec: 3041,
        summary: "Did they work in a profitable startup, and what did they contribute?",
        body: "Aeos interviews look at profitable-startup experience and actual contribution, not last salary. Editors are easy to judge (the work is visible). Sales people who say “the company made this much” get asked how much they personally moved. After you can read competence, use it to choose bosses and co-founders, and to cluster with high-competence people. Niceness is a cultural trap — warmth is not a scouter reading.",
      },
    ],
  },
  {
    id: 5,
    slug: "kata-05-social-pressure",
    title: "Secret Kata #1: Harsh Truths About India’s Social Pressure and Depression",
    subtitle: "Serotonin is the social-safety chemical. Managers are serotonin balancers.",
    videoId: "wM7jyLJBi_g",
    duration: "~1h",
    published: "2026",
    status: "ready",
    themes: ["leadership", "india", "safety", "neuroscience"],
    concepts: ["RSD", "social defeat", "serotonin", "psychological safety", "praise publicly criticize privately"],
    synopsis:
      "The official fifth lecture on the playlist is labelled Secret Kata #1. It is the neuroscience chapter: Indians show high rejection-sensitivity (RSD). A VC saying no, or an appraisal no, is read as a threat to the self. Social defeat is infectious — hang around a chronically defeated group and your brain starts matching them. Serotonin tracks social safety, not “happiness.” Vervet-monkey alphas get a ~50% serotonin bump; lose the rank and it falls. Companies that run on stack ranking and public humiliation are biologically destined for toxicity. The manager’s job is to be a serotonin balancer: praise publicly, criticise privately, critique work not identity, and never let a business no become a verdict on someone’s worth.",
    slides: [
      {
        title: "Rejection sensitivity dysphoria",
        bullets: [
          "Indians take “no” as a threat to the self.",
          "US counterparts are less likely to take the same no personally.",
          "VCs in India soften the no because founders get offended.",
        ],
        timestampSec: 180,
      },
      {
        title: "Social defeat is infectious",
        bullets: [
          "Five people in a bad mood will rewrite your threat map.",
          "Reddit-style suppressed rooms feel safe inside and unsafe outside.",
          "It is not bad thoughts → bad mood. It is bad mood → bad thoughts.",
        ],
        timestampSec: 720,
      },
      {
        title: "The manager is a serotonin balancer",
        bullets: [
          "Praise publicly. Correct privately.",
          "Critique the work, never the identity.",
          "A no on appraisal is a budget decision, not a worth decision.",
        ],
        timestampSec: 1500,
      },
    ],
    sections: [
      {
        id: "k5-rsd",
        title: "Indians take no personally",
        timestampSec: 180,
        summary: "RSD plus a high-rank-pressure culture turns every rejection into social threat.",
        body: "Varun names rejection sensitivity dysphoria: extreme emotional reaction to perceived rejection or criticism, linked to serotonin pathways. Online, Indians are easy to bait because they respond. In venture, a VC’s job is to say no. In India the no is delivered with “sorry, we are wrong sometimes, don’t feel bad” because founders treat it as an attack on the self. Aeos appraisal conversations are supposed to open with: a no does not mean your value is less. It is a budget. Do not take it into self-worth.",
        quotes: [
          "Rejection is never personal. Sometimes it is, but not here.",
        ],
      },
      {
        id: "k5-defeat",
        title: "Social defeat stress is infectious",
        timestampSec: 720,
        summary: "Your environment writes your serotonin. Leave rooms that run on defeat.",
        body: "Hang out with five chronically critical people and you become them. A mildly dissatisfied person who sits in a suppressed online room long enough starts treating the rest of society as unsafe — just to stay safe inside that room. A college friend told Varun: it is not bad thoughts that lead to bad mood. It is bad mood that leads to bad thoughts. SSRIs, in his own experience after physical illness, did not make him giggly. They made him less reactive — a zombie calm. Threats stopped registering. MDMA is the opposite case study: temporary social safety and vulnerability, then the Tuesday blues when threat reactivity slams back.",
        quotes: [
          "It's not bad thoughts that lead to bad mood. It's bad mood that leads to bad thoughts.",
        ],
      },
      {
        id: "k5-sero",
        title: "Serotonin tracks rank and safety",
        timestampSec: 1200,
        summary: "Alpha vervets get +50% blood serotonin. Lose the rank, lose the chemical.",
        body: "Depression is framed as a bio-social disease. In vervet monkeys, a male who becomes alpha sees blood serotonin rise about 50%. Remove him from that position and it returns to baseline. Neurotransmitters react to environment. If your environment sucks, your chemistry will too. Companies that operate on social-defeat principles — stack ranking, secret evaluations, public criticism — are biologically destined for toxicity. High-serotonin teams take risks and bounce back. Low-serotonin teams are permanently offended and stop innovating.",
      },
      {
        id: "k5-manager",
        title: "How to run a company that does not poison people",
        timestampSec: 1500,
        summary: "Safety is the precondition for Kata 4 attempts and Kata 2 writing.",
        body: "The leader’s job is serotonin balancer. Praise publicly, criticise privately. Critique work, not identity — “this draft is weak” is usable; “you are weak” ends the attempt. Make promotion criteria transparent. Blameless postmortems. Kill stack ranking; measure people against their own goals. Structure shared wins. You cannot run the Lightning Way, or ask people to take GTO swings, on a terrified team. Fix the environment first.",
        quotes: [
          "Companies that operate on social defeat principles are biologically destined for toxicity.",
        ],
      },
    ],
  },
  {
    id: 6,
    slug: "kata-06-unprofitable",
    title: "Why Indian Startups Are Unprofitable",
    subtitle: "Attribution, unit economics, and the secret key hiding in marketing jargon.",
    videoId: "jEnxvZXzo0E",
    duration: "~1h",
    published: "2026-03",
    status: "ready",
    themes: ["profit", "india", "attribution", "unit-economics"],
    concepts: ["attribution", "unit economics", "growth vs profit"],
    synopsis:
      "Kata 6 asks why so many Indian startups never become profitable. The public conversation is about funding winters and burn. Varun's cut is attribution: founders cannot tell what actually caused a win, so they scale the wrong thing. Unit economics get buried under growth theatre. Watchers of the episode flagged attribution as “a secret key to success in both business and life.” Full transcript lands on ingest; the book chapter below is the verified spine.",
    slides: [
      {
        title: "Growth is not a business model",
        bullets: [
          "Revenue up, contribution unclear.",
          "If you cannot attribute the win, you cannot repeat it.",
          "Profit is a coordination problem as much as a finance problem.",
        ],
        timestampSec: 180,
      },
    ],
    sections: [
      {
        id: "k6-attr",
        title: "Attribution is the missing instrument",
        timestampSec: 180,
        summary: "If you cannot say what caused the outcome, you will scale noise.",
        body: "Marketing treats attribution as a channel report. Varun treats it as a life skill. When a campaign, a hire, or a product line “works,” most teams cannot separate design from luck. That is fatal in India, where capital has historically subsidised confusion. Until you can attribute, you cannot write the Kata 2 plan, you cannot set Kata 3 incentives, and you cannot read a Kata 4 scouter on a growth-team lead.",
      },
      {
        id: "k6-unit",
        title: "Unit economics over narrative",
        timestampSec: 600,
        summary: "A story that does not survive contribution margin is just content.",
        body: "Indian startup culture often celebrates top-line and valuation. Kata 6 pushes the opposite: can this unit make money when the music stops? Combine with Kata 2's warning about services businesses that scale faster than communication — unprofitable scale is uncoordinated scale with a burn rate.",
      },
    ],
  },
  {
    id: 7,
    slug: "kata-07-lost",
    title: "Career Advice for People Who Feel Lost",
    subtitle: "Confusion is not diversification. Make a choice.",
    videoId: "Ia_bqazMeIw",
    duration: "36:46",
    published: "2026-03-29",
    status: "ready",
    themes: ["career", "decisions", "clarity"],
    concepts: ["confusion vs diversification", "one-way vs two-way doors", "rule of three", "growth rate vs scale"],
    synopsis:
      "Kata 7 is for people drowning in options. Most are not lacking ability — they cannot decide and commit. Confusion is five interesting things with no P&L. Diversification is extra revenue without quitting the core job. Use Bezos one-way vs two-way doors, one personal OKR, default to build-ship-feedback, and the rule of three (date three partners / ship three projects). Prefer growth rate over absolute scale. The minute you choose, you are ahead of almost everyone.",
    slides: [
      {
        title: "Confusion vs diversification",
        bullets: [
          "Confusion: five interests, zero impact.",
          "Diversification: a second revenue line that does not kill the first.",
          "Companies trust high-clarity people with bigger roles.",
        ],
        timestampSec: 240,
      },
      {
        title: "One-way doors and the rule of three",
        bullets: [
          "Some decisions should be hard to undo.",
          "One objective, three key results.",
          "After three serious samples, more sampling is opportunity cost.",
        ],
        timestampSec: 1200,
      },
    ],
    sections: [
      {
        id: "k7-conf",
        title: "Confusion is not a strategy",
        timestampSec: 180,
        summary: "Too many options plus fear of the wrong choice keeps people stuck.",
        body: "Freelancers either end up with hundreds of people doing the work, or one client, or zero. The cycle is: finish the work, realise there is no next client, hire someone, pay them, repeat. Multiple internships (Meta then Google then Nvidia) look cool and are usually a waste — one is enough. Degrees are often signalling. Risk illiteracy makes people overweight the downside of picking. In a growing company, early loyal people see salary bands jump 2–3x. You underweight compounding upside: money, relationships, skills, teammates.",
      },
      {
        id: "k7-doors",
        title: "One-way doors, OKRs, rule of three",
        timestampSec: 1080,
        summary: "Decide like Bezos. Sample three times. Then stick.",
        body: "Bezos's shareholder-letter frame: one-way doors are hard to reverse; two-way doors are not. Aeos has been thinking about making leaving a one-way door so people do not bounce out for two months of freelance and come back having burned context. If you decide to freelance, write one objective and three key results. Default to build, ship, feedback — working code or a working client clarifies faster than a whiteboard. Marriage and career rule of three: date three serious partners or ship three serious projects. After three, more sampling rarely helps.",
      },
      {
        id: "k7-growth",
        title: "Growth rate versus absolute scale",
        timestampSec: 1680,
        summary: "Sit on the exponential train. Do not leave it.",
        body: "A steel-pipe company making thousands of crores with no growth is a bureaucracy. Emergent going 0 to $50M is a rocket — it might crash, but you will know quickly. If you are sitting on an exponential train you are the stupidest person to leave. There is excess money and excess responsibility; you can put your hand up and take it. Government and peak-scale companies have already allocated the good seats. The minute you make a choice you are ahead of everybody else. Once one thing works, five more things become easy — Ranveer Singh and the wafer / protein-bar brands after acting worked.",
        quotes: [
          "The minute you make a choice, you're ahead of everybody else.",
        ],
      },
    ],
  },
  {
    id: 8,
    slug: "kata-08-hired",
    title: "How to Get Hired Faster Than Everyone Else",
    subtitle: "CHAMP-R, proof of work, and why CVs are almost not needed.",
    videoId: "oQd7Dw47VdU",
    duration: "50:37",
    published: "2026-04-09",
    status: "ready",
    themes: ["hiring", "careers", "proof-of-work"],
    concepts: ["CHAMP-R", "proof of work", "attitude > skill", "current state vs potential"],
    synopsis:
      "Kata 8 is hiring from both sides of the table. Skills sit at the bottom of the stack because they can be learned. Attitude, motivation, cultural fit, and proof of work sit above. CVs mean less and less; portfolios mean more. The framework is CHAMP-R: Cultural fit, Hard skills, Attitude, Motivation, plus the rest of the stack. Do not rush a hire. Do not hire a full-time person for a maybe-role. Pay above market and give uncapped bonuses to people you are afraid to lose.",
    slides: [
      {
        title: "CHAMP-R",
        bullets: [
          "C — cultural fit.",
          "H — hard skills (lowest on the stack).",
          "A — attitude: do they actually want this.",
          "M — motivation: can they do it.",
        ],
        timestampSec: 720,
      },
      {
        title: "Hiring mistakes",
        bullets: [
          "Rushing because the role must close tomorrow.",
          "Unstructured interviews you cannot compare.",
          "Hiring a full-time person for one week of work.",
        ],
        timestampSec: 1800,
      },
    ],
    sections: [
      {
        id: "k8-champ",
        title: "CHAMP-R and proof of work",
        timestampSec: 400,
        summary: "Skills are the easiest layer to add. Attitude is not.",
        body: "After 13–14 years, including Jobspire, Varun puts skills lowest on the ladder. You can learn Photoshop, Illustrator, or code. The AV cohort is three months and people become reasonably good editors. If you do not have the attitude to learn, you are finished. CVs are almost not needed when the work is visible — a proof-of-work portfolio matters more. Referrals work because the referrer loses reputation if the hire is bad. Senior talent in India often prices off age and dependents. No company cares. They care about value. If you cannot prove performance you will feel undervalued forever because the market will price you at X/2.",
        quotes: [
          "Attitude is greater than skill, especially in an era where you can learn any skill anytime.",
        ],
      },
      {
        id: "k8-mistakes",
        title: "How companies blow hiring",
        timestampSec: 1680,
        summary: "First person with a pulse is never a good hire.",
        body: "Mistake one: rushing. “I need this role closed tomorrow” produces the first person with a pulse. Mistake two: current state vs future potential. Be explicit. Early Aeos invested in potential. Mature Aeos hires more for current state because it cannot afford a one-year gap. Mistake three: unstructured interviews — you cannot compare 15 candidates. Mistake four: hiring full-time for a maybe-role. One week of work is a freelancer or an agency. A full-time hire is an emotional tax and a career commitment.",
      },
      {
        id: "k8-retain",
        title: "Attracting and keeping A-players",
        timestampSec: 2400,
        summary: "Above-market base. Uncapped bonuses for people you are afraid to lose.",
        body: "Aeos pays above market for every role. Best talent gets incentive compensation — uncapped bonuses. If you have to ask for it, you are probably not where you think you are. When they give it, it is because they are afraid you will leave. In three and a half years, not one of the top 16 people left. Love of the mission plus this compensation design. If you do not enjoy the work of the unit you are in, you will burn out — labs needs engineers, game-dev needs a different stack.",
      },
    ],
  },
  {
    id: 9,
    slug: "kata-09-risk",
    title: "How To Take Risk Like Rich People Do",
    subtitle: "GTO: cheap experiments, high payoff. Keep 80–90% ultra-safe.",
    videoId: "EWFn-RgxZ5M",
    duration: "1:07:44",
    published: "2026-04-20",
    status: "ready",
    themes: ["risk", "gto", "optionality"],
    concepts: ["GTO", "cheap experiments", "shock absorbers", "stated vs revealed preference"],
    synopsis:
      "Kata 9 (the risk kata — this is the long GTO masterclass released the week Kata 9 was announced) reframes entrepreneurship. People think the job is to take risk. The job is to reduce it. Think in probabilities, not binaries. GTO in real life: can I run a cheap, ideally free experiment with a high payoff? Never burn irreversible bridges. Keep shock absorbers. 80–90% of the stack ultra-safe; medium risk is what wipes you out. Productive paranoia in good times.",
    slides: [
      {
        title: "GTO in real life",
        bullets: [
          "Cheap experiment, ideally free.",
          "Asymmetric payoff.",
          "Repeat until one hits. You only need to be right once.",
        ],
        timestampSec: 978,
      },
      {
        title: "Shock absorbers",
        bullets: [
          "Cash.",
          "Broad skills.",
          "No burned bridges.",
        ],
        timestampSec: 2498,
      },
    ],
    sections: [
      {
        id: "k9-gto",
        title: "What GTO actually means here",
        timestampSec: 978,
        summary: "Game theory optimal: the cheapest experiment with the highest payoff.",
        body: "GTO is a poker term. Varun's translation: can I take a very cheap experiment, ideally free, and can the payoff be high? That is how you take risk like people who stay rich. Entrance exams in India are a hugely risky endeavour on probability of success — acceptable only because everybody else is taking them. Most people do not know how to take risk. Nothing is safe. Your job is to estimate the risk of everything. Go all-in and be right once, and it is enough. In India, if a business pivots, people laugh. That shame tax is expensive.",
        quotes: [
          "People think an entrepreneur's job is to take risk. I think in real life an entrepreneur's job is to reduce risk.",
          "GTO stands for game theory optimal — a concept used by the best poker players and applied to real life as cheap experiments with high payoff.",
        ],
      },
      {
        id: "k9-pref",
        title: "Stated vs revealed preference",
        timestampSec: 425,
        summary: "Watch what people do, not what they say they want.",
        body: "Content dampens the effect of luck by giving you more rolls. Spot permanent behaviour shifts, not tweets. Human nature is timeless. Risk is also what you missed — opportunity cost. Think in probabilities, not binaries. Model two-year career outcomes, not this month's salary. Never burn irreversible bridges when you leave a company. Fake optionality is a calendar full of maybe-doors. Real optionality is skills plus cash plus relationships you did not torch.",
      },
      {
        id: "k9-safe",
        title: "Keep 80–90% ultra-safe",
        timestampSec: 3211,
        summary: "Medium risk is the silent killer. Productive paranoia in good times.",
        body: "Loss aversion hurts more than equivalent gains help. The strategy: keep 80–90% of life ultra-safe. Medium-risk bets are what wipe people out. Build shock absorbers — cash, broad skills — before you swing. Distinguish skill domains (where practice compounds) from random domains (where it does not). The antidote to risk is not cowardice. It is staying in the game long enough for a cheap experiment to pay.",
      },
    ],
  },
  {
    id: 10,
    slug: "kata-10-distribution",
    title: "How Distribution Can 10x Your Luck, Career & Income",
    subtitle: "Luck is a function of how many people can find you.",
    videoId: "TGKgCLVxRCk",
    duration: "~1h",
    published: "2026-07-16",
    status: "ready",
    themes: ["distribution", "luck", "career"],
    concepts: ["distribution", "surface area for luck", "content as compounding"],
    synopsis:
      "Kata 10 is the distribution kata. Luck, career, and income all scale with how widely the work can be found. This is the public version of Kata 1's hiring thesis: aspiration only works if it is distributed. Combine with Kata 9 — content dampens luck by giving you more rolls — and Kata 7 — one working thing makes the next five easy.",
    slides: [
      {
        title: "Distribution is a force multiplier",
        bullets: [
          "The same work, unseen, has a different payoff.",
          "Platforms are not vanity. They are surface area.",
          "Repeatable distribution beats one viral hit.",
        ],
        timestampSec: 180,
      },
    ],
    sections: [
      {
        id: "k10-dist",
        title: "Increase the number of rolls",
        timestampSec: 180,
        summary: "You do not 10x effort. You 10x who can encounter the effort.",
        body: "Kata 9 said content dampens the effect of luck. Kata 10 is the how. Distribution is the system that turns a single piece of work into many independent chances to get lucky — a hire, a customer, a co-founder, a journalist. Without distribution, Kata 1's aspirational hiring engine is a private diary. With it, the Lightning Way stories actually travel to the next layer of the company and to the market.",
      },
    ],
  },
  {
    id: 11,
    slug: "kata-11-simplicity",
    title: "How Simplifying Everything Makes You Rich",
    subtitle: "One feature that works. Then sell it. Stop adding organs.",
    videoId: "0tbeJZYvsg4",
    duration: "~1h",
    published: "2026-07",
    status: "ready",
    themes: ["simplicity", "taste", "restraint", "engineering"],
    concepts: ["first principles vs social proof", "one task one person", "stop adding features"],
    synopsis:
      "Kata 11 is the simplicity lecture. Teams add complexity because it looks professional, not because it is simpler. The iPad-editing crusade is the case study: new hardware, new cohort curriculum, broken hiring, lost styluses, a split Premiere / iPad toolchain — and the company would likely die in weeks. Junior engineers love complexity (lines of code as status). Senior engineers in their 30s delete it. Successful founders find the one thing that works and put all energy into marketing and sales. Unsuccessful ones keep building the other nine features nobody asked for. One task, one person — do not fill idle hours with a second job.",
    slides: [
      {
        title: "Complexity as social signalling",
        bullets: [
          "“Professional companies do it this way” is not a first-principles answer.",
          "IT often adds process to look like a real company.",
          "Ask: what is the simplest version that keeps quality?",
        ],
        timestampSec: 180,
      },
      {
        title: "The iPad-editing trap",
        bullets: [
          "Changes hiring, teaching, storage, hardware, and software at once.",
          "A good personal experiment is a bad company-wide migration.",
          "If we had wanted iPads, day one — not year five.",
        ],
        timestampSec: 480,
      },
      {
        title: "One feature, then sell",
        bullets: [
          "Junior engineers add organs. Seniors remove them.",
          "Once the thing works, spend on distribution (see Kata 10).",
          "One task, one person. Idle hours are not a second role.",
        ],
        timestampSec: 1200,
      },
    ],
    sections: [
      {
        id: "k11-social",
        title: "Complexity is usually status",
        timestampSec: 180,
        summary: "If the reason is “that is how professional companies do it,” you do not have a reason.",
        body: "People propose process because they want to look like a grown-up company. There is no first-principles answer. Management’s job becomes walking the building asking: what is the simplest version of what you are doing? Keep quality. Delete the rest. Almost every idea that actually says “this makes the process simpler” gets implemented. The others are costumes.",
      },
      {
        id: "k11-ipad",
        title: "Why “edit on iPad” would have killed Aeos",
        timestampSec: 480,
        summary: "A local maximum for one person is a coordination bomb for a company.",
        body: "One person pitched iPad editing after every meeting. Collaboration and storage were the wrong objections. The real cost: AV Cohort would have to teach iPad instead of Premiere, so the last years of graduates become un-hireable. Then a split toolchain. Then styluses that get lost. If you wanted that company, you chose it on day one. Mid-flight it is a shutdown-in-weeks idea, because the firm is dependent on Adobe. The pitcher tried a thing, liked it, and did not run the complexity bill.",
      },
      {
        id: "k11-one",
        title: "Build the one thing. Then sell it.",
        timestampSec: 1200,
        summary: "The 20s add features. The 30s delete them and go to market.",
        body: "Junior engineers write complicated codebases they cannot read six months later. Scenes hit this: more features, more dependencies, a test suite only one white-beard understood. App developers ship one loved feature, then nine more nobody wants, because they do not know what else to do with their time. They should have gone to sales. iPhone vs Android is the consumer version — Android has the features; by your 30s you use none of them. One task, one person. Filling someone’s leftover two hours with a second job was a cash-poor-young-founder habit. Stop.",
        quotes: [
          "Successful entrepreneurs know the one specific thing that works. Then they just market and sell it.",
        ],
      },
    ],
  },
  {
    id: 12,
    slug: "kata-12-projects",
    title: "How I Manage Projects End To End",
    subtitle: "Do things that don’t scale. Then buy the machine when the math says so.",
    videoId: "mwQhnZ32CeE",
    duration: "1:00",
    published: "2026",
    status: "ready",
    themes: ["projects", "rnd", "capacity", "technology"],
    concepts: ["shot vs R&D", "capacity math", "rent then buy", "30% buffer"],
    synopsis:
      "Kata 12 is the project-management masterclass, told through Unleash the Avatar. Roles start as R&D (unknown) and convert to “shot” (we know this person can hit it). Photogrammetry is the long case: phone scans of a Mumbai chai stall, then a local slum (60–70% usable, wrong setting), then a nine-person / ten-day Chanderi shoot in the 6–8am and 4–6pm light windows. Technology is bought only after capacity math — 800 animations × hand keyframe = 40 animators = ~₹4 crore/year vs ₹50 lakh mocap + 7 animators. Rent for R&D. Buy when the role is shot and you are going to scale. Keep a 30% buffer on every estimate.",
    slides: [
      {
        title: "Shot versus R&D",
        bullets: [
          "Shot: we already know this person / process will hit.",
          "R&D: we do not know. Do not staff it like production.",
          "Three alphas exist to convert R&D into shot.",
        ],
        timestampSec: 180,
      },
      {
        title: "Photogrammetry R&D ladder",
        bullets: [
          "Phone + consumer app → Mumbai stall. Impressive, not final.",
          "DSLRs → neighbourhood slum. Pretty, wrong world.",
          "Nine people, ten days, Chanderi, rented cameras, two light windows.",
        ],
        timestampSec: 600,
      },
      {
        title: "Capacity math before you buy toys",
        bullets: [
          "Time one unit of work. Multiply by the full game.",
          "Add 30% buffer.",
          "Buy tech when it saves more hires than it costs. Rent until then.",
        ],
        timestampSec: 1800,
      },
    ],
    sections: [
      {
        id: "k12-shot",
        title: "Shot versus R&D",
        timestampSec: 180,
        summary: "Do not staff an unknown like a factory line.",
        body: "By the time a team is “high resolution,” you have decided what to outsource (porting, until you learn nobody outside can do it) and what must be inside. Three alphas exist to get you here. Levels needed a designer, an artist, a lighting artist, and photogrammetry. Everything except photogrammetry was shot — one person could already do those three well. Photogrammetry was the unknown, so it got R&D, not a 40-person hire.",
      },
      {
        id: "k12-photo",
        title: "How the photogrammetry R&D actually ran",
        timestampSec: 600,
        summary: "Phone, then street, then a film town. Each step bought the next.",
        body: "Video team went out with phones and consumer apps. A Mumbai chai stall looked good and was not good enough. Upgrade to company DSLRs. Scan the slum next door, clean it in-house, get 60–70% of what they thought the modern-India game needed. Making the slice once assets existed was two weeks. Capturing was painful. After trailer 1 they learned slum assets would not be the game, so they went to Chanderi: line producer, blocked buildings, nine people, ten days, rented cameras, shoot only 6–8am and 4–6pm because harsh light has to be de-lit by hand. A drone still hit a tree and they shipped a replacement mid-process. The OG chart is not just people. Sometimes the cell is a machine.",
      },
      {
        id: "k12-math",
        title: "Buy technology when the arithmetic forces you",
        timestampSec: 1800,
        summary: "Do things that don’t scale. Automate when the hire-count is insane.",
        body: "One hand-keyed hair swipe in trailer 1 went viral. Rented mocap was garbage. Before buying, they timed one animation, multiplied by ~800 moves across characters, and got 40 animators for a 12-month game. At a hypothetical ₹10 lakh fully-loaded, that is ~₹4 crore a year. Mocap kit plus gloves was ~₹50 lakh. Break-even if you save five hires. They bought. Rule: rent technology for R&D, buy when a role converts from R&D to shot and you are going to finish the project. Factory owners and Paul Graham already knew this. Levels example: one environment artist, 3 months, 30 minutes of playable level for trailer 2. Once players loved those environments, the math became trustworthy. Scale to a 10-hour game. Add the standard 30% buffer.",
        quotes: [
          "We buy technology once we already know what we're doing, to reduce costs. We rent technology when we're doing R&D.",
        ],
      },
    ],
  },
  {
    id: 13,
    slug: "kata-13-think-rich",
    title: "How to Think Like Rich People",
    subtitle: "Survive failure. Keep the upside. Do not confuse broke-gambling with VC math.",
    videoId: "8WgipmPSPKk",
    duration: "1:00",
    published: "2026",
    status: "ready",
    themes: ["wealth", "risk", "power-laws", "sales"],
    concepts: ["extreme outcomes", "diversification", "survive failure retain upside", "attention of the rich"],
    synopsis:
      "Kata 13 is how wealth changes the game you will even play. ₹10 crore into a company that returns ₹12 crore is a rounding error at ₹100 crore net worth and a life-changing win at ₹1 crore. The rich (and VCs sitting on $500M–$1B funds) want extreme outcomes — death or 50x — because they can write off the deaths. Sequoia does not care about a $2–3M corpse next to Grow. The broke and the extreme-rich rhyme: both take fat-tailed bets. The difference is lives remaining. Anil Ambani’s failure is still better than most successes. The lesson is not “gamble everything.” It is: how do I survive failure while retaining upside. Also: rich people do not read your WhatsApp. They watch the video.",
    slides: [
      {
        title: "Risk appetite is a function of net worth",
        bullets: [
          "₹2 crore delta is everything at ₹1 crore NW, nothing at ₹100 crore.",
          "VCs want death-or-50x, not 20% IRRs on small cheques.",
          "At ₹1,000 crore the small project gets even less attention.",
        ],
        timestampSec: 240,
      },
      {
        title: "Broke and rich rhyme. They are not the same.",
        bullets: [
          "Stagnant ₹30–35k tech salaries plus exploding real estate create hyper-gambling.",
          "The rich have many lives and are diversified.",
          "Downside is zero. Upside is uncapped. That is the math, not the romance.",
        ],
        timestampSec: 900,
      },
      {
        title: "How to get a rich person’s attention",
        bullets: [
          "They will ignore the personal ping.",
          "They will forward your public video back to you.",
          "Distribution (Kata 10) is how you sell to people who do not read.",
        ],
        timestampSec: 2100,
      },
    ],
    sections: [
      {
        id: "k13-nw",
        title: "The game changes with the stack",
        timestampSec: 240,
        summary: "Same 20% return. Completely different decision at different net worth.",
        body: "Will someone with ₹100 crore put ₹10 crore into a company that returns ₹12 crore in five years? No. They would rather that ₹10 crore become ₹500 crore or die. Between wealth levels, risk moves from safe-and-guaranteed to extreme-multiplier. At ₹1,000 crore the small, unambitious project is not even interesting — they can lose ₹10 crore ten times and still win if one hits ₹500 crore. That is how a $500M–$1B VC fund thinks. A $1–2M outcome does not move them. Sequoia’s Grow win makes a $2–3M write-off invisible. Internet pile-ons about a failed cheque miss the portfolio math.",
      },
      {
        id: "k13-broke",
        title: "The broke and the extreme-rich both play fat tails",
        timestampSec: 900,
        summary: "One has many lives. The other is trying to buy a first life.",
        body: "Hyper-gambling (apps, crypto, ₹5 → ₹500) is what a generation does when salaries are stuck at ₹30–35k/month for a decade and real estate has left the building. Varun has empathy for that. A Goa poker player making more on a boat than at the job is running the same shape of bet as a VC — except the VC is diversified and cannot go below zero on any one ticket. A furniture-company seatmate in business class: ₹3–4 crore yearly profit, ₹150 crore net worth, almost all of it a college-era plot the government later bought for a road. Power laws and accidental luck dominate. Become a free-market participant. The wrong lesson is take enormous risks. The right one is survive failure while retaining upside.",
        quotes: [
          "Take enormous risks is the wrong lesson. It's more about how do I survive failure while retaining upside.",
        ],
      },
      {
        id: "k13-attn",
        title: "They will not read the message. They will watch the video.",
        timestampSec: 2100,
        summary: "To sell to high-NW people, use public distribution, not DMs.",
        body: "High-net-worth friends ignore a “you should invest in this” ping. Weeks later they forward Varun his own video about that company and ask to get in. He scrolls up: he already told them. They did not pay attention. The public object created the private conversation. If you are raising from these people or want them to use the product, Kata 10 is not optional.",
      },
    ],
  },
  {
    id: 14,
    slug: "kata-14",
    title: "Kata 14",
    subtitle: "Awaiting official title from the playlist.",
    videoId: null,
    duration: "—",
    published: "",
    status: "stub",
    themes: [],
    concepts: [],
    synopsis: "Reserved for the official Kata 14 lecture.",
    slides: [],
    sections: [
      {
        id: "k14-pending",
        title: "Not yet ingested",
        timestampSec: 0,
        summary: "No public long-form title locked at build time.",
        body: "Run the playlist ingest to fill this chapter.",
      },
    ],
  },
  {
    id: 15,
    slug: "kata-15",
    title: "Kata 15",
    subtitle: "Awaiting official title from the playlist.",
    videoId: null,
    duration: "—",
    published: "",
    status: "stub",
    themes: [],
    concepts: [],
    synopsis: "Reserved for the official Kata 15 lecture.",
    slides: [],
    sections: [
      {
        id: "k15-pending",
        title: "Not yet ingested",
        timestampSec: 0,
        summary: "No public long-form title locked at build time.",
        body: "Run the playlist ingest to fill this chapter.",
      },
    ],
  },
  {
    id: 16,
    slug: "kata-16",
    title: "Kata 16",
    subtitle: "The closer. Official title lands on ingest.",
    videoId: null,
    duration: "—",
    published: "",
    status: "stub",
    themes: ["leadership", "synthesis"],
    concepts: ["kata as practice"],
    synopsis:
      "Kata, from martial arts, is structured practice used to internalise fundamentals through repetition. Episode 16 is the closer of the series — Varun flagged during Kata 4 that the best #kata comments would be used in the 16th episode. Treat this page as the synthesis chapter once ingest runs.",
    slides: [],
    sections: [
      {
        id: "k16-pending",
        title: "The closer",
        timestampSec: 0,
        summary: "Structured practice, written in public, still being released.",
        body: "The official playlist currently has 13 videos. Katas 14–16 are not out. Use 1–13 as the working corpus. Do not invent a finale.",
      },
    ],
  },
];

export function getKata(slug: string): Kata | undefined {
  return katas.find((k) => k.slug === slug);
}

export function getKataById(id: number): Kata | undefined {
  return katas.find((k) => k.id === id);
}

export function readyKatas(): Kata[] {
  return katas.filter((k) => k.status === "ready");
}
