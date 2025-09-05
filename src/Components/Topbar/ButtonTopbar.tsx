type Props = {
    image?: string;
    alt: string
}

function ButtonTopbar({image="https://picsum.dev/50/50" , alt}:Props){
    return(
        <>
        <button type="button" className="cursor-pointer"><img src={image} alt={alt}/></button>
        </>
    )
}

export default ButtonTopbar;