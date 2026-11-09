import { Button, TextInput } from '@mantine/core'
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useVideos } from '../store/useVideos';

type FormData = {
    title: string;
    description: string;
    mentor: string;
    price: number;
}

const ProductInputForm = () => {
    const { register, handleSubmit, reset } = useForm<FormData>()
    const { selectedVideo, inputVideo, editVideo, closeModal } = useVideos()
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // Isi form jika dalam mode edit, atau reset jika tambah baru
    useEffect(() => {
        if (selectedVideo) {
            reset({
                title: selectedVideo.title,
                description: selectedVideo.description,
                mentor: selectedVideo.mentor,
                price: selectedVideo.price,
            })
        } else {
            reset({
                title: "",
                description: "",
                mentor: "",
                price: 0,
            })
        }
    }, [selectedVideo, reset])

    async function handleInput(product: FormData) {
        setIsLoading(true)
        try {
            const formattedPayload = {
                ...product,
                price: Number(product.price),
            }

            if (selectedVideo && selectedVideo.id) {
                await editVideo({
                    ...selectedVideo,
                    ...formattedPayload,
                })
            } else {
                await inputVideo(formattedPayload)
            }

            setIsSuccess(true)
            setTimeout(() => {
                setIsSuccess(false)
                reset()
                closeModal()
            }, 1000)
        } catch (error) {
            console.error("Gagal menyimpan video:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(handleInput)} className='flex flex-col gap-3'>
            <p
                style={{ visibility: isSuccess ? 'visible' : 'hidden' }}
                className='text-primary font-medium text-sm'
            >
                {selectedVideo ? "Data berhasil diperbarui!" : "Data berhasil terkirim!"}
            </p>

            <TextInput
                {...register("title", {
                    required: "Title is required",
                    minLength: { value: 2, message: "Min length is 2" },
                })}
                label="Title"
                placeholder='Input title...'
            />

            <TextInput
                {...register("description", {
                    required: "Description is required",
                    minLength: { value: 2, message: "Min length is 2" },
                })}
                label="Description"
                placeholder='Input description...'
            />

            <TextInput
                {...register("mentor", {
                    required: "Mentor name is required",
                })}
                label="Mentor"
                placeholder='Input mentor name...'
            />

            <TextInput
                {...register("price", {
                    required: "Price is required",
                })}
                label="Price (dalam ribuan, misal 150)"
                placeholder='Input price...'
                type="number"
            />

            <Button
                type='submit'
                size='md'
                color='green'
                className='mt-4'
                loading={isLoading}
            >
                {selectedVideo ? 'Update Produk' : 'Submit'}
            </Button>
        </form>
    )
}

export default ProductInputForm