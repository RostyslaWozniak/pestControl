import MaxWidthWraper from "../../MaxWidthWraper";
import FAQAccordion from "./FAQAccordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import Heading from "../../ui/heading";

const FAQSection = () => {
  const tabsData = [
    { id: 1, name: "all" },
    { id: 2, name: "specific" },
    { id: 3, name: "pricing" },
  ];
  return (
    <section className="bg-left bg-no-repeat py-20  sm:space-y-20 lg:bg-ant-faq">
      <Heading>Frequently Asked Questions (FAQ)</Heading>
      <MaxWidthWraper className="flex  lg:justify-end ">
        <Tabs
          defaultValue="all"
          className="mx-auto min-h-[560px] w-[min(600px,100%)] space-y-10 lg:mx-0 lg:w-[50%]"
        >
          <TabsList className="hidden gap-5 rounded-[50px] bg-gradient px-2 py-7 sm:flex">
            {tabsData.map(({ id, name }) => (
              <TabsTrigger
                key={id}
                className="rounded-[50px] px-8 text-xl capitalize text-black-75 duration-300 data-[state=active]:bg-background "
                value={name}
              >
                {name}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabsData.map(({ id, name }) => (
            <TabsContent key={id} value={name}>
              <FAQAccordion type={name} />
            </TabsContent>
          ))}
        </Tabs>
      </MaxWidthWraper>
    </section>
  );
};

export default FAQSection;
