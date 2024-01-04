import { Main } from "@/components/template/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Kevin Adiwiguna',
  description: 'kevin adiwiguna portfolio'
}

export default function Home() {
  return (
    <>
      <Main />
    </>
  )
}
