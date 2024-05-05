import { useState } from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Zoom, Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface PhotoGalleryProps {
    slides: SlideImage[]
}


export const PhotoGallery = (props: PhotoGalleryProps) => {

    const [index, setIndex] = useState(-1);


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">


            {
                props.slides.map((item, index) => (
                    <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg cursor-pointer " key={index} >
                        <img src={item.src} alt="" className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110" onClick={() => setIndex(index)} />
                    </div>
                ))
            }

            <Lightbox
                slides={props.slides}
                index={index}
                plugins={[Zoom, Thumbnails]}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </div>
    )
}
