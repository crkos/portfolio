"use client"
import usePreviewModal from "@/hooks/UsePreviewModal";
import Modal from "@/components/ui/Modal";
import Gallery from "@/components/Gallery";

const PreviewModal = () => {
    const previewModal = usePreviewModal();
    const images = usePreviewModal((state) => state.data)

    if(!images){
        return null;
    }

    return (
        <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-12 lg:col-span-12">
                    <Gallery images={images} />
                </div>
            </div>
        </Modal>
    );
};

export default PreviewModal;