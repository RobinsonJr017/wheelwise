import { Features } from "@/components/Home/Features";
import { Hero } from "@/components/Home/Hero";
import { Container } from "@mantine/core";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Container>
        <Features />
      </Container>
    </main>
  );
}
