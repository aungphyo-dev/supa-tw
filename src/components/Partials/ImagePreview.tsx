import {useEffect, useState} from "react";
import Image from "next/image";

const ImagePreview = ({image,className}:{image : File,className ?: string}) => {
    const [url, setUrl] = useState<string | null>(null)
    const imagePreview = (file : File | null) => {
        if (file){
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setUrl(reader?.result as string);
            };
        }
    }
    useEffect(() => {
        imagePreview(image)
        if (!image){
            setUrl("")
        }
    }, [image])
    return (
        <div className={`${image ? "block" : "hidden"} relative overflow-hidden ${className}`}>
            {url && <Image fill sizes={"500"} src={url} alt={"Avatar"}
                    className={"object-cover"}
                />}
        </div>
    );
};

export default ImagePreview;
