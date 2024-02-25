import Resizable from "../Resizable";
import image1 from "../../assets/images/photos/services-desinfection.jpg";
import image2 from "../../assets/images/photos/why-us.jpg";
import MaxWidthWraper from "../MaxWidthWraper";

const images: [string, string] = [image1, image2];

const BeforAfterSection = () => {
  return (
    <MaxWidthWraper className="my-20 space-y-10">
      <h2 className="text-center text-4xl font-bold text-black-75">
        Before and After
      </h2>
      <Resizable images={images} />;
    </MaxWidthWraper>
  );
};

export default BeforAfterSection;
