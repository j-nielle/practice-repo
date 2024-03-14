import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page.",
};

export default function Home() {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">HOME</h1>
      <p className="max-w-[750px] mx-auto leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptate
        architecto doloribus deserunt eaque amet, sed id autem impedit modi unde
        molestiae nulla at veniam esse ad reiciendis! Fugiat, voluptate!
      </p>
    </main>
  );
}
