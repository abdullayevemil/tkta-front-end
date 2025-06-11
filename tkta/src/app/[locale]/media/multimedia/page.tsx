import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhotoGallery } from "@/components/multimedia/photo-gallery";
import { VideoGallery } from "@/components/multimedia/video-gallery";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function News({ params }: Props) {
  const { locale } = await params;

  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <h1 className="uppercase text-5xl text-center w-full px-[112px] pt-16">
        Multİmedİa
      </h1>

      <Tabs
        defaultValue="photo-gallery"
        className="w-full px-16 flex flex-col gap-16"
      >
        <TabsList>
          <TabsTrigger
            className="w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="photo-gallery"
          >
            Foto qalereya
          </TabsTrigger>

          <TabsTrigger
            className="w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="video-gallery"
          >
            Video qalereya
          </TabsTrigger>
        </TabsList>

        <TabsContent value="photo-gallery">
          <PhotoGallery />
        </TabsContent>

        <TabsContent value="video-gallery">
          <VideoGallery locale={locale} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
