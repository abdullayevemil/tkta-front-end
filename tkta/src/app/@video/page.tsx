export default function Video() {
  return (
      <div className="w-ful relative">
        <video className="w-full" autoPlay={true} muted loop preload="none">
          <source
            src="https://miras.blob.core.windows.net/multimedia/Let s Talk About Education.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="bg-blackTransparent text-5xl absolute top-0 left-0 w-full h-full flex items-center pl-[160px] text-white">
          TKTA - Home page
        </div>
      </div>
  );
}
