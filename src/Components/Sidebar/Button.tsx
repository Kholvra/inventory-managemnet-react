type Props = {
    variant:string;
}

function Button({variant}:Props){

    return(
        <>
        <button>{variant}</button>
        </>
    )
}

export default Button;