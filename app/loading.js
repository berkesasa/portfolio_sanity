import Image from "next/image"
import LoadingGif from "../public/loading.gif"
export default function Loading() {
    return <div className="w-full h-screen flex items-center justify-center">
        <Image
            className="w-auto h-auto"
            src={LoadingGif}
            alt="Loading Gif"
        />
    </div>

}