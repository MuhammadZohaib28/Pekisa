import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
  const faq = [
    {
      question: "What is a domain name exactly ?",
      answer:
        "A domain name is an identifier for a website, similar to how a postal address is an identifier for a house or apartment. When you type a domain name into your browser, it takes you to the website associated with that domain. All domain names have at least two parts: a “top-level domain” and a “second-level” domain. Let’s use the example hover.com. Here, the top-level domain is the string of characters to the right of the dot, so “.com.” The second-level domain is the string of characters to the left of the dot, so “hover.”  It’s also fairly common for domain names to include a third-level domain. Take, for example, help.hover.com. “Help” is the third-level domain in this example. This domain name will take you to Hover’s help center. ",
    },
    {
      question: "Do I need a domain name ?",
      answer:
        "If you want to build a professional-looking web presence, yes! Every website on the Internet is associated with a domain name. Some web presence providers might offer you the option to use a subdirectory of their domain name for your website. That might look something like, theircompany.com/yourname. This works, but it’s more professional to have your own domain name. Plus, by using your own domain name, you’re building your brand right away and giving your audience a URL where they know they can always find you. Some people who aren’t ready for a website choose to forward their domain name to their social media page or youtube channel. Again, the advantage here is that you’re giving your audience a memorable address where they know they can find you online. When you’re ready to launch your website, you can point your domain to your new site in a few clicks!",
    },
    {
      question: "How can I search for a domain name ?",
      answer:
        "Searching for a domain name is super easy. Scroll up to the search box at the top of this page and type in a domain name you’re interested in. We’ll let you know if that one is available and present you with relevant alternatives.",
    },
    {
      question: "How can I check if a domain is available ?",
      answer:
        "Simply type the domain into the search box at the top of this page. In the search results, we’ll tell you whether the domain you’ve entered is available. If it’s not, we’ll present you with relevant alternatives. In some cases, you may be able to purchase an unavailable domain from its current owner.",
    },
    {
      question: "How does a domain registration work ?",
      answer:
        "Domain registrations work similarly to property rentals. You’re effectively claiming the domain as your own for a certain period of time. In most cases, when you register your domain, you’re given the option to register it for a period of 1-10 years. Once you’ve registered the domain, you can continue to renew it year after year, holding onto it indefinitely. Registering a domain is super easy. To get started, simply type the domain you wish to register into the search bar at the top of this page.",
    },
    {
      question: "How long can I register my domain for ?",
      answer:
        "Most domain names can be registered for 1-10 years. But you can hold onto your domain name indefinitely by renewing it. Many people initially purchase a 1-year registration and then turn on auto-renew, so when a year has passed, their domain name renews automatically, and they’re charged for an additional year of registration.",
    },
    {
      question: "How do I renew my domain name ?",
      answer:
        "If you’ve registered your domain with Hover, simply follow the steps found here: https://www.hover.com/renew. If your domain is registered with another provider, they should have similar steps available on their website. If you’re frustrated with your current provider, and like the sound of simple tools and helpful customer support, you can transfer your domain to Pekisa: https://www.example.com/transfer-in.",
    },
    {
      question: "How do I choose a good domain name ?",
      answer:
        "Your domain name is an incredibly important asset. You’ll want it to be concise, meaningful, and easy to type, remember, and say. If your domain name is for your business or side hustle, it's often best to turn your brand name into your domain name. If your .COM is taken, don't fret. There are tons of other domain extension options, like .CO, .BIZ, .SHOP and hundreds more. If your domain is for your personal brand or portfolio website, you might choose to turn your first and last name into your domain name. You can explore relevant domain extensions like ME, .STUDI, .PHOTOGRAPHY—whatever makes sense for you!",
    },
    {
      question: "Which domain extension should I choose ?",
      answer:
        "Domain extensions are all neutral in the eyes of Google. A domain ending in .COM has no SEO advantage over a domain ending in .ART. If your brand is traditional or corporate, you might choose .COM or .ORG. If you’re open to different options, there are hundreds to explore, including niche-specific ones. For example, you might showcase your creativity on a .DESIGN or .ART domain name or choose .STORE to showcase your e-commerce business. Hover has over 300 domain extensions (also known as top-Level domains) to choose from.",
    },
  ];

  return (
    <div className=" pl-24 pr-24 p-10 bg-[#B4D4FF]">
      <h1 className="text-4xl font-bold text-[#00394c] mb-10">
        The domain name FAQ
      </h1>
      {faq.map((item, index) => (
        <Accordion key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Faq;