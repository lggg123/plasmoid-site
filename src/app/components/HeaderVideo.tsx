const HeaderVideo = () => (
    <div className="flex justify-center mt-12">
      <video
        controls
        loop
        className="w-full max-w-md rounded-xl border-4 border-white h-auto"
      >
        <source src="/Vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
  
  export default HeaderVideo;
  