import Heading from "../../ui/heading";
import MaxWidthWraper from "../../MaxWidthWraper";
import Text from "../../ui/text";
import Resizable from "./Resizable";
import image1 from "/src/assets/images/photos/services-desinfection.webp";
import image2 from "/src/assets/images/photos/why-us.webp";

const images: [{ alt: string; img: string }, { alt: string; img: string }] = [
  { alt: "", img: image1 },
  { alt: "", img: image2 },
];

const BeforeAfterSection = () => {
  return (
    <MaxWidthWraper className="my-10 flex flex-col items-center space-y-10 px-0 sm:my-20 sm:gap-10 lg:flex-row">
      <div className="space-y-8 px-2.5 sm:w-2/3">
        <Heading>Before and After</Heading>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
          cupiditate impedit quasi error illo tempore, velit sit, ipsa nesciunt
          quam vitae, quis sunt laboriosam non dolore et? Error, pariatur porro?
        </Text>
      </div>
      <Resizable images={images} />
    </MaxWidthWraper>
  );
};

export default BeforeAfterSection;
