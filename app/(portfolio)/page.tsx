import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-5xl font-medium">Hello, I&apos;m Eastern.</div>
      <div className="mt-8 text-2xl font-light tracking-wider leading-10">I am a versatile cloud engineer with extensive experience leading projects that have advanced production infrastructures and large corporate environments.</div>
      <div className="mt-8 text-2xl font-light tracking-wider leading-10">As a fun project I decided to deploy this site using trending technologies and services including Kubernetes, AWS, Terraform, Docker, Github, NextJS, and much more.</div>
      <div className="mt-8 text-2xl font-light tracking-wider leading-10">Please visit the <a className="tracking-tight underline" href='/tech'>tech stack page</a> for more details.</div>
    </div>
  );
}
