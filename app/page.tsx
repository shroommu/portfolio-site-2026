export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center p-4 md:p-8">
      <img
        src="assets/images/pfp-circle.png"
        alt="a picture of the author"
        className="w-48 h-48 rounded-full"
      />
      <h1 className="text-[36px] text-center">Hi, I&apos;m Alex!</h1>
      <h2 className="text-[20px] text-center" data-testid="greeting-subheader">
        Software Developer, Data Analyst, Creative
      </h2>
      <p>
        I&apos;m a curious person who loves to create and learn. You&apos;ll
        find me anywhere that code and data interact, plus a few other places
        besides. Have a look around to see what I&apos;ve been working on!
      </p>
      <p>
        I&apos;m located in the Salt Lake Metropolitan area, where I live with a
        pet rabbit who rules my life. When I&apos;m not coding, I like to play
        video games and make art (especially cross stitch).
      </p>
      <p>Thanks for visiting my site!</p>
    </div>
  );
}
