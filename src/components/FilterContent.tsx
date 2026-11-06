import { Checkbox } from '@mantine/core'
import { BookText, ChevronUp, Clock3, ShoppingBag } from 'lucide-react'
import React from 'react'

const FilterContent = () => {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <label className="font-semibold text-sm font-poppins text-gray-600">Filter</label>
                <button className="text-red-500 text-sm font-poppins">Reset</button>
            </div>

            <div className="flex flex-col gap-3 border rounded-lg py-2 px-3 border-gray-400/50 text-primary">
                <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                        <BookText size={18} />
                        <h4 className="font-semibold text-sm">Bidang Studi</h4>
                    </span>
                    <ChevronUp size={14} />
                </div>
                <Checkbox color="green" label="Pemasaran" size="sm" />
                <Checkbox color="green" label="Digital & Teknologi" size="sm" />
                <Checkbox color="green" label="Pengembangan Diri" size="sm" />
                <Checkbox color="green" label="Bisnis Manajemen" size="sm" />
            </div>

            <div className="flex flex-col gap-3 border rounded-lg py-2 px-3 border-gray-400/50 text-primary">
                <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                        <ShoppingBag size={18} />
                        <h4 className="font-semibold text-sm">Harga</h4>
                    </span>
                    <ChevronUp size={14} />
                </div>
                <Checkbox color="green" label="Gratis" size="sm" />
                <Checkbox color="green" label="Berbayar" size="sm" />
            </div>

            <div className="flex flex-col gap-3 border rounded-lg py-2 px-3 border-gray-400/50 text-primary">
                <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                        <Clock3 size={18} />
                        <h4 className="font-semibold text-sm">Durasi</h4>
                    </span>
                    <ChevronUp size={14} />
                </div>
                <Checkbox color="green" label="< 2 Jam" size="sm" />
                <Checkbox color="green" label="2 - 5 Jam" size="sm" />
                <Checkbox color="green" label="> 5 Jam" size="sm" />
            </div>
        </div>
    )
}

export default FilterContent