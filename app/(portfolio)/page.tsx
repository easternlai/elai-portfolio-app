import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-5xl font-medium">Hello, I'm Eastern.</div>
      <div className="mt-5 text-2xl font-light tracking-wider leading-10">I am a versatile cloud engineer with extensive experience leading projects that have advanced production infrastructures and large corporate environments.</div>
      <div className="mt-5 text-2xl font-light tracking-wider leading-10">As a fun project I decided to deploy this site using trending technologies and services including Kubernetes, Docker,AWS, Terraform, Github, NextJS, and much more.  Please visit the <a className="tracking-tight underline" href='/tech'>tech stack page</a> for more details.</div>
    </div>
  );
}
