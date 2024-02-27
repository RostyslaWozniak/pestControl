import MaxWidthWraper from "../../MaxWidthWraper";
import FAQAccordion from "./FAQAccordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

const FAQSection = () => {
  const tabsData = [
    { id: 1, name: "all" },
    { id: 2, name: "specific" },
    { id: 3, name: "pricing" },
  ];
  return (
    <section className="py-28 sm:space-y-20">
      <h2 className="text-center text-3xl font-bold text-black-75 sm:text-4xl">
        Frequently Asked Questions (FAQ)
      </h2>
      <MaxWidthWraper className="flex bg-no-repeat  lg:justify-end lg:bg-ant-faq">
        <Tabs
          defaultValue="all"
          className="mx-auto min-h-[560px] w-[min(600px,100%)] space-y-10 lg:mx-0 lg:w-[50%]"
        >
          <TabsList className="bg-gradient hidden gap-5 rounded-[50px] px-2 py-7 sm:flex">
            {tabsData.map(({ id, name }) => (
              <TabsTrigger
                key={id}
                className="rounded-[50px] px-8 text-xl capitalize text-black-75 duration-300 hover:bg-black-5 data-[state=active]:bg-primary data-[state=active]:text-background"
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
