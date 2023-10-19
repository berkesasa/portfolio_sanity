import Image from "next/image"
import LoadingGif from "../public/loading.gif"
export default function Loading() {
    return <div className="h-screen">
        <Image
            className="min-w-[70vw] w-auto h-auto"
            src={LoadingGif}
            alt="Loading Gif"
        />
    </div>

}