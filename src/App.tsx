import './App.css'
import { ImageMarquee } from '@/components/image-marquee'
import { BoxRevealDemo } from '@/components/head-title'
import { Layout } from '@/components/layout'

function App() {

  return (
    <Layout>
    <BoxRevealDemo />
    <br/>
    <h2 className="text-2xl font-bold">Type 1</h2>
    <ImageMarquee />
    <br/>
    <h2 className="text-2xl font-bold">Type 2</h2>
    <ImageMarquee />
    <br/>
    <h2 className="text-2xl font-bold">Type 3</h2>
    <ImageMarquee />
    <br/>
    <h2 className="text-2xl font-bold">Type 4</h2>
    <ImageMarquee />
  </Layout>
  )
}

export default App
