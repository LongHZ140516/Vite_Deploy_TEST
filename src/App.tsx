import './App.css'
import { ImageMarquee } from '@/components/image-marquee'
import { Layout } from '@/components/layout'
import { ThreeDMarqueeHeader } from "@/components/3d-marquee";
import { randomSelectImages, splitImagesIntoGroups } from '@/data/load-image'

import conflictImages from '@/assets/conflict_images.json';
import instructionImages from '@/assets/instucions_images.json';
import multiImages from '@/assets/multi_images.json';

function App() {

  // random select images from each type
  const num_images = 15
  const conflict_images_selected = randomSelectImages(conflictImages, num_images)
  const instruction_images_selected = randomSelectImages(instructionImages, num_images)
  const multi_images_selected = randomSelectImages(multiImages, num_images)
  const all_images = [...conflict_images_selected, ...instruction_images_selected, ...multi_images_selected]

  // split images into groups
  const conflict_images_groups = splitImagesIntoGroups(conflictImages, 4)
  const instruction_images_groups = splitImagesIntoGroups(instructionImages, 1)
  const multi_images_groups = splitImagesIntoGroups(multiImages, 3)

  return (
    <>
    <ThreeDMarqueeHeader images={all_images} />
    <Layout>
    <br/>
    <div className="flex items-center mb-5">
      <div className="h-[2.5em] w-2 bg-gradient-to-b from-[#6A98F0] to-[#4961DC] rounded mr-3" />
      <h2 id="conflict" className="text-4xl font-bold text-[#F8F8F8]">Conflict</h2>
    </div>
    {conflict_images_groups.map((group, index) => (
      <ImageMarquee key={index} images={group} />
    ))}
    <br/>
    <div className="flex items-center mb-5">
      <div className="h-[2.5em] w-2 bg-gradient-to-b from-[#6A98F0] to-[#4961DC] rounded mr-3" />
      <h2 className="text-4xl font-bold text-[#F8F8F8]">Instruction</h2>
    </div>
    {instruction_images_groups.map((group, index) => (
      <ImageMarquee key={index} images={group} />
    ))}
    <br/>
    <div className="flex items-center mb-5">
      <div className="h-[2.5em] w-2 bg-gradient-to-b from-[#6A98F0] to-[#4961DC] rounded mr-3" />
      <h2 className="text-4xl font-bold text-[#F8F8F8]">Multi</h2>
    </div>
    {multi_images_groups.map((group, index) => (
      <ImageMarquee key={index} images={group} />
    ))}
  </Layout>
  </>
  )
}

export default App
