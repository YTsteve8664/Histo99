/* عدّل المعلومات داخل هذا الملف فقط، ثم احفظه وأعد تحميل الصفحة. */
window.INFO = {
  profile: {
    name: "",
    age: "",
    country: "",
    bio: ""
  },

  // غيّر أمثلة البيانات التالية إلى معلوماتك، أو انسخ العنصر لإضافة سيرفر آخر.
  // الأنواع المتاحة: discord, minecraft, bot, other
  servers: [
    {
      type: "minecraft",
      title: "Minecraft Server",
      description: "سيرفر ماينكرافت أشارك في إدارته.",
      ip: "play.example.com",
      port: "25565",
      discord: "https://discord.gg/your-invite"
    },
    {
      type: "discord",
      title: "Discord Server",
      description: "سيرفر ديسكورد أداري فيه.",
      ip: "",
      port: "",
      discord: "https://discord.gg/your-invite"
    },
    {
      type: "bot",
      title: "اسم البوت",
      description: "اكتب معلومات البوت أو دورك فيه.",
      ip: "",
      port: "",
      discord: ""
    },
    {
      type: "other",
      title: "سيرفر آخر",
      description: "اكتب معلومات السيرفر أو دورك الإداري فيه.",
      ip: "",
      port: "",
      discord: ""
    }
  ],

  // المنصات المتاحة: youtube, tiktok, instagram, other
  socials: [
    { platform: "youtube", title: "YouTube", handle: "@username", url: "https://youtube.com/@username" },
    { platform: "tiktok", title: "TikTok", handle: "@username", url: "https://tiktok.com/@username" },
    { platform: "instagram", title: "Instagram", handle: "@username", url: "https://instagram.com/username" }
  ]
};
