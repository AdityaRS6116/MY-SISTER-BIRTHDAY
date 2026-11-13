// ============================================================
//  HARSHITA'S BIRTHDAY WEBSITE - CONFIGURATION FILE
//  Edit this file to personalize the website easily!
// ============================================================

const config = {
  // ── PERSONAL DETAILS ─────────────────────────────────────
  sisterName: "Harshita",
  brotherName: "Your Brother",
  brotherSignature: "Happy Birthday Little Sister",
  birthday: "18 November 2026",

  // ── PHOTOS ───────────────────────────────────────────────
  // Place ALL your photos inside the /public/photos/ folder.
  // Each photo below appears as a separate Polaroid card in the "OUR LITTLE WORLD" gallery.
  // Add as many as you like — each one gets its own frame!

photos: [
  {
    src: "/photos/photo1.jpeg",
    caption: "Us & our little world 💗",
    subcaption: "Some memories are priceless",
  },
  {
    src: "/photos/photo2.jpeg",
    caption: "My favourite person 🌸",
    subcaption: "Always smiling, always special",
  },
  {
    src: "/photos/photo3.jpeg",
    caption: "Together always ✨",
    subcaption: "Moments I'll cherish forever",
  },
],
    // Add more photos like this:
    // {
    //   src: "/photos/photo4.jpg",
    //   caption: "Another beautiful memory 💕",
    //   subcaption: "...",
    // },
  

  // ── CINEMATIC PHOTO (Section 7 - "One Photo, A Thousand Memories") ──
  // This photo appears alone in the big glowing cinematic frame.
  // Use a DIFFERENT photo here than the ones above for variety!
cinematicPhoto: {
  src: "/photos/photo4.jpeg",
  caption: "Brother & Sister forever 💗",
},
  // ── MUSIC ────────────────────────────────────────────────
  // Place a music file (MP3) in /public/music/
  // Set to null to disable music feature
  musicSrc: null, // e.g. "/music/birthday-music.mp3"

  // ── MESSAGES ─────────────────────────────────────────────
  messages: {
    // Welcome Screen
    welcomeHeading: "Hey Harshita! 💗",
    welcomeGujarati: "આજે તારા માટે કંઈક ખાસ છે...",
    welcomeSub: "Someone who loves you has created a little surprise just for you.",

    // Birthday Reveal
    birthdayHeading: "HAPPY BIRTHDAY HARSHITA! 🎂",
    birthdayGujarati: "જન્મદિવસની ખૂબ ખૂબ શુભેચ્છાઓ, હર્ષિતા! ❤️",
    birthdayMessage: "Today is your day, Princess. Keep smiling, keep shining and keep being the wonderful person you are.",

    // Memories Section
    memoriesHeading: "OUR LITTLE WORLD ❤️",
    memoriesGujarati: "આપણી યાદો હંમેશા ખાસ રહેશે.",
    memoriesEnglish: "Some memories are priceless, and moments with you are among my favourites.",

    // Letter Section
    letterContent: `Dear Harshita,

Happy Birthday to my sweetest little sister!

I might not always express my feelings, and sometimes we fight, tease and annoy each other, but that will never change how special you are to me.

તું હંમેશા ખુશ રહે, તારા બધા સપના પૂરા થાય અને તારા જીવનમાં હંમેશા ખુશીઓ જ ખુશીઓ રહે.

I hope you achieve everything you dream of. Never stop smiling, never stop believing in yourself, and never forget how special you are.

ભાઈ તરીકે મારી એક જ ઈચ્છા છે કે તું જીવનમાં હંમેશા આગળ વધે અને ખૂબ ખુશ રહે.

No matter how much we argue, you will always be my little sister, and I will always wish the very best for you.

Keep shining, Harshita!

With lots of love,
Your Brother ❤️`,

    // Secret Surprises
    surprises: [
      {
        icon: "💗",
        title: "A Little Reminder",
        preview: "Open your first surprise...",
        message: "Harshita, never forget how precious you are. તું ખૂબ જ ખાસ છે અને હંમેશા ખુશ રહે.",
      },
      {
        icon: "💌",
        title: "A Secret Message",
        preview: "A little secret for you...",
        message: "No matter how much we fight, you'll always be my favourite little troublemaker! 😂❤️\n\nઆપણી નાની નાની મસ્તી અને ઝઘડા હંમેશા યાદ રહેશે!",
      },
      {
        icon: "🌟",
        title: "A Brother's Promise",
        preview: "A promise just for you...",
        message: "Life may change, but you'll always have someone cheering for you. Keep dreaming big, little sister!\n\nતારા દરેક સારા સપનામાં મારી શુભેચ્છાઓ હંમેશા તારી સાથે છે.",
      },
    ],

    // Cake Section
    wishMessage: "May all your beautiful wishes come true!",
    wishGujarati: "તારી દરેક ઈચ્છા પૂરી થાય! ❤️",

    // Photo Moment
    photoMomentHeading: "ONE PHOTO, A THOUSAND MEMORIES.",
    photoMomentGujarati: "ભાઈ-બહેનનો પ્રેમ હંમેશા ખાસ હોય છે.",

    // Grand Finale
    finaleHeading: "ONE LAST THING, HARSHITA...",
    finaleMessage: "You are one of the most precious gifts life has given me.",
    finaleGujarati: "હંમેશા હસતી રહે, ખુશ રહે અને આવી જ મસ્તી કરતી રહે!",
    finaleBirthday: "Happy Birthday Once Again, My Little Princess! 👑",
    finaleSignature: "With lots of love ❤️",
    finaleFrom: "Your Brother",
  },
};

export default config;
