import { ChevronDown, Search, SlidersHorizontal } from "lucide-react"
import FilterContent from "../components/FilterContent"
import { Input, Select } from "@mantine/core"
import ProductCard from "../components/ProductCard"

const ProductList = () => {
  return (
    <>
      <div className="min-h-screen bg-bg px-4 py-6 sm:px-6 md:px-10 lg:px-30 md:py-12">

        <h1 className="text-xl font-semibold font-poppins sm:text-2xl">
          Koleksi Video Pembelajaran Unggulan
        </h1>
        <p className="mt-1 text-sm text-gray-500 sm:text-base">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>

        <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:gap-8 lg:items-start">

          <aside className="hidden lg:flex lg:flex-col lg:w-64 xl:w-72 shrink-0 bg-white border border-gray-400/50 rounded-lg p-4">
            <FilterContent />
          </aside>

          <section className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <button
                type="button"
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm border border-gray-300 rounded-lg lg:hidden hover:bg-gray-50"
              >
                <SlidersHorizontal size={15} />
                Filter
              </button>
              <button
                className="px-4 py-1.5 text-sm bg-primary text-white rounded-xl hover:bg-primary/90"
              >
                + Tambah Item
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <Select
                  size="sm"
                  placeholder="Urutkan"
                  rightSection={<ChevronDown size={14} />}
                  className="w-36 sm:w-44"
                  data={['Harga Rendah', 'Harga Tinggi', 'A to Z', 'Z to A', 'Rating Tertinggi', 'Rating Terendah']}
                />
                <Input
                  type="text"
                  placeholder="Cari kelas..."
                  size="sm"
                  className="w-36 sm:w-52"
                  rightSection={<Search size={14} />}
                />
              </div>


            </div>

          <ProductCard/>

          
          </section>

        </div>
      </div>
    </>
  )
}

export default ProductList