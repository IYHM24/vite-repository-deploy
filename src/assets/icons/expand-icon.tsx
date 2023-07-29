interface Props {
    height: string,
    width: string,
    fill: string
}

interface IStyle
{
    fill: string,
}


const expandIcon: React.FunctionComponent<Props> = (props: Props) => {
  
    let style: IStyle = {
        fill: props.fill
    };

    return (

        <svg style ={style} xmlns="http://www.w3.org/2000/svg" height={props.height} viewBox="0 -960 960 960" width={props.width}>
            <path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"/>
        </svg>

    )
}

export default expandIcon;
