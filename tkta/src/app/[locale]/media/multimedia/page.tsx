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
    <section className="w-full flex flex-col gap-8 sm:gap-12 md:gap-16 items-center">
      <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl text-center w-full px-4 sm:px-8 md:px-16 pt-8 sm:pt-12 md:pt-16">
        Multİmedİa
      </h1>

      <Tabs defaultValue="photo-gallery" className="w-full px-4 sm:px-8 md:px-16 flex flex-col gap-8 sm:gap-12 md:gap-16">
        <TabsList className="grid grid-cols-2 w-full sm:w-auto">
          <TabsTrigger className="px-2 py-2 text-sm sm:text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold" value="photo-gallery">
            Foto qalereya
          </TabsTrigger>

          <TabsTrigger className="px-2 py-2 text-sm sm:text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold" value="video-gallery">
            Video qalereya
          </TabsTrigger>
        </TabsList>

        <TabsContent value="photo-gallery">
          <PhotoGallery locale={locale} />
        </TabsContent>

        <TabsContent value="video-gallery">
          <VideoGallery locale={locale} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
