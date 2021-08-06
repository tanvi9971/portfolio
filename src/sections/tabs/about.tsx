import { Heading, Paragraph } from "../../components/typography";
import { Card } from "../../components/image-card";
import udaipur from "../../assets/bio/udaipur.png";
import pune from "../../assets/bio/pune.png";
import flower from "../../assets/bio/jungle-flower.png";
import reading from "../../assets/bio/reading.png";
import cooking from "../../assets/bio/cooking.png";
import tv from "../../assets/bio/tv.png";
import travel from "../../assets/bio/travel.png";
import gift from "../../assets/bio/gift.png";

export const AboutTab: React.FC = () => (
  <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
    {data.map(({ image, text }) => (
      <Card key={image} imageSrc={image}>
        {text}
      </Card>
    ))}
  </div>
);

const data = [
  {
    image: udaipur,
    text: "I was born and brought up in Udaipur, Rajasthan, the city of lakes.",
  },
  {
    image: pune,
    text: "I started work in Pune in 2018 for my first job as a web/app developer.",
  },
  {
    image: travel,
    text: "Nothing makes me happier more than an upcoming vacation to a new place!",
  },
  {
    image: reading,
    text: "A nice long suspense novel or a historical biography - happiness 💓",
  },
  {
    image: tv,
    text: "What do I watch? Well, anything from Friends to Supernatural!",
  },
  {
    image: flower,
    text: "The joy of life is in the little things, like the pleasing aroma of fresh flowers.",
  },
  {
    image: cooking,
    text: "Food, to me, is always about cooking and eating with those you love.",
  },
  {
    image: gift,
    text: "I love giving and receiving surprises, more so if they involve one's own effort!",
  },
];
