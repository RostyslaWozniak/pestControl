import MaxWidthWraper from "../MaxWidthWraper";
import FAQAccordion from "../FAQAccordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const FAQSection = () => {
  const tabsData = [
    { id: 1, name: "all" },
    { id: 2, name: "specific" },
    { id: 3, name: "pricing" },
  ];
  return (
    <section className="space-y-20 py-28">
      <h2 className="text-black-75 text-center text-4xl font-bold">
        Frequently Asked Questions (FAQ)
      </h2>
      <MaxWidthWraper className="bg-ant-faq flex  justify-end bg-no-repeat">
        <Tabs defaultValue="all" className="min-h-[560px] w-[50%] space-y-10">
          <TabsList className="bg-black-10 gap-5 rounded-[50px] px-2 py-7">
            {tabsData.map(({ id, name }) => (
              <TabsTrigger
                key={id}
                className="hover:bg-black-5 text-black-75 rounded-[50px] px-8 text-xl capitalize duration-300 data-[state=active]:bg-primary data-[state=active]:text-background"
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
