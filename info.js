/* عدّل المعلومات داخل هذا الملف فقط، ثم احفظه وأعد تحميل الصفحة. */
window.INFO = {
  profile: {
    name: "Histo99",
    age: "15",
    country: "المملكة العربية السعودية",
    bio: "ااداري و صانع محتوى",
    // اختياري: اكتب النسخة الإنجليزية هنا لتظهر عند اختيار English.
    en: { name: "", country: "", bio: "" }
  },

  // تقدر تضيف أي عدد من السيرفرات: انسخ كتلة السيرفر كاملة، وضع فاصلة بين كل كتلتين.
  // الأنواع المتاحة: discord, minecraft, bot, other
  servers: [
    {
      type: "NoyanMc",
      title: "Minecraft Server",
      description: "انا ادمن هنا  .",
      titleEn: "Minecraft Server",
      descriptionEn: "i am admin here.",
      ip: "play.NoyanMc.net",
      port: "26328",
      discord: "https://discord.gg/DzZSW3e9G9"
    },
    {
      type: "discord",
      title: "Discord Server",
      description: "سيرفر ديسكورد أداري فيه.",
      titleEn: "Discord Server",
      descriptionEn: "A Discord server I help manage.",
      ip: "",
      port: "",
      discord: "https://discord.gg/your-invite"
    },
    {
      type: "bot",
      title: "اسم البوت",
      description: "اكتب معلومات البوت أو دورك فيه.",
      titleEn: "Bot name",
      descriptionEn: "Add details about the bot or your role.",
      ip: "",
      port: "",
      discord: ""
    },
    {
      type: "other",
      title: "سيرفر آخر",
      description: "اكتب معلومات السيرفر أو دورك الإداري فيه.",
      titleEn: "Other server",
      descriptionEn: "Add details about the server or your role.",
      ip: "",
      port: "",
      discord: ""
    }
  ],

  // تقدر تضيف أي عدد من الحسابات: انسخ كتلة الحساب كاملة، وضع فاصلة بين كل عنصر.
  // المنصات المتاحة: youtube, tiktok, instagram, other
  socials: [
    { platform: "youtube", title: "YouTube", handle: "@username", url: "https://youtube.com/@username" },
    { platform: "tiktok", title: "TikTok", handle: "@username", url: "https://tiktok.com/@username" },
    { platform: "instagram", title: "Instagram", handle: "@username", url: "https://instagram.com/username" }
  ]
};
