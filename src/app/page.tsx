import Image from 'next/image'
import { PopupForm } from './components/popupForm/PopupForm'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <PopupForm/>
    </main>
  )
}
