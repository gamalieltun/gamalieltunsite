// data/posts.js
// Simple file-based "CMS" for blog posts

// Each post:
// id, slug, title, date (YYYY-MM-DD), author, tags [array], excerpt, featuredImage (path), content (full HTML string)

const posts = [
    {
      id: 1,
      slug: "Educated |ပညာဆိုတာဒီလိုရှာ",
      title: "Educated |ပညာဆိုတာဒီလိုရှာ",
      date: "2022-05-27",
      author: "Gamaliel Tun",
      tags: ["Article", "Book Review"],
      excerpt:
        "educated စာအုပ်ကိုဖတ်မယ်ဖတ်မယ်နဲ့ မဖတ်မဖြစ်ဘူး။ မူရင်း pdf file ကိုဒေါင်းထားဖြစ်တာကြာပြီဆိုပေမဲ့ တခြားစာအုပ်တွေကို ဖတ်နေရင်း မဖတ်ဖြစ်တာ။\
        ဟိုတစ်လကမှ read and return စာအုပ်ဆိုင်မှာ စာရင်းသွားသွင်းတဲ့အချိန်မှ ဆရာသင့်လူ မြန်မာပြန်ထားတဲ့ Educated ပညာဆိုတာဒီလိုရှာ စာအုပ်ကို ငှားခဲ့ဖြစ်တယ်။",
      featuredImage: "assets/images/educated.jpeg",
      content: `
        <p>
          educated စာအုပ်ကိုဖတ်မယ်ဖတ်မယ်နဲ့ မဖတ်မဖြစ်ဘူး။ မူရင်း pdf file ကိုဒေါင်းထားဖြစ်တာကြာပြီဆိုပေမဲ့ တခြားစာအုပ်တွေကို ဖတ်နေရင်း မဖတ်ဖြစ်တာ။
        </p>
        <p>
          ဟိုတစ်လကမှ read and return စာအုပ်ဆိုင်မှာ စာရင်းသွားသွင်းတဲ့အချိန်မှ ဆရာသင့်လူ မြန်မာပြန်ထားတဲ့ Educated ပညာဆိုတာဒီလိုရှာ စာအုပ်ကို ငှားခဲ့ဖြစ်တယ်။
        </p>
        <p>
          ဒီစာအုပ်ကို စသိတာက လိုင်းပေါ်မှာ Bill Gates ရဲ့ recommendation တွေထဲက တစ်ခုဆိုပြီး…။ သိပ်ကောင်းတယ်လို့လည်း‌ ပြောကြတယ်။ memoir လို့ဆိုပေမဲ့လည်း ဝတ္ထုပုံစံနဲ့ စာရေးသူပေးချင်တဲ့ message တစ်ခုခု၊ self-help book တစ်ခုခု ဘက်ကို ပိုရောက်လိမ့်မယ်လို့ ထင်ထားတာ၊ အမှန်တကယ်တော့ တကယ်ကို အသက်ဝင်တဲ့ ကိုယ်တိုင်ရေး မှတ်တမ်းကောင်းတစ်ခုဖြစ်တယ်ဆိုတာ ဖတ်ရင်းနဲ့ သိလိုက်ရတယ်။ ဒီစာအုပ်က ၂၀၁၈ ခုနှစ်မှာ ထွက်ရှိခဲ့ပြီး best selling စာအုပ်တစ်အုပ်လည်း ဖြစ်ခဲ့ပါတယ်။
        </p>

        <figure class="post-image">
          <img src="assets/images/educated2.jpeg" alt="Bill and Tara" />
          <figcaption>Bill and Tara</figcaption>
        </figure>
        
        educate<p>ကျွန်တော်တို့ ဖွံ့ဖြိုးနေဆဲနိုင်ငံတွေကသူတွေ သိထား၊ နားလည်ထားတာက အမေရိကန်လို နိုင်ငံတစ်နိုင်ငံက နိုင်ငံသားတွေက အင်မတန်မှ ပြီးပြည့်စုံပြီးသားသူတွေ၊ ပညာရေး ကျန်းမာရေးအဘက်ဘက်က ပြည့်စုံပြီးသားလူတွေ၊ ဒီလိုမျိုး။
        </p>
        <p>ဒီစာအုပ်ဖတ်လိုက်မှ သိလိုက်ရတဲ့အရာက တကယ်ကို အံ့ြသစရာပဲ။ သူတို့နိုင်ငံမှာတောင် ကျောင်းမထားတဲ့၊ အတွေးခေါင်တဲ့၊ တစ်ယူသန် မိဘတွေ၊ မိသားစုတွေရှိနေသေးတယ်။ ကျွန်တော်တို့တွေမထင်ထားတဲ့ အမှောင်ဖက်ခြမ်းတစ်ခုကို တွေ့ရတယ်။
        </p>
        <h3>ဇာတ်လမ်းအကျဥ်းကို နည်းနည်းလောက်ပြောပြချင်ပါတယ်</h3>
        <p>တာရာက ငယ်ငယ်လေးကတည်းက မိဘတွေ၊ မောင်နှမတွေနဲ့ တောတောင်တွေကြားထဲမှာနေတယ်။ အင်မတန်မှ ခေါင်ဖျားတဲ့နေရာလို့ မဆိုနိုင်ပေမဲ့လည်း မြို့တွေလောက်တော့လည်းမစုံဘူးပေါ့၊ နေထိုင်မှုပုံစံတွေကလည်း ကွာတယ်။</p>
        <figure class="post-image">
          <img src="assets/images/educated1.jpeg" alt="Clifton, Idaho| Photo from Internet" />
          <figcaption>Clifton, Idaho| Photo from Internet</figcaption>
        </figure>
        <p>အဖေနဲ့အမေမှာ အဖေကမြန်မာအခေါ် အလုပ်ကြမ်းသမား၊ ကားသင်္ချိုင်းမှာ လုပ်တယ်။ အမေကတော့ နာမည်အတော်အသင့်ရှိတဲ့ သားဖွားဆရာမ၊ ဒါကလည်း သေချာသင်ထားတဲ့ ဆရာမမျိုးမဟုတ်ပဲ အရပ်ထဲက လက်ဆင့်ကမ်းနည်းနဲ့ တတ်ခဲ့တဲ့ပုံစံမျိုးပါ။
        </p>
        <p>မိသားစုတစ်ခုလုံးကို ဖခင်ဖြစ်သူကပဲ ချုပ်ကိုင်လွှမ်းမိုးထားတယ်။ အရာရာက သူ့ရဲ့ call အောက်မှာပဲ။‌ ဘာသာတရားကလည်း အင်မတန်မှ အစွန်းရောက်တယ်။ နောက်တစ်ခုဆိုးတာက တစ်ခါက မိသားစုတစ်ခုကို လုံခြုံရေးအဖွဲ့ရဲ့ ပစ်ခတ်မှုကြောင့် သေဆုံးခဲ့ရတဲ့ ဟိုးလေးတကျော်ဖြစ်သွားခဲ့တဲ့သတင်းကို ကြားပြီးကတည်းက အခြေအနေက ပိုဆိုးလာခဲ့တယ်။</p>
        <p>သူတို့ပြီးရင် ငါတို့မိသားစုအလှည့်ပဲဆိုပြီး အစိုးရကို ဆန့်ကျင်ရေးတွေ ပြင်းထန်လာတယ်၊ (သူတို့အပြော)ဆိုရှယ်လစ်ဝါဒတွေ မိသားစုဝင်တွေကြား ဝင်ရောက်လာမှာဆိုတဲ့အတွေးနဲ့ သားသမီးတွေကို ဘာမှမလုပ်ခိုင်း၊ ကျောင်းထားထားတဲ့သူတွေကို ထုတ်ပစ်၊ မနေရသေးတဲ့သူတွေခင်မျာလည်း ကျောင်းမတက်ရ၊ အိမ်တွင်းစာသင်ရေးစနစ်နဲ့ ပညာအရည်အချင်းအဲ့လောက်မရှိတဲ့ မိခင်ကပဲသင်တယ်။</p>
        <p>ဒီထဲကမိသားစုက ဆိုရမယ်ဆို တကယ်ကို ignorant တွေပါ။ ဒီရဲ့အခြေခံကလည်း စိတ်ကျန်းမာရေးကြောင့်လို့ ဆိုရမယ်။ ဖခင်ကိုယ်တိုင်နဲ့ သားသမီးတွေထဲက တစ်ချို့ကတောင် bipolar လို့ခေါ်တဲ့ ရောဂါကို ခံစားနေတာ သူတို့ကိုယ်တိုင်တောင် မသိကြရှာဘူး။</p>
        <p>မသိရင်မသိသလို ထထဖောက်တယ်၊ တစ်ခုခုဆိုရင်လည်း တစ်ယူသန် တစ်သံစွဲ စဥ◌်းစားခြင်းမရှိ၊ ဥာဏ်မသုံး။ ဒီဒဏ်တွေကို သမီးဖြစ်သူ အငယ်ဆုံးလေး တာရာကပိုပြီး ခံရရှာတယ်။ ဒီလိုခံနေရတဲ့ ခါးသီးတဲ့အတွေ့အကြုံတွေကိုလည်း နောက်ပိုင်း တက္ကသိုလ်တက် ပညာသင်တဲ့အခါမှ ပြန်သုံးသပ်သိရှိသွားခဲ့တာ။</p>
        <p>နောက်ပိုင်းမှာတော့ တာရာဟာ အရာရာကို လက်ခံပြီး ဘဝကို အကောင်းဆုံးရှေ့ဆက်နိုင်ခဲ့တယ်လို့ပဲပြောရမယ်။ အခြေခံပညာကျောင်းတွေကို မတက်ခဲ့ရတဲ့သူတစ်ယောက်က တကယ့်နာမည်ကြီး ကျောင်းတွေဖြစ်တဲ့ ကိန်းဘရစ်ချ်၊ ဟားဗတ်လိုတက္ကသိုလ်တွေကို တက်လမ်းနိုင်ခဲ့တယ်လို့ ဘယ်သူကရောယုံမှာလဲ။
        </p>
        <figure class="post-image">
          <img src="assets/images/educated3.jpeg" alt="Tara Westover" />
          <figcaption>Tara Westover</figcaption>
        </figure>

        <h2>ကျွန်တော့်အတွေး</h2>
        <p>လှောင်ချိုင့်ထဲက ငှက်က လှောင်ချိုင့်ပုံစံကို အပြင်ဘက်ကကြည့်မှ ပိုပြီး မြင်ရတာပေါ့။ ဘယ်လောက်ကျဥ◌်းကျပ်သလဲ၊ ဘယ်လောက်ဆိုးလိုက်သလဲဆိုတာ…။ရုန်းထွက်ဖို့ကတော့ အင်မတန်မှခက်တယ်။ ရုန်းထွက်နိုင်ပြီဆိုရင်လည်း ပြန်မသွားဖြစ်တော့တာကတော့ အသေချာပဲ။ စွန့်လွှတ်သင့်တဲ့အရာကို စွန့်လွှတ်လိုက်ရတယ်။</p>
        <p>တစ်ချို့ကျတော့ သူများဖန်တီးတဲ့ လှောင်ချိုင့်ထဲမှာ ရှိမနေပေမဲ့ ကိုယ်ကိုယ်တိုင် ဖန်တီးထားတဲ့ လှောင်ချိုင့်ထဲမှာ ပိတ်မိနေတတ်တယ်။ ဒါကိုလည်း မသိကြဘူး။ သိအောင်လည်း မကြိုးစားကြဘူး။ (ကြိုးစားဖို့ကိုလည်း ပြောပြရင် မကြိုက်ကြတဲ့သူတွေက ရှိသေးတယ်)
        နောက်ဆုံးတော့လည်း ဘယ်လိုအခြေအနေမျိုးပဲဖြစ်ဖြစ် ကိုယ်ကိုယ်တိုင်ကပဲ အဓိကပါပဲ။ ကိုယ့်ရဲ့ အတွေ့အကြုံ၊ ခံယူချက်၊ ဆုံးဖြတ်ချက်တွေကပဲ ဘဝကို ပုံဖော်ပေးသွားတာပါ။</p>
        

        <h2>ဘယ်သူတွေကို ညွှန်းပေးချင်လဲ?</h2>
        <p>ဘယ်သူတွေအတွက်လည်းဆိုရင် စာကို ဖတ်ရုံတင်မဟုတ်ပဲ ဆက်စပ်ပြီး တွေးချင်တဲ့၊ မတူတဲ့အမြင်ကနေ ကြည့်ရတာ ကြိုက်တဲ့ သူတွေကို ဖတ်ကြည့်စေချင်တယ်။ ဒီစာအုပ်က အများကြီး ဆက်စပ်တွေးလို့ကောင်းတဲ့ထဲမှာ ပါပါတယ်။ ကိုယ့်ကိုယ်ကို သုံးသပ်ဖို့ ဒါမှမဟုတ် အပြောင်းအလဲတစ်ခုခုအတွက် ကြိုးစားနေကြရတဲ့အချိန်မှာ အများကြီး အသုံးဝင်မယ်လို့ထင်တယ်။</p>
        <p>အခုအခြေအနေနဲ့ဆိုရင် ပြောစရာတွေ၊ မတူတဲ့တွေးခေါ်ပုံ base တွေနဲ့ တစ်ယောက်တစ်မျိုးထွက်လာနိုင်တယ်။ဒါပေမဲ့ တကယ့်သင်ခန်းစာတွေကတော့ ကိုယ်ကိုယ်တိုင်ပဲ ရှာရမှာပါ။</p>
        <p>ဖတ်ကြည့်ဖို့ တိုက်တွန်းပါတယ်။</p>
        `,
    },
    {
      id: 2,
      slug: "lessons-from-building-side-projects",
      title: "Lessons from Building Side Projects",
      date: "2025-02-10",
      author: "[Your Name]",
      tags: ["Projects", "Learning"],
      excerpt:
        "Side projects have been my favorite way to learn. Here are a few lessons I’ve picked up from shipping small things.",
      featuredImage: "assets/images/post-2.jpg",
      content: `
        <p>
          Building side projects has taught me more than any single course. The moment you try to ship something
          to real people, you start to see where your gaps are.
        </p>
        <p>
          A few lessons:
        </p>
        <ul>
          <li>Start small. Tiny, shippable projects are better than huge unfinished ideas.</li>
          <li>Decide who you’re building for, even if it's just you in the beginning.</li>
          <li>Accept that the first version will never be perfect — and that's okay.</li>
        </ul>
        <p>
          Most importantly, treat side projects as experiments. They don't all need to become startups. Sometimes
          the outcome is simply that you learned something new.
        </p>
      `,
    },
    {
      id: 3,
      slug: "balancing-learning-building-and-rest",
      title: "Balancing Learning, Building, and Rest",
      date: "2025-03-05",
      author: "[Your Name]",
      tags: ["Personal", "Productivity"],
      excerpt:
        "It’s easy to feel like you should always be doing more. I’m learning how to balance learning, building, and actually resting.",
      featuredImage: "assets/images/post-3.jpg",
      content: `
        <p>
          Tech moves quickly, and it’s easy to fall into the trap of feeling behind. There’s always a new framework,
          a new tutorial, or a new thing you “should” be learning.
        </p>
        <p>
          Lately, I’ve been trying to split my time into three intentional buckets:
        </p>
        <ol>
          <li><strong>Learning</strong> – structured time for courses, reading, or notes.</li>
          <li><strong>Building</strong> – hands-on coding in personal or school projects.</li>
          <li><strong>Resting</strong> – time with no productivity attached.</li>
        </ol>
        <p>
          Rest is not a reward for finishing work. It’s part of being able to keep going.
        </p>
      `,
    },
  ];
  