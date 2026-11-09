import { ChevronDown, Search, SlidersHorizontal } from "lucide-react"
import FilterContent from "../components/FilterContent"
import { Button, Input, Modal, Select } from "@mantine/core"
import ProductCard from "../components/ProductCard"
import { useEffect, useMemo, useState } from "react"
import { catalogImages, profileImages } from "../api/data"
import ProductInputForm from "../components/ProductInputForm"
import { useVideos } from "../store/useVideos"

const ProductList = () => {
  const { videos, isLoading, fetchVideo, isModalOpen, openModal, closeModal, selectedVideo } = useVideos();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string | null>(null);

  useEffect(() => {
    fetchVideo();
  }, [fetchVideo]);

  const processedVideos = useMemo(() => {
    let result = [...videos];

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (v) =>
          v.title.toLowerCase().includes(query) ||
          v.description.toLowerCase().includes(query) ||
          v.mentor.toLowerCase().includes(query)
      );
    }

    // Urutkan data berdasarkan pilihan dropdown
    if (sortBy) {
      result.sort((a, b) => {
        switch (sortBy) {
          case "Harga Rendah":
            return a.price - b.price;
          case "Harga Tinggi":
            return b.price - a.price;
          case "A to Z":
            return a.title.localeCompare(b.title);
          case "Z to A":
            return b.title.localeCompare(a.title);
          case "Rating Tertinggi":
            return (b.rating ?? 0) - (a.rating ?? 0);
          case "Rating Terendah":
            return (a.rating ?? 0) - (b.rating ?? 0);
          default:
            return 0;
        }
      });
    }

    return result;
  }, [videos, searchQuery, sortBy]);

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
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm border border-gray-300 rounded-lg lg:hidden hover:bg-gray-50 cursor-pointer"
              >
                <SlidersHorizontal size={15} />
                Filter
              </button>
              <Button color="green" variant="filled" onClick={() => openModal()}>
                Tambah Item +
              </Button>

              <div className="flex items-center gap-2 ml-auto">
                <Select
                  size="sm"
                  placeholder="Urutkan"
                  value={sortBy}
                  onChange={setSortBy}
                  clearable
                  rightSection={<ChevronDown size={14} />}
                  className="w-36 sm:w-44"
                  data={[
                    'Harga Rendah',
                    'Harga Tinggi',
                    'A to Z',
                    'Z to A',
                    'Rating Tertinggi',
                    'Rating Terendah',
                  ]}
                />
                <Input
                  type="text"
                  placeholder="Cari kelas..."
                  size="sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-36 sm:w-52"
                  rightSection={<Search size={14} />}
                />
              </div>
            </div>

            {isLoading && <p className="text-gray-500 py-8">Memuat data video...</p>}

            {!isLoading && processedVideos.length === 0 && (
              <div className="py-12 text-center text-gray-500">
                <p className="text-base font-medium">Tidak ada video yang cocok dengan pencarian.</p>
                <p className="text-xs text-gray-400 mt-1">Coba gunakan kata kunci atau filter lain.</p>
              </div>
            )}

            {!isLoading && processedVideos.length > 0 && (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {processedVideos.map((item, index) => (
                  <ProductCard
                    key={item.id}
                    video={item}
                    image={catalogImages[index % catalogImages.length]}
                    avatar={profileImages[index % profileImages.length]}
                    showActions={true}
                  />
                ))}
              </div>
            )}
          </section>
          <Modal opened={isModalOpen} onClose={closeModal} title={selectedVideo ? "Edit Produk" : "Input Produk"}>
              <ProductInputForm/>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default ProductList
