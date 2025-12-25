export default function VideoInstructionsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 pt-4 sm:pt-8 md:pt-12 flex flex-col gap-6 items-center">
      <h1 className="text-2xl font-bold">
        Xarici dövlətlərin ali təhsilə aid kvalifikasiyalarının tanınmasına dair
        video-təlimat: Necə müraciət etməliyik?
      </h1>

      <video
        className="w-full h-auto w-3/5 rounded-lg shadow-lg"
        controls
        src={`/videos/video-instruction.mp4`}
      ></video>
    </div>
  );
}
