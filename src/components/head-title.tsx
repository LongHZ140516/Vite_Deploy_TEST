import { BoxReveal } from "@/components/magicui/box-reveal";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export function TitleReveal() {
  return (
    <div className="z-20 max-w-4lg items-center justify-center overflow-hidden mt-[-10vw]">
      <BoxReveal boxColor={"#6D83F2"} duration={0.5}>
        <h1 className="text-[5rem] font-semibold text-[#F8F8F8]">
          Echo-4o-Image<span className="text-[#6A98F0]">.</span>
        </h1>
      </BoxReveal>

      <BoxReveal boxColor={"#6D83F2"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[2rem] text-[#F8F8F8]">
          Dataset Gallery of {" "}
          <span className="text-[#6A98F0]">Echo-4o-Image</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#6D83F2"} duration={0.5}>
        <div className="mt-6">
          <p className="text-[#F8F8F8]">
            sss. <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#6D83F2"} duration={0.5}>
        {/* <Button
          className="mt-[1.6rem] bg-gradient-to-r from-[#6A98F0] to-[#4961DC] hover:shadow-lg transition-transform duration-200 text-white"
          onClick={() => {
            const el = document.getElementById('conflict');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Explore
        </Button> */}
        <InteractiveHoverButton className="mt-[1.6rem]" onClick={() => {
            const el = document.getElementById('conflict');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>Explore</InteractiveHoverButton>
      </BoxReveal>
    </div>
  );
}
