type ButtonProps = {
    title : string
    style : string
}

export default function Button({title,style} : ButtonProps) {
    return (
        <>
        <button className={style}>{title}</button>
        </>
    )
}