type Props = {
    variant: string;
}

function ButtonSidebar({variant}: Props) {

    return (
        <>
        <button>{variant}</button>
        </>
    )
}

export default ButtonSidebar;