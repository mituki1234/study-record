import styles from "./page.module.css";
import Topbar from "@/app/components/main/Topbar"
import Hero from "@/app/components/main/Hero"
import Features from "@/app/components/main/Features"
import "@/app/main.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <Hero />
      <Features />
    </>
  );
}
