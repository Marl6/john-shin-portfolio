import { ContainerScroll } from "../ui/container-scroll-animation";

export function YoutubeChannel() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Subscribe to <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                John Shin TV!
              </span>
            </h1>
          </>
        }
      >
        <img
          src="src\assets\img\book\book.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
