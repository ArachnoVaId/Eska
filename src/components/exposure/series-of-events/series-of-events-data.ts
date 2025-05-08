import { TabData, TabKeys } from "@/types/exposure";
import Image1 from "@/assets/exposure/image-1.webp";
import Image2 from "@/assets/exposure/image-2.webp";
import Image3 from "@/assets/exposure/image-3.webp";
import Image4 from "@/assets/exposure/image-4.webp";

export const tabKeys: TabKeys[] = [
  "CURATED MARKET",
  "INTERACTIVE SPACE",
  "ENTERTAINMENT",
  "PRE-EVENT ACTIVATION",
];

export const tabData: TabData = {
  "PRE-EVENT ACTIVATION": {
    content: `In the lead-up to EXPOSURE 2025's main event, we provide a complete storyline that embraces our interactive journey through diverse activation.

From **interactive campaigns** that highlight local creativity to **hands-on workshops** designed to inspire innovation, EXPOSURE aims to foster collaboration with strategic communities to create a dynamic and impactful journey.`,
    image: Image4,
  },
  "CURATED MARKET": {
    content: `As the main event of EXPOSURE, our curated market invites diverse business brands from all around Indonesia. By featuring selected emerging brands, EXPOSURE fosters mutual benefit for visitors and creators, enhancing its reputation while facilitating local business growth.

Through **dedicated booths**, we provide the platform for **local brands** to showcase their story. The market caters to diverse interests, with tenants grouped into two categories: **Lifestyle**, for everyday essentials, and **Food & Beverage**, offering culinary delights from around Indonesia.`,
    image: Image1,
  },
  "INTERACTIVE SPACE": {
    content: `To promote experiences that go beyond shopping, EXPOSURE 2025 also presents another stage for **local creators** through the interactive space, a side activity that will provide visitors with an interactive and creative way to spend their time.

EXPOSURE collaborates with art enthusiasts and local designers to build **installations and decorations** that foster meaningful connections.`,
    image: Image2,
  },
  ENTERTAINMENT: {
    content: `EXPOSURE beats not just in the bustling marketplace but also in its entertainment, offering a curated playlist of diverse selections, all shining a light on local talents, featuring established **guest stars and rising talents' community**.

At **EXPO-Chat**, our share and match session, we peel back the journey of Indonesian rising stars, inviting visitors to embody their own big dreams. Here, influencers and local voices become the guides, sharing their personal stories and conducting a styling session in collaboration with our tenants.`,
    image: Image3,
  },
};

