export default function VideoInstructionsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 pt-4 sm:pt-8 md:pt-12 flex flex-col gap-6 items-center text-textPrimary">
      <h1 className="text-2xl font-bold">
        Xarici dövlətlərin ali təhsilə aid kvalifikasiyalarının tanınmasına dair
        video-təlimat: Necə müraciət etməliyik?
      </h1>

      <video
        className="w-full h-auto w-3/5 rounded-lg shadow-lg"
        controls
        src="https://res.cloudinary.com/dtwyjdkb1/video/upload/v1766674258/WhatsApp_Video_2025-12-25_at_18.17.21_t9dylb.mp4"
      ></video>
    </div>
  );
}
