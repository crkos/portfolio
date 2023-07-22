import { create } from "zustand"
import {Images} from "@/types/types";


interface PreviewModalStore {
    isOpen: boolean;
    data?: Images[];
    onOpen: (data: Images[]) => void;
    onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: true,
    data: undefined,
    onOpen: (data: Images[]) => set({data, isOpen: true}),
    onClose: () => set({isOpen: false})
}));

export default usePreviewModal;